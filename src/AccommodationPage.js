import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useParams, useNavigate } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

function AccommodationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);
  const mapRef = useRef(null);

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

    accommodationRef.on("value", snapshot => {
      const accommodationData = snapshot.val();
      setAccommodation(accommodationData);
    });

    return () => {
      accommodationRef.off();
    };
  }, [id]);

  useEffect(() => {
    if (mapRef.current && accommodation) {
      const { latitude, longitude } = accommodation;
      const coordinates = fromLonLat([
        parseFloat(longitude),
        parseFloat(latitude),
      ]);

      const map = new Map({
        target: mapRef.current,
        layers: [new TileLayer({ source: new OSM() })],
        view: new View({
          center: coordinates,
          zoom: 15,
        }),
      });
    }
  }, [accommodation]);

  if (!accommodation) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-5">
      <div className="header">
        <h2>{accommodation.name}</h2>
        <span>{accommodation.location}</span>
      </div>
      <div className="row">
        <div className="col-md-7">
          <Carousel
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            partialVisible={true}
            transitionDuration={1000}
            showDots={true}
            slidesToSlide={1}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            slidesToSlide={1}
          >
            {accommodation.images.map((image, index) => (
              <div key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
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
      <button
        className="btn btn-primary interestedBtn"
        onClick={() => navigate("/form")}
      >
        Interested
      </button>
      <div ref={mapRef} className="map-container container"></div>
    </div>
  );
}

export default AccommodationPage;
