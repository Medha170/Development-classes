import logo from './logo.svg';
import './App.css';
import Products from './components/Product/Products';
// import {a, b} from './Products';  // Importing named exports
import {useState} from 'react';
import cartContext from './Context/cartContext';
import Cart from './components/Cart/Cart';

function App() {
  // [addQty, setAddQty] = useState(0);
  let [cart, setCart] = useState({});

  function incrementQty(product){
    const newCart = {...cart};
    // if (cart[product.id])
    if (!newCart[product.id]){
      newCart[product.id] = {
        id : product.id,
        title : product.title,
        price : product.price,
        quantity : 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decrementQty(product){
    const newCart = {...cart};
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0){
      delete newCart[product.id];
    }
    setCart(newCart);
  }
  console.log(cart);
  return (
    // console.log(a, b),
    <cartContext.Provider value={{cart, incrementQty, decrementQty}}>
      <div className="App">
        <Products />
        <Cart />
      </div>
    </cartContext.Provider>
  );
}

export default App;
