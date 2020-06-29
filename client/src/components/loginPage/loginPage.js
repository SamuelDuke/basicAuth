import React, { useState } from 'react';

import './loginPage.css'
import auth from '../../auth';
import api from '../../apis/backend';

import Form from '../shared/form';
import FormInput from '../shared/formInput';


const defaultFormState = {
    email: '',
    password: ''
};

const Login = props => {
    const {setLoggedIn} = props;
    const [loginFailed, setLoginFailed] = useState("");
 
    const handleSubmit = (state) => {
        api
            .post("/auth/login", state)
            .then(response => {
                if (response.data.err) {
                    setLoginFailed(response.data.errMsg);
                  } else {
                    auth.login(response.data.token, () => {
                      setLoginFailed("");
                      setLoggedIn(auth.isAuthenticated());
                      props.history.push("/protected");
                    });
                  }
                })
                .catch(err => {
                  console.log(err);
                });
    }
    
    return (
        <div className="form-inline">

            <Form 
                defaultFormState={defaultFormState} 
                handleSubmit={handleSubmit}
                heading="Login Form"
                buttonText="Login"
                submissionErrorMsg={loginFailed}
            >
                    <FormInput 
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="Please enter your email address"
                        required
                    />

                    <FormInput 
                        id="password"
                        label="Password"
                        type="password"
                        placeholder="Please enter your password"
                        required
                    />
            </Form>
        </div>
    )
};

export default Login;