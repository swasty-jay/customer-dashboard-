import React from "react";
// import './UnderlineNav.css'; // Optional for additional styling

const UnderlineNav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mt-0">
      <div class="container-fluid py-0">
        <a class="navbar-brand" href="#">
          Dashboard
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Statistic
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Customer
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-disabled="page">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UnderlineNav;
