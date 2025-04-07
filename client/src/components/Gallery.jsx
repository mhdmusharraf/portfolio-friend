import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { galleryImages } from "../data/galleryImages";

const Gallery = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const mediaItems = galleryImages[slug];

  if (!mediaItems) {
    return (
      <div className="text-center p-10 text-gray-200">
        <h2 className="text-2xl font-bold mb-4">Gallery Not Found</h2>
        <Link to="/" className="text-purple-400 underline">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300"
      >
        ← Go Back
      </button>

      {/* Gallery Title */}
      <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center capitalize">
        {slug.replace("-", " ")}
      </h2>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaItems.map((item, index) => (
          item.type === "video" ? (
            <video
              key={index}
              controls
              className="w-full h-auto rounded-lg shadow-md"
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              key={index}
              src={item.src}
              alt={`gallery-${index}`}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Gallery;
