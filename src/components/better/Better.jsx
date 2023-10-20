import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./better.scss";
import Container from "react-bootstrap/esm/Container";
const Better = () => {
  return (
    <>
      <div className="better">
        <div className="content">
          <h2>Better for People & the Planet</h2>
          <p>
            Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est
            dictum in vulputate
          </p>
          <Button variant="primary">
            <Link to="/shop">Show Now</Link>
          </Button>{" "}
        </div>
      </div>
      <div className="better-bot">
        <ul className="list">
          <li className="item">
            <i class="fa-solid fa-lock"></i>
            <p>Secure Payment</p>
          </li>
          <li className="space">|</li>
          <li className="item item2">
            <i class="fa-solid fa-truck-fast"></i>
            <p>Express Shipping</p>
          </li>
          <li className="space">|</li>
          <li className="item">
            <i class="fa-solid fa-arrows-spin"></i>
            <p>Free Return</p>
          </li>
        </ul>
        <br />
      </div>
    </>
  );
};

export default Better;
