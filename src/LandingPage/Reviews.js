import React from "react";
import { Container, Col, Row, Carousel, Card } from "react-bootstrap";

export default function Reviews() {
  return (
    <Container className="my-3 reviews">
      <h3 className="my-2 text-center">REVIEWS FROM OUR CLIENTS</h3>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Review1</Card.Title>
              <Card.Text>
                Thanks a lot @tirobakes for helping me with my daughter's
                birthday cake. It was short notice but you manage to deliver the
                cake as i asked. I will definitely be back for more of your
                delicious cakes and cupcakes.🙏🏽🎂🍰.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Review2</Card.Title>
              <Card.Text>
                Your cakes are incredible, thank you so much for your incredible
                creations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Review3</Card.Title>
              <Card.Text>
                Amazing cakes, made by a lovely lady . The cream caramel is my
                personal favourite.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
