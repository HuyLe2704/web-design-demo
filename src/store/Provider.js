import Context from './Context';
import { useRef, useState } from 'react';

function Provider({ children }) {
    const flashSaleRef = useRef();

    const props = { flashSaleRef };

    return <Context.Provider value={props}>{children}</Context.Provider>;
}

export default Provider;
