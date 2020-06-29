import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from '../shared/protectedRoute';

import auth from '../../auth';

import Header from "../header";
import Home from "../home";
import Register from "../register";
import LoginPage from "../loginPage";
import Logout from "../logout";

import ProtectedPage from '../protectedPage';

import "./app.css";

export default App => {
  const [loggedIn, setLoggedIn] = useState(auth.isAuthenticated());

  return (
    <div className="App">
        <Router>
          <Header loggedIn={ loggedIn } setLoggedIn={setLoggedIn} />
          <Route exact path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route 
            path="/login"
            render={props => <LoginPage {...props} setLoggedIn={setLoggedIn} />} 
          />

          <Route 
            path="/logout"
            render={props => <Logout {...props} setLoggedIn={setLoggedIn} />} 
          />
          <ProtectedRoute path='/protected' component={ProtectedPage} />

        </Router>
    </div>
  );
};