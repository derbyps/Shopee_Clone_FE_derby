import React, { Component } from "react";
// import { Container, Navbar } from "react-bootstrap";
import Navigator from "../components/Header";
import Carousels from "../components/Carousel";
import Category from "../components/Category";
import FlashSale from "../components/FlashSale";
import ProductCard from "../components/ProductCard";
import FooterCategory from "../components/FooterCategory";
import Footer from "../components/Footer";
import { Modal } from "react-bootstrap";
import { getProduct } from "../store/action/productAction";
import { connect } from "react-redux";
import { Row, Spinner, Col } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

class Home extends Component {
  // componentDidMount() {
  //   this.props.getProduct();
  // }

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
        <div className="header-margin">
          <Carousels />
        </div>
        <Category />
        <FlashSale />
        <div className="mx-5">
          <Row className="border p-3 orange m-0 bg-white py-2 mt-3">
            <Col md={12}>REKOMENDASI</Col>
          </Row>
          <InfiniteScroll
            dataLength={this.props.product.length}
            next={this.props.getProduct}
            hasMore={this.props.hasMore}
            loader={
              <div className="d-flex justify-content-center">
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" className="mx-3" variant="success" />
                <Spinner animation="grow" variant="success" />
              </div>
            }
            scrollThreshold={0.4}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>All products are displayed</b>
              </p>
            }
          >
            <Row className="d-flex">
              {this.props.product.map((e) => {
                return (
                  <ProductCard
                    img={e.url_image}
                    name={e.name}
                    price={e.price}
                    stock={e.stock}
                  />
                );
              })}
            </Row>
          </InfiniteScroll>
        </div>
        <FooterCategory />
        <Footer />
        <div>
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
        <div className="fixed-bottom mr-3 mb-5 d-flex justify-content-end">
          <img
            // className="fixed-bottom"
            src={require("../assets/img/telor.png")}
            alt=""
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.listProduct,
    hasMore: state.product.hasMore,
    pageNumber: state.product.pageNumber,
  };
};

const mapDispatchToProps = {
  getProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
