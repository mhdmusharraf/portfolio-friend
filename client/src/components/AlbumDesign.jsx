import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate hooks
import { galleryImages } from "../data/galleryImages"; // Ensure this path is correct

const AlbumDesign = () => {
  const { albumName } = useParams(); // Get albumName from the URL
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle go back
  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-200 mb-4">Album Design</h1>

      {/* Go back button */}
      <button
        onClick={handleGoBack}
        className="mb-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300"
      >
        ← Go Back
      </button>

      {/* Display images of the selected album */}
      <div>
        {albumName && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">{` ${albumName.charAt(0).toUpperCase() + albumName.slice(1)}`}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages["album-design"][albumName]?.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image.src}
                    alt={`${albumName}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumDesign;
