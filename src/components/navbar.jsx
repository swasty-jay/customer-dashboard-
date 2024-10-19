// src/components/Navbar.jsx
import React from "react";
import { Container, Navbar, Form, FormControl } from "react-bootstrap";
// import "./app.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="">
        <Container>
          <Navbar.Brand href="#" className="text-light ">
            ORGANIZED
          </Navbar.Brand>
          <Form className="d-flex col-sm-1 me-auto ">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-1"
            />
          </Form>
          <div className="user-menu ms-3 text-light">User Icon</div>
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
