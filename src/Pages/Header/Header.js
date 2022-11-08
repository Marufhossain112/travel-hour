import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>
      {/* banner */}
      <div className="Container relative">
        <div className="banner ">
          <div>
            <p className="banner-text text-center">WHERE TO GO NEXT</p>
            <p className="second-heading">Your Tour Guide Is Ready Here</p>
          </div>
        </div>
      </div>
      {/* services */}
    </div>
  );
};

export default Header;
