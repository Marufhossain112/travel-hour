import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { tour_name, img, desc, review } = details[0];
  console.log(review);

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center my-8 text-4xl font-bold underline">
          Tour Package{" "}
        </h2>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{tour_name}</h2>
            <p>{desc}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center my-8 text-4xl font-bold underline">
        Travelers Reviews{" "}
      </h2>
      <div className="grid grid-cols-3 max-w-6xl mx-auto gap-10">
        {review.map((rev) => (
          <div className="max-w-6xl mx-auto">
            <div className="card w-96 h-72 bg-base-100 shadow-xl">
              <div className="card-body mx-auto">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                    <img src={rev.img} alt="user" />
                  </div>
                </div>
                <div className="mt-5">
                  {" "}
                  <h2 className="card-title">{rev.name}</h2>
                  <p className="mx-auto">{rev.review_text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
