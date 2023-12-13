import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import tumi from "../images/celebrationCakes.png";

export default function About() {
  return (
    <Container>
      <h3>GET TO KNOW US</h3>
      <Row>
        <Col>Picture</Col>
        <Col>
          <p>
            Welcome to tirotakes, where passion meets deliciousness! My name is
            Itumeleng, and I am the proud owner of this bakery.
          </p>
          <p>
            My journey into the world of baking began with a twist of fate.
            After years of searching for a job, I found myself drawn to the
            enchanting world of pastries and confections. Determined to turn my
            passion into a profession, I embarked on a culinary adventure,
            attending baking classes to hone my skills and unlock my creative
            potential.
          </p>
          <p>
            One of my most memorable experiences was when I received my first
            order. It was an exciting yet nerve-wracking moment. The client
            requested a stunning blue-colored cake for a special celebration.
            However, a mix-up occurred, and I ended up creating a gorgeous green
            cake instead. Realizing the mistake, I knew I had to make things
            right. Determined to deliver perfection, I stayed up until midnight,
            remaking the cake to match the desired color. It was a labor of
            love, and seeing the client's joyous reaction made every sleepless
            minute worthwhile.
          </p>
        </Col>
      </Row>
      <Button>READ MORE</Button>
    </Container>
  );
}
