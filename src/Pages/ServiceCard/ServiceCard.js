import React from "react";

const ServiceCard = ({ services }) => {
  const { tour_name, img, price, review } = services;
  console.log(img);

  return (
    <div>
      <img src={img} alt="" />
      <h2>{tour_name}</h2>
    </div>
  );
};

export default ServiceCard;
