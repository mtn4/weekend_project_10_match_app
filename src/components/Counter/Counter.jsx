import React, { Component } from "react";
import "./Counter.css";
import { FcDislike } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div>
          <FcDislike />: {this.props.unlikes}
        </div>
        <div>
          <FcLike />: {this.props.likes}
        </div>
      </div>
    );
  }
}
