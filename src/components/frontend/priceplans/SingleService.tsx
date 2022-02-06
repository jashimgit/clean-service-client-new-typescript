import React from "react";

type priceTypes = {
  _id: any;
  service: {
    serviceName: string;
    price: number;
    _id: any;
  };
  handlePurchase: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const SingleService = ({ service, handlePurchase }: priceTypes) => {
  // serviceItem = service.serviceItem;

  const { serviceName, price, _id } = service;

  return (
    <div className="col-md-4">
      <div className="card mb-3 ">
        <div className="card-body bg-info text-white text-center">
          <h3> {serviceName} </h3>
          <h3>$ {price}</h3>
          <h3>per month</h3>
        </div>
        <div className="my-5 text-center ">
          <button
            className="btn btn-success text-center"
            onClick={() => handlePurchase(service._id)}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
