import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class UserListScreen extends React.Component {
  state = {
    userList: []
  };

  componentDidMount() {
    Axios.get(`${API_URL}/users`)
      .then(res => {
        this.setState({ userList: res.data });
        // console.log(this.state.userList);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteHandler = (idx, userID) => {
    const { userList } = this.state;
    let temp = [...userList];
    temp.splice(idx, 1);
    this.setState({ userList: temp });
    Axios.delete(`${API_URL}/users/${userID}`)
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderData = () => {
    const { userList } = this.state;
    return userList.map((val, idx) => {
      return (
        <tr>
          <td>{val.id}</td>
          <td>{val.username}</td>
          <td>{val.fullName}</td>
          <td>{val.role}</td>
          <td>
            <input
              type="button"
              value="Delete"
              className="btn btn-danger"
              onClick={() => this.deleteHandler(idx, val.id)}
            />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center align-item-center flex-column mt-5">
        <h1 className="text-center">User List</h1>
        <table className="table mt-3 container">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Full Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderData()}</tbody>
        </table>
      </div>
    );
  }
}

export default UserListScreen;
