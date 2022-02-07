import { useState, useEffect } from "react";

import { IService } from "../../../interfaces/interfaces";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ManageService = () => {
  const [serviceList, setServiceList] = useState<IService[]>([]);

  useEffect(() => {
    const url = "https://clean-server.herokuapp.com/service";
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setServiceList(data.data);
      // console.log(json)
    }
    fetchData();
  }, []);
  // handling delete books item

  const handleDeleteService = (id: string, event: Event) => {
    fetch(`https://clean-server.herokuapp.com/service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.parentElement.parentElement.style.display = "none";
        // alert('service deleted successfully');
      });
  };

  const serviceRow = serviceList.map((service) => {
    const { _id, serviceName, price, imageUrl } = service;
    return (
      <tr key={_id}>
        <td>{serviceName}</td>
        <td>{price}</td>
        <td>
          <img
            src={imageUrl}
            alt=""
            style={{ width: "80px", height: "50px" }}
          />
        </td>
        <td>
          <button className="btn btn-info btn-sm mr-2" type="button">
            <FaPencilAlt />
          </button>
          <button
            className="btn btn-danger btn-sm "
            type="button"
            onClick={(event) => handleDeleteService(_id, event)}
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h4>Manage Services</h4>
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Service Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody> {serviceRow} </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageService;
