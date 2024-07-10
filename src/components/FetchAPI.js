import React from "react";
import { useState, useEffect } from "react";



// Fetch API: You need to call .json() on the response to parse it into JSON.

function FetchAPI(){

    const [data, setData] = useState([]);

    // using .then and catch method

    // useEffect(() => {
    //     const fetchData = () => {
    //         fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => res.json())
    //         .then((res) => setData(res))
    //         .catch((err) => console.error(err));
    //     }
    //     fetchData();
    // },[]);


    // using try and catch method

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setData(data);
        };
        fetchData();
    },[]);

    
    return(
        <div>
            <h1>Users Data</h1>

            <ul>
                {
                    data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FetchAPI