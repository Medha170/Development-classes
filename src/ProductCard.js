import React from 'react';
import './ProductCard.css';
import { useRef } from 'react';

function ProductCard({title,price}){
    let pRef = useRef(0);
    // console.log(props);
    function productTitle(){
        console.log(title);
        if (pRef.current.style.display === "none"){
            pRef.current.style.display = "block";
        }else{
            pRef.current.style.display = "none";
        
        }
    }
    return (
        <div className="product-card">
            <p onClick={productTitle}>{title}</p>
            <p className="price" ref={pRef}>{price}</p>
        </div>
    );
}

export default ProductCard;