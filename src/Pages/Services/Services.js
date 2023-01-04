import React from "react";
import { useLoaderData } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";
// import "./Services.css";

import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  // console.log(services);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 max-w-sm lg:max-w-6xl mx-auto service-container mt-5 mb-5">
        {services.map((service) => (
          <ServiceCard key={service._id} services={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
