import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-3 gap-20 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} services={service}></ServiceCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;