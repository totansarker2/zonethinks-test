// import react from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logos/logo-main.jpg";
import { useState } from "react";
// import { useEffect } from "react";

const Navbar = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  return (
    <header className="flex justify-between items-center px-10 py-6">
      {/* Logo */}
      <div className="flex items-center space-x-2 ">
        <img src={logo} alt="Techoes Logo" className="w-20 h-20" />
        <span className="text-2xl font-bold">ZoneThinks</span>
      </div>

      {/* Navigation */}
      <nav className="absolute left-1/2 -translate-x-[50%] flex items-center space-x-8 font-semibold z-10">
        <a href="#" className="text-black font-bold">
          Home
        </a>
        <a href="#">About Us</a>
        <a href="#">Services</a>

        {/* Pages Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setPagesOpen(true)}
          onMouseLeave={() => setPagesOpen(false)}
        >
          <button className="hover:text-black flex items-center gap-1">
            Pages <span>▾</span>
          </button>

          {pagesOpen && (
            <div className="absolute top-full pt-4">
              <div className=" mt-0 w-48 bg-white shadow-lg rounded-md py-2">
                {[
                  "Blog",
                  "Single Post",
                  "Career",
                  "Career Detail",
                  "FAQs Page",
                  "Pricing Page",
                  "404 Page",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <a href="#">Contact</a>
      </nav>
      <button className="text-xl">🔍</button>
    </header>
  );
};

export default Navbar;
