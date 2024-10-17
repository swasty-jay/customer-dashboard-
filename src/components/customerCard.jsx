// src/components/CustomerCard.jsx
import React from "react";
import { customers } from "../data.js";
import { Card, Button, Col } from "react-bootstrap";

const CustomerCard = ({ customer }) => {
  return (
    <Col md={12} className="mb-3">
      <Card className="h-100 shadow-sm p-3">
        <div className="d-flex justify-content-between align-items-start">
          {/* Customer Info */}
          <div className="customer-info">
            <h5 className="mb-1">{customer.name}</h5>
            <p className="text-muted mb-1">{customer.email}</p>
          </div>

          {/* Billing and Plan Info */}

          <div className="billing-info">
            <h5 className="mb-1">{customer.billingDate}</h5>
            <p className="text-muted mb-1">{customer.billingDate}</p>
          </div>

          <div className="plan">
            <button type="button" class="btn btn-outline-danger rounded-pill">
              TEAM
            </button>
          </div>

          <div className="amount-info">
            <h5 className="mb-1">${customer.amount}/year</h5>
            <p className="text-muted mb-1">{customer.salaryStatus}</p>
          </div>

          <div className="total-users-info">
            <h5 className="mb-1">{customer.totalUsers} Users</h5>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <a href="#">View Details</a>
          </div>

          <div className="d-flex justify-content-end mt-3">
            <span className="mt-0">
              <strong>...</strong>
            </span>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default CustomerCard;
