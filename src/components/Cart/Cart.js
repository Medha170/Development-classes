import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

function Cart(){
    let cart = useSelector((state) => state.cart.items);
    return (
        <div> 
            <h1>Cart</h1>
            <div>
                {Object.values(cart).map((product) => {
                    return (
                        <div>
                            <ProductCard product={product} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart;