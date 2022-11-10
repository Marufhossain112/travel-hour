import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useTitle } from "../../Hooks/useTitle";

const Reviews = () => {
  useTitle("Reviews");
  const reviews = useLoaderData();
  const [displayReviews, setDisplayReviews] = useState(reviews);
  console.log(reviews);
  const handleDelete = (rev) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${rev.service_name}`
    );
    if (agree) {
      fetch(
        `https://service-review-server-self.vercel.app/reviews/${rev._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Successfully deleted");
            const remainingReviews = displayReviews.filter(
              (review) => review._id !== rev._id
            );
            setDisplayReviews(remainingReviews);
          }
        });
    }
  };

  return (
    <div>
      {reviews.length < 1 ? (
        <div className="flex justify-center items-center text-4xl h-[530px]">
          <p>No Reviews Were Added</p>
        </div>
      ) : (
        <>
          <h2 className="text-center text-3xl font-semibold my-5">
            My Reviews
          </h2>
          <div className="overflow-x-auto max-w-6xl mx-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>User</th>
                  <th>Review</th>
                  <th>Modify</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {displayReviews.map((rvw) => (
                  <tr>
                    <td>{rvw.service_name}</td>
                    <td>{rvw.user_email}</td>
                    <td>{rvw.review_title.review}</td>
                    <td>
                      <Link to={`/update/${rvw._id}`}>
                        <button className="btn btn-outline">Edit Review</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(rvw)}
                        className="btn btn-circle btn-outline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <Toaster />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Reviews;
