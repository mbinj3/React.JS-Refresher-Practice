import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        {/* <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>    
                <Link to="/about">About</Link>
            </li>
            <li>    
                <Link to="/contact">Contact</Link>
            </li>
        </ul> */}

        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>    
                <NavLink to="/about">About</NavLink>
            </li>
            <li>    
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar