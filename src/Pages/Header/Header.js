import React, { useEffect, useState } from "react";
import HeaderService from "../HeaderService/HeaderService";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const [homeService, setHomeService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/servicesLimit")
      .then((res) => res.json())
      .then((data) => setHomeService(data));
  }, []);
  console.log(homeService);

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
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-20 my-10">
        {homeService.map((service) => (
          <HeaderService key={service._id} service={service}></HeaderService>
        ))}
      </div>
    </div>
  );
};

export default Header;
