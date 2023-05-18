import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x23153c,
      color: 0xff3f81,
      color2: 0xffffff,
    });

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          transform: "translate(0, -50%)",
          textAlign: "left",
          color: "#fff",
          zIndex: 1,
          padding: "0 20px",
          marginLeft: "100px",
        }}
      >
        <h2>Welcome to your HOME FINDER</h2>
        <p>Find the best accommodation that suits you the best!</p>
        <Link to="/home">
          <button type="button" class="btn btn-light">
            Explore
          </button>
        </Link>
      </div>
      <div ref={vantaRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default LandingPage;
