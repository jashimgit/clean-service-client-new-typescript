import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

import { IserviceTypes } from "../../interfaces/interfaces";

const Services = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    async function fetchService() {
      const res = await fetch("https://clean-server.herokuapp.com/service");
      const service = await res.json();
      setServiceList(service.data);
    }
    fetchService();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className=" col-12  header my-4 text-center ">
          <h5 className="text-secondary">We make life easier</h5>
          <h1>What We Offer</h1>
        </div>
        <div className="row">
          {Object.keys(serviceList).length === 0 ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            serviceList.map((item: IserviceTypes) => (
              <ServiceItem service={item} key={item.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
