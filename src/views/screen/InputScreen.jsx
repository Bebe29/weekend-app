import React from "react";
import ReactDOM from "react-dom";

class InputScreen extends React.Component {
  state = {
    list: [],
    username: "",
    password: "",
    repeatpass: "",
    inputuser: "",
    inputpass: ""
  };

  render() {
    const {
      list,
      username,
      password,
      repeatpass,
      inputuser,
      inputpass
    } = this.state;

    const inputHandler = (e, field) => {
      this.setState({ [field]: e.target.value });
    };

    const regis = () => {
      if (password == repeatpass) {
        this.setState({
          list: list.concat({ name: username, pass: password }),
          username: "",
          password: "",
          repeatpass: ""
        });
        alert("Data berhasil diregister");
      } else {
        alert("Password belum cocok");
      }
      console.log(list);
    };

    const log = () => {
      let isLog = list.find(
        val => val.name == inputuser && val.pass == inputpass
      );
      if (isLog) {
        ReactDOM.render(
          <h2>Welcome {inputuser}</h2>,
          document.getElementById("welcome")
        );
        this.setState({
          inputuser: "",
          inputpass: ""
        });
      } else {
        alert("User tidak ada atau password salah");
      }
    };

    return (
      <div className="d-inline-flex justify-content-center flex-column">
        <div
          className="d-inline-flex justify-content-center flex-column"
          style={{
            border: "1px solid lightgray",
            borderRadius: "10px",
            width: "450px",
            padding: "50px"
          }}
        >
          <h3 className="mb-3">Register</h3>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => inputHandler(e, "username")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Password"
            value={password}
            onChange={e => inputHandler(e, "password")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Repeat Password"
            value={repeatpass}
            onChange={e => inputHandler(e, "repeatpass")}
          />
          <input
            className="btn btn-primary mt-2"
            type="button"
            value="Register"
            onClick={() => regis()}
          />
        </div>
        <div
          className="d-inline-flex justify-content-center flex-column"
          style={{
            border: "1px solid lightgray",
            borderRadius: "10px",
            width: "450px",
            padding: "50px"
          }}
        >
          <h3 className="mb-3">Login</h3>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Username"
            value={inputuser}
            onChange={e => inputHandler(e, "inputuser")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Password"
            value={inputpass}
            onChange={e => inputHandler(e, "inputpass")}
          />
          <input
            className="btn btn-primary mt-2"
            type="button"
            value="Login"
            onClick={() => log()}
          />
        </div>
        <div id="welcome" className="p-3"></div>
      </div>
    );
  }
}

export default InputScreen;
