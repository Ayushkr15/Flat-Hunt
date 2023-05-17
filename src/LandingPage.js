import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome to My Project</h1>
        <p>This landing page provides information about my project.</p>
        <Link to="/home">
          <button>Go to HomePage</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
