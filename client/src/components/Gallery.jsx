// Gallery.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// Import images statically
import wedding1 from "../assets/Wedding/01.jpg";
import wedding2 from "../assets/Wedding/02.jpg";
import wedding3 from "../assets/Wedding/03.jpg";
import wedding4 from "../assets/Wedding/04.jpg";
import wedding5 from "../assets/Wedding/05.jpg";
import wedding6 from "../assets/Wedding/06.jpg";
import wedding7 from "../assets/Wedding/07.jpg";
import wedding8 from "../assets/Wedding/08.jpg";
import wedding9 from "../assets/Wedding/09.jpg";
import wedding10 from "../assets/Wedding/10.jpg";
import wedding11 from "../assets/Wedding/11.jpg";
import wedding12 from "../assets/Wedding/12.jpg";
import wedding13 from "../assets/Wedding/13.jpg";
import wedding14 from "../assets/Wedding/14.jpg";
import wedding15 from "../assets/Wedding/15.jpg";
import wedding16 from "../assets/Wedding/16.jpg";
import wedding17 from "../assets/Wedding/17.jpg";
import wedding18 from "../assets/Wedding/18.jpg";
import wedding19 from "../assets/Wedding/19.jpg";
import wedding20 from "../assets/Wedding/20.jpg";
import wedding21 from "../assets/Wedding/21.jpg";
import wedding22 from "../assets/Wedding/22.jpg";
import wedding23 from "../assets/Wedding/23.jpg";
import wedding24 from "../assets/Wedding/24.jpg";
import wedding25 from "../assets/Wedding/25.jpg";
import wedding26 from "../assets/Wedding/26.jpg";
import wedding27 from "../assets/Wedding/27.jpg";
import wedding28 from "../assets/Wedding/28.jpg";
import wedding29 from "../assets/Wedding/29.jpg";
import wedding30 from "../assets/Wedding/30.jpg";
import wedding31 from "../assets/Wedding/31.jpg";
import wedding32 from "../assets/Wedding/32.jpg";
import wedding33 from "../assets/Wedding/33.jpg";
import wedding34 from "../assets/Wedding/34.jpg";
import wedding35 from "../assets/Wedding/35.jpg";

import puberty1 from "../assets/Puberty/pu1.jpg";
import puberty2 from "../assets/Puberty/pu2.jpg";
import puberty3 from "../assets/Puberty/pu3.jpg";
import puberty4 from "../assets/Puberty/pu4.jpg";
import puberty5 from "../assets/Puberty/pu5.jpg";
import puberty6 from "../assets/Puberty/pu6.jpg";
import puberty7 from "../assets/Puberty/pu7.jpg";
import puberty8 from "../assets/Puberty/pu8.jpg";
import puberty9 from "../assets/Puberty/pu9.jpg";
import puberty10 from "../assets/Puberty/pu10.jpg";
import puberty11 from "../assets/Puberty/pu11.jpg";
import puberty12 from "../assets/Puberty/pu12.jpg";
import puberty13 from "../assets/Puberty/pu13.jpg";
import puberty14 from "../assets/Puberty/pu14.jpg";
import puberty15 from "../assets/Puberty/pu15.jpg";
import puberty16 from "../assets/Puberty/pu16.jpg";
import puberty17 from "../assets/Puberty/pu17.jpg";
import puberty18 from "../assets/Puberty/pu18.jpg";
import puberty19 from "../assets/Puberty/pu19.jpg";
import puberty20 from "../assets/Puberty/pu20.jpg";
import puberty21 from "../assets/Puberty/pu21.jpg";
import puberty22 from "../assets/Puberty/pu22.jpg";
import puberty23 from "../assets/Puberty/pu23.jpg";
import puberty24 from "../assets/Puberty/pu24.jpg";
import puberty25 from "../assets/Puberty/pu25.jpg";
import puberty26 from "../assets/Puberty/pu26.jpg";
import puberty27 from "../assets/Puberty/pu27.jpg";
import puberty28 from "../assets/Puberty/pu28.jpg";
import puberty29 from "../assets/Puberty/pu29.jpg";
import puberty30 from "../assets/Puberty/pu30.jpg";
import puberty31 from "../assets/Puberty/pu31.jpg";
import puberty32 from "../assets/Puberty/pu32.jpg";
import puberty33 from "../assets/Puberty/pu33.jpg";
import puberty34 from "../assets/Puberty/pu34.jpg";
import puberty35 from "../assets/Puberty/pu35.jpg";
import puberty36 from "../assets/Puberty/pu36.jpg";
import puberty37 from "../assets/Puberty/pu37.jpg";
import puberty38 from "../assets/Puberty/pu38.jpg";
import puberty39 from "../assets/Puberty/pu39.jpg";
import puberty40 from "../assets/Puberty/pu40.jpg";
import puberty41 from "../assets/Puberty/pu41.jpg";
import puberty42 from "../assets/Puberty/pu42.jpg";
import puberty43 from "../assets/Puberty/pu43.jpg";

