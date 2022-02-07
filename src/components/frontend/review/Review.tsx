import { useEffect, useState } from "react";
import { IReview } from "../../../interfaces/interfaces";
import SingleReview from "./SingleReview";

const Review = () => {
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
    <div className="container">
      <div className="row">
        <div className="col-12 header my-3 text-center">
          <h5 className="text-secondary">We are Happy</h5>
          <h1>What People Says</h1>
        </div>
      </div>
      <div className="row">
        {reviews.map((review) => (
          <SingleReview review={review} key={review._id} />
        ))}
      </div>
    </div>
  );
};

export default Review;
