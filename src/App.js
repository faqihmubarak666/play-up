import React, { Component } from "react";
import MenuUtama from "./pages/MenuUtama";
import SignInContainer from "./pages/landingPage/signIn/SignInContainer";

class App extends Component {
  render() {
    return (
      <div>
        <MenuUtama />
        {/* <SignInContainer /> */}
      </div>
    );
  }
}
export default App;
