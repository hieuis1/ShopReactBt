import React from "react";
import "./comment.scss";
import Container from "react-bootstrap/esm/Container";
const Comment = () => {
  let arr = [
    {
      desc: "“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”",
      name: "JULIA KEYS",
      image:
        "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg",
    },
    {
      desc: "““Non malesuada fringilla non varius odio in id pellentesque aliquam volutpat sapien faucibus ””",
      name: "LUIS ADRIAN",
      image:
        "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-2.jpg",
    },
    {
      desc: "“Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer”",
      name: "MARIA ANNA",
      image:
        "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-1.jpg",
    },
  ];
  return (
    <div className="section-comment">
      <Container>
        <h3>Our Customers speak for us</h3>
        <div className="list-comment">
          {arr.map((item, index) => {
            return (
              <div key={index} className="item">
                <div className="top">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="desc">{item.desc}</div>
                <div className="bot">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="last">4.8 average rating from 1814 reviews</p>
      </Container>
    </div>
  );
};

export default Comment;
