import React from "react";
import {Link} from "react-router-dom"

class InputScreen extends React.Component {
  state = {
    username: "",
    email: "",
    counter: 0
  };
  render() {
    const { username, email, counter } = this.state;

    const inputHandler = (e, field) => {
      this.setState({ [field]: e.target.value });
    };

    return (
      <div className="text-center">
        <h3>Welcome {username}</h3>
        <h3>Email: {email}</h3>
        <input
          onChange={e => inputHandler(e, "username")}
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          onChange={e => inputHandler(e, "email")}
          type="text"
          placeholder="Email"
        />
        <Link to={"/profile/" + username}>
          <input type="button" className="btn btn-primary" value="Login"/>
        </Link>
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={() => this.setState({counter: counter+1})}
        ></textarea>
        <p>{counter} / 140</p>
      </div>
    );
  }
}

export default InputScreen;
