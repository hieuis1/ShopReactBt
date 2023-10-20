import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  countTotal,
  removeCart,
} from "../../redux/slice/cart";
import { useState } from "react";
import { toast } from "react-toastify";
const Cart = () => {
  let list = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  console.log(list);
  const disPatch = useDispatch();
  const checkOut = () => {
    if (total == 0) {
      toast.error("Cart don't have any product to check out");
    } else {
      disPatch(removeCart());
      toast.success("Check out successfully");
    }
  };
  const removeItem = (item) => {
    disPatch(removeFromCart(item));
  };
  useEffect(() => {
    disPatch(countTotal());
  }, [list]);

  return (
    <div className="cart" style={{ minHeight: "100vh" }}>
      <Container>
        <h2>Your cart</h2>
        {list.length == 0 ? (
          <p>No item, please choose product</p>
        ) : (
          <Table style={{ marginTop: "50px", textAlign: "center" }} bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>
                      <img src={product.image} alt="" />
                    </td>
                    <td>${product.price}.00</td>
                    <td>
                      <div className="quantity">
                        <button
                          onClick={() => disPatch(increaseQuantity(product))}
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>
                        <p>{product.quantityShop}</p>
                        <button
                          onClick={() => disPatch(decreaseQuantity(product))}
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                      </div>
                    </td>
                    <td>${product.quantityShop * product.price}.00</td>
                    <td>
                      <button
                        className="trash"
                        onClick={() => removeItem(product)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
        <div className="total-section">
          <div className="total">
            <h2>Total:</h2>
            <p>${total}.00</p>
          </div>
          <Button onClick={checkOut} variant="primary">
            Check out
          </Button>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
