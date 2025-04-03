import React from "react";
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobelightroom, SiAdobeaftereffects, SiCanva, SiDavinciresolve } from "react-icons/si";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Photography & Editing",
    technologies: [
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop className='text-blue-500' /> },
      { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro className='text-purple-500' /> },
      { name: "DaVinci Resolve", icon: <SiDavinciresolve className='text-gray-500' /> },
      { name: "Lightroom", icon: <SiAdobelightroom className='text-blue-400' /> },
      { name: "Adobe After Effects", icon: <SiAdobeaftereffects className='text-indigo-600' /> },
      { name: "Canva", icon: <SiCanva className='text-green-500' /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I specialize in photography and professional editing. These are the technologies I've worked with
        </p>
        <div className="flex flex-col justify-center space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
