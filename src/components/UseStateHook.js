import React from 'react';
import { useState } from 'react';


function UseStateHook(){

    const [name, setName] = useState("Hi, How are you?");
    const [number, setNumber] = useState(0);

    const handleTextChange = () => {
        return setName("Yes, I am fine");
    }

    const handleNumberChange = () => {
        return setNumber(number + 1);
    }

    return(
        <div>
            <h1>{name}</h1>
            <button onClick={handleTextChange}>Change Text</button>

            <h1>Counter: {number}</h1>
            <button onClick={handleNumberChange}>Change Number</button>
        </div>
    )
}

export default UseStateHook