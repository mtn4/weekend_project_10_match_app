import React, { Component } from "react";
import Counter from "../../components/Counter/Counter";
import api from "../../components/api/api";
import CircleLoader from "react-spinners/CircleLoader";
import Image from "../../components/Image/Image";
import Vote from "../../components/Vote/Vote";

import "./MainPage.css";

export default class Main extends Component {
  state = {
    dataArr: [],
    loading: false,
    currentIndex: 0,
    likes: 0,
    unlikes: 0,
    finished: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await api.get();
    this.setState({ dataArr: response.data, loading: false });
  }
  handleClick = (category, value) => {
    this.setState(
      {
        [category]: value,
        currentIndex: this.state.currentIndex + 1,
      },
      () => {
        if (this.state.currentIndex === this.state.dataArr.length) {
          this.setState({ finished: true });
        }
      }
    );
  };
  displayImage = () => {
    return (
      <Image
        name={this.state.dataArr[this.state.currentIndex].name}
        img={this.state.dataArr[this.state.currentIndex].img}
        color={this.state.dataArr[this.state.currentIndex].color}
      />
    );
  };
  displayVote = () => {
    return (
      <Vote
        onClick={this.handleClick}
        likes={this.state.likes}
        unlikes={this.state.unlikes}
        color={this.state.dataArr[this.state.currentIndex].color}
      />
    );
  };
  render() {
    return (
      <div className="background">
        {/* {!this.state.finished ? "" : <div>Thank you for playing!</div>} */}
        {this.state.loading ? (
          <div className="spinner">
            <CircleLoader color={"blue"} loading={true} size={200} />
          </div>
        ) : this.state.finished ? (
          <div className="finish">Thank you for playing!</div>
        ) : (
          <div className="main-page">
            <Counter likes={this.state.likes} unlikes={this.state.unlikes} />
            {this.state.dataArr[this.state.currentIndex] ? (
              <>
                {this.displayImage()}
                {this.displayVote()}
              </>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    );
  }
}
