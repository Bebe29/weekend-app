import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class ProfileScreen extends React.Component {
  state = {
    userProfile: [],
    proUser: "",
    proFullName: "",
    proRole: ""
  };

  componentDidMount() {
    Axios.get(`${API_URL}/users`, {
      params: {
        username: this.props.match.params.user
      }
    })
      .then(res => {
        // console.log(res.data);
        this.setState({ userProfile: res.data });
        this.setState({
          proUser: this.state.userProfile[0].username,
          proFullName: this.state.userProfile[0].fullName,
          proRole: this.state.userProfile[0].role
        });
      })
      .catch(err => {
        Axios.get(`${API_URL}/users`, {
          params: {
            id: this.props.match.params.user
          }
        })
          .then(res => {
            // console.log(res.data);
            this.setState({ userProfile: res.data });
            this.setState({
              proUser: this.state.userProfile[0].username,
              proFullName: this.state.userProfile[0].fullName,
              proRole: this.state.userProfile[0].role
            });
          })
          .catch(err => {
            // console.log(err);
            alert("Profile Error");
          });
      });
  }

  render() {
    const { proUser, proFullName, proRole } = this.state;
    return (
      <div className="d-flex justify-content-center align-item-center flex-column mt-5">
        <center>
          <h1 className="mb-3">Profile</h1>
          <h4>Username: {proUser}</h4>
          <h4>Full Name: {proFullName}</h4>
          <h4>Role user: {proRole}</h4>
        </center>
      </div>
    );
  }
}

export default ProfileScreen;
