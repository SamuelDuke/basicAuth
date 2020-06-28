import React from 'react';
import { Link } from "react-router-dom";


import "./header.css";

const Header = props => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Register">Register</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Logout">Logout</Link></li>
        </ul>
    )
};

export default Header;