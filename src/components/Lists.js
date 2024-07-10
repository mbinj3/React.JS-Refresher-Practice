import React from 'react';


function Lists(){
    const myCarBrands = [
        {id:1, carName: "Ford"},
        {id:2, carName: "BMW"},
        {id:3, carName: "Audi"}
    ]
    return(
        <div>
            <ul>
                {myCarBrands.map((car)=>(
                    <li key={car.id}>{car.carName}</li>
                ))}
            </ul>
        </div>
    )
}

export default Lists