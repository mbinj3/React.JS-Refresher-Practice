import React from "react";
import ChildA from "./ChildA";
import { createContext } from "react";


const data = createContext();
const data1 = createContext();


function UseContextHook(){

    const name = "Haseeb J";
    const gender = "Male";

    return(
        <data.Provider value={name}>
            <data1.Provider value={gender}>
                <ChildA />
            </data1.Provider>
        </data.Provider>
        
    )
}

export {data, data1}
export default UseContextHook