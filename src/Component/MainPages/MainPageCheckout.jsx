import React from "react";
import "./MainPageStyling.css";
import icon from "../../Assets/ckeckout icon/Group 1.png";
import logo from "../../Assets/Logo/mastercard logo.png";

const MainPageCheckout = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="checkoutdetail-wrap">
              <div className="check-icon">
                <img src={icon} alt="" />
              </div>
              <div>
                <div>
                  <h5 className="info-head">
                    Customer Information{" "}
                    <a className="edit" href="">
                      Edit
                    </a>
                  </h5>
                  <p className="info-p">Micheal Agboola</p>
                  <p className="info-p" style={{ marginBottom: "50px" }}>
                    Pipeline road Narayi, Kaduna state| Kaduna-ZARIA| +234
                    8112300138
                  </p>
                </div>
                <div>
                  <h5 className="info-head">
                    Delivery Method{" "}
                    <a className="edit" href="">
                      Edit
                    </a>
                  </h5>
                  <p className="info-p">Door Delivery (From #2,100)</p>
                  <p className="info-p" style={{ marginBottom: "40px" }}>
                    Delivery between 19th July and 25th July
                  </p>
                </div>
                <div>
                  <h5 className="info-head">Payment Method</h5>
                  <div style={{ display: "flex" }}>
                    <div>
                      <label className="label" htmlFor="">
                        First Name
                      </label>{" "}
                      <br />
                      <input
                        className="input1"
                        type="text"
                        placeholder="Micheal"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="">
                        Last Name
                      </label>{" "}
                      <br />
                      <input
                        className="input1"
                        type="text"
                        placeholder="Agboola"
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div>
                      <label className="label" htmlFor="">
                        Card Number
                      </label>{" "}
                      <br />
                      <input
                        className="input2"
                        type="text"
                        placeholder="1234 **** **** ****"
                      />
                      <img
                        className="mastercard-logo"
                        src={logo}
                        alt="mastercard logo"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="">
                        Exp. Date
                      </label>{" "}
                      <br />
                      <input
                        className="input3"
                        type="text"
                        placeholder="12/25"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="">
                        CVV
                      </label>{" "}
                      <br />
                      <input className="input4" type="text" placeholder="426" />
                    </div>
                  </div>
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
              <button className="checkout-btn">Confirm Order</button>
            </div>
            <p className="redirect-statement">
              Need to make changes? Return to your cart
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageCheckout;
