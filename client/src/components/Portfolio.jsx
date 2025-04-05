import React from 'react'
import { Link } from 'react-router-dom'
import project1 from "../assets/Wedding.jpg"
import project2 from "../assets/Puberty.jpg"
import project3 from "../assets/Maternity.jpg"
import project4 from "../assets/Birthday.jpg"
import project5 from "../assets/Bridal.jpg"
import project6 from "../assets/Product.jpg"
import project7 from "../assets/Temple.jpg"
import project8 from "../assets/Album.jpeg"
import project9 from "../assets/VideoEdits.jpg"
import Reveal from './Reveal'

const projects = [
  {
    img: project1,
    title: "Wedding & Engagement",
    slug: "wedding-engagement",
    description: "Capturing timeless moments of love, joy, and celebration on your special day.",
  },
  {
    img: project2,
    title: "Puberty Ceremony",
    slug: "puberty-ceremony",
    description: "Beautifully framed transitions celebrating cultural milestones and traditions.",
  },
  {
    img: project3,
    title: "Maternity Shoot",
    slug: "maternity-shoot",
    description: "Cherishing the glow of motherhood with soft and elegant maternity portraits.",
  },
  {
    img: project4,
    title: "Birthday Shoot",
    slug: "birthday-shoot",
    description: "Colorful and candid memories to celebrate joyful birthdays at any age.",
  },
  {
    img: project5,
    title: "Bridal Photography",
    slug: "bridal-photography",
    description: "Elegant bridal portraits capturing grace, beauty, and emotion.",
  },
  {
    img: project6,
    title: "Product Photography",
    slug: "product-photography",
    description: "High-quality product shots tailored for advertising and branding.",
  },
  {
    img: project7,
    title: "Temple Photography",
    slug: "temple-photography",
    description: "Capturing sacred moments and spiritual ambiance in temple surroundings.",
  },
  {
    img: project8,
    title: "Album Design",
    slug: "album-design",
    description: "Customized storytelling through beautifully crafted photo albums.",
  },
  {
    img: project9,
    title: "Video Edits",
    slug: "video-edits",
    description: "Creative video edits that bring emotions and stories to life.",
  },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div>
                <Link
                  to={`/gallery/${project.slug}`}
                  className='px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300'
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default Portfolio