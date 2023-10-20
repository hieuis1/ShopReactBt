import React from "react";
import Button from "react-bootstrap/Button";
import "./card.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cart";
import { useNavigate, useParams } from "react-router-dom";
const Card = (props) => {
  const { id, image, name, price, shortDescription } = props.item;
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/shop/${id}`);
  };

  return (
    <div className="card">
      <div className="top">
        <img src={image} alt="" />
      </div>
      <div className="bottom">
        <h4>{name}</h4>
        <p>${price}.00</p>
        <div className="btn">
          <Button
            onClick={() => disPatch(addToCart(props.item))}
            variant="primary"
          >
            Add to cart
          </Button>{" "}
          <Button onClick={() => goToDetail(id)} variant="primary">
            Detail
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
