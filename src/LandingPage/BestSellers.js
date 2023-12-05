import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import cupcakes from "../images/cupcakes.png";
import biscuits from "../images/biscuits.png";
import muffins from "../images/muffins.png";
export default function BestSellers() {
  return (
    <div className="m-3">
      <Container className="p-3 bestSellers">
        <h3>OUR BEST SELLERS</h3>
        <Row className="p-2">
          <Col lg="4">
            <img src={biscuits} alt="biscuits" />
          </Col>
          <Col lg="4">
            <img src={cupcakes} alt="cupcakes" />
          </Col>
          <Col lg="4">
            <img src={muffins} alt="muffins" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-end p-2">
          <Button type="submit" className=" bestSellerButton">
            SHOP BEST SELLERS
          </Button>
        </Row>
      </Container>
    </div>
  );
}
