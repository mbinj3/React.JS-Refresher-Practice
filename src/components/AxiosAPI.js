import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


// Axios: The response is parsed automatically into JSON, it returns response in object, which includes (status, headers etc, and data) and we have to get data from the response object using (response.data).

function AxiosAPI(){

    const [data, setData] = useState([]);

    // using .then and catch method

    // useEffect(() => {
    //     const fetchData = () => {
    //         axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => setData(res.data))
    //         .catch((err) => console.error(err));  
    //     }
    //     fetchData();
    // },[]);    


    // using try and catch method

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(res.data);
            }catch(err){
                console.error(err);
            }
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

export default AxiosAPI