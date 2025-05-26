import React from "react";
// import { useState } from "react";
import "./home.css";
import Navbar2 from "../../Components/Navbar/Navbar2";
import Hero2 from "../../Components/Home/Hero/Hero2";
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
    // <div className="bg-gradient-to-r from-pink-600 via-purple-300 to-blue-600 text-black relative h-full">
    <div className=" text-black relative h-full">
      <Navbar2 />
      <Hero2 />
      <About />
      <Servies />
      <WhyUs />
      <OurVision />
      <Articles />
      <MeetTeam />
    </div>
  );
};
export default Home;
