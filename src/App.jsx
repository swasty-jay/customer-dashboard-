// src/App.jsx
import React, { useState } from "react";
import MyNavbar from "./components/navbar";
import CustomerList from "./components/customerList";
import FilterBar from "./components/filterBar";
import { Container } from "react-bootstrap";
import Sidebar from "./components/HorizontalNavCard.jsx";
import "./index.css";

function App() {
  const [statusFilter, setStatusFilter] = useState("All");

  const filterStatus = (status) => {
    setStatusFilter(status);
  };

  return (
    <div className="App container-fluid">
      <MyNavbar />
      <Sidebar />
      <FilterBar filterStatus={filterStatus} />
      <div>
        <CustomerList statusFilter={statusFilter} />
      </div>
    </div>
  );
}

export default App;
