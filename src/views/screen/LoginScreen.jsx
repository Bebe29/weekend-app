import React from "react";
// import Axios from "axios";
// import { API_URL } from "../../constants/API";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import swal from "sweetalert";
import { loginHandler } from "../../redux/actions";
import Cookie from "universal-cookie";

const cookieObject = new Cookie();

class LoginScreen extends React.Component {
  state = {
    username: "",
    password: "",
    isLogin: false,
    loginProfile: {}
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  login = () => {
    const { username, password } = this.state;
    const userData = {
      username,
      password
    };
    this.props.onLogin(userData);
  };

  componentDidUpdate() {
    if (this.props.user.id) {
      cookieObject.set("authData", JSON.stringify(this.props.user));
    }
  }

  render() {
    const { username, password, isLogin } = this.state;

    if (!this.props.user.id) {
      return (
        <center>
          <div
            className="d-flex justify-content-center align-item-center flex-column mt-5 "
            style={{
              border: "1px solid lightgray",
              borderRadius: "10px",
              width: "450px",
              padding: "50px"
            }}
          >
            <h3 className="text-center mb-3">Login</h3>
            <p>{this.props.user.errMsg}</p>
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => this.inputHandler(e, "username")}
            />
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Password"
              value={password}
              onChange={e => this.inputHandler(e, "password")}
            />
            <input
              className="btn btn-primary mt-2"
              type="button"
              value="Login"
              onClick={this.login}
            />
          </div>
        </center>
      );
    } else {
      return <Redirect to={`/profile/${this.props.user.id}`} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onLogin: loginHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
