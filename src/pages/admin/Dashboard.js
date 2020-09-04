import React, { Component } from "react";
import Welcome from "../../image/animation_500_ken3imlb.gif";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <img src={Welcome} alt="Welcome" />
      </div>
    );
  }
}

export default Dashboard;
