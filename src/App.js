import React, { Component } from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/landingPage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/landingPage/Services";
import Category from "./pages/landingPage/Category";
import SignUp from "./pages/landingPage/SignUp";
import UserContainer from "./pages/admin/users/UserContainer";
import SideBar from "./component/SideBar";

class App extends Component {
  render() {
    return (
        <div>
          <Router>
            {/* <Navbar /> */}
            <SideBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/category" component={Category} />
              <Route path="/sign-up" component={SignUp} />

              <Route path="/all-user" component={UserContainer} />
              <Route path="/match-schedule" component={Services} />
              <Route path="/logout" component={Navbar} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;