import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

export default function Reviews() {
  return (
    <Container className="my-3 reviews">
      <h3 className="my-2 text-center">REVIEWS FROM OUR CLIENTS</h3>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              {/* <Card.Title>Review1</Card.Title> */}
              <div className="review-top">
                <div className="avatar1">
                  <p>G</p>
                </div>
                <div>
                  <p>Full Name</p>
                  <small>time</small>
                </div>
                <div className="stars">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSLine />
                </div>
              </div>
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
              {/* <Card.Title>Review2</Card.Title> */}
              <div className="review-top">
                <div className="avatar2">
                  <p>X</p>
                </div>
                <div>
                  <p>Full Name</p>
                  <small>time</small>
                </div>
                <div className="stars">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>
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
              {/* <Card.Title>Review3</Card.Title> */}
              <div className="review-top">
                <div className="avatar3">
                  <p>T</p>
                </div>
                <div>
                  <p>Full Name</p>
                  <small>time</small>
                </div>
                <div className="stars">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSLine />
                </div>
              </div>
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
