import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./branch.scss";
const Branch = () => {
  return (
    <div>
      <Container>
        <ul className="list-branch">
          <li>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"
              alt=""
            />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Branch;
