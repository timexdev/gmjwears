import React from "react";
import "./MainPageStyling.css";
import product1 from "../../Assets/Product/Product 1.png";
import product2 from "../../Assets/Product/Product 2.png";
import product3 from "../../Assets/Product/Product 3.png";
import product4 from "../../Assets/Product/Product 4.png";
import rating from "../../Assets/rating/rating.png";

const MainPageHome = () => {
  return (
    <>
      <div className="container mainpage-wrapper">
        <div id="row1" className="row">
          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product1}
                alt="product1 image"
              />
              <div class="">
                <p class="product-title">
                  Yahweh T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Simple T-shirt for daily use</p>
                <h5 className="product-price">$60</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product2}
                alt="product1 image"
              />
              <div class="card-body">
                <p class="product-title">
                  Koinonia T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Koinonia global T-shirt</p>
                <h5 className="product-price">$80</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product3}
                alt="product1 image"
              />
              <div class="card-body">
                <p class="product-title">
                  Original Cat T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Classic T-shirt for daily use</p>
                <h5 className="product-price">$30</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product4}
                alt="product1 image"
              />
              <div class="card-body">
                <p class="product-title">
                  Lux Green T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Casual T-shirt for daily use</p>
                <h5 className="product-price">$45</h5>
              </div>
            </div>
          </div>
        </div>

        <div id="row2" className="row">
          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product1}
                alt="product1 image"
              />
              <div class="">
                <p class="product-title">
                  Yahweh T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Simple T-shirt for daily use</p>
                <h5 className="product-price">$75</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product2}
                alt="product1 image"
              />
              <div class="card-body">
                <p class="product-title">
                  Koinonia T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Koinonia global T-shirt</p>
                <h5 className="product-price">$80</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product3}
                alt="product1 image"
              />
              <div class="card-body">
                <p class="product-title">
                  Original Cat T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Classic T-shirt for daily use</p>
                <h5 className="product-price">$25</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product4}
                alt="product1 image"
              />
              <div class="card-body">
                <p class="product-title">
                  Lux Green T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Casual T-shirt for daily use</p>
                <h5 className="product-price">$65</h5>
              </div>
            </div>
          </div>
        </div>

        <div id="row3" className="row">
          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product1}
                alt="product1 image"
              />
              <div class="">
                <p class="product-title">
                  Yahweh T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Simple T-shirt for daily use</p>
                <h5 className="product-price">$60</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product2}
                alt="product1 image"
              />
              <div class="card-body">
                <p class="product-title">
                  Koinonia T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Koinonia global T-shirt</p>
                <h5 className="product-price">$80</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product3}
                alt="product1 image"
              />
              <div class="card-body">
                <p class="product-title">
                  Original Cat T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Classic T-shirt for daily use</p>
                <h5 className="product-price">$30</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12 product">
            <div>
              <img
                style={{ width: "100%" }}
                src={product4}
                alt="product1 image"
              />
              <div class="card-body">
                <p class="product-title">
                  Lux Green T-shirt{" "}
                  <span id="rating">
                    {" "}
                    <img src={rating} alt="rating" /> 4.8/5
                  </span>
                </p>
                <p class="product-text">Casual T-shirt for daily use</p>
                <h5 className="product-price">$45</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageHome;
