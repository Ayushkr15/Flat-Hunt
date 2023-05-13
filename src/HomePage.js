import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"; // updated import
import "firebase/compat/database"; // updated import

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
    <div>
      {flatsData.length === 0 ? (
        <p>Loading flats...</p>
      ) : (
        flatsData.map(flat => (
          <div key={flat.id}>
            <img src={flat.imageUrl} alt={flat.name} />
            <h2>Name: {flat.name}</h2>
            <p>
              <b>Despciption:</b> {flat.description}
            </p>
            <p><b>:Facilities:</b> {flat.facilities}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default HomePage;
