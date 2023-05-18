import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");
  const [role, setRole] = useState("");
  const [irl, setIrl] = useState("Definitely");
  const [shifting, setShifting] = useState(true);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const firebaseConfig = {
      // Your Firebase config here
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
      people,
      role,
      irl,
      shifting,
      comment,
    };

    formRef.push(formData);

    // Reset the form after submission
    setName("");
    setEmail("");
    setPeople("");
    setRole("");
    setIrl("Definitely");
    setShifting(true);
    setComment("");

    // Navigate to the thank you page
    navigate("/thankyou");
  };

  return (
    <div className="container formData">
      <header className="header">
        <h1 id="title" className="text-center">
          Fill your details
        </h1>
        <p id="description" className="text-center">
          If you like this accommodation please fill your details and soon the
          owner will contact you.
        </p>
      </header>
      <div className="form-wrap">
        <form id="survey-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label id="name-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="form-control"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label id="email-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-control"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label id="number-label" htmlFor="number">
                  How many people you are? 
                </label>
                <input
                  type="number"
                  name="age"
                  id="number"
                  min="1"
                  max="10"
                  className="form-control"
                  placeholder="Number of people"
                  value={people}
                  onChange={e => setPeople(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Current Role</label>
                <select
                  id="dropdown"
                  name="role"
                  className="form-control"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  required
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option value="student">Student</option>
                  <option value="learner">Teacher</option>
                  <option value="job">Full Time Job</option>
                  <option value="preferNo">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Do you want to see the place in real life?</label>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    value="Definitely"
                    name="customRadioInline1"
                    className="custom-control-input"
                    checked={irl === "Definitely"}
                    onChange={() => setIrl("Definitely")}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    Definitely
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    value="Maybe"
                    name="customRadioInline1"
                    className="custom-control-input"
                    checked={irl === "Maybe"}
                    onChange={() => setIrl("Maybe")}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline2"
                  >
                    Maybe
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline3"
                    value="Not sure"
                    name="customRadioInline1"
                    className="custom-control-input"
                    checked={irl === "Not sure"}
                    onChange={() => setIrl("Not sure")}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline3"
                  >
                    Not sure
                  </label>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Do you also want help in shifting ?</label>
                <div className="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="yes"
                    value="yes"
                    id="yes"
                    checked={shifting}
                    onChange={e => setShifting(e.target.checked)}
                  />
                  <label className="custom-control-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="no"
                    value="no"
                    id="no"
                    checked={!shifting}
                    onChange={e => setShifting(!e.target.checked)}
                  />
                  <label className="custom-control-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Why you want this place ? </label>
                <textarea
                  id="comments"
                  className="form-control"
                  name="comment"
                  placeholder="Enter your comment here..."
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <button
                type="submit"
                id="submit"
                className="btn btn-warning btn-block btn-md submit-button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
