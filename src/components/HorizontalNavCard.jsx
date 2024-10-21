// // src/components/HorizontalNavCard.jsx
import React from "react";
import { Card, Nav } from "react-bootstrap";

// import "./HorizontalNavCard.css"; // Import custom styles if needed

const Dashboard = () => {
  return (
    <>
      <div class="row py-5 container-fluid">
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
              <h5 class="card-title">Premium plan</h5>
              <hr />
              <p class="card-text">
                <strong>137</strong> <span>last week</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// import React from "react";
//
// Import your CSS file

// const Dashboard = () => {
// Sample data to populate the cards
//   const summaryData = [
//     { label: "Total Customer", count: 470, change: "300% from last week" },
//     { label: "Team Plan", count: 170, change: "100% from last week" },
//     { label: "Basic Plan", count: 63, change: "20% from last week" },
//     { label: "Premium Plan", count: 4, change: "200% from last week" },
//   ];

//   return (
//     <div className="dashboard-container">
//       {/* Summary Cards */}
//       <div className="summary-cards">
//         {summaryData.map((data, index) => (
//           <div className="card style=width: 18rem;" key={index}>
//             <h4>{data.label}</h4> <hr />
//             <h1>{data.count}</h1>
//             <p>{data.change}</p>
//           </div>
//         ))}
//       </div>

//       {/* Customer List */}
//       <div className="customer-list">
//         <h2>Customer List</h2>
//         {/* Filters */}
//         <div className="filters hstack gap-3">
//           <button className="p-2">All time</button>
//           <button className="p-2 ms-auto">All time</button>

//           <button className="p-2">Active</button>
//           <button className="p-2">More filters</button>
//           <input type="text" placeholder="Search" />
//         </div>

//         {/* Placeholder for the customer data */}
//         <div className="customer-table">
//           {/* Render customer table rows here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
