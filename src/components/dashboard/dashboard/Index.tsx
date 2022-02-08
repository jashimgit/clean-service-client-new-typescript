import { useEffect, useState } from "react";

const Index = () => {
  const [service, setService] = useState([]);

  // get service data from api
  useEffect(() => {
    fetch("https://clean-server.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data.data));
  }, []);

  return (
    <div>
      <h4>Dashboard</h4>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-danger text-white">
              <div className="card-body d-flex justify-content-around align-items-center">
                <div>
                  <strong>{service.length}</strong>
                </div>
                <div>
                  Services <br /> available
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-danger text-white">
              <div className="card-body d-flex justify-content-around align-items-center">
                <div>
                  <strong> 4 demo Orders</strong>
                </div>
                <div>
                  Pending <br /> Orders
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
