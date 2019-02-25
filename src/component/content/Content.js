import React, { Component } from "react";
import NumberCard from "../numbercard/NumberCard";
import { Button } from "react-bootstrap";
import "./Content.scss";
import CardSlider from "../cardslider/CardSlider";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.children ? (
      <div className="content col-11 col-md-10">
        <div className="col-md-6">
          <span>
            <img src={require("../../imgs/4Fun.svg")} alt="bad fallen" /> 4 FUN
          </span>
          <CardSlider>{this.props.children["4fun"].servers}</CardSlider>
        </div>
        <div className="col-md-3">
          <span>
            <img src={require("../../imgs/Lobby.svg")} alt="bad fallen" /> LOBBY
          </span>
          <NumberCard>
            {"text-warning"}
            {this.props.children.games[0]}
          </NumberCard>
          <Button className="btn-lobby col-10 col-md-10 btn-warning">IR PARA LOBBY</Button>
        </div>
        <div className="col-md-3">
          <span>
            <img src={require("../../imgs/Open.svg")} alt="bad fallen" /> RANKED
            OPEN
          </span>
          <NumberCard>
            {"text-primary"}
            {this.props.children.games[1]}
          </NumberCard>
          <Button className="btn-ranked col-10 col-md-10">
            <i className="fas fa-users" />{" "}
            {this.props.children.games[1].cta.line + " | ENTRAR NA FILA"}
          </Button>
        </div>
      </div>
    ) : null;
  }
}

export default Content;
