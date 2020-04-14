import React, { Component } from "react";

// const CounterScreen = (props) => {
//   return (
//     <div>
//       {/* <h1>Hello!</h1> */}
//   <h1>{props.kota}</h1>
//     </div>
//   );
// };

class CounterScreen extends React.Component {
  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0
  };

  render() {
    const {counter1, counter2, counter3} = this.state
    return (
      <div>
        <div className="row m-3">
          <div className="col">
            <h1>Counter 1 = {counter1}</h1>
            <input
              className="btn btn-danger"
              type="button"
              value="-"
              onClick={() =>
                this.setState({ counter1: counter1 - 1 })
              }
            />
            <input
              className="btn btn-primary"
              type="button"
              value="+"
              onClick={() =>
                this.setState({ counter1: counter1 + 1 })
              }
            />
          </div>
          <div className="col">
            <h1>Counter 2 = {counter2}</h1>
            <input
              className="btn btn-danger"
              type="button"
              value="-"
              onClick={() =>
                this.setState({ counter2: counter2 - 1 })
              }
            />
            <input
              className="btn btn-primary"
              type="button"
              value="+"
              onClick={() =>
                this.setState({ counter2: counter2 + 1 })
              }
            />
          </div>
          <div className="col">
            <h1>Counter 3 = {counter3}</h1>
            <input
              className="btn btn-danger"
              type="button"
              value="-"
              onClick={() =>
                this.setState({ counter3: counter3 - 1 })
              }
            />
            <input
              className="btn btn-primary"
              type="button"
              value="+"
              onClick={() =>
                this.setState({ counter3: counter3 + 1 })
              }
            />
          </div>
        </div>
        <h1>All Counters</h1>
        <input
          className="btn btn-danger"
          type="button"
          value="-"
          onClick={() =>
            this.setState({
              counter1: counter1 - 1,
              counter2: counter2 - 1,
              counter3: counter3 - 1
            })
          }
        />
        <input
          className="btn btn-primary"
          type="button"
          value="+"
          onClick={() =>
            this.setState({
              counter1: counter1 + 1,
              counter2: counter2 + 1,
              counter3: counter3 + 1
            })
          }
        />
        <br/>
        <input
          className="btn btn-info"
          type="button"
          value="Reset"
          onClick={() =>
            this.setState({ counter1: 0, counter2: 0, counter3: 0 })
          }
        />
      </div>
    );
  }
}

export default CounterScreen;
