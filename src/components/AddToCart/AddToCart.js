import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

function AddToCart({product}){
    const {cart, incrementQty, decrementQty} = useContext(cartContext);

    function increase(){
        return incrementQty(product);
    }

    function decrease(){
        return decrementQty(product);
    }
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0){
        return (
            <div>
                <button onClick={increase}>Add To Cart</button>
            </div>
        )
    }
    else{
        return (
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
}

export default AddToCart;

// cart= {          // Object of objects
//         id: 1{ 
//            id:  title: quantity: 
//              
//  },
//         id: 2{
//            id: title: quantity:
//  }
// }