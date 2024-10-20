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
  const [language, setLanguage] = useState({
    label: "English",
    flagCode: "GB", // Default flag code for English (United Kingdom)
  });

  const handleSelect = (eventKey) => {
    const languageMap = {
      English: { label: "English", flagCode: "GB" },
      Spanish: { label: "Spanish", flagCode: "ES" },
      French: { label: "French", flagCode: "FR" },
      German: { label: "German", flagCode: "DE" },
    };

    setLanguage(languageMap[eventKey]);
    // console.log("Selected language: ", eventKey);
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
              className="me-1  border-1 "
              style={{ color: "dark" }} // Ensures placeholder text is white
            />
          </Form>

          {/* User menu with notification bell and avatar icon */}
          <div className="user-menu ms-3 text-light d-flex align-items-center">
            {/* Notification Bell Icon */}
            <IoNotificationsSharp size={30} className="me-2  " color="white" />

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

            {/* Language Dropdown positioned at the far right */}
            <Dropdown onSelect={handleSelect} className="ms-auto">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <Flag code={language.flagCode} height="16" className="me-2" />
                {language.label}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="English">
                  <Flag code="GB" height="16" className="me-2" /> English
                </Dropdown.Item>
                <Dropdown.Item eventKey="Spanish">
                  <Flag code="ES" height="16" className="me-2" /> Spanish
                </Dropdown.Item>
                <Dropdown.Item eventKey="French">
                  <Flag code="FR" height="16" className="me-2" /> French
                </Dropdown.Item>
                <Dropdown.Item eventKey="German">
                  <Flag code="DE" height="16" className="me-2" /> German
                </Dropdown.Item>
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
