import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerHandler, loginHandler } from "../../redux/actions";

class RegisterScreen extends React.Component {
  state = {
    // regFullName: "",
    // regRole: "",
    // regUsername: "",
    // regPassword: "",
    // regRepeatPassword: "",
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
    let newUser = {
      username,
      fullName,
      password,
      role
    };

    // this.setState({ isLoading: true });
    // setTimeout(() => {
    // Axios.get(`${API_URL}/users`, {
    //   params: {
    //     username
    //   }
    // })
    //   .then(res => {
    //     // console.log(res.data);
    //     if (res.data.length == 0) {
    //       if (repeatPass == password) {
    //         Axios.post(`${API_URL}/users`, newUser)
    //           .then(res => {
    //             // console.log(res);
    //             this.setState({
    //               isLoading: false,
    //               fullName: "",
    //               role: "",
    //               username: "",
    //               password: "",
    //               repeatPass: ""
    //             });
    //           })
    //           .catch(err => {
    //             // console.log(err);
    //             alert("Registration Error");
    //             this.setState({ isLoading: false });
    //           });
    //       } else {
    //         alert("Password belum cocok");
    //         this.setState({
    //           isLoading: false,
    //           password: "",
    //           repeatPass: ""
    //         });
    //       }
    //     } else {
    //       alert(`Username ${username} sudah ada`);
    //       this.setState({
    //         username: "",
    //         password: "",
    //         repeatPass: "",
    //         isLoading: false
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     // console.log(err);
    //     alert("Registration Error");
    //     this.setState({ isLoading: false });
    //   });
    this.props.onRegister(userData, newUser);
    // this.props.onLogin(userData);
    // }, 1500);
  };

  render() {
    // const {
    //   regPassword,
    //   regRepeatPassword,
    //   regUsername,
    //   regRole,
    //   regFullName
    // } = this.state;
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
            // value={regFullName}
            // onChange={e => this.inputHandler(e, "regFullName")}
            onChange={e => this.inputHandler(e, "fullName")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Role"
            // value={regRole}
            // onChange={e => this.inputHandler(e, "regRole")}
            onChange={e => this.inputHandler(e, "role")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Username"
            // value={regUsername}
            // onChange={e => this.inputHandler(e, "regUsername")}
            onChange={e => this.inputHandler(e, "username")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Password"
            // value={regPassword}
            // onChange={e => this.inputHandler(e, "regPassword")}
            onChange={e => this.inputHandler(e, "password")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Repeat Password"
            // value={regRepeatPassword}
            // onChange={e => this.inputHandler(e, "regRepeatPassword")}
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

// export default RegisterScreen;
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
