import React, { Component } from "react";

export default class BasicControls extends Component {
  render() {
    return (
      <div>
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn7"
          value="7"
        />
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn8"
          value="8"
        />
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn9"
          value="9"
        />
        <input
          className="form-group btn btn-danger bttn"
          type="button"
          name="bttnplus"
          value="+"
        />
        <br />
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn4"
          value="4"
        />
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn5"
          value="5"
        />
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn6"
          value="6"
        />
        <input
          className="form-group btn btn-danger bttn"
          type="button"
          name="bttnminus"
          value="-"
        />
        <br />

        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn1"
          value="1"
        />
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn2"
          value="2"
        />
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn3"
          value="3"
        />
        <input
          className="form-group btn btn-danger bttn"
          type="button"
          name="bttnmulti"
          value="*"
        />
        <br />
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttndot"
          value="."
        />
        <input
          className="form-group btn btn-default bttn"
          type="button"
          name="bttn0"
          value="0"
        />
        <input
          className="form-group btn btn-danger bttn"
          type="button"
          name="bttnmod"
          value="%"
        />
        <input
          className="form-group btn btn-danger bttn"
          type="button"
          name="bttndiv"
          value="/"
        />
      </div>
    );
  }
}
