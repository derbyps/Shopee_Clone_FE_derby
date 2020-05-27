import React, { Component } from "react";
// import { Container, Navbar } from "react-bootstrap";
import Navigator from "../components/Header";
import Carousels from "../components/Carousel";
import Category from "../components/Category";
import FlashSale from "../components/FlashSale";
import FooterCategory from "../components/FooterCategory";
import Footer from "../components/Footer";
import { Modal } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div>
        <Navigator />
        <Carousels />
        <Category />
        <FlashSale />
        <FooterCategory />
        <Footer />
        <div className="testes">
          <Modal
            className="modal-pos"
            style={{ width: "348px" }}
            show={this.state.show}
            onHide={this.handleClose}
          >
            <img
              className="modal-img"
              src={require("../assets/img/modalshopee.png")}
              alt=""
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default Home;
