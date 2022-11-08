import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
  const { tour_name, img, price, desc } = services;
  const handleDetails = (id) => {
    console.log(`I am clicked, ${services._id}`);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tour_name}</h2>
        <p>{desc.length > 100 ? desc.slice(0, 100) + "..." : desc}</p>
        <div className="flex justify-around my-3">
          <h1>FULL DAY</h1>
          <h1>${price}</h1>
        </div>
        <div className="card-actions justify-center">
          {/* <button>View Details</button> */}
          <Link to={`/services/${services._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
