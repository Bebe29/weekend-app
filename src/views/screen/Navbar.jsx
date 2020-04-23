import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { todoInputHandler } from "../../redux/actions/user";
import { logoutHandler } from "../../redux/actions";
import Cookie from "universal-cookie";

const cookieObject = new Cookie();

class Navbar extends React.Component {
  logout = () => {
    const { username } = this.props.user;
    const userData = {
      username
    };
    // console.log(userData);
    this.props.onLogout(userData);
  };

  componentDidUpdate() {
    if (!this.props.user.id) {
      cookieObject.remove("authData");
    }
  }

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
        <Link to="/" onClick={this.logout}>
          Logout
        </Link>
        {this.props.user.username}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onLogout: logoutHandler
};

// export default Navbar;
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
