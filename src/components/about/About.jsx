import React from "react";
import Container from "react-bootstrap/esm/Container";
import item from "../../assets/item1.jpg";
import "./about.scss";
const About = () => {
  return (
    <div>
      <Container>
        <div className="about">
          <div className="left">
            <img src={item} alt="" />
          </div>
          <div className="right">
            <p className="header">About us</p>
            <h3>Selected materials designed for comfort and sustainability</h3>
            <p>
              Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget
              auctor nec sed elit nunc, magna non urna amet ac neque ut quam
              enim pretium risus gravida ullamcorper adipiscing at ut magna.
            </p>
            <a href="/shop">Read more</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
