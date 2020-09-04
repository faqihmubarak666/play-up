import React, { Component } from "react";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import ScheduleContainer from "./pages/admin/scheduleMatch/ScheduleContainer";
import SignIn from "./pages/landingPage/signUp/SignIn";

class App extends Component {
  render() {
    const { adminPage } = this.props;
    return (
      <div>
        {/* {adminPage ? <Navbar /> : <SideBar />} */}
        <Navbar />
        {/* <SideBar /> */}
        {/* <ScheduleContainer /> */}
      </div>
    );
  }
}
export default App;
