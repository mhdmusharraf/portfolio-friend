// Gallery.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'

// Import images statically
import wedding1 from '../assets/Wedding/01.jpg'
import wedding2 from '../assets/Wedding/02.jpg'
import wedding3 from '../assets/Wedding/03.jpg'
import wedding4 from '../assets/Wedding/04.jpg'
import wedding5 from '../assets/Wedding/05.jpg'
import wedding6 from '../assets/Wedding/06.jpg'
import wedding7 from '../assets/Wedding/07.jpg'
import wedding8 from '../assets/Wedding/08.jpg'
import wedding9 from '../assets/Wedding/09.jpg'
import wedding10 from '../assets/Wedding/10.jpg'
import wedding11 from '../assets/Wedding/11.jpg'
import wedding12 from '../assets/Wedding/12.jpg'
import wedding13 from '../assets/Wedding/13.jpg'
import wedding14 from '../assets/Wedding/14.jpg'
import wedding15 from '../assets/Wedding/15.jpg'
import wedding16 from '../assets/Wedding/16.jpg'
import wedding17 from '../assets/Wedding/17.jpg'
import wedding18 from '../assets/Wedding/18.jpg'
import wedding19 from '../assets/Wedding/19.jpg'
import wedding20 from '../assets/Wedding/20.jpg'
import wedding21 from '../assets/Wedding/21.jpg'
import wedding22 from '../assets/Wedding/22.jpg'
import wedding23 from '../assets/Wedding/23.jpg'
import wedding24 from '../assets/Wedding/24.jpg'
import wedding25 from '../assets/Wedding/25.jpg'
import wedding26 from '../assets/Wedding/26.jpg'
import wedding27 from '../assets/Wedding/27.jpg'
import wedding28 from '../assets/Wedding/28.jpg'
import wedding29 from '../assets/Wedding/29.jpg'
import wedding30 from '../assets/Wedding/30.jpg'
import wedding31 from '../assets/Wedding/31.jpg'
import wedding32 from '../assets/Wedding/32.jpg'
import wedding33 from '../assets/Wedding/33.jpg'
import wedding34 from '../assets/Wedding/34.jpg'
import wedding35 from '../assets/Wedding/35.jpg'


import puberty1 from '../assets/project5.png'
import puberty2 from '../assets/project6.png'


// import maternity1 from '../assets/Maternity1.jpg'
// import maternity2 from '../assets/Maternity2.jpg'
// import birthday1 from '../assets/Birthday1.jpg'
// import birthday2 from '../assets/Birthday2.jpg'

 import bridal1 from '../assets/Bridal/mo1.jpg'
 import bridal2 from '../assets/Bridal/mo2.jpg'
 import bridal3 from '../assets/Bridal/mo3.jpg'
 import bridal4 from '../assets/Bridal/mo4.jpg'
 import bridal5 from '../assets/Bridal/mo5.jpg'
 import bridal6 from '../assets/Bridal/mo6.jpg'
 import bridal7 from '../assets/Bridal/mo7.jpg'
 import bridal8 from '../assets/Bridal/mo8.jpg'
 import bridal9 from '../assets/Bridal/mo9.jpg'
 import bridal10 from '../assets/Bridal/mo10.jpg'
 import bridal11 from '../assets/Bridal/mo11.jpg'
 import bridal12 from '../assets/Bridal/mo12.jpg'
 import bridal13 from '../assets/Bridal/mo13.jpg'
 import bridal14 from '../assets/Bridal/mo14.jpg'
 import bridal15 from '../assets/Bridal/mo15.jpg'
 import bridal16 from '../assets/Bridal/mo16.jpg'
 import bridal17 from '../assets/Bridal/mo17.jpg'
 import bridal18 from '../assets/Bridal/mo18.jpg'

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
  'wedding-engagement': [wedding1, wedding2,wedding3,wedding4,wedding5,wedding6,wedding7,wedding8,wedding9,wedding10,wedding11,wedding12,wedding13,wedding14,wedding15,wedding16,wedding17,wedding18,wedding19,wedding20,wedding21,wedding22,wedding23,wedding24,wedding25,wedding26,wedding27,wedding28,wedding29,wedding30,wedding31,wedding32,wedding33,wedding34,wedding35 ],
   'puberty-ceremony': [puberty1, puberty2],
//   'maternity-shoot': [maternity1, maternity2],
//   'birthday-shoot': [birthday1, birthday2],
  'bridal-photography': [bridal1, bridal2,bridal3,bridal4,bridal5,bridal6,bridal7,bridal8,bridal9,bridal10,bridal11,bridal12,bridal13,bridal14,bridal15,bridal16,bridal17,bridal18],
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
