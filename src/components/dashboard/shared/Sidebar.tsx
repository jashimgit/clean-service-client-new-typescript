import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUsers } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { VscGear } from "react-icons/vsc";

export default function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/dashboard">
              <span className="mr-2">
                <FiHome />
              </span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/orders">
              <span className="mr-2">
                <AiOutlineFile />
              </span>
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/add-service">
              <span className="mr-2">
                <BiCart />
              </span>
              Add New Service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/add-admin">
              <span className="mr-2">
                <FiUsers />
              </span>
              Create New Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/reviews">
              <span className="mr-2">
                <ImStack />
              </span>
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/services">
              <span className="mr-2">
                <VscGear />
              </span>
              Service
            </Link>
          </li>
        </ul>

        {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a
            className="d-flex align-items-center text-muted"
            href="#"
            aria-label="Add a new report"
          >
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Last quarter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Social engagement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Year-end sale
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
