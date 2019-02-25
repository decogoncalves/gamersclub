import React, { Component } from "react";
import {Button} from "react-bootstrap";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.children ? (
      <footer className="col-11 col-md-10">
        <Button className="col-sm-12 col-md-3">
          <img src={require("../../imgs/Combined_Shape.svg")} alt="download" />
          <span>Download Gamers Club Anti-Cheat</span>
        </Button>
        <section className="col-12 col-md-1 subtitle last">
          Cheaters Banidos{" "}
          <section className="text-danger">Nos Últimos 7 Dias</section>
        </section>
        <section className="col-12 col-md-1 index text-danger">
          {this.props.children[1]}
        </section>
        <section className="col-12 col-md-1 subtitle">
          Jogadores <section className="text-primary">Online</section>
        </section>
        <section className="col-12 col-md-1 index text-primary">
          {this.props.children[0]}
        </section>
      </footer>
    ) : null;
  }
}

export default Footer;
