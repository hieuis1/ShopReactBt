import React from "react";
import "./bot.scss";
import Container from "react-bootstrap/esm/Container";
const FooterBot = () => {
  return (
    <div className="footer-bot">
      <Container>
        <div className="content">
          <div className="left">
            © 2023 Recycled Shoe Store. Powered by Recycled Shoe Store.
          </div>
          <div className="right">
            <img
              src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBot;
