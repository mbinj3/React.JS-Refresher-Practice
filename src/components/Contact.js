import React from 'react';
import { useNavigate } from 'react-router-dom';


function Contact() {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  }

  return (
    <div>
        <h1>Contact Us Page</h1>
        <button onClick={handleNavigation}>Go to Home Page</button>
    </div>
  )
}

export default Contact