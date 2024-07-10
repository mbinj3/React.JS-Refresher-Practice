import React from "react";
import ChildComponent from "./ChildComponent";
import { useState, useCallback } from "react";



function UseCallbackHook(){

    const [addition, setAddition] = useState(0);
    const [count, setCount] = useState(0);

    const myFunc = useCallback(() => {
        // Some operations
    },[])

    return(
        <div>
            <ChildComponent myFunc={myFunc} count={count}/>

            <h1>{addition}</h1>
            <button onClick={() => setAddition(addition + 1)}>Add +</button>

            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Count +</button>
        </div>
    )
}

export default UseCallbackHook