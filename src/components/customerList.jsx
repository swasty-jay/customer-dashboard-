// src/components/CustomerList.jsx
import React, { useState } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import { customers } from "../data.js";
// import CustomerCard from "./CustomerCard";

const CustomerList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid">
      {/* <FormControl
        type="text"
        placeholder="Search customers..."
        className="mb-3"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      /> */}
      {/* <Row>
        {filteredCustomers.map((customer) => (
          <Col key={customer.id} lg={12}>
            
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default CustomerList;
