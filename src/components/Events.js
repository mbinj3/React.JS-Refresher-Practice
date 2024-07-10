import React from 'react';

function Events(){

    const handleClick = () => {
        
        console.log("Hi");
        
    }
    
    return(
        <div>
            <button onClick={handleClick}>Show Message</button>
        </div>
    )
}

export default Events