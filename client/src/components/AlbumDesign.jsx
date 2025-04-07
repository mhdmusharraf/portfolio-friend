import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { galleryImages } from "../data/galleryImages"; // Ensure this path is correct

const AlbumDesign = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click and set the selected album
  const handleViewAlbumClick = (albumName) => {
    setSelectedAlbum(albumName);
  };

  // Function to handle go back
  const handleGoBack = () => {
    navigate(-1); // This will navigate to the previous page
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

      {/* Buttons for each album */}
      <div className="flex flex-wrap gap-4 mb-8">
        {['album1', 'album2', 'album3', 'album4'].map((albumName) => (
          <button
            key={albumName}
            onClick={() => handleViewAlbumClick(albumName)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            View {albumName.charAt(0).toUpperCase() + albumName.slice(1)}
          </button>
        ))}
      </div>

      {/* Display images of the selected album */}
      <div>
        {selectedAlbum && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">{`Album ${selectedAlbum.split('album')[1]}`}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages["album-design"][selectedAlbum]?.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image.src}
                    alt={`Album ${selectedAlbum}`}
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
