import { useState, useEffect } from "react";
import { IReview } from "../../../interfaces/interfaces";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import ReviewsList from "./ReviewsList";
const AddReviewForm = () => {
  // const [reviews, setReviews] = useState<IReview[]>([]);

  // useEffect(() => {
  //   async function fetchReview() {
  //     const response = await fetch("https://clean-server.herokuapp.com/review");
  //     const data = await response.json();
  //     setReviews(data.data);
  //   }
  //   fetchReview();
  // }, []);

  const handleEditReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

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
        <ReviewsList handleEditReview={handleEditReview} />
      </div>
    </>
  );
};

export default AddReviewForm;
