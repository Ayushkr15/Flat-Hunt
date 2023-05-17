import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUsPage.scss";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Initialize Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyCUFYq9iBMXJ-gu1AUfguCX5ImAIul5zZ8",
        authDomain: "form-35a16.firebaseapp.com",
        databaseURL:
          "https://form-35a16-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "form-35a16",
        storageBucket: "form-35a16.appspot.com",
        messagingSenderId: "1028912595083",
        appId: "1:1028912595083:web:458ff4ba7a13b0c860d48e",
        // ...
      };
      firebase.initializeApp(firebaseConfig);

      // Save form data to Firebase Realtime Database
      const database = firebase.database();
      await database.ref("contactUsForms").push({
        name,
        email,
        subject,
        message,
      });

      // Clear form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Display success message
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.log("Error submitting form:", error);
      // Display error message
      toast.error("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className="ContactUsPage">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <textarea
          rows="4"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactUsPage;
