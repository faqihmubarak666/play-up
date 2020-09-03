import React from "react";
import "../../App.css";
import HeroSection from "../../component/HeroSection";
import Cards from "../../component/Cards";
import Footer from "../../component/Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
