import React from "react";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Thank You!</h1>
      <p className="text-center">
        Your form has been submitted successfully. We appreciate your interest
        and will get back to you soon.
      </p>
      <div className="text-center">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
