import React from "react";
import { Link } from "react-router-dom";
import "./ThankYouPage.scss";

function ThankYouPage() {
  return (
    <div className="content">
      <div className="wrapper-1">
        <div className="wrapper-2">
          <h1>Thank you!</h1>
          <p>Thanks for showing interest in this accommodation.</p>
          <p>You should receive a confirmation from the owner soon.</p>
          <br />
          <Link to="/" className="go-home">
            Go home
          </Link>
        </div>
        <div className="footer-like"></div>
      </div>
    </div>
  );
}

export default ThankYouPage;
