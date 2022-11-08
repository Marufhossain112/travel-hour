import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { tour_name, img, desc, review } = details;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
