import React from "react";
import "./see.scss";
import Container from "react-bootstrap/esm/Container";
import item2 from "../../assets/item2.png";
const See = () => {
  return (
    <div>
      <Container>
        <div className="see">
          <div className="see-top">
            <h2>See how your shoes are made</h2>
            <p>
              Urna, felis enim orci accumsan urna blandit egestas mattis egestas
              feugiat viverra ornare donec adipiscing semper aliquet integer
              risus leo volutpat nulla enim ultrices
            </p>
          </div>
          <div className="see-bot">
            <div className="see-left">
              <div className="item1">
                <div className="num">01.</div>
                <h5>Pet canvas</h5>
                <p>
                  Morbi eget bibendum sit adipiscing morbi ac nisl vitae
                  maecenas nulla cursus
                </p>
              </div>
              <div className="item2">
                <div className="num">02.</div>
                <h5>Algae foam + vegan glue</h5>
                <p>Enim tincidunt donec vulputate magna pharetra mattis in</p>
              </div>
            </div>
            <div className="see-center">
              <img src={item2} alt="" />
            </div>

            <div className="see-right">
              <div className="item3">
                <div className="num">03.</div>
                <h5>Organic cotton</h5>
                <p>A vel ipsum, sed dignissim elementum ultrices amet</p>
              </div>
              <div className="item4">
                <div className="num">04.</div>
                <h5>Upcycled plastic bottles</h5>
                <p>
                  Pellentesque viverra amet netus facilisis amet felis odio
                  tortor orci cursus est
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default See;
