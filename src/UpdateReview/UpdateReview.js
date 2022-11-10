import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const reviewData = useLoaderData();
  const [review, setReview] = useState({});
  console.log(reviewData);
  const handleUpdateReview = (event) => {
    event.preventDefault();
    // console.log(review);
    fetch(`http://localhost:5000/reviews/${reviewData._id}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(review)
  })
  .then(res => res.json())
  .then(data => {
      if (data.modifiedCount > 0){
          alert('user updated')
          console.log(data);
      }

  })
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
