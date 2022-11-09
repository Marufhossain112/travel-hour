import { useLoaderData } from "react-router-dom";

const Reviews = () => {
  const reviews = useLoaderData();
  //   console.log(reviews);

  return (
    <div>
      {reviews.length < 1 ? (
        <div className="flex justify-center items-center text-4xl h-[530px]">
          <p>No Reviews Were Found</p>
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
                {reviews.map((rvw) => (
                  <tr>
                    <td>{rvw.service_name}</td>
                    <td>{rvw.user_email}</td>
                    <td>{rvw.review_title.review}</td>
                    <td>
                      <button className="btn btn-outline">Update</button>
                    </td>
                    <td>
                      <button className="btn btn-circle btn-outline">
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
