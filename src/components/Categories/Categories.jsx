import {useEffect, useState} from 'react';
import { loadCategories } from '../stores/categoriesReducer';
import { useDispatch } from 'react-redux';

function Categories(){
    let [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories());
    }, []);
    return (
        <div>
            {categories.map((item)=> {
                return(
                    <div key={item.id}>{item.name}</div>)
            })}
        </div>
    )
}

export default Categories;

// TODO
// complete this categories component fetching mock apis 
// make the columns clickable 
// filter the cards based on each category.
// fetch the products from an api not from arrays.