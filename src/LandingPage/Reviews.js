import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

export default function Reviews() {
  return (
    <Container>
      <h3 className="my-2 text-center">REVIEWS FROM OUR CLIENTS</h3>
      <Row>
        <Col>Review1</Col>
        <Col>Review2</Col>
        <Col>Review3</Col>
      </Row>
    </Container>
  );
}
