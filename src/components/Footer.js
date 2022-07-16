import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>H18A Brownie</h4>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Contact us</h4>
            <div className="list-unstyled">
              <a href = "mailto:invoicereceivingh18a@gmail.com?subject = Feedback&body = Message">Send Feedback!</a>
            </div>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>About Us</h4>
            <div className="list-unstyled">
              <li>Address: UNSW Sydney, NSW 2052</li>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} H18A Brownie | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;