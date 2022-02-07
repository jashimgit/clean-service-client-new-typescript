const AddReviewForm = () => {
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
    </>
  );
};

export default AddReviewForm;
