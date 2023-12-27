import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon from "../images/icon.png";

export default function Footer() {
  return (
    <div className="footer m-2">
      <Container>
        <Row>
          <Col className="border p-2 d-flex align-items-center">
            <img src={icon} alt="footer logo" />
          </Col>
          <Col className="border p-2 d-flex flex-column justify-content-center">
            <p>FAQ</p>
            <p>HELP</p>
            <p>LEGAL</p>
          </Col>
          <Col
            md={8}
            className="border p-2 d-flex flex-column justify-content-center"
          >
            <p>GET IN TOUCH</p>
            <div className="d-flex justify-content-between">
              <p>EMAIL</p>
              <p>PHONE NUMBER</p>
              <p>TWITTER</p>
              <p>FACEBOOK</p>
              <p>INSTAGRAM</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
