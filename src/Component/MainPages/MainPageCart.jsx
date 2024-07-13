import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPageStyling.css";
import product1 from "../../Assets/Product/Product 1.png";
import product2 from "../../Assets/Product/Product 2.png";
import product4 from "../../Assets/Product/Product 4.png";
import small from "../../Assets/sizes/small.png";
import medium from "../../Assets/sizes/medium.png";
import large from "../../Assets/sizes/large.png";
import xlarge from "../../Assets/sizes/extra large.png";
import grey from "../../Assets/color/grey.png";
import black from "../../Assets/color/black.png";
import blue from "../../Assets/color/blue.png";
import green from "../../Assets/color/green.png";
import minus from "../../Assets/action/minus.png";
import plus from "../../Assets/action/plus.png";
import one from "../../Assets/action/1.png";
import deletebtn from "../../Assets/action/delete.png";

const MainPageCart = () => {

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="cart-wrapper" style={{ display: "flex" }}>
              <div>
                <img style={{ width: "100%" }} src={product1} alt="" />
              </div>
              <div className="product-box">
                <h5 className="product-title mobileprod">
                  Yahweh T-shirt <span>$60</span>
                </h5>
                <p className="size">
                  Size: <img src={small} alt="small" />
                  <img src={medium} alt="medium" />
                  <img src={large} alt="large" />
                  <img src={xlarge} alt="xlarge" />
                </p>
                <p className="color">
                  Color: <img src={grey} alt="grey" />
                  <img src={black} alt="black" />
                  <img src={blue} alt="blue" />
                  <img src={green} alt="green" />
                </p>
                <div className="action-box">
                  <span className="action">
                    <img src={minus} alt="minus" />
                    <img src={one} alt="one" />
                    <img src={plus} alt="plus" />
                  </span>
                  <span>
                    <img src={deletebtn} alt="delete" />
                  </span>
                </div>
              </div>
            </div>

            <div className="cart-wrapper" style={{ display: "flex" }}>
              <div>
                <img style={{ width: "100%" }} src={product2} alt="" />
              </div>
              <div className="product-box">
                <h5 className="product-title mobileprod">
                  Koinonia T-shirt <span>$80</span>
                </h5>
                <p className="size">
                  Size: <img src={small} alt="small" />
                  <img src={medium} alt="medium" />
                  <img src={large} alt="large" />
                  <img src={xlarge} alt="xlarge" />
                </p>
                <p className="color">
                  Color: <img src={grey} alt="grey" />
                  <img src={black} alt="black" />
                  <img src={blue} alt="blue" />
                  <img src={green} alt="green" />
                </p>
                <div className="action-box">
                  <span className="action">
                    <img src={minus} alt="minus" />
                    <img src={one} alt="one" />
                    <img src={plus} alt="plus" />
                  </span>
                  <span>
                    <img src={deletebtn} alt="delete" />
                  </span>
                </div>
              </div>
            </div>

            <div className="cart-wrapper" style={{ display: "flex" }}>
              <div>
                <img style={{ width: "100%" }} src={product4} alt="" />
              </div>
              <div className="product-box">
                <h5 className="product-title mobileprod">
                  Lux Green T-shirt <span>$45</span>
                </h5>
                <p className="size">
                  Size: <img src={small} alt="small" />
                  <img src={medium} alt="medium" />
                  <img src={large} alt="large" />
                  <img src={xlarge} alt="xlarge" />
                </p>
                <p className="color">
                  Color: <img src={grey} alt="grey" />
                  <img src={black} alt="black" />
                  <img src={blue} alt="blue" />
                  <img src={green} alt="green" />
                </p>
                <div className="action-box">
                  <span className="action">
                    <img src={minus} alt="minus" />
                    <img src={one} alt="one" />
                    <img src={plus} alt="plus" />
                  </span>
                  <span>
                    <img src={deletebtn} alt="delete" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="summary" style={{ marginTop: "50px" }}>
              <h4>Summary</h4>
              <p className="summary-p1">
                Subtotal: <span className="price">$185</span>{" "}
              </p>
              <p className="summary-p1">
                Estimated Delivery and Handling <span>Free</span>
              </p>
              <p className="summary-p1">
                Estimated Taxes <span className="price">$20</span>
              </p>
              <h5 className="summary-p1 price">
                Total: <span>$205 </span>{" "}
              </h5>
            </div>
            <div>
             <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageCart;
