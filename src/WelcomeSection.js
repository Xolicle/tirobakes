import React from "react";
import { Button, Container } from "react-bootstrap";

export default function WelcomeSection() {
  return (
    <Container fluid className="welcomeSec">
      <div className="float-end">
        <h2 className="mt-5 p-2">Welcome to tirobakes</h2>
        <h4 className="mb-2 p-2">Where there's a little bliss in every bite</h4>
        <Button type="submit" className="m-2">
          ORDER NOW
        </Button>
      </div>
    </Container>
  );
}
