import React from "react";
import '../App.css'
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-dark">
      <div>
        <Navbar />
      </div>
     <div><Carousal/></div>
       <div className="m-3 text-white"><Card/></div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
