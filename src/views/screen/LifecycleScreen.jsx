import React from "react";

class LifecycleScreen extends React.Component {
  state = {
    username: "",
    time: new Date()
  };

  componentDidMount() {
    //   alert("Halo kawan!")
    // this.setState({ username: "doraemon" });
    this.timer = setInterval(() => this.triggerClock(), 1000);
  }

  triggerClock() {
    this.setState({ time: new Date() });
  }

  componentDidUpdate() {
    //   alert("anda mengubah state!")
    console.log(this.state.username);
  }

    componentWillUnmount() {
        // alert("WillUnmount")
        clearInterval(this.timer)
    }

  render() {
    // alert("render");
    return (
      <div className="text-center">
        <h1>Lifecycle Screen</h1>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
        {/* <h2>Welcome, {this.state.username}</h2>
        <input
          type="text"
          onChange={e => this.setState({ username: e.target.value })}
        />
        <a href="https://www.google.com/">link google</a> */}
      </div>
    );
  }
}

export default LifecycleScreen;
