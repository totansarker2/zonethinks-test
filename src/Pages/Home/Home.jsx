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
// import background from "../../assets/images/home-background.jpg"
// import Footer from "../../Components/Footer/Footer";
// import { useEffect } from "react";

const Home = () => {
  // const [pagesOpen, setPagesOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-pink-600 via-purple-300 to-blue-600 text-black relative h-full">
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
