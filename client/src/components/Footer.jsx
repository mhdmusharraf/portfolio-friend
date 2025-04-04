import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">K. Krishnaraja</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a
            href="https://www.facebook.com/share/18qXnAgtmn/?mibextid=wwXIfr"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/im_karthikkrishna?igsh=MWhzMml3YmFiMWUyNw%3D%3D&utm_source=qr"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="text-gray-400">
        @{new Date().getFullYear()} K. Krishnaraja
      </p>
    </div>
  );
};

export default Footer;
