import React from 'react';

import auth from '../../auth';

const Logout = props => {
    const {setLoggedIn} = props;
    
    const handelClick = () => {
        console.log("I was clicked");
        auth.logout(() => {
            setLoggedIn(false);
            console.log({history: props.history});
            props.history.push('/login');
        });

        console.log('I was logged out!');
    }
    
    return (
        <div onClick={handelClick}>Logout</div>
    )
};

export default Logout;