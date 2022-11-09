import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const HeaderService = ({ service }) => {
  const { tour_name, img, price, desc } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="Shoes" />
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
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderService;
