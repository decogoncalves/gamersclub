import React, { Component } from "react";
import { fetchData } from "../services/master-api";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Content from "./content/Content";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined
    };
  }

  componentDidMount() {
    fetchData().then(res => this.setState({ data: res.data }));
  }

  render() {
    return this.state.data ? (
      <div className="main">
        <Header>{this.state.data.user}</Header>
        <Content>{this.state.data}</Content>
        <Footer>
          {this.state.data.online}
          {this.state.data.latest_banned}
        </Footer>
      </div>
    ) : null;
  }
}

export default App;
