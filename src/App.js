import React, { Component } from "react";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import SignIn from "./pages/landingPage/signUp/SignIn";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <SideBar />
      </div>
    );
  }
}
export default App;
