import React from "react";
import "./detail.scss";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/slice/product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { addCartDetail } from "../../redux/slice/cart";
import { useNavigate } from "react-router";

const ProductDetail = ({ url }) => {
  const [product, setProduct] = useState({});
  const disPatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const back = () => {
    navigate("/shop/all");
  };
  const inQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const deQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const add = (item, quantity) => {
    disPatch(addCartDetail({ item, quantity }));
  };
  let list = useSelector((state) => state.listProduct.listProduct);
  useState(() => {
    disPatch(fetchProduct);
  }, []);
  let index = list.findIndex((item) => item.id == url);
  if (index >= 0) {
    return (
      <div className="detail" style={{ minHeight: "100vh" }}>
        <p
          onClick={back}
          className="back container"
          style={{ color: "#8c8c7a", cursor: "pointer" }}
        >
          <i
            class="fa-solid fa-arrow-left "
            style={{ marginRight: "5px", marginTop: "20px" }}
          ></i>
          back to shop
        </p>
        <Container>
          <div className="detail-content">
            <div className="left">
              <img src={list[index].image} alt="" />
            </div>
            <div className="right">
              <h2>{list[index].name}</h2>
              <p className="price">${list[index].price}.00</p>
              <p className="desc">{list[index].description}</p>
              <div className="btn">
                <div className="inde">
                  <a>
                    <i class="fa-solid fa-plus" onClick={inQuantity}></i>
                  </a>
                  <p>{quantity}</p>
                  <a>
                    <i class="fa-solid fa-minus" onClick={deQuantity}></i>
                  </a>
                </div>
                <Button
                  onClick={() => add(list[index], quantity)}
                  variant="primary"
                >
                  Add to cart
                </Button>{" "}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default ProductDetail;
