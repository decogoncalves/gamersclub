import React, { Component } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import "./GameCard.scss";

class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    window.console.log(this.props.children);
    return (
      <Card className="col-3 col-sm-3 col-md-3 col-xl-3 game-card">
        <div className="card-body">
          <section className="card-top">
            <Button className="copy">
              <i className="far fa-copy" />
            </Button>
            <Button className="sign-in">
              <i className="fas fa-sign-in-alt" />
            </Button>
          </section>
          <section className="card-middle">
            <p>{this.props.children.id + " - " + this.props.children.title}</p>
            <p className="game-type">{this.props.children.mode}</p>
          </section>
          <section className="card-bottom">
            <p>
              <span>{this.props.children.map}</span>
              <span className="ingame-players">{this.props.children.current+"/"+this.props.children.max}</span>
            </p>
            <ProgressBar now={this.props.children.current/this.props.children.max*100}/>
          </section>
        </div>
      </Card>
    );
  }
}

export default GameCard;
