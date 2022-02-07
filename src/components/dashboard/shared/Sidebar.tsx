import React from "react";

import { Link } from "react-router-dom";

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
              <span data-feather="home"></span>
              Dashboard <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/orders">
              <span data-feather="file"></span>
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/add-service">
              <span data-feather="shopping-cart"></span>
              Add Service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/add-admin">
              <span data-feather="users"></span>
              Make Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/add-review">
              <span data-feather="bar-chart-2"></span>
              Review service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/manage-service">
              <span data-feather="layers"></span>
              Manage Service
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
