// src/App.jsx
import React, { useState } from "react";
import MyNavbar from "./components/navbar";
import CustomerList from "./components/customerList";
import FilterBar from "./components/filterBar";
import { Container } from "react-bootstrap";

function App() {
  const [statusFilter, setStatusFilter] = useState("All");

  const filterStatus = (status) => {
    setStatusFilter(status);
  };

  return (
    <div className="App">
      <MyNavbar />
      <Container>
        <FilterBar filterStatus={filterStatus} />
        <CustomerList statusFilter={statusFilter} />
      </Container>
    </div>
  );
}

export default App;
