import React from "react";
import { useLoaderData } from "react-router-dom";
import AddServiceCard from "../AddServiceCard/AddServiceCard";

const AddService = () => {
  const services = useLoaderData();
  // console.log(services);

  return (
    <div>
      <div className="grid grid-cols-3 gap-20 max-w-6xl mx-auto">
        {services.map((service) => (
          <AddServiceCard key={service._id} services={service}></AddServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AddService;
