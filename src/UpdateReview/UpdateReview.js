import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const navigate = useNavigate();
  const reviewData = useLoaderData();
  const [review, setReview] = useState({ reviewData });
  console.log(reviewData);
  const handleUpdateReview = (event) => {
    event.preventDefault();
    // console.log(review);
    fetch(
      `https://service-review-server-self.vercel.app/reviews/${reviewData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("User updated successfully.");
          console.log(data);
          navigate("/reviews");
        }
      });
  };

  const handleonChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  return (
    <div>
      <h2 className="text-center my-5 text-3xl">Please update</h2>
      <div className="flex justify-center mb-24">
        <form onSubmit={handleUpdateReview}>
          <div className="flex">
            <input
              type="text"
              onChange={handleonChange}
              defaultValue={reviewData.review_title.review}
              name="review"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn ml-2">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
