import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./NumberCard.scss";

class NumberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.children ? (
      <div className="number-card">
        <Card className="col-5 col-sm-8 col-md-4 col-xl-4">
          <div className="card-body">
            <section className={this.props.children[0]}>
              {this.props.children[1].matches}
              <p>PARTIDAS</p>
            </section>
          </div>
        </Card>
        <Card className="col-5 col-sm-8 col-md-4 col-xl-4">
          <div className="card-body">
            <section className="text-ok">
              {this.props.children[1].win}
              <p>VITÓRIAS</p>
            </section>
          </div>
        </Card>
        <Card className="col-5 col-sm-8 col-md-4 col-xl-4">
          <div className="card-body">
            <section className="text-danger">
              {this.props.children[1].lose}
              <p>DERROTAS</p>
            </section>
          </div>
        </Card>
      </div>
    ) : null;
  }
}

export default NumberCard;
