import React from "react";
import Container from "react-bootstrap/Container";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { FILTER_BY_SEARCH, SORT_ITEM } from "../../redux/slice/filterProduct";
import { useParams } from "react-router-dom";
import ProductDetail from "../productDetail/ProductDetail";
const Product = ({ product }) => {
  const disPatch = useDispatch();
  const filter = useSelector((state) => state.listFilter.listFilter);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    disPatch(FILTER_BY_SEARCH({ product, search }));
  }, [product, search]);
  useEffect(() => {
    disPatch(SORT_ITEM({ product, sort }));
  }, [product, sort]);

  const { pid } = useParams();

  if (pid === "all") {
    return (
      <div>
        <div className="shop" style={{ minHeight: "100vh" }}>
          <Container>
            <h2>All product</h2>
            <div className="shop-content">
              <div className="top">
                <p>Showing all {filter.length} results</p>
                <div className="search-item">
                  <label htmlFor="">Search</label>
                  <div className="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="select">
                  <label htmlFor="">Sort by: </label>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="">---</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="high">Highest price</option>
                    <option value="low">Lowest price</option>
                  </select>
                </div>
              </div>
              <div className="bottom">
                <div className="list-products">
                  {filter.map((item, index) => {
                    return <Card key={index} item={item}></Card>;
                  })}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  } else {
    return <ProductDetail url={pid}></ProductDetail>;
  }
};

export default Product;
