import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const upperCategory = [
  {
    img: require("../assets/img/cat-makanan.png"),
    text: "Makanan & Minuman",
  },
  {
    img: require("../assets/img/cat-perawatan.png"),
    text: "Perawatan & Kecantikan",
  },
  {
    img: require("../assets/img/cat-fashion.png"),
    text: "Fashion Muslim",
  },
  {
    img: require("../assets/img/cat-pakaian-pria.png"),
    text: "Pakaian Pria",
  },
  {
    img: require("../assets/img/cat-hp.png"),
    text: "Handphone & Aksesoris",
  },
  {
    img: require("../assets/img/cat-fashion-bayi.png"),
    text: "Fashion Bayi & Anak",
  },
  {
    img: require("../assets/img/cat-sepatu-wanita.png"),
    text: "Sepatu Wanita",
  },
  {
    img: require("../assets/img/cat-tas-wanita.png"),
    text: "Tas Wanita",
  },
  {
    img: require("../assets/img/cat-elektro.png"),
    text: "Elektronik",
  },
  {
    img: require("../assets/img/cat-hobi.png"),
    text: "Hobi & Koleksi",
  },
];

const lowerCategory = [
  {
    img: require("../assets/img/cat-kesehatan.png"),
    text: "Kesehatan",
  },
  {
    img: require("../assets/img/cat-ibu.png"),
    text: "Ibu & Bayi",
  },
  {
    img: require("../assets/img/cat-furniture.png"),
    text: "Perlengkapan Rumah",
  },
  {
    img: require("../assets/img/cat-pakaian-wanita.png"),
    text: "Pakaian Wanita",
  },
  {
    img: require("../assets/img/cat-komputer.png"),
    text: "Komputer & Aksesoris",
  },
  {
    img: require("../assets/img/cat-sepatu-pria.png"),
    text: "Sepatu Pria",
  },
  {
    img: require("../assets/img/cat-tas-pria.png"),
    text: "Tas Pria",
  },
  {
    img: require("../assets/img/cat-jam.png"),
    text: "Jam Tangan",
  },
  {
    img: require("../assets/img/cat-aksesoris.png"),
    text: "Aksesoris Fashion",
  },
  {
    img: require("../assets/img/cat-fotografi.png"),
    text: "Fotografi",
  },
];

const Category = () => {
  return (
    <div>
      <Container>
        <Row className="border p-3 m-0 bg-white py-2 mt-3">
          <Col md={12}>
            <span style={{ color: "#777787" }}>
              <strong>KATEGORI</strong>
            </span>
          </Col>
        </Row>
        <Row className="m-0 p-0 bg-white">
          {upperCategory.map((elem) => (
            <Col className="border m-0 p-2">
              <div class="d-flex flex-column">
                <div class="w-100 d-flex justify-content-center">
                  <img src={elem.img} className="ic-category d-block" alt="" />
                </div>
                <div className="text-center text-category">{elem.text}</div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="m-0 p-0 bg-white">
          {lowerCategory.map((elem) => (
            <Col className="border m-0 p-2">
              <div class="d-flex flex-column">
                <div class="w-100 d-flex justify-content-center">
                  <img src={elem.img} className="ic-category d-block" alt="" />
                </div>
                <div className="text-center text-category">{elem.text}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Category;
