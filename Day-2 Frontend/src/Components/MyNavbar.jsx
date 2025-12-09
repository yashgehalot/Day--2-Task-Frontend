import React from 'react';
// 1. Import the specific icon we want
import { BsWalletFill } from "react-icons/bs";

const MyNavbar = () => {
  return (
    // Added 'py-3' to make the navbar a bit taller and more breathable
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
      <div className="container">
        {/* 2. Update the Brand Link Section */}
        <a className="navbar-brand fw-bold text-primary d-flex align-items-center" href="#">
           {/* The Icon Component with margin-end (me-2) and slight padding-bottom for alignment */}
          <BsWalletFill className="me-2 pb-1" size="1.5em" /> 
          Expenses Management
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ms-3 btn-sm px-4 fw-bold text-white" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;