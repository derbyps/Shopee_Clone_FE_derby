import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="mt-5 grey mx-5">
      <Row>
        <Col className="ic-text">
          <strong>LAYANAN PELANGGAN</strong>
          <p className="mt-3">
            <div>Bantuan</div>
            <div className="mt-2">Pembayaran</div>
            <div className="mt-2">ShopeePay</div>
            <div className="mt-2">Koin Shopee</div>
            <div className="mt-2">Lacak Pesanan Pembeli</div>
            <div className="mt-2">Lacak Pengiriman Penjual</div>
            <div className="mt-2">Gratis Ongkir</div>
            <div className="mt-2">Pengembalian Barang & Dana</div>
            <div className="mt-2">Garansi Shopee</div>
            <div className="mt-2">hubungi Kami</div>
          </p>
        </Col>
        <Col className="ic-text">
          <strong>JELAJAHI SHOPEE</strong>
          <p className="mt-3">
            <div>Tentang Kami</div>
            <div className="mt-2">karir</div>
            <div className="mt-2">Kebijakan Shopee</div>
            <div className="mt-2">kebijakan Privasi</div>
            <div className="mt-2">Blog</div>
            <div className="mt-2">shopee Mall</div>
            <div className="mt-2">Seller Centre</div>
            <div className="mt-2">Flash Sale</div>
          </p>
        </Col>
        <Col className="ic-text">
          <strong>PEMBAYARAN</strong>
        </Col>
        <Col className="ic-text">
          <strong>IKUTI KAMI</strong>
          <p className="mt-3">
            <div>
              <i class="fab fa-facebook"></i>
              <span>&nbsp; Facebook</span>
            </div>
            <div className="mt-2">
              <i class="fab fa-instagram-square"></i>
              <span>&nbsp; Instagram</span>
            </div>
            <div className="mt-2">
              <i class="fab fa-twitter-square"></i>
              <span>&nbsp; Twitter</span>
            </div>
            <div className="mt-2">
              <i class="fab fa-line"></i>
              <span>&nbsp; Line</span>
            </div>
            <div className="mt-2">
              <i class="fab fa-linkedin"></i>
              <span>&nbsp; LinkedIn</span>
            </div>
            <div className="mt-2">
              <i class="fas fa-graduation-cap"></i>
              <span>&nbsp; Shopee Campus</span>
            </div>
          </p>
        </Col>
        <Col className="ic-text">
          <strong>DOWNLOAD APLIKASI SHOPEE</strong>
          <Row className="mt-3">
            <Col>
              <img
                style={{ width: "86px" }}
                src={require("../assets/img/bc.png")}
                alt=""
              />
            </Col>
            <Col>
              <div className="mt-4">
                <img
                  style={{ height: "20px" }}
                  src={require("../assets/img/as.png")}
                  alt=""
                />
                <img
                  style={{ height: "20px" }}
                  src={require("../assets/img/gp.png")}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <div className="d-flex justify-content-between my-4">
        <div>
          <p>© Shopee 2020. Hak Cipta Dilindungi</p>
        </div>
        <div>
          <p>
            Negara: Singapura | Indonesia | Taiwan | Thailand | Malaysia |
            Vietnam | Filipina | Brazil
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
