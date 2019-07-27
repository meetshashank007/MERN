import React, { Component } from "react";

class DisplayPanel extends Component {
  render() {
    return (
      <input
        className=" form-control "
        id="panel"
        name="panel"
        placeholder="0."
        disabled
      />
    );
  }
}

export default DisplayPanel;
