import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MyContext } from "../../Contexts/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useTitle } from "../../Hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
const ServiceDetails = () => {
  const { data: reviewsData = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        "https://service-review-server-self.vercel.app/reviews"
      );
      const data = await res.json();
      return data;
    },
  });
  useTitle("Service Details");
  const { user } = useContext(MyContext);
  console.log(user);

  const details = useLoaderData();
  console.log(details);

  const { tour_name, _id, desc, review } = details[0];
  console.log(tour_name, _id);

  const [reviews, setReviews] = useState({});
  const reviewDetails = {
    review_title: reviews,
    service_name: tour_name,
    service_id: _id,
    user_email: user?.email,
    reviewer: user?.displayName,
  };
  const handleBlur = (event) => {
    const review_field = event.target.name;
    const review_text = event.target.value;
    console.log(review_field, review_text);
    const newReviews = { ...reviews };
    newReviews[review_field] = review_text;
    setReviews(newReviews);
  };
  const handleReviewBtn = (event) => {
    event.preventDefault();
    // console.log(reviews);

    fetch("https://service-review-server-self.vercel.app/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch();
          event.target.reset();
          toast.success("Review Added Successfully");
          console.log(data);
        }
        console.log(data);
      });
  };
  console.log("Reviews-Data", reviewsData);

  return (
    <div>
      {/* Package details section */}
      <section className="mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center my-8 text-4xl font-bold">Tour Package </h2>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{tour_name}</h2>
              <p>{desc}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Review section */}
      <section className="mt-32">
        {" "}
        <h2 className="text-center my-8 text-4xl font-bold ">
          Travelers Reviews{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto gap-10">
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
        {/* Users review */}
        <div>
          <h2 className="mt-20 mb-5 text-center text-4xl font-bold">
            Users reviews
          </h2>
          <div className="flex justify-center items-center flex-col gap-5">
            {reviewsData.map((rev) => (
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="flex items-center justify-evenly ">
                  <p className="ml-5">{rev.review_title.review}</p>
                  <button className="font-bold card-body">
                    -- {rev.reviewer}
                  </button>
                  {/* <div className="card-actions justify-end"> */}
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* add review */}
        {user?.email ? (
          <form
            onSubmit={handleReviewBtn}
            className="flex justify-center items-center my-20"
          >
            <textarea
              onBlur={handleBlur}
              name="review"
              className="textarea textarea-bordered mx-4"
              placeholder="Enter your review"
            ></textarea>
            <button className="btn btn-outline">Add Review</button>
            {/* <Toaster /> */}
          </form>
        ) : (
          <div className="flex justify-center my-5 text-3xl font-semibold">
            <Link to="/login">Please login to add a review</Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default ServiceDetails;
