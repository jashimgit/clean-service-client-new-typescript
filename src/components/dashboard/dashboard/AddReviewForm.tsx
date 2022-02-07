import { useState, useEffect } from "react";
import { IReview } from "../../../interfaces/interfaces";
import SingleReview from "../../frontend/review/SingleReview";

const AddReviewForm = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    async function fetchReview() {
      const response = await fetch("https://clean-server.herokuapp.com/review");
      const data = await response.json();
      setReviews(data.data);
    }
    fetchReview();
  }, []);

  return (
    <>
      <h4>Add Review</h4>
      <div className="col-md-7">
        <form>
          <div className="form-group">
            <label>Write a Review</label>

            <textarea
              className="form-control"
              placeholder="Enter your review"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Review
          </button>
        </form>
      </div>
      <div>
        <h4 className="my-3">All Reviews</h4>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>

                <th>Email</th>
                <th>Review</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr>
                  <td>{review._id}</td>
                  <td>{review.userEmail}</td>
                  <td>{review.reviewMsg}</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddReviewForm;
