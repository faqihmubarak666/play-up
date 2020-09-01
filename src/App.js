import React from "react";
import Navbar from "./component/Navbar";
// import "./App.css";
import Home from "./component/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./component/pages/Services";
import Category from "./component/pages/Category";
import SignUp from "./component/pages/SignUp";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/category" component={Category} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
