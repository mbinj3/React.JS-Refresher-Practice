import React from 'react';
import { useState, useMemo } from 'react';


function UseMemoHook() {

    const [addition, setAddition] = useState(0);

    const [substraction, setSubstraction] = useState(100);
    
    const multiplication = useMemo(() => {
        console.log("********");
        return(
            addition * 10
        )
    },[addition])

  return (
    <div>

        <h1>{multiplication}</h1>
        <h1>{addition}</h1>
        <button onClick={() => setAddition(addition + 1)}>Add +</button>

        <h1>{substraction}</h1>
        <button onClick={() => setSubstraction(substraction - 1)}>Sub -</button>
        
    </div>
  )
}

export default UseMemoHook