import React from "react";

export const VideoPlayer = () => {
  return (
    <div className="flex justify-center items-center h-300">
      <video 
        src="/Images/chivideo.mp4"  // Adjust path to match your file
        controls
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-lg rounded-lg shadow-lg"
      />
    </div>
  );
};


