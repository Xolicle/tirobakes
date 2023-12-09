import React from "react";
import * as reactBootstrap from "react-bootstrap";
import cupcakes from "../images/cupcakes.png";
import biscuits from "../images/biscuits.png";
import muffins from "../images/muffins.png";
export default function BestSellers() {
  return (
    <div className="m-3">
      <reactBootstrap.Container className="p-3 bestSellers">
        <h3>OUR BEST SELLERS</h3>
        <reactBootstrap.Row className="p-2">
          <reactBootstrap.Col lg="4">
            <img src={biscuits} alt="biscuits" />
          </reactBootstrap.Col>
          <reactBootstrap.Col lg="4">
            <img src={cupcakes} alt="cupcakes" />
          </reactBootstrap.Col>
          <reactBootstrap.Col lg="4">
            <img src={muffins} alt="muffins" />
          </reactBootstrap.Col>
        </reactBootstrap.Row>
        <reactBootstrap.Row className="d-flex justify-content-end p-2">
          <reactBootstrap.Button type="submit" className=" bestSellerButton">
            SHOP BEST SELLERS
          </reactBootstrap.Button>
        </reactBootstrap.Row>
      </reactBootstrap.Container>
    </div>
  );
}
