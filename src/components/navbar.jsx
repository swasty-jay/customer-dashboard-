// src/components/Navbar.jsx
import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { IoPersonCircleSharp, IoNotificationsSharp } from "react-icons/io5"; // Importing Ionicons icons

const MyNavbar = () => {
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
          <Form className="d-flex col-sm-1 me-auto">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-1"
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
