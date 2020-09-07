import React, { Component } from "react";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import SignInContainer from "./pages/landingPage/signIn/SignInContainer";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <SideBar /> */}
        <SignInContainer />
      </div>
    );
  }
}
export default App;
