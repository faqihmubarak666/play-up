import React, { Component } from "react";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import FeatureContainer from "./pages/admin/features/FeatureContainer";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <SideBar /> */}
        <FeatureContainer />
      </div>
    );
  }
}
export default App;
