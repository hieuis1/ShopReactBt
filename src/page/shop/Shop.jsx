import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "./shop.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/slice/product";
import Product from "../../components/product/Product";
const Shop = () => {
  let disPatch = useDispatch();
  let list = useSelector((state) => state.listProduct.listProduct);
  useEffect(() => {
    disPatch(fetchProduct());
  }, []);

  return <Product product={list}></Product>;
};

export default Shop;
