import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import logo from "../images/tirobakesIcon.png";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

export default function NavbarComponent() {
  return (
    <Container className="mb-2">
      <Navbar expand="md" className="nav">
        <Container fluid>
          <Navbar.Brand href="#" className="logo">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex navItem"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#order">Order</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              <Nav.Link href="#help">Help</Nav.Link>
            </Nav>
            <Form className="d-flex searchTab">
              <Form.Control
                type="search"
                placeholder="Search"
                // className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
