import { createContext } from "react";

const cartContext = createContext({
    cart : {},
    incrementQty : () => {},
    decrementQty : () => {}
});

export {cartContext};
export default cartContext;