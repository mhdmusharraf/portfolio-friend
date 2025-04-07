import React from "react";
import { Link } from "react-router-dom";

const VideoEdits = () => {
  // Define your video content here
  const videoLinks = [
    "https://player.vimeo.com/video/1073164590?h=230bdd9c88",
    "https://player.vimeo.com/video/1073181262?h=396bbd512b",
    "https://player.vimeo.com/video/1073181603?h=d399c417f5",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button
        className="mb-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300"
        onClick={() => window.history.back()}
      >
        ← Go Back
      </button>

      <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">
        Video Edits
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videoLinks.map((link, index) => (
          <div
            key={index}
            className="aspect-w-16 aspect-h-9 w-full rounded-lg shadow-md overflow-hidden"
          >
            <iframe
              src={link}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              title={`Video Edit ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoEdits;
