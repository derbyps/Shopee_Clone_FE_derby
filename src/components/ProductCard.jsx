import React from "react";
import { Col } from "react-bootstrap";

const ProductCard = (props) => {
  const { img, price, name, stock } = props;
  return (
    <Col sm={2} className="mb-2">
      <div
        className="m-0 p-0 bg-white d-flex align-items-end flex-column"
        style={{ width: "172px", minHeight: "300px" }}
      >
        <div class="d-flex flex-column">
          <div class="w-100 d-flex justify-content-center">
            <img
              src={img}
              style={{ width: "172px", height: "188px" }}
              className=""
              alt=""
            />
          </div>
          <span className="text-category p-1">{name}</span>
        </div>
        <div className="mt-auto w-100 orange p-1 d-flex justify-content-between">
          <div className="footer-text">
            Rp&nbsp;<span className="price-tag">{price}</span>
          </div>
          <div className="footer-text grey">{stock} Terjual</div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
