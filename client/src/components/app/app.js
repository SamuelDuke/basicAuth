import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Header from "../header";
import Home from "../home";
import Register from "../register";
import LoginPage from "../login";

import "./app.css";

export default App => {
  
  return (
    <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={LoginPage} />
        </Router>
    </div>
  );
};