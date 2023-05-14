import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { useParams } from "react-router-dom";

function AccommodationPage() {
  const { id } = useParams();
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

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-7">
          <img
            className="d-block w-100"
            src={accommodation.imageUrl}
            alt={accommodation.name}
          />
        </div>
        <div className="col-md-5">
          <h1 className="mb-3">{accommodation.name}</h1>
          <p>{accommodation.description}</p>
          <hr />
          <h4>Facilities:</h4>
          <ul>
            {accommodation.facilities.split(", ").map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
          <hr />
          <h4>Price:</h4>
          <p>{accommodation.price}</p>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
}

export default AccommodationPage;
