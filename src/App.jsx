// src/App.jsx
import React, { useState } from "react";
import MyNavbar from "./components/navbar";
import CustomerList from "./components/customerList";

import { Container } from "react-bootstrap";
import Sidebar from "./components/HorizontalNavCard.jsx";
import "./index.css";
import Dashboard from "./components/HorizontalNavCard.jsx";

function App() {
  const [statusFilter, setStatusFilter] = useState("All");

  const filterStatus = (status) => {
    setStatusFilter(status);
  };

  return (
    <div className="App container-fluid">
      <MyNavbar />
      <Sidebar />

      <div>
        <CustomerList statusFilter={statusFilter} />
      </div>
    </div>
  );
}

export default App;
