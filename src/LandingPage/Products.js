import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import cakes from "../images/celebrationCakes.png";
import productCupcakes from "../images/productCupcakes.png";
import macaroons from "../images/macaroons.png";

export default function Products() {
  return (
    <Container className="p-2 products">
      <h3 className="text-center">EXPLORE OUR PRODUCTS</h3>
      <p className="text-center">
        Check our library and ecplore our different products. If something
        catches your eye, dimply click order now and complete an order form.
      </p>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={cakes} />
            <Card.Body>
              <Card.Title>Celebration cakes</Card.Title>
              <Card.Text>
                Celebrate in style with our exquisite cakes! For birthdays, we
                create magical and delicious masterpieces tailored to any theme.
                For weddings, our attention to detail and top-notch ingredients
                result in stunning and unforgettable creations. Trust us to add
                that extra sparkle to your special occasions.
              </Card.Text>
              <Button>VIEW MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={productCupcakes} />
            <Card.Body>
              <Card.Title>Cupcakes</Card.Title>
              <Card.Text>
                Indulge in our irresistible cupcakes! Made with love, our
                cupcakes are topped with luscious Italian meringue, not your
                ordinary icing. Discover a delightful treat that will leave you
                craving for more. Explore our wide range of flavours including
                lemon, chocolate, red velvet , vanilla and one of our newest fan
                favourite Oreo
              </Card.Text>
              <Button>VIEW MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={macaroons} />
            <Card.Body>
              <Card.Title>Macaroons</Card.Title>
              <Card.Text>
                Experience a burst of sweetness with our delectable macarons!
                Our bakery proudly presents a range of vibrant colors and
                flavors that will captivate your taste buds. From favorites like
                delicate vanilla and rich chocolate to zesty lemon. Our
                macaroons offer delightful taste. Treat yourself to these
                bite-sized delights
              </Card.Text>
              <Button>VIEW MORE</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
