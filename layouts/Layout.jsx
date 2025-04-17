// src/layouts/Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Vendor-Merchant App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/vendor">Vendor</Nav.Link>
              <Nav.Link as={Link} to="/merchant">Merchant</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;