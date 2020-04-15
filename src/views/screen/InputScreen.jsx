import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";

class InputScreen extends React.Component {
  state = {
    list: [],
    username: "",
    password: "",
    repeatpass: "",
    inputuser: "",
    inputpass: "",
    activeEditIdx: null,
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  deleteHandler = idx => {
    const {
      list,
    } = this.state;

    let temp = [...list];
    temp.splice(idx, 1);
    this.setState({ list: temp });
  };

  regis = () => {
    const {
      list,
      username,
      password,
      repeatpass,
    } = this.state;

    if (password == repeatpass) {
      this.setState({
        list: list.concat({ name: username, pass: password }),
        username: "",
        password: "",
        repeatpass: ""
      });
      // alert("Data berhasil diregister");
    } else {
      alert("Password belum cocok");
    }
  };

  log = () => {
    const {
      list,
      inputuser,
      inputpass
    } = this.state;

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

  renderData = () => {
    const {
      list,
      activeEditIdx,
    } = this.state;

    return list.map((val, idx) => {
      // if (idx % 2 == 0) {
      if (idx == activeEditIdx) {
        return (
          <tr>
            <td>{idx + 1}</td>
            <td><input type="text" placeholder={val.name}/></td>
            <td>
              <input
                type="button"
                value="Delete"
                className="btn btn-danger"
                onClick={() => this.deleteHandler(idx)}
              />
            </td>
          </tr>
        );
      } else {
        //   return (
        //     <tr>
        //       <td>{idx + 1}</td>
        //       <td>{val.name}</td>
        //       <td>
        //         <input
        //           type="button"
        //           value="Delete"
        //           className="btn btn-warning"
        //           onClick={() => this.deleteHandler(idx)}
        //         />
        //       </td>
        //     </tr>
        //   );
        return (
          <tr>
            <td>{idx + 1}</td>
            <td>{val.name}</td>
            <td>
              <input
                type="button"
                value="Edit"
                className="btn btn-info"
                onClick={() => this.setState({ activeEditIdx: idx })}
              />
            </td>
          </tr>
        );
      }
    });
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
            className="form-control mb-2"
            type="text"
            placeholder="Repeat Password"
            value={repeatpass}
            onChange={e => this.inputHandler(e, "repeatpass")}
          />
          <input
            className="btn btn-primary mt-2"
            type="button"
            value="Register"
            onClick={() => this.regis()}
          />
        </div>
        {/* <div
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
            onChange={e => this.inputHandler(e, "inputuser")}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Password"
            value={inputpass}
            onChange={e => this.inputHandler(e, "inputpass")}
          />
          <input
            className="btn btn-primary mt-2"
            type="button"
            value="Login"
            onClick={() => this.log()}
          />
        </div> */}
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderData()}</tbody>
        </table>
        <div id="welcome" className="p-3"></div>
      </div>
    );
  }
}

export default InputScreen;
