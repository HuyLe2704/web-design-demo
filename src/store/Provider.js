/* eslint-disable react-hooks/exhaustive-deps */
import SuggestItemsService from '~/ItemService/SuggestItemsService';
import Context from './Context';
import { useRef, useState, useEffect } from 'react';

function Provider({ children }) {
    const flashSaleRef = useRef();
    const [carts, setCarts] = useState([]);
    const [cartValue, setCartValue] = useState(0);
    const [value, setValue] = useState(1);
    const [suggestItems, setSuggestItems] = useState([]);
    const [isLogin, setIsLogin] = useState(false);

    // Logic
    const handleAddQuantity = () => {
        setValue((prev) => prev + 1);
    };

    const handleMinusQuantity = () => {
        setValue((prev) => prev - 1);
    };

    const handleAddValueItem = (selectedItem) => {
        const updatedCarts = carts.map((item) => {
            if (item.id === selectedItem.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        setCarts(updatedCarts);
    };

    const handleMinusValueItem = (selectedItem) => {
        const updatedCarts = carts.map((item) => {
            if (item.id === selectedItem.id) {
                const newQuantity = item.quantity > 0 ? item.quantity - 1 : 0;
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setCarts(updatedCarts);
    };

    // Xử lí phần thêm sản phẩm vào giỏ hàng
    const handleAddCarts = (item) => {
        setCartValue((prev) => prev + value);
        const existingItem = carts.find((cart) => cart.id === item.id);

        if (existingItem) {
            const updateCarts = carts.map((cart) => {
                if (cart.id === item.id) {
                    return { ...cart, quantity: cart.quantity + value };
                }
                return cart;
            });
            setCarts(updateCarts);
        } else {
            const newItem = { ...item, quantity: value };
            setCarts([...carts, newItem]);
        }
        setValue(1);
    };

    // Xử lí phần xoá sản phẩm trong giỏ hàng
    const handleRemoveCarts = (itemDel) => {
        setCartValue((prev) => prev - itemDel.quantity);

        let newCart = carts.filter((item) => item.id !== itemDel.id);
        setCarts(newCart);
    };

    // Lấy dữ liệu API
    useEffect(() => {
        SuggestItemsService.getListSuggestItems()
            .then((res) => {
                const updateData = res.data.map((item) => {
                    return {
                        ...item,
                        liked: item.liked === 1,
                        hidden: item.hidden === 1,
                        discountPrime: item.discountPrime === 1,
                    };
                });
                setSuggestItems(updateData);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const props = {
        flashSaleRef,
        value,
        setValue,
        cartValue,
        setCartValue,
        handleAddQuantity,
        handleMinusQuantity,
        handleAddCarts,
        carts,
        setCarts,
        handleAddValueItem,
        handleMinusValueItem,
        handleRemoveCarts,
        suggestItems,
        isLogin,
        setIsLogin,
    };

    return <Context.Provider value={props}>{children}</Context.Provider>;
}

export default Provider;
