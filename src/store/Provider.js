import Context from './Context';
import { useRef, useState } from 'react';

function Provider({ children }) {
    const flashSaleRef = useRef();
    const [value, setValue] = useState(1);
    const [cartValue, setCartValue] = useState(0);

    const handleAddQuantity = () => {
        setValue((prev) => prev + 1);
    };

    const handleMinusQuantity = () => {
        setValue((prev) => prev - 1);
    };

    const props = { flashSaleRef, value, setValue, cartValue, setCartValue, handleAddQuantity, handleMinusQuantity };

    return <Context.Provider value={props}>{children}</Context.Provider>;
}

export default Provider;
