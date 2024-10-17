// src/components/Navbar.jsx
import React from "react";
import { Container, Navbar, Form, FormControl } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#" className="text-light text-touppercase">
          ORGANIZED
        </Navbar.Brand>
        <Form className="d-flex ms-auto">
          <FormControl type="search" placeholder="Search..." className="me-2" />
        </Form>
        <div className="user-menu ms-3 text-light">User Icon</div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
