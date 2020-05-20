import React from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

const Navigator = () => {
  return (
    <div className="sm-font header-bg">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between">
              <div>Jual | Download | Ikuti kami di</div>
              <div>Notifikasi Bantuan Daftar | Login</div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 pb-2">
          <Col md={2}>
            <img
              src={require("../assets/img/logo.png")}
              className="main-logo"
              alt=""
            />
          </Col>
          <Col md={9}>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Dekor rumah dibawah 30RB"
                className="mr-sm-2 w-100"
              />
            </Form>
            Baju Wanita&emsp;Sandal Wanita&emsp;Kaos Wanita&emsp;Celana
            Pria&emsp;Kemeja Wanita&emsp;Jaket Pria&emsp;Dompet
            Wanita&emsp;Sneakers Wanita
          </Col>
          <Col md={1}>
            <img
              className="cart-h"
              src={require("../assets/img/carts.png")}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigator;
