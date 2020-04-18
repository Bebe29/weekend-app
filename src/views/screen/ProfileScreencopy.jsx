import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class ProfileScreen extends React.Component {
  state = {
    userList: []
  };

  getDataHandler = () => {
    Axios.get("http://localhost:3001/users", {
      params: {
        // role: "user",
        // username: "pikachu",
        id: 2
      }
    })
      .then(res => {
        //res => respon dr API
        // console.log(res.data);
        this.setState({ userList: res.data });
        // console.log("bukan axios");
        console.log(this.state.userList);
      })
      .catch(err => {
        //err => error
        console.log(err);
      });
  };

  deleteDataHandler = () => {
    Axios.delete(`${API_URL}/users/1`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  postDataHandler = () => {
    Axios.post(`${API_URL}/users`, {
      username: "Bill",
      password: "123123123",
      role: "admin",
      fullName: "Bill Gates"
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Profile</h1>
        <h2>Welcome, {this.props.match.params.pikachu}</h2>
        <input
          onClick={this.getDataHandler}
          type="button"
          value="Get data"
          className="btn btn-success"
        />
        <input
          onClick={this.deleteDataHandler}
          type="button"
          value="Delete data"
          className="btn btn-danger"
        />
        <input
          onClick={this.postDataHandler}
          type="button"
          value="Post data"
          className="btn btn-primary"
        />
      </div>
    );
  }
}

export default ProfileScreen;
