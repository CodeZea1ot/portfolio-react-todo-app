import React from "react";

//react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//end react-bootstrap components

export default function Footer() {
  return (
    <>
      <footer className="my-3">
        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col>
              <small>
                <Col>
                  Designed and Built by{" "}
                  <a href="https://codezealot.com">Code Zealot Studios LLC</a>
                </Col>
                <Col>© {new Date().getFullYear()}</Col>
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
