import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import HeaderService from "../HeaderService/HeaderService";
import { FaHandsHelping } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Banner = () => {
  const [homeService, setHomeService] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-self.vercel.app/servicesLimit")
      .then((res) => res.json())
      .then((data) => setHomeService(data));
  }, []);
  return (
    <div>
      <div className="Container relative mb-10">
        <div className="banner ">
          <div>
            <p className="banner-text text-center banner-tittle">
              WHERE TO GO NEXT
            </p>
            <p className="second-heading">
              Your Tour Guide Is
              <Typewriter
                words={[" Ready Here", " Brave", " Strong", " Genius"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={500}
                deleteSpeed={200}
                delaySpeed={1000}
              />
            </p>
          </div>
        </div>
      </div>
      {/* services */}
      <div
        // className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 my-10"
        className="grid grid-cols-1 lg:grid-cols-3 gap-20 max-w-sm lg:max-w-6xl mx-auto service-container mt-5"
        data-aos="fade"
        data-aos-offset="400"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        {homeService.map((service) => (
          <HeaderService key={service._id} service={service}></HeaderService>
        ))}
      </div>
      {/* see all button */}
      <div className="text-center mb-5">
        <Link to="/services">
          <button className="btn btn-outline" data-aos="fade-out">
            See All
          </button>
        </Link>
      </div>
      {/* discount offer */}
      <div className="hero min-h-screen bg-base-200">
        <div
          className="hero-content flex-col lg:flex-row"
          data-aos="slide-up"
          data-aos-offset="400"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <img src="https://i.ibb.co/wgWDg51/man.png" alt="man.jpg" />
          <div>
            <h1 className="text-4xl font-thin mb-5">Last Moment Offer</h1>
            <h1 className="text-5xl font-bold">ZURICH, SWITZERLAND</h1>
            <div className="mt-4 mb-0">
              <span className="mr-3 text-gray-400 line-through font-medium text-3xl">
                $2000
              </span>
              <span className="text-green-400  font-medium text-3xl">
                $1600
              </span>
              <span></span>
            </div>
            <p className="pb-6 pt-3 text-gray-500">
              Switzerland is a poet’s muse, and there is a little bit of magic
              in almost all its corners. That’s how the beauty of this place
              will inspire you to travel more; it is a bag full of the most
              delightful surprises. If Switzerland is on your mind and you are a
              first timer, here are the places you shouldn’t miss.
            </p>
            <motion.div
              drag
              dragConstraints={{ left: -100, right: 100, top: 10, bottom: 10 }}
            >
              <button className="btn btn-outline">Book Now</button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* facilities */}
      <h1
        className="text-center text-3xl font-sans mt-10"
        data-aos="slide-right"
        data-aos-offset="400"
        data-aos-duration="800"
        data-aos-easing="ease-in"
      >
        Why to Choose Me
      </h1>
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 my-10"
        data-aos="flip-up"
        data-aos-offset="0"
        data-aos-duration="3000"
        data-aos-easing="ease-in"
      >
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body h-64">
            <span className="text-6xl">
              <FaHandsHelping></FaHandsHelping>
            </span>
            <h2 className="card-title">HAND PICK TOURS</h2>
            <p>
              Cars and transportation is ready , just enroll fast . Don't be
              delay.
            </p>
            <div className="card-actions">
              <button className="btn btn-outline">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <span className="text-6xl">
              <RiGoogleFill RiGoogleFill></RiGoogleFill>
            </span>
            <h2 className="card-title">EXPERT LOCAL GUIDE</h2>
            <p>
              Don't worry your professional guide is eagerly waiting for
              you.Just knock me I will be with you.
            </p>
            <div className="card-actions mt-2">
              <button className="btn btn-outline">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <span className="text-6xl">
              <BsCurrencyDollar></BsCurrencyDollar>
            </span>
            <h2 className="card-title">BEST PRICE GUARANTEE</h2>
            <p>
              Price is really very low . You will get a good service in this
              tour.
            </p>
            <div className="card-actions">
              <button className="btn btn-outline">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
