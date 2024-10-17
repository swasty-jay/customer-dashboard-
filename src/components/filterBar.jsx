// src/components/FilterBar.jsx
import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";

const FilterBar = ({ filterStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState("All");

  const handleFilter = (e) => {
    setSelectedStatus(e.target.value);
    filterStatus(e.target.value);
  };

  return (
    <div className="mb-4 mt-4 justify-content-end">
      <Form.Select value={selectedStatus} onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </Form.Select>
    </div>
  );
};

export default FilterBar;
