// Chat.js
import React, { useState } from "react";
import "./Chat.css"; // style file coming below

function Chat({ displayName }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { user: displayName, text: message.trim() }]);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h2>Meeting Room</h2>
        <span className="user-badge">👤 {displayName}</span>
      </header>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.user === displayName ? "mine" : ""}`}
          >
            <strong>{msg.user}: </strong>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
