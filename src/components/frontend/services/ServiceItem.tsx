import React from "react";

interface Service {
  imageUrl: string;
  serviceName: string;
  details: string;
}

const ServiceItem: React.FC<Service> = ({ imageUrl, serviceName, details }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card mb-3 h-100">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{serviceName}</h5>
          <p className="card-text">{details}</p>
          <div className="text-center">
            {/* <button className="btn btn-info">View Details</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
