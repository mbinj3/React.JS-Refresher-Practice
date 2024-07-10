import React from "react";
import { useNavigate } from "react-router-dom";


function About(){

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/contact");
    }
    
    return(
        <div>
            <h1>About Us Page</h1>
            <button onClick={handleNavigation}>Go to Contact Page</button>
        </div>
    )
}

export default About