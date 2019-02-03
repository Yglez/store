import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-10 mx-auto my-2 text-center text-title">
          <div className="text-capitalize font-weight-bold">
            <strong className="text-blue">
              <h1>{this.props.title}</h1>
            </strong>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
