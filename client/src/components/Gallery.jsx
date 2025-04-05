// Gallery.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'

// Import images statically
import wedding1 from '../assets/project1.png'
import wedding2 from '../assets/project2.png'
//import wedding3 from '../assets/Wedding3.jpg'
import puberty1 from '../assets/project5.png'
import puberty2 from '../assets/project6.png'
// import maternity1 from '../assets/Maternity1.jpg'
// import maternity2 from '../assets/Maternity2.jpg'
// import birthday1 from '../assets/Birthday1.jpg'
// import birthday2 from '../assets/Birthday2.jpg'
// import bridal1 from '../assets/Bridal1.jpg'
// import bridal2 from '../assets/Bridal2.jpg'
// import product1 from '../assets/Product1.jpg'
// import product2 from '../assets/Product2.jpg'
// import temple1 from '../assets/Temple1.jpg'
// import temple2 from '../assets/Temple2.jpg'
// import album1 from '../assets/Album1.jpg'
// import album2 from '../assets/Album2.jpg'
// import video1 from '../assets/Video1.jpg'
// import video2 from '../assets/Video2.jpg'

// Map slugs to imported image arrays
const galleryImages = {
  'wedding-engagement': [wedding1, wedding2],
   'puberty-ceremony': [puberty1, puberty2],
//   'maternity-shoot': [maternity1, maternity2],
//   'birthday-shoot': [birthday1, birthday2],
//   'bridal-photography': [bridal1, bridal2],
//   'product-photography': [product1, product2],
//   'temple-photography': [temple1, temple2],
//   'album-design': [album1, album2],
//   'video-edits': [video1, video2],
}

const Gallery = () => {
  const { slug } = useParams()
  const images = galleryImages[slug] || []

  return (
    <div className="min-h-screen bg-[#190b1f] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold capitalize">{slug.replace(/-/g, ' ')}</h1>
          <Link
            to="/#portfolio"
            className="text-sm px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {images.length === 0 ? (
          <p className="text-gray-400">No images available for this gallery.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery
