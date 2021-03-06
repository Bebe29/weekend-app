import React from "react";
// import Axios from "axios";
// import { API_URL } from "../../constants/API";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerHandler, loginHandler } from "../../redux/actions";
import Cookie from "universal-cookie";

const cookieObject = new Cookie();

class RegisterScreen extends React.Component {
  state = {
    fullName: "",
    role: "",
    username: "",
    password: "",
    repeatPass: "",
    isLoading: false
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  register = () => {
    const { fullName, role, username, password, repeatPass } = this.state;
    const userData = { fullName, role, username, password, repeatPass };

    // this.setState({ isLoading: true });
    // setTimeout(() => {
    this.props.onRegister(userData);
    // }, 1500);
  };

  // componentDidUpdate() {
  //   if (this.props.user.id) {
  //     cookieObject.set("authData", JSON.stringify(this.props.user));
  //   }
  // }

  render() {
    return (
      <center>
        <div
          className="d-flex justify-content-center align-item-center flex-column mt-5"
          style={{
            border: "1px solid lightgray",
            borderRadius: "10px",
            width: "450px",
            padding: "50px"
          }}
        >
          <h3 className="text-center mb-3">Register</h3>
          <p>{this.props.user.errMsg}</p>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Full Name"
            onChange={e => this.inputHandler(e, "fullName")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Role"
            onChange={e => this.inputHandler(e, "role")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Username"
            onChange={e => this.inputHandler(e, "username")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Password"
            onChange={e => this.inputHandler(e, "password")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Repeat Password"
            onChange={e => this.inputHandler(e, "repeatPass")}
          />
          <input
            className="btn btn-primary mt-2"
            type="button"
            value="Register"
            onClick={this.register}
            // disabled={this.state.isLoading}
          />
        </div>
      </center>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onRegister: registerHandler,
  onLogin: loginHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
