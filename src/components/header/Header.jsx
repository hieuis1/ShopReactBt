import React from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
const Header = () => {
  const list = useSelector((state) => state.cart.cart);
  return (
    <div>
      <nav>
        <Container>
          <ul className="navList">
            <div className="logo">
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg"
                alt=""
              />
            </div>
            <ul className="nav-item">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop/all">Shop</NavLink>
              </li>
            </ul>
            <div className="cart">
              <Link to="/cart">
                {" "}
                <i className="fa-solid fa-bag-shopping"></i>
                <div className="quantity">{list.length}</div>
              </Link>
            </div>
          </ul>
        </Container>
      </nav>
    </div>
  );
};

export default Header;
