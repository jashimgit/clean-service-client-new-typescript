import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllReviews, setReviews } from "../../../redux/features/reviewSlice";
import { useAppSelector } from "../../../redux/hooks";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { IReview } from "../../../interfaces/interfaces";
import ReviewService from "../../../services/ReviewService";

interface IPropsType {
  handleEditReview: (item: IReview) => void;
}

export default function ReviewsList<IPropsType>(props: IPropsType) {
  // const { handleEditReview } = props;

  const dispatch = useDispatch();
  // get reviews from state
  const reviews = useAppSelector(getAllReviews);

  // fetch reviews from api
  const fetchReviews = async () => {
    // await fetch(import.meta.env.VITE_API_BASE_URL + "/review")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(setReviews(data.data)));
    await ReviewService.getReviews().then((response) =>
      dispatch(setReviews(response))
    );
  };

  useEffect(() => {
    fetchReviews();
    console.log("review list mounted");
  }, []);

  return (
    <>
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
              <tr key={index}>
                <td>{review._id}</td>
                <td>{review.userEmail}</td>
                <td>{review.reviewMsg}</td>
                <td>
                  <button
                    title="Edit Review"
                    className="btn btn-info btn-sm mr-2"
                    type="button"
                  >
                    <FaPencilAlt />
                  </button>
                  <button
                    title="Delete Review"
                    className="btn btn-danger btn-sm "
                    type="button"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
