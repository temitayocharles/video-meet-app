// src/VideoMeetingPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const MeetingWrapper = styled.div`
  background-color: #f0f2f5;
  padding: 20px;
`;

const ParticipantGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  margin-bottom: 20px;
`;

const ParticipantThumbnail = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const ControlButton = styled(motion.button)`
  background-color: #2575fc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 1rem;

  &:hover {
    background-color: #1d61d0;
  }
`;

const VideoMeetingPage = ({ user }) => {
  const [participants, setParticipants] = useState([user]);  // For demo, add user to participants

  return (
    <MeetingWrapper>
      <h2>Welcome, {user.displayName || user.email}!</h2>
      <h3>Participants:</h3>

      <ParticipantGrid>
        {participants.map((participant, index) => (
          <ParticipantThumbnail
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            {participant.displayName || 'Guest'}
          </ParticipantThumbnail>
        ))}
      </ParticipantGrid>

      <div>
        <ControlButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Mute
        </ControlButton>
        <ControlButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Share Screen
        </ControlButton>
      </div>
    </MeetingWrapper>
  );
};

export default VideoMeetingPage;
