import {useEffect, useState} from 'react';
function effect(){
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    console.log("Rendered");

    useEffect(() => {
        console.log("Mounted");
    },[count]);
    return(
        <div>
            <button onClick={() => {setCount(count + 1)}}>Add</button>
            <p>{count}</p>
            <button onClick={() => {setCount1(count1 +1)}}>Add1</button>
            <p>{count1}</p>
        </div>
    )
}

export default effect;