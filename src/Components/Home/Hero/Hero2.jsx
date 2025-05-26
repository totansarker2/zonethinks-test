import React from "react";
import heroBg from "../../../assets/images/home-background.jpg"; // replace with your actual path

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src={heroBg}
        class="w-full h-full object-cover relative -z-10 opacity-100"
      />
      <div class="absolute inset-0 bg-black opacity-50 -z-10"></div>

      {/* <div className="absolute w-230 h-230 bg-blue-600 -top-80 -left-20 rounded-full -z-10 opacity-60"></div> */}
      {/* Content */}
      <div className="absolute inset-0 z-10 max-w-[80%] mx-auto px-6 py-32 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          ZooeThink Provides
          <br />
          Best IT Solution
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-8">
          We provide best technology and IT services around the world with more
          than 30+ years of experience
        </p>
        <div className="flex flex-wrap gap-4">
          {/* <a
            href="#contact"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md transition"
          > */}
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-md transition"
          >
            Contact Us →
          </a>
          <a
            href="#read-more"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-md transition"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
