// src/components/Navbar.jsx

import { useState } from "react"; // Import useState for handling language change
import React from "react";
import {
  Navbar,
  Container,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { IoPersonCircleSharp, IoNotificationsSharp } from "react-icons/io5"; // Importing Ionicons icons
import Flag from "react-world-flags"; // Import react-world-flags

const MyNavbar = () => {
  const [language, setLanguage] = useState("ENG");

  const handleSelect = (lang) => {
    setLanguage(lang);
    // Handle language change logic (e.g., i18n setup)
    // console.log("Selected language: ", lang);
  };
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <IoPersonCircleSharp size={60} color="white" className="mb-1  " />
          <div className="vertical-line">
            <hr />
          </div>
          <Navbar.Brand href="#" className="text-light">
            ORGANIZED
            <div style={{ fontSize: "0.7rem", fontWeight: "lighter" }}>
              swasty jay
            </div>{" "}
            {/* Username */}
          </Navbar.Brand>
          <Form className="d-flex col-sm-1 me-auto text-light">
            <FormControl
              type="search"
              placeholder="🔍 Search..." // Add a search icon before the placeholder text
              className="me-1 bg-dark border-1 rounded-pill"
              style={{ color: "white" }} // Ensures placeholder text is white
            />
          </Form>

          {/* User menu with notification bell and avatar icon */}
          <div className="user-menu ms-3 text-light d-flex align-items-center">
            {/* Notification Bell Icon */}
            <IoNotificationsSharp size={30} className="me-2" color="white" />

            {/* IoPersonCircleSharp Icon from react-icons */}
            <IoPersonCircleSharp size={40} color="white" />
          </div>
        </Container>
      </Navbar>
      {/* SECOND NAVBAR */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div class="container-fluid py-0">
          <a class="navbar-brand" href="#">
            Dashboard
          </a>
          <div class="navbar-nav" id="navbarNav">
            <ul class="navbar-nav me-auto justify-content-start">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Statistic
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Customer
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Settings
                </a>
              </li>
            </ul>
            <Dropdown onSelect={handleSelect} className="ms-3">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {language}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="English">English</Dropdown.Item>
                <Dropdown.Item eventKey="Spanish">Spanish</Dropdown.Item>
                <Dropdown.Item eventKey="French">French</Dropdown.Item>
                <Dropdown.Item eventKey="German">German</Dropdown.Item>
                {/* Add more languages as needed */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>

      {/* DROPDOWN MENU */}
    </>
  );
};

export default MyNavbar;
