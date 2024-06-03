import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FOOTER_CONTACT_INFO, FOOTER_OPENING_HOURS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-container padding-container mx-auto text-center">
        <div className="mb-6">
          <h2 className="bold-20 text-pink-500">{FOOTER_CONTACT_INFO.title}</h2>
          {FOOTER_CONTACT_INFO.details.map((info, index) => (
            <p key={index}>
              {info.label}: {info.value}
            </p>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="bold-20 text-pink-500">{FOOTER_OPENING_HOURS.title}</h2>
          {FOOTER_OPENING_HOURS.hours.map((hour, index) => (
            <p key={index}>
              {hour.day}: {hour.time}
            </p>
          ))}
        </div>
        <div>
          <h2 className="bold-20 text-pink-500">Följ oss</h2>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagramSquare className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




