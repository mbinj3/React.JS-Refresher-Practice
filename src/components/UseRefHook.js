import React from 'react';
import { useState, useRef } from 'react';


function UseRefHook(){

    const [name, setName] = useState("Haseeb");

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your value is: ${inputRef1.current.value}`);
    }

    const handleColorChange = () => {
        inputRef2.current.style.color = "blue";
    }

    return(
        <div>
            <input type="text" ref={inputRef1}/>
            <button onClick={handleSubmit}>Submit</button>

            <input type="text" value={name} ref={inputRef2} onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleColorChange}>Change text color</button>
        </div>
    )
}

export default UseRefHook