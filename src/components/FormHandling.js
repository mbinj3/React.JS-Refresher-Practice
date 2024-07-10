import React from 'react';
import { useState } from 'react';


function FormHandling(){

    const [name, setName] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(`Your name is: ${name}`);
    }
    
    return(
     <div>
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onSubmit={handleFormSubmit}>Submit</button>
        </form>
     </div>   
    )
}

export default FormHandling