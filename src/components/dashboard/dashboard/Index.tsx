const Index = () => {
  return (
    <div>
      <h4>Dashboard</h4>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-danger text-white">
              <div className="card-body d-flex justify-content-around align-items-center">
                <div>
                  <strong>10</strong>
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
                  <strong>4</strong>
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