import maternity1 from "../assets/Maternity/m1.jpg";
import maternity2 from "../assets/Maternity/m2.jpg";
import maternity3 from "../assets/Maternity/m3.jpg";
import maternity4 from "../assets/Maternity/m4.jpg";
import maternity5 from "../assets/Maternity/m5.jpg";
import maternity6 from "../assets/Maternity/m6.jpg";
import maternity7 from "../assets/Maternity/m7.jpg";
import maternity8 from "../assets/Maternity/m8.jpg";
import maternity9 from "../assets/Maternity/m9.jpg";
import maternity10 from "../assets/Maternity/m10.jpg";
import maternity11 from "../assets/Maternity/m11.jpg";
import maternity12 from "../assets/Maternity/m12.jpg";
import maternity13 from "../assets/Maternity/m13.jpg";
import maternity14 from "../assets/Maternity/m14.jpg";
import maternity15 from "../assets/Maternity/m15.jpg";
import maternity16 from "../assets/Maternity/m16.jpg";
import maternity17 from "../assets/Maternity/m17.jpg";
import maternity18 from "../assets/Maternity/m18.jpg";
import maternity19 from "../assets/Maternity/m19.jpg";
import maternity20 from "../assets/Maternity/m20.jpg";
import maternity21 from "../assets/Maternity/m21.jpg";
import maternity22 from "../assets/Maternity/m22.jpg";
import maternity23 from "../assets/Maternity/m23.jpg";
import maternity24 from "../assets/Maternity/m24.jpg";

import birthday1 from "../assets/Birthday/b1.jpg";
import birthday2 from "../assets/Birthday/b2.jpg";
import birthday3 from "../assets/Birthday/b3.jpg";
import birthday4 from "../assets/Birthday/b4.jpg";
import birthday5 from "../assets/Birthday/b5.jpg";
import birthday6 from "../assets/Birthday/b6.jpg";
import birthday7 from "../assets/Birthday/b7.jpg";
import birthday8 from "../assets/Birthday/b8.jpg";
import birthday9 from "../assets/Birthday/b9.jpg";
import birthday10 from "../assets/Birthday/b10.jpg";
import birthday11 from "../assets/Birthday/b11.jpg";
import birthday12 from "../assets/Birthday/b12.jpg";
import birthday13 from "../assets/Birthday/b13.jpg";
import birthday14 from "../assets/Birthday/b14.jpg";
import birthday15 from "../assets/Birthday/b15.jpg";
import birthday16 from "../assets/Birthday/b16.jpg";
import birthday17 from "../assets/Birthday/b17.jpg";
import birthday18 from "../assets/Birthday/b18.jpg";
import birthday19 from "../assets/Birthday/b19.jpg";
import birthday20 from "../assets/Birthday/b20.jpg";
import birthday21 from "../assets/Birthday/b21.jpg";
import birthday22 from "../assets/Birthday/b22.jpg";
import birthday23 from "../assets/Birthday/b23.jpg";
import birthday24 from "../assets/Birthday/b24.jpg";
import birthday25 from "../assets/Birthday/b25.jpg";
import birthday26 from "../assets/Birthday/b26.jpg";
import birthday27 from "../assets/Birthday/b27.jpg";
import birthday28 from "../assets/Birthday/b28.jpg";
import birthday29 from "../assets/Birthday/b29.jpg";
import birthday30 from "../assets/Birthday/b30.jpg";
import birthday31 from "../assets/Birthday/b31.jpg";
import birthday32 from "../assets/Birthday/b32.jpg";
import birthday33 from "../assets/Birthday/b33.jpg";
import birthday34 from "../assets/Birthday/b34.jpg";
import birthday35 from "../assets/Birthday/b35.jpg";
import birthday36 from "../assets/Birthday/b36.jpg";
import birthday37 from "../assets/Birthday/b37.jpg";
import birthday38 from "../assets/Birthday/b38.jpg";
import birthday39 from "../assets/Birthday/b39.jpg";
import birthday40 from "../assets/Birthday/b40.jpg";
import birthday41 from "../assets/Birthday/b41.jpg";
import birthday42 from "../assets/Birthday/b42.jpg";

