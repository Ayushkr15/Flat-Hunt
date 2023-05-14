import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function InterestForm({ accommodationId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formRef = firebase.database().ref(`forms/${accommodationId}`);
    formRef.push(formData, error => {
      if (error) {
        console.log(error);
      } else {
        setFormData({ name: "", email: "", message: "" });
        setFormSubmitted(true);
      }
    });
  };

  if (formSubmitted) {
    return (
      <div className="alert alert-success mt-3">
        <p>
          Thank you for your interest!{" "}
          <b>The owner will be soon contacting you</b>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Why are you interested in living here?</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default InterestForm;
