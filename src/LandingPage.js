// LandingPage.js
import React, { useState } from "react";
import Lottie from "lottie-react";
import videoConferenceAnim from "./assets/video-conference.json";
import "./LandingPage.css";

function LandingPage({ onJoin }) {
  const [name, setName] = useState("");

  const handleJoin = () => {
    if (name.trim()) {
      onJoin(name);
    }
  };

  return (
    <div className="landing-container">
      <div className="animation-wrapper">
        <Lottie animationData={videoConferenceAnim} loop={true} className="lottie" />
      </div>
      <h1 className="welcome-text">Welcome to Video Meet App</h1>
      <input
        className="name-input"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="join-button" onClick={handleJoin}>
        Join Meeting
      </button>
    </div>
  );
}

export default LandingPage;
