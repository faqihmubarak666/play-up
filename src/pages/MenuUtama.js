import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { connect } from "react-redux";

const MenuUtama = (props) => {
  const { admin } = props;
  return (
    <div>
      {admin.code === 200 ? (
        <div>
          <SideBar />
        </div>
      ) : (
        <div>
          <Navbar />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    admin: state.rGetDataUser.Users.admin,
  };
};

export default connect(mapStateToProps)(MenuUtama);
