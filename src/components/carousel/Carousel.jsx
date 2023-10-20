import React from "react";
import "./carousel.scss";
import image from "../../assets/background.jpg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div
      className="carousel"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Container>
        <div className="content ">
          <h1>Love the Planet we walk on</h1>
          <p>
            Bibendum fermentum, aenean donec pretium aliquam blandit tempor
            imperdiet arcu arcu ut nunc in dictum mauris at ut.
          </p>
          <Button variant="primary">
            <Link to="/shop">Show Now</Link>
          </Button>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Carousel;
