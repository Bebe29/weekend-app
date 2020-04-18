import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "45px" }}
      >
        <Link to="/">Home</Link>
        <Link to="/userlist">User List</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Navbar;
