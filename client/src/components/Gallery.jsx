import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { galleryImages } from "../data/galleryImages";

const Gallery = () => {
  const { slug, albumId } = useParams(); // Make sure route has both slug and albumId (if present)
  const navigate = useNavigate();

  console.log("Slug:", slug);
  console.log("Album ID:", albumId);

  // Get the album index if albumId is provided, or just use the first album for categories without albumId
  const albumIndex = albumId ? parseInt(albumId, 10) - 1 : 0; // Default to the first album if no albumId
  const albums = galleryImages[slug];

  // If the slug exists but the category doesn't have albums or it's undefined
  if (!albums) {
    return (
      <div className="text-center p-10 text-gray-200">
        <h2 className="text-2xl font-bold mb-4">Gallery Not Found</h2>
        <Link to="/" className="text-purple-400 underline">Go Back</Link>
      </div>
    );
  }

  // For categories with albums, make sure we access the correct album
  const mediaItems = Array.isArray(albums)
    ? albumId ? albums[albumIndex] : albums // If albumId exists, use the album with that index; else use the default album
    : undefined;

  if (!mediaItems || !Array.isArray(mediaItems)) {
    return (
      <div className="text-center p-10 text-gray-200">
        <h2 className="text-2xl font-bold mb-4">Album Not Found</h2>
        <Link to="/" className="text-purple-400 underline">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300"
      >
        ← Go Back
      </button>

      <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center capitalize">
        {slug.replace("-", " ")} {albumId ? `- Album ${albumId}` : ''}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {mediaItems.map((item, index) =>
  item.type === "vimeo" ? (
    <div key={index} className="aspect-w-16 aspect-h-9 w-full rounded-lg shadow-md overflow-hidden">
      <iframe
        src={item.src}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        title={`Vimeo video ${index}`}
      />
    </div>
  ) : item.type === "video" ? (
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
)}

      </div>
    </div>
  );
};

export default Gallery;
