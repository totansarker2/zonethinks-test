import React from "react";
// import { useState } from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Home/Hero/Hero";
import About from "../../Pages/About/About";
import Servies from "../../Pages/Services/Services";
import WhyUs from "../WhyUs/WhyUs";
import OurVision from "../OurVision/OurVision";
import Articles from "../Articles/Articles";
import MeetTeam from "../MeetTeam/MeetTeam";
// import Footer from "../../Components/Footer/Footer";
// import { useEffect } from "react";

const Home = () => {
  // const [pagesOpen, setPagesOpen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-purple-600 via-pink-200 to-orange-100 text-black relative border-4 h-full">
      <Navbar />
      <Hero />
      <About />
      <Servies />
      <WhyUs />
      <OurVision />
      <Articles/>
      <MeetTeam />
    </div>
  );
};
export default Home;
