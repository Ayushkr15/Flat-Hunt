import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [collegeId, setCollegeId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

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

    const formRef = firebase.database().ref("forms");

    const formData = {
      name,
      email,
      contactNumber,
      numberOfPeople,
      collegeId,
    };

    formRef.push(formData);

    // Reset the form after submission
    setName("");
    setEmail("");
    setContactNumber("");
    setNumberOfPeople("");
    setCollegeId("");

    // Navigate to the thank you page
    navigate("/thankyou");
  };

  return (
    <div className="container my-5">
      <h1 className="mb-5">Accommodation Inquiry Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="contactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={e => setContactNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="numberOfPeople">
          <Form.Label>Number of People</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number of people"
            value={numberOfPeople}
            onChange={e => setNumberOfPeople(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="collegeId">
          <Form.Label>Why you want to live here? </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your college ID"
            value={collegeId}
            onChange={e => setCollegeId(e.target.value)}
            required
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormPage;
