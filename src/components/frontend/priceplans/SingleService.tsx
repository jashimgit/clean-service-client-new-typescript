import React from "react";
import { IService } from "../../../interfaces/interfaces";

type IProps = {
  service: IService;
  key: string;
  handlePurchase: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const SingleService = ({ service, handlePurchase }: IProps) => {
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
            onClick={() => handlePurchase()}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
