import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";


function AccommodationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    console.log("id:", id); // check if the id parameter is correctly passed

    const firebaseConfig = {
      // your firebase config
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

    const accommodationRef = firebase.database().ref(`flats/${id}`);
    console.log("accommodationRef:", accommodationRef.toString()); // check if the accommodationRef is correct

    accommodationRef.on("value", snapshot => {
      const accommodationData = snapshot.val();
      console.log("accommodationData:", accommodationData); // check if the accommodation data is correctly retrieved
      setAccommodation(accommodationData);
    });

    return () => {
      accommodationRef.off();
    };
  }, [id]);

  console.log("accommodation:", accommodation); // check the value of the accommodation state

  if (!accommodation) {
    return <p>Loading...</p>;
  }

  const latitudeLongitude = accommodation?.["latitude-longitude"]; // Get the latitude and longitude string from your Firebase data
  const [latitude, longitude] = latitudeLongitude?.split(",") || [];
  if (!latitude || !longitude) {
    return <p>Latitude or longitude data is missing.</p>;
  }
  return (
    <div className="container my-5">
      <div className="header">
        <h2>{accommodation.name}</h2>
        <span>{accommodation.location}</span>
      </div>

      <div className="row">
        <div className="col-md-7">
          <img
            className="d-block w-100"
            src={accommodation.imageUrl}
            alt={accommodation.name}
          />
        </div>
        <div className="col-md-5">
          <h2>What this place offers?</h2>
          <ul>
            <li>Furnished: {accommodation.furnished ? "Yes" : "No"}</li>
            <li>Type: {accommodation.type}</li>
            <li>Facilities: {accommodation.facilities.join(", ")}</li>
            <li>Security: {accommodation.security}</li>
            <li>Independent: {accommodation.independent ? "Yes" : "No"}</li>
            <li>Amenities: {accommodation.amenities.join(", ")}</li>
            <li>Distance: {accommodation.distance} km</li>
            <li>For: {accommodation.for}</li>
          </ul>
        </div>
      </div>
      <div className="col descriptionInfo">
        <h2>Description</h2>
        <p>{accommodation.description}</p>
      </div>
      <button className="btn btn-primary" onClick={() => navigate("/form")}>
        Interested
      </button>

      <div className="owner-details-box">
        <h3>Owner Details</h3>
        <div className="owner-info">
          <p>
            <strong>Name:</strong> {accommodation.ownerName}
          </p>
          <p>
            <strong>Contact Number:</strong> {accommodation.ownerContactInfo}
          </p>
        </div>
      </div>
      
        


    </div>
  );
}

export default AccommodationPage;
