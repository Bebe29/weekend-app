import React from "react";

class HomeScreen extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "200px", fontSize: "45px", fontWeight: "bold" }}
      >
        Welcome
      </div>
    );
  }
}

export default HomeScreen;
