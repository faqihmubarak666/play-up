// import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { SideBar } from "../components/SideBar";
import { connect } from "react-redux";

import React from "react";

const MenuUtama = (props) => {
  const { admin } = props;
  return <div>{admin.code === 200 ? <SideBar /> : <Navbar />}</div>;
};

const mapStateToProps = (state) => {
  return {
    admin: state.rGetDataUser.Users.admin,
  };
};

export default connect(mapStateToProps)(MenuUtama);
