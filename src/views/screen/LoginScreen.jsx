import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { usernameInputHandler, loginHandler } from "../../redux/actions";

class LoginScreen extends React.Component {
  state = {
    // inputUsername: "",
    // inputPassword: "",
    username: "",
    password: "",
    isLogin: false,
    // currentUser: ""
    loginProfile: {}
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  login = () => {
    // const { inputUsername, inputPassword } = this.state;
    // Axios.get(`${API_URL}/users`, {
    //   params: {
    //     username: inputUsername,
    //     password: inputPassword
    //   }
    // })
    //   .then(res => {
    //     // console.log(res.data);
    //     if (res.data.length !== 0) {
    //       this.props.onChangeUsername(inputUsername);
    //       this.setState({
    //         isLogin: true,
    //         currentUser: inputUsername,
    //         inputUsername: "",
    //         inputPassword: ""
    //       });
    //     } else {
    //       swal("Error!", "Username atau password salah", "error");
    //       // alert("User tidak ada atau password salah");
    //       // this.setState({
    //       //   inputUsername: "",
    //       //   inputPassword: ""
    //       // });
    //     }
    //   })
    //   .catch(err => {
    //     // console.log(err);
    //     alert("Login Error");
    //   });
    const { username, password } = this.state;
    const userData = {
      username,
      password
    };
    this.props.onLogin(userData);
  };

  render() {
    const { username, password, isLogin } = this.state;

    if (!isLogin) {
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
              // onClick={() => this.login()}
              onClick={this.login}
            />
          </div>
        </center>
      );
    } else {
      return <Redirect to={`/profile/${this.state.loginProfile.id}`} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onChangeUsername: usernameInputHandler,
  onLogin: loginHandler
};

// export default LoginScreen;
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
