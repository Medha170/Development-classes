import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store";

function ReduxAddToCart({product}){
    let dispatch = useDispatch();
    function increase(){
        // dispatch (type:, payload:)
        dispatch(addToCart(product));
    }

    function decrease(){
        // dispatch (type:, payload:)
        dispatch(removeFromCart(product));
    }

    let quantity = useSelector((state) => {
        return state.cart.items[product.id]?.quantity || 0;
    });

    // const quantity = cart[product.id] ? cart[product.id].quantity : 0;
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

export default ReduxAddToCart;

// cart= {          // Object of objects
//         id: 1{ 
//            id:  title: quantity: 
//              
//  },
//         id: 2{
//            id: title: quantity:
//  }
// }