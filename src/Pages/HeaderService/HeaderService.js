import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from "framer-motion";

const HeaderService = ({ service }) => {
  const { tour_name, img, price, desc } = service;
  // console.log("service",service);
  console.log(service);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <motion.img
              whileHover={{ scale: 1.2, transition: { duration: 0.7 } }}
              src={img}
              alt="Shoes"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tour_name}</h2>
        <p>{desc.length > 100 ? desc.slice(0, 100) + "..." : desc}</p>
        <div className="flex justify-around my-3">
          <h1>FULL DAY</h1>
          <h1>${price}</h1>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/services/${service._id}`}>
            <button className="btn btn-outline">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
