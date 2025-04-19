// src/App.js
import React, { useState } from "react";
import Chat from "./Chat";
import VideoCall from "./VideoCall";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [showVideo, setShowVideo] = useState(true); // toggle video/chat

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) setIsNameSubmitted(true);
  };

  return (
    <div className="App">
      {!isNameSubmitted ? (
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
          <h1 className="text-3xl font-bold">Welcome to Video Meet</h1>
          <form onSubmit={handleNameSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="border rounded-lg px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Join
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center p-4 bg-gray-100 shadow">
            <h2 className="text-lg font-semibold">Welcome, {name} 👋</h2>
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Switch to {showVideo ? "Chat" : "Video"}
            </button>
          </div>
          <div className="w-full h-[calc(100vh-64px)]">
            {showVideo ? (
              <VideoCall roomName="devops-team-room" displayName={name} />
            ) : (
              <Chat displayName={name} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
