import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <React.Fragment>
        <div className=" mx-auto my-2 text-center text-title">
          <div className="jumbotron img-fluid">
            <div className="text-capitalize font-weight-bold">
              <strong className="textTitle">
                <h2 className="display-4">{this.props.title}</h2>
              </strong>
            </div>
            <p className="lead textSubTitle">{this.props.subTitle}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
