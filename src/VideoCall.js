// src/VideoCall.js
import React from "react";
import Jitsi from "react-jitsi";

const VideoCall = ({ roomName, displayName }) => {
  return (
    <div className="w-full h-screen">
      <Jitsi
        roomName={roomName}
        displayName={displayName}
        config={{ prejoinPageEnabled: false }}
        interfaceConfig={{
          DEFAULT_REMOTE_DISPLAY_NAME: 'Guest',
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
        }}
        containerStyle={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default VideoCall;
