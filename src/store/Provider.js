import Context from './Context';
import { useRef, useState } from 'react';

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
    };

    return <Context.Provider value={props}>{children}</Context.Provider>;
}

export default Provider;
