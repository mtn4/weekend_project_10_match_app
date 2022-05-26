import React, { Component } from "react";
import "./Image.css";
export default class Image extends Component {
  render() {
    return (
      <>
        <div className="image-container">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div
          className="image-description"
          style={{ color: `${this.props.color}` }}
        >
          {this.props.name}
        </div>
      </>
    );
  }
}
