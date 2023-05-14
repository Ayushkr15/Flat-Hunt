import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    numberOfPeople: "",
    collegeId: "",
  });

  const handleSubmit = event => {
    event.preventDefault(); // prevent the default form submission behavior

    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyCzbVr4tnzl4nqnmuMCdQykQY0jgCoaLU8",
      authDomain: "house-market-b38c7.firebaseapp.com",
      databaseURL:
        "https://house-market-b38c7-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "house-market-b38c7",
      storageBucket: "house-market-b38c7.appspot.com",
      messagingSenderId: "774647295458",
      appId: "1:774647295458:web:67edab8719409e8f5d1dbb",
    };
    firebase.initializeApp(firebaseConfig);

    // Save the form data to Firebase
    const database = firebase.database();
    const formRef = database.ref("forms");
    const newFormRef = formRef.push();
    newFormRef.set(formData);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      numberOfPeople: "",
      collegeId: "",
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPeople">Number of People:</label>
          <input
            type="number"
            className="form-control"
            id="numberOfPeople"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegeId">College ID:</label>
          <input
            type="text"
            className="form-control"
            id="collegeId"
            name="collegeId"
            value={formData.collegeId}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
