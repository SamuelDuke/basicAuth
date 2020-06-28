import React from 'react';

import auth from '../../auth';

const Login = props => {
    const {setLoggedIn} = props;
    
    const handelClick = () => {
        console.log("I was clicked");
        auth.login("LOGED_IN", () => {
            setLoggedIn(auth.isAuthenticated());
            props.history.push('/');
        });
    }
    
    return (
        <div onClick={handelClick}>Login</div>
    )
};

export default Login;