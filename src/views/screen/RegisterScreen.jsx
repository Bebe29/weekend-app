import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class RegisterScreen extends React.Component {
  state = {
    regFullName: "",
    regRole: "",
    regUsername: "",
    regPassword: "",
    regRepeatPassword: "",
    isLoading: false
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  register = () => {
    const {
      regPassword,
      regRepeatPassword,
      regUsername,
      regRole,
      regFullName
    } = this.state;

    this.setState({ isLoading: true });
    setTimeout(() => {
      Axios.get(`${API_URL}/users`, {
        params: {
          username: regUsername
        }
      })
        .then(res => {
          // console.log(res.data);
          if (res.data.length == 0) {
            if (regRepeatPassword == regPassword) {
              Axios.post(`${API_URL}/users`, {
                username: regUsername,
                password: regPassword,
                role: regRole,
                fullName: regFullName
              })
                .then(res => {
                  // console.log(res);
                  this.setState({
                    isLoading: false,
                    regFullName: "",
                    regRole: "",
                    regUsername: "",
                    regPassword: "",
                    regRepeatPassword: ""
                  });
                })
                .catch(err => {
                  // console.log(err);
                  alert("Registration Error");
                  this.setState({ isLoading: false });
                });
            } else {
              alert("Password belum cocok");
              this.setState({
                isLoading: false,
                regPassword: "",
                regRepeatPassword: ""
              });
            }
          } else {
            alert("Username sudah ada");
            this.setState({
              regUsername: "",
              regPassword: "",
              regRepeatPassword: "",
              isLoading: false
            });
          }
        })
        .catch(err => {
          // console.log(err);
          alert("Registration Error");
          this.setState({ isLoading: false });
        });
    }, 1500);
  };

  render() {
    const {
      regPassword,
      regRepeatPassword,
      regUsername,
      regRole,
      regFullName
    } = this.state;
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
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Full Name"
            value={regFullName}
            onChange={e => this.inputHandler(e, "regFullName")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Role"
            value={regRole}
            onChange={e => this.inputHandler(e, "regRole")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Username"
            value={regUsername}
            onChange={e => this.inputHandler(e, "regUsername")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Password"
            value={regPassword}
            onChange={e => this.inputHandler(e, "regPassword")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Repeat Password"
            value={regRepeatPassword}
            onChange={e => this.inputHandler(e, "regRepeatPassword")}
          />
          <input
            className="btn btn-primary mt-2"
            type="button"
            value="Register"
            onClick={this.register}
            disabled={this.state.isLoading}
          />
        </div>
      </center>
    );
  }
}

export default RegisterScreen;
