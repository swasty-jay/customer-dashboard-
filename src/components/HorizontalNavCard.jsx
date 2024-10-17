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
    <Card className="shadow-sm">
      <Card.Body>
        <Nav className="justify-content-center" variant="pills">
          <Nav.Item className="mx-2">
            <Nav.Link href="#dashboard">
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link href="#statistic">
              <FaChartBar className="mr-2" />
              Statistic
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link href="#product">
              <FaBox className="mr-2" />
              Product
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link href="#customer">
              <FaUsers className="mr-2" />
              Customer
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link href="#review">
              <FaStar className="mr-2" />
              Review
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link href="#settings">
              <FaCog className="mr-2" />
              Settings
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Body>
    </Card>
  );
};

export default HorizontalNavCard;
