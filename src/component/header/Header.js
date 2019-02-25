import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./Header.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.children ? (
      <header className="col-11 col-md-10">
        <Navbar>
          <section className="navbar-brand mr-auto">
            <img src={require("../../imgs/image.svg")} alt="bad fallen" />
            <section>
              <p>{this.props.children.name}</p>
              <p className="little">GC ID: {this.props.children.id}</p>
            </section>
          </section>
          <div className="collapse navbar-collapse">
            <div className="expertise-container mx-auto">
              <section className="expertise top first">
                <span>Casual </span>
                <img
                  src={require("../../imgs/pin.svg")}
                  className="flip"
                  alt="bad fallen"
                />
              </section>
              <section className="expertise bottom second">
                <span>Competitivo </span>
                <img src={require("../../imgs/pin.svg")} alt="bad fallen" />
              </section>
              <section className="expertise top third">
                Amador{" "}
                <img
                  src={require("../../imgs/pin.svg")}
                  className="flip"
                  alt="bad fallen"
                />
              </section>
              <section className="expertise bottom fourth">
                Pro <img src={require("../../imgs/pin.svg")} alt="bad fallen" />
              </section>
              <div className="progress nav-item mx-auto">
                <div
                  className={"progress-bar " + this.props.children.expertise}
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <section className="shields nav-item ml-auto">
              <img src={require("../../imgs/Bitmap.svg")} alt="bad fallen" />
              <img
                src={require("../../imgs/icon-beginner.svg")}
                alt="bad fallen"
              />
              <img src={require("../../imgs/Polygon.png")} alt="bad fallen" />
              <span>{this.props.children.level}</span>
            </section>
            <section className="patent nav-item ml-auto">
              <img
                src={require("../../imgs/premium-ii-medal.png")}
                alt="bad fallen"
              />
            </section>
          </div>
        </Navbar>
      </header>
    ) : null;
  }
}

export default Footer;
