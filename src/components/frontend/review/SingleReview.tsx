type IReview = {
  review: {
    reviewMsg: string;
    userEmail: string;
  };
  key: string;
};

const SingleReview = ({ review }: IReview) => {
  const { reviewMsg, userEmail } = review;
  return (
    <div className="col-md-4">
      <div className="card mb-3 ">
        <div className="card-body">
          <p className="lead">{reviewMsg}</p>
          <h5>Reviewed By: </h5>
          <small>{userEmail}</small>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
