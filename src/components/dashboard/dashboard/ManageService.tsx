import { useState, useEffect } from "react";

import { IService } from "../../../interfaces/interfaces";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import {
  setService,
  getAllService,
} from "../../../redux/features/service/serviceSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const ManageService = () => {
  const dispatch = useAppDispatch();

  // get service from the redux state
  const serviceList = useAppSelector(getAllService);

  // fetch service from api
  const fetchService = async () => {
    await fetch(import.meta.env.VITE_API_BASE_URL + "/service")
      .then((res) => res.json())
      .then((data) => dispatch(setService(data.data)));
  };

  useEffect(() => {
    fetchService();
    console.log("manage service list mounted");
  }, []);

  const serviceRow =
    serviceList &&
    serviceList.map((service) => {
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
              // onClick={(event) => handleDeleteService(_id, event)}
            >
              <FaTrash />
            </button>
          </td>
        </tr>
      );
    });

  return (
    <>
      <h4 className="my-2">
        Service List - {serviceList.length} Items available
      </h4>
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
            <tbody>{serviceRow}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageService;
