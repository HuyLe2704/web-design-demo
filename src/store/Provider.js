import Context from './Context';
import { useRef, useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Provider({ children }) {
    const flashSaleRef = useRef();
    const [carts, setCarts] = useState([]);
    const [cartValue, setCartValue] = useState(0);
    const [value, setValue] = useState(1);

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
                return { ...item, quantity: item.quantity - 1 };
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

    // Xử lý phần scroll top khi chuyển trang
    const ScrollToTop = () => {
        const pathname = useLocation();

        useLayoutEffect(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, [pathname]);

        return null;
    };

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
        ScrollToTop,
        handleRemoveCarts,
    };

    return <Context.Provider value={props}>{children}</Context.Provider>;
}

export default Provider;
