import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper" style={{ marginTop: "100px"}}>
      <div className="footer-top">
        <div className="container">
          <div className="row fotter-content-wrapper">
            <div className="col-md-6 col-12">
              <h2 className="footer-h">GMJ Wears</h2>
              <div className="footer-layout">
                <p className="footer-p">
                  Get update for upcoming product and best discount for all
                  items
                </p>
                <div className="sub-layout">
                  <input
                    className="sub-input"
                    type="text"
                    placeholder="Your Email"
                  />
                  <button className="sub-btn">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 footer-links-wrapper">
              <div style={{ display: "flex" }}>
                <div className="me-auto">
                  <h6>Products</h6>
                  <p>TShirt</p>
                  <p>Jacket</p>
                  <p>Shoes</p>
                  <p>Pant</p>
                  <p>Suits</p>
                </div>
                <div className="categories">
                  <h6>Categories</h6>
                  <p>Men</p>
                  <p>Women</p>
                  <p>Kids</p>
                  <p>New and Featured</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 social-media">
              <h6>Our Social Media</h6>
              <p>Instgram</p>
              <p>Facebook</p>
              <p>Youtube</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-banner">
        <div className="container">
          <p className="banner-p">© GMJ Copyright 2024. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
