import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const flashItem = [
  {
    img: require("../assets/img/fs-1.jpeg"),
    imgbg: require("../assets/img/bg.png"),
    price: "88.900",
    disc: "53%",
  },
  {
    img: require("../assets/img/fs-2.jpeg"),
    imgbg: require("../assets/img/bg.png"),
    price: "182.900",
    disc: "70%",
  },
  {
    img: require("../assets/img/fs-3.jpeg"),
    imgbg: require("../assets/img/bg.png"),
    price: "3.000",
    disc: "91%",
  },
  {
    img: require("../assets/img/fs-4.jpeg"),
    imgbg: require("../assets/img/bg-pay.png"),
    price: "13.720",
    disc: "51%",
  },
  {
    img: require("../assets/img/fs-5.jpeg"),
    imgbg: require("../assets/img/bg.png"),
    price: "1.240.000",
    disc: "4%",
  },
  {
    img: require("../assets/img/fs-6.jpeg"),
    imgbg: require("../assets/img/bg.png"),
    price: "55.000",
    disc: "50%",
  },
];

const FlashSale = () => {
  return (
    <div>
      <Container>
        <Row className="border p-3 m-0 bg-white py-2 mt-3">
          <Col md={12}>
            <img
              style={{ height: "25px", width: "130px" }}
              src={require("../assets/img/logo-flash.png")}
              alt=""
            />
          </Col>
        </Row>
        <Row className="m-0 p-0 bg-white">
          {flashItem.map((e) => (
            <Col className="m-0 p-0">
              <div className="d-flex justify-content-end">
                <div className="all-badge m-0 p-1 text-center">
                  <span style={{ color: "#EE522D" }}>
                    <strong>{e.disc}</strong>
                  </span>
                  <br />
                  <span className="text-white">
                    <strong>OFF</strong>
                  </span>
                </div>
              </div>
              <div class="d-flex flex-column">
                <div
                  class="w-100 d-flex justify-content-center"
                  style={{ position: "absolute" }}
                >
                  <img
                    src={e.imgbg}
                    style={{ width: "170px", height: "173px" }}
                    className=""
                    alt=""
                  />
                </div>
                <div class="w-100 d-flex justify-content-center">
                  <img
                    src={e.img}
                    style={{ width: "170px", height: "173px" }}
                    className=""
                    alt=""
                  />
                </div>
                <div className="text-center orange">
                  Rp&nbsp;<span className="price-tag">{e.price}</span>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="text-center bar-bar">
                    <span>0 TERJUAL</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="mt-4 d-flex justify-content-center">
        <Row>
          <Col md={12}>
            <img src={require("../assets/img/hori-ban-1.png")} alt="" />
            <img src={require("../assets/img/hori-ban-2.png")} alt="" />
            <img src={require("../assets/img/hori-ban-3.jpeg")} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FlashSale;
