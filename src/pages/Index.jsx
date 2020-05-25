import React, { Component } from "react";
// import { Container, Navbar } from "react-bootstrap";
import Navigator from "../components/Header";
import Carousels from "../components/Carousel";
import Category from "../components/Category";
import FlashSale from "../components/FlashSale";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigator />
        <Carousels />
        <Category />
        <FlashSale />
        <Footer />
      </div>
    );
  }
}

export default Home;
