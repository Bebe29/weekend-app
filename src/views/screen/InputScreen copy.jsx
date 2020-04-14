import React from "react";

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
      <div>
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
