
import React from "react";
import { useNavigate } from "react-router-dom";

const albums = [
  { name: "Album 1", slug: "album1" },
  { name: "Album 2", slug: "album2" },
  { name: "Album 3", slug: "album3" },
  { name: "Album 4", slug: "album4" },
];

const AlbumList = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Album Design</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {albums.map((album) => (
          <button
            key={album.slug}
            onClick={() => navigate(`/gallery/album-design/${album.slug}`)}
            className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg shadow-md transition duration-300"
          >
            {album.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
