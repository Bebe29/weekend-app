import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "45px" }}
      >
        {/* <Link to="/">Home</Link> */}
        <Link to="/userlist">User List</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {this.props.todo.todoInput}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

// export default Navbar;
export default connect(mapStateToProps)(Navbar);
