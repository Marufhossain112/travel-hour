import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AddServiceCard = ({ services }) => {
    console.log(services);
  const { tour_name, img, price, desc } = services;
  const handleAddService = (services) => {
    // console.log(`I am adding service ${services}`);
    console.log(services);

    fetch("http://localhost:5000/servicesLimit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Service Added Successfully");
          console.log(data);
        }
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              style={{ height: "256px", width: "385px" }}
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
          {/* <button>View Details</button> */}
          <button
            onClick={() => handleAddService(services)}
            className="btn btn-primary"
          >
            Add Service
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default AddServiceCard;
