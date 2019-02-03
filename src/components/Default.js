import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <React.Fragment>
        <div cla="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h1 className="display-3">404</h1>
              <h1>error</h1>
              <h2>Page Not Found</h2>
              <h4>
                The requested url
                <span className="text-danger">
                  {" "}
                  {this.props.location.pathname}
                </span>{" "}
                was not found
              </h4>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
