import React from 'react';
import './ProductCard.css';
import { useRef, useState} from 'react';
import AddToCart from './../AddToCart/AddToCart'

function ProductCard({product, cart, incrementQty, decrementQty}){
    let pRef = useRef(0);
    let inputRef = useRef(0);
    let outputRef = useRef(0);
    let [inputV, setInputV] = useState('Class');
    // console.log(props);
    function productTitle(){
        // console.log(product.title);
        if (pRef.current.style.display === "none"){
            pRef.current.style.display = "block";
        }else{
            pRef.current.style.display = "none";
        }
    }
    console.log("Rerendered", inputV);
    function displayOutput(e){
        // console.log(inputRef.current.value);
        // console.log(outputRef.current.innerText);
        // outputRef.current.innerText = 'Over here the output would arrive : ${inputRef.current.value}';
        // outputRef.current.innerText = `Over here the output would arrive: ${inputRef.current.value}`;
        setInputV(e.target.value);
        // outputRef.current.innerText = `Over here the output would arrive: ${inputV}`;
    }
    return (
        <div className="product-card">
            <p onClick={productTitle}>{product.title}</p>
            <p className="price" ref={pRef}>{product.price}</p>
            <input type='text' onChange={displayOutput} value={inputV}></input>
            <p>
            Over here the output would arrive: {inputV}
            </p>
            <AddToCart product={product} cart={cart} incrementQty={incrementQty} decrementQty={decrementQty}/>
        </div>
    );
}

export default ProductCard;