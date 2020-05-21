import React, { Component } from "react";
// import { Container, Navbar } from "react-bootstrap";
import Navigator from "../components/Header";
import Carousels from "../components/Carousel";
import Category from "../components/Category";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigator />
        <Carousels />
        <Category />
      </div>
    );
  }
}

export default Home;
