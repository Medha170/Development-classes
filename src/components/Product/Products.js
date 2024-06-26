import ProductCard from "../ProductCard/ProductCard";
import Effect from "./../effect/effect";
import React,{ useState } from "react";
import useWindowSize from "./../../hooks/useWindowSize"

function Products(){
    // const products = [
    //     {
    //     id: 1,
    //     title: "Apple iPhone 14",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 2,
    //     title: "Apple iPhone 13",
    //     price: "Rs. 70,000"
    //     },
    //     {
    //     id: 3,
    //     title: "Google Pixel 7",
    //     price: "Rs. 50,000"
    //     },
    //     {
    //     id: 4,
    //     title: "Nokia 1100",
    //     price: "Rs. 2,000"
    //     },
    //     {
    //     id: 5,
    //     title: "Samsung Galaxy S10",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 6,
    //     title: "Sony Xperia S10",
    //     price: "Rs. 1,00,000"
    //     }
    //     ];

    // let products = []

    console.log(useWindowSize());
    let [products, setProducts] = useState([]);

    fetch("https://run.mocky.io/v3/b61b43a3-22f7-4b95-a8fe-9052ce48ec83").then(
        (response) => {
            return response.json();
        }
    ).then((res) => {
        console.log(res);
        setProducts(res);
    })

    return (
        <div>
            <div>
                <Effect/>
            </div>
            {
                products.map(function(item){
                    return (
                        <ProductCard product={item} />
                    )
                })
            }
            
        </div>
    )
}

export let a = 10;
export let b = 20;
export default React.memo(Products);

// oldDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ] 
// newDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 4" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ]

// title 2 -> 4
// title 3 -> 2
// product card with title 3 has to be added

// index should not be given in the map because if we have to 
// add a product card in between index would be serialsed 
// and hence adding it in last not in between.

