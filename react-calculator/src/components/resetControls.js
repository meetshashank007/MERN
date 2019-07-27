import React, { Component } from "react";

class ResetControls extends Component {
  render() {
    return (
      <div>
        <input
          className="form-group btn btn-info bttn bttne"
          type="button"
          name="bttnclear"
          value="CE"
        />
        <input
          className="form-group btn btn-success bttn bttne"
          type="button"
          name="bttnEQL"
          value="="
        />
      </div>
    );
  }
}

export default ResetControls;
