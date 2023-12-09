import Context from './Context';
import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Provider({ children }) {
    const flashSaleRef = useRef();
    const [carts, setCarts] = useState([]);
    const [cartValue, setCartValue] = useState(0);
    const [value, setValue] = useState(1);

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

    // Xử lý phần scroll top khi chuyển trang
    const ScrollToTop = () => {
        const location = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location]);

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
    };

    return <Context.Provider value={props}>{children}</Context.Provider>;
}

export default Provider;
