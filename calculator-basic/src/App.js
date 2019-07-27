import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div className="container">
        <div className="row saleh">
          <div className=" col-xs-12  col-sm-offset-4 col-sm-12  col-md-offset-3 col-md-6  col-lg-offset-3 col-lg-6  ">
            <form
              name="form"
              className="well calcontainer col-xs-12  col-sm-offset-4 col-sm-12  col-md-offset-3 col-md-6  col-lg-offset-3 col-lg-6"
            >
              <input
                className=" form-control "
                id="panel"
                name="panel"
                placeholder="0."
                disabled
              />
              <br />
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
              <br />
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
