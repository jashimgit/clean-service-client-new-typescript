import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleService from "./SingleService";

type priceTypes = {
  _id: string;
  serviceName: string;
  price: number;
  handlePurchase: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const PricePlans = () => {
  const [serviceList, setServiceList] = useState([]);
  const navigate = useNavigate();

  const handlePurchase = (id: any) => {
    console.log(id);
    navigate(`/order-service/${id}`);
  };

  useEffect(() => {
    async function fetchService() {
      const res = await fetch("https://clean-server.herokuapp.com/service");
      const json = await res.json();
      setServiceList(json.data);
    }

    fetchService();
  }, []);

  return (
    <div className="container">
      <div className="row my-3">
        <div className=" col-12  header  text-center ">
          <h5 className="text-secondary text-italic">
            Full-service House cleaning
          </h5>
          <h1>Prices & Plans</h1>
        </div>
      </div>
      <div className="row">
        {Object.keys(serviceList).length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          serviceList.map((service: priceTypes) => (
            <SingleService
              service={service}
              key={service._id}
              _id=""
              handlePurchase={handlePurchase}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PricePlans;
