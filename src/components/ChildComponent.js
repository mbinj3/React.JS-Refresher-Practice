import React from "react";
import { memo } from "react";

function ChildComponent({myFunc, count}){
    console.log("Child component");
    return(
        <div>
            
        </div>
    )
}

export default memo(ChildComponent)