import React from 'react';
import { Link } from "react-router-dom";
import auth from '../../auth';

import "./header.css";

const Header = props => {

    const { loggedIn, setLoggedIn } =props;

    const handelLogoutClick = () => {
        auth.logout(() => {
            setLoggedIn(false);
        });
    }
    


    return (
        <ul> 
            <li><Link to="/">Home</Link></li>
            {loggedIn ? (
                <React.Fragment>
                     <li><Link to="/protected">Protected</Link></li>
                    <li onClick={handelLogoutClick}><a>Logout</a></li>
                </React.Fragment>
            ) : (
                <React.Fragment>       
                    <li><Link to="/Register">Register</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </React.Fragment>
            )}
        </ul>
    )
};

export default Header;