// src/components/HorizontalNavCard.jsx
import React from "react";
import { Card, Nav } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaChartBar,
  FaBox,
  FaUsers,
  FaStar,
  FaCog,
} from "react-icons/fa";
// import "./HorizontalNavCard.css"; // Import custom styles if needed

const HorizontalNavCard = () => {
  return (
    <div class="row py-2">
      <div class="col-sm-3 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total customers</h5>
            <hr />
            <p class="card-text">
              <strong>470</strong> <span>last week</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-3 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Team plan</h5>
            <hr />
            <p class="card-text">
              <strong>17</strong> <span>last week</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-3 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Basic plan</h5>
            <hr />
            <p class="card-text">
              {" "}
              <strong>30</strong> <span>last week</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Paleghan berhenti</h5>
            <hr />
            <p class="card-text">
              <strong>137</strong> <span>last week</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNavCard;
