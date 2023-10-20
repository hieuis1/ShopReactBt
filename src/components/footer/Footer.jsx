import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <ul className="footer-list">
            <li className="item">
              <div className="head">
                <img
                  src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/site-logo.svg"
                  alt=""
                />
              </div>
              <p>
                Praesent eget tortor sit risus egestas nulla pharetra ornare
                quis bibendum est bibendum sapien proin nascetur
              </p>
            </li>
            <li className="item">
              <div className="head">
                <h3>Shop</h3>
              </div>
              <ul className="body">
                <li>
                  <a href="#">Shop Men</a>
                </li>
                <li>
                  <a href="#">Shop Women</a>
                </li>
                <li>
                  <a href="#">Lookbook</a>
                </li>
                <li>
                  <a href="#">Gift Card</a>
                </li>
                <li>
                  <a href="#">Sale</a>
                </li>
              </ul>
            </li>
            <li className="item">
              <div className="head">
                <h3>About</h3>
              </div>
              <ul className="body">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Our Materials</a>
                </li>
                <li>
                  <a href="#">Our Value</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
                <li>
                  <a href="#">Manufacture</a>
                </li>
              </ul>
            </li>
            <li className="item">
              <div className="head">
                <h3>Need Help?</h3>
              </div>
              <ul className="body">
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Shoe Care</a>
                </li>
                <li>
                  <a href="#">Size Chart</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Footer;
