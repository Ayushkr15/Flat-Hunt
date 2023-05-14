import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"; // updated import
import "firebase/compat/database"; // updated import
import { Link } from "react-router-dom";
// import FlatCard from "./FlatCard";

function HomePage() {
  const [flatsData, setFlatsData] = useState([]);

  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyCzbVr4tnzl4nqnmuMCdQykQY0jgCoaLU8",
      authDomain: "house-market-b38c7.firebaseapp.com",
      databaseURL:
        "https://house-market-b38c7-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "house-market-b38c7",
      storageBucket: "house-market-b38c7.appspot.com",
      messagingSenderId: "774647295458",
      appId: "1:774647295458:web:67edab8719409e8f5d1dbb",
    });

    // Fetch data from Firebase Realtime Database
    const flatsRef = firebase.database().ref("flats");
    flatsRef.on("value", snapshot => {
      const flats = snapshot.val();
      const flatsData = Object.keys(flats).map(key => ({
        id: key,
        ...flats[key],
      }));
      setFlatsData(flatsData);
    });

    // Clean up function
    return () => {
      flatsRef.off();
    };
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Available Flats</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {flatsData.length === 0 ? (
          <p className="text-center">Loading flats...</p>
        ) : (
          flatsData.map(flat => (
            <div className="col" key={flat.id}>
              <div className="card h-100">
                <img
                  src={flat.imageUrl}
                  alt={flat.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{flat.name}</h5>
                  <p className="card-text">{flat.description}</p>
                  <p className="card-text">
                    <b>Price: </b>
                    {flat.price}
                  </p>
                  <strong>Facilities:</strong> {flat.facilities}
                </div>
                <div className="card-footer">
                <Link to={`/accommodation/${flat.id}`}>
                  <button className="btn btn-primary">Book Now</button>
                </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
