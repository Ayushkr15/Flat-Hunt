import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavBar from "./Navbar";
import { Nav } from "react-bootstrap";


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
    const flatsRef = firebase.database().ref("flats"); // Declare flatsRef variable

    flatsRef.on("value", snapshot => {
      const flats = snapshot.val();
      console.log("flats:", flats);
      const flatsData = Object.keys(flats).map(key => ({
        id: key,
        ...flats[key],
        images: flats[key].images.map(img => ({ url: img })),
      }));
      console.log("flatsData:", flatsData);
      setFlatsData(flatsData);
    });

    // Clean up function
    return () => {
      flatsRef.off();
    };
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container my-4">
      <style>{`
        body {
          background-color: #3FC1C9;
        }
      `}</style>
      <NavBar />
      {/* <h1 className="text-center mb-4">Available Flats</h1> */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {flatsData.length === 0 ? (
          <p className="text-center">Loading flats...</p>
        ) : (
          flatsData.length &&
          flatsData.map(flat => (
            <div className="col" key={flat.id}>
              <div className="card h-100">
                <div
                  style={{
                    paddingBottom: "30px",
                    position: "relative",
                  }}
                >
                  <Carousel
                    responsive={responsive}
                    arrows={true}
                    additionalTransfrom={0}
                    centerMode={false}
                    autoPlay={false}
                    autoPlaySpeed={3000}
                    infinite={true}
                    partialVisible={true}
                    transitionDuration={1000}
                    showDots={true}
                    slidesToSlide={1}
                    focusOnSelect={false}
                    keyBoardControl
                    minimumTouchDrag={80}
                  >
                    {flat.images &&
                      flat.images.map((img, index) => (
                        <div key={index}>
                          <img
                            src={img.url}
                            alt={flat.name}
                            className="card-img-top"
                            style={{
                              height: "300px", // Set the desired height
                              width: "100%", // Set the desired width
                              objectFit: "cover", // Maintain the aspect ratio and cover the container
                            }}
                          />
                        </div>
                      ))}
                  </Carousel>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{flat.name}</h5>
                  <div className="col d-flex align-items-center">
                    <FiMapPin />
                    <p className="card-text">{flat.location}</p>
                  </div>
                  <p className="card-text">
                    <b>Price: </b>
                    {flat.price}
                  </p>
                </div>
                <div className="card-footer">
                  <Link to={`/accommodation/${flat.id}`}>
                    <button className="btn btn-primary">View Details</button>
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