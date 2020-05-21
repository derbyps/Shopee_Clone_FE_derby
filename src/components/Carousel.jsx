import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const itemB = [
  {
    img: require("../assets/img/banner-men-sale.png"),
    text: "Men Sale",
  },
  {
    img: require("../assets/img/banner-elektronik-murah.png"),
    text: "Elektronik Murah",
  },
  {
    img: require("../assets/img/banner-pulsa.png"),
    text: "Pulsa, Tagihan & Hiburan",
  },
  {
    img: require("../assets/img/banner-shoppe-fashion.png"),
    text: "Shopee Fashion",
  },
  {
    img: require("../assets/img/banner-shopee-grosir.png"),
    text: "Shopee Grosir",
  },
  {
    img: require("../assets/img/banner-cod.png"),
    text: "Bayar Di Tempat",
  },
  {
    img: require("../assets/img/banner-reward.png"),
    text: "Reward Koin Shopee",
  },
  {
    img: require("../assets/img/banner-free-ongkir.png"),
    text: "Gratis Ongkir Xtra",
  },
  {
    img: require("../assets/img/banner-cashback.png"),
    text: "Cashback & Voucher",
  },
  {
    img: require("../assets/img/banner-semua-promo.png"),
    text: "Semua Promo",
  },
];

const Carousels = () => {
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col md={8}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel1.png")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel2.png")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel3.png")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel4.png")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel5.png")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel6.png")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel7.png")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel8.png")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel9.png")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/carousel10.png")}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={12}>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/side-carousel1.jpeg")}
                  alt="Third slide"
                />
              </Col>
            </Row>
            <Row>
              <Col className="mt-2" md={12}>
                <img
                  className="d-block w-100"
                  src={require("../assets/img/side-carousel2.png")}
                  alt="Third slide"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="border m-0 bg-white py-2 mt-2">
          {itemB.map((elem, index) => (
            <Col className="p-1">
              <div class="d-flex flex-column">
                <div class="w-100 d-flex justify-content-center">
                  <img src={elem.img} className="ic-banner d-block" alt="" />
                </div>
                <div className="text-center ic-text">{elem.text}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Carousels;
