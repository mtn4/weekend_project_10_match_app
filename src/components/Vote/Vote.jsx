import React, { Component } from "react";
import "./Vote.css";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

export default class Vote extends Component {
  handleClick = (category, value) => {
    this.props.onClick(category, value + 1);
  };
  render() {
    return (
      <div style={{ color: `${this.props.color}` }} className="vote-container">
        <div
          className="icon"
          onClick={(e) => this.handleClick("unlikes", this.props.unlikes)}
        >
          <AiOutlineDislike />
        </div>
        <div
          className="icon"
          onClick={(e) => this.handleClick("likes", this.props.likes)}
        >
          <AiOutlineLike />
        </div>
      </div>
    );
  }
}