import bridal1 from "../assets/Bridal/mo1.jpg";
import bridal2 from "../assets/Bridal/mo2.jpg";
import bridal3 from "../assets/Bridal/mo3.jpg";
import bridal4 from "../assets/Bridal/mo4.jpg";
import bridal5 from "../assets/Bridal/mo5.jpg";
import bridal6 from "../assets/Bridal/mo6.jpg";
import bridal7 from "../assets/Bridal/mo7.jpg";
import bridal8 from "../assets/Bridal/mo8.jpg";
import bridal9 from "../assets/Bridal/mo9.jpg";
import bridal10 from "../assets/Bridal/mo10.jpg";
import bridal11 from "../assets/Bridal/mo11.jpg";
import bridal12 from "../assets/Bridal/mo12.jpg";
import bridal13 from "../assets/Bridal/mo13.jpg";
import bridal14 from "../assets/Bridal/mo14.jpg";
import bridal15 from "../assets/Bridal/mo15.jpg";
import bridal16 from "../assets/Bridal/mo16.jpg";
import bridal17 from "../assets/Bridal/mo17.jpg";
import bridal18 from "../assets/Bridal/mo18.jpg";

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
  "wedding-engagement": [
    wedding1,
    wedding2,
    wedding3,
    wedding4,
    wedding5,
    wedding6,
    wedding7,
    wedding8,
    wedding9,
    wedding10,
    wedding11,
    wedding12,
    wedding13,
    wedding14,
    wedding15,
    wedding16,
    wedding17,
    wedding18,
    wedding19,
    wedding20,
    wedding21,
    wedding22,
    wedding23,
    wedding24,
    wedding25,
    wedding26,
    wedding27,
    wedding28,
    wedding29,
    wedding30,
    wedding31,
    wedding32,
    wedding33,
    wedding34,
    wedding35,
  ],
  "puberty-ceremony": [
    puberty1,
    puberty2,
    puberty3,
    puberty4,
    puberty5,
    puberty6,
    puberty7,
    puberty8,
    puberty9,
    puberty10,
    puberty11,
    puberty12,
    puberty13,
    puberty14,
    puberty15,
    puberty16,
    puberty17,
    puberty18,
    puberty19,
    puberty20,
    puberty21,
    puberty22,
    puberty23,
    puberty24,
    puberty25,
    puberty26,
    puberty27,
    puberty28,
    puberty29,
    puberty30,
    puberty31,
    puberty32,
    puberty33,
    puberty34,
    puberty35,
    puberty36,
    puberty37,
    puberty38,
    puberty39,
    puberty40,
    puberty41,
    puberty42,
    puberty43,
  ],
  "maternity-shoot": [
    maternity1,
    maternity2,
    maternity3,
    maternity4,
    maternity5,
    maternity6,
    maternity7,
    maternity8,
    maternity9,
    maternity10,
    maternity11,
    maternity12,
    maternity13,
    maternity14,
    maternity15,
    maternity16,
    maternity17,
    maternity18,
    maternity19,
    maternity20,
    maternity21,
    maternity22,
    maternity23,
    maternity24,
  ],
  "birthday-shoot": [
    birthday1,
    birthday2,
    birthday3,
    birthday4,
    birthday5,
    birthday6,
    birthday7,
    birthday8,
    birthday9,
    birthday10,
    birthday11,
    birthday12,
    birthday13,
    birthday14,
    birthday15,
    birthday16,
    birthday17,
    birthday18,
    birthday19,
    birthday20,
    birthday21,
    birthday22,
    birthday23,
    birthday24,
    birthday25,
    birthday26,
    birthday27,
    birthday28,
    birthday29,
    birthday30,
    birthday31,
    birthday32,
    birthday33,
    birthday34,
    birthday35,
    birthday36,
    birthday37,
    birthday38,
    birthday39,
    birthday40,
    birthday41,
    birthday42,
  ],
  "bridal-photography": [
    bridal1,
    bridal2,
    bridal3,
    bridal4,
    bridal5,
    bridal6,
    bridal7,
    bridal8,
    bridal9,
    bridal10,
    bridal11,
    bridal12,
    bridal13,
    bridal14,
    bridal15,
    bridal16,
    bridal17,
    bridal18,
  ],
  //   'product-photography': [product1, product2],
  //   'temple-photography': [temple1, temple2],
  //   'album-design': [album1, album2],
  //   'video-edits': [video1, video2],
};

const Gallery = () => {
  const { slug } = useParams();
  const images = galleryImages[slug] || [];

  return (
    <div className="min-h-screen bg-[#190b1f] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold capitalize">
            {slug.replace(/-/g, " ")}
          </h1>
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
  );
};

export default Gallery;
