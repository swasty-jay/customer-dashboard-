// src/components/CustomerCard.jsx
import React from "react";
import { customers } from "../data.js";
import { Card, Button, Col } from "react-bootstrap";

const CustomerCard = ({ customer }) => {
  return (
    <>
      <table class="table">
        <thead className="table-secondary">
          <tr>
            <th scope="col">FULL NAME-EMAIL</th>
            <th scope="col">BILLING DATE</th>
            <th scope="col">PLAN</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">TOTAL USERS</th>
            <th scope="col">DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over customers to generate rows */}
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>
                <h5 className="mb-1">{customer.name}</h5>
                <p className="text-muted mb-1">{customer.email}</p>
              </td>
              <td>
                <h5 className="mb-1">{customer.billingDate}</h5>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger rounded-pill"
                >
                  TEAM
                </button>
              </td>
              <td>
                <h5 className="mb-1">${customer.amount}/year</h5>
              </td>
              <td>
                <h5 className="mb-1">{customer.totalUsers} Users</h5>
              </td>
              <td>
                <a href="#">View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <table class="table">
        <thead>
          <tr>
            <th scope="col">FULL NAME-EMAIL</th>
            <th scope="col">BILLING DATE</th>
            <th scope="col">PLAN</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">TOTAL USERS</th>
            <th scope="col">DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              {" "}
              <h5 className="mb-1">{customer.name}</h5>
            </td>
            <p className="text-muted mb-1">{customer.email}</p>
            <td>
              <h5 className="mb-1">{customer.billingDate}</h5>
            </td>
            <p className="text-muted mb-1">{customer.billingDate}</p>
            <td>
              {" "}
              <button type="button" class="btn btn-outline-danger rounded-pill">
                TEAM
              </button>
            </td>
            <td>
              <h5 className="mb-1">${customer.amount}/year</h5>
            </td>
            <p className="text-muted mb-1">{customer.salaryStatus}</p>
            <td>
              {" "}
              <h5 className="mb-1">{customer.totalUsers} Users</h5>
            </td>
            <td>
              {" "}
              <a href="#">View Details</a>
            </td>
            <td>
              {" "}
              <span className="mt-0">
                <strong>...</strong>
              </span>
            </td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
};

export default CustomerCard;
