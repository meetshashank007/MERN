import React, { Component } from "react";
import DisplayPanle from "./displayPanel";
import ResetControls from "./resetControls";
import BasicControls from "./basicControls";

class Calculator extends Component {
  render() {
    return (
      <form
        name="form"
        className="well calcontainer col-xs-12  col-sm-offset-4 col-sm-12  col-md-offset-3 col-md-6  col-lg-offset-3 col-lg-6"
      >
        <DisplayPanle />
        <br />
        <BasicControls />
        <br />
        <ResetControls />
      </form>
    );
  }
}

export default Calculator;
