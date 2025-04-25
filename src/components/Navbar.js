import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className='navigation-menu'>
        <ol>
            <li><NavLink to="/blog" activeclassname="active">Blogs</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
            <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/App" activeclassname="active">App</NavLink></li>
        </ol>
    </div>

  )
}
export default Navbar
