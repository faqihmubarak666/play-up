import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import SignInContainer from "./pages/landingPage/signIn/SignInContainer";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <SignInContainer />
        <Switch>
          <Route path="/sign-in" component={SignInContainer} />
        </Switch>
      </div>
    );
  }
}
export default App;
