import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import GameCard from "../gamecard/GameCard";
import "./CardSlider.scss";

class CardSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.children ? (
      <Carousel className="col-md-12 col-12" slide={false} controls={false} interval={10000000} keyboard={true}>
        {this.props.children.map((rooms, index) =>
          index < parseInt(this.props.children.length / 3) ? (
            <div className="row">
              <GameCard>{this.props.children[index*3]}</GameCard>
              <GameCard>{this.props.children[index*3+1]}</GameCard>
              <GameCard>{this.props.children[index*3+2]}</GameCard>
            </div>
          ) : null
        )}
        { this.props.children.length % 3 === 1 ? (
            <div className="row">
              <GameCard>{window.console.log(this.props.children[this.props.children.length-1])}</GameCard>
            </div>
          ) : this.props.children.length % 3 === 2 ? (
            <div className="row">
              <GameCard>{this.props.children[this.props.children.length-2]}</GameCard>
              <GameCard>{this.props.children[this.props.children.length-1]}</GameCard>
            </div>
          ):null}
      </Carousel>
    ) : null;
  }
}

export default CardSlider;
