import React, { Component } from "react";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import CategoryContainer from "./pages/admin/category/CategoryContainer";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <SideBar />
        {/* <CategoryContainer /> */}
      </div>
    );
  }
}
export default App;
