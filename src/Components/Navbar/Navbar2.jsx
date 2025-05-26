import React from "react";
import { HiMail, HiLocationMarker, HiSearch } from "react-icons/hi";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import logo from "../../assets/logos/logo.jpg";
const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#5319DD] text-white text-sm flex items-center justify-between px-6 py-2">
        <div className="flex items-center space-x-4">
          <HiMail className="inline-block" />
          <span>zonethink@gmail.com</span>
          <HiLocationMarker className="inline-block" />
          <span>Narsingdi Sadar, Dhaka, Bangladesh</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-200">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaPinterestP />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaInstagram />
          </a>
          <div className="h-5 border-l border-white mx-2" />
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-200">
            <RiGlobalLine />
            <span>English</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Ziptech Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-gray-800 px-2">
              ZoneThink
            </span>
          </div>

          {/* Links */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            {[
              "Home",
              "Pages",
              "Services",
              "Projects Page",
              "News",
              "Contact Us",
            ].map((label, idx) => (
              <li
                key={idx}
                className="flex items-center hover:text-purple-600 cursor-pointer"
              >
                <span>{label}</span>
                {label !== "Contact Us" && (
                  <span className="ml-1 text-xs">+</span>
                )}
              </li>
            ))}
          </ul>

          {/* Search & Button */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-600">
              <HiSearch size={20} />
            </button>
            {/* <a
              href="#contact"
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition"
            > */}
            <a
              href="#contact"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
