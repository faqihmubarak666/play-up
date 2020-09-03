import React, { Component } from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/landingPage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/landingPage/Services";
import Category from "./pages/landingPage/Category";
import SignUp from "./pages/landingPage/signUp/SignUp";
import UserContainer from "./pages/admin/users/UserContainer";
import SideBar from "./component/SideBar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <SideBar /> */}
        {/* <SignUp /> */}
      </div>
    );
  }
}

export default App;
