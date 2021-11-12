import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import bigbean from "../../assets/rectangle_21.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const FooterContainer = () => {
  return (
    <Navbar expand="lg" className="footer-navbar">
      <Container >
        <Row>
          <Col md={6} className="d-inline-flex">
            <Navbar.Brand href="#home">
              <img src={bigbean} alt="" width="59px" height="30px" style={{marginLeft: "4vw"}} />
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">¿Quiénes somos?</Nav.Link>
              <Nav.Link href="#features">Ayuda</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
          </Col>
          <Col md={2}></Col>
          <Col md={4} className="d-flex justify-content-end">
            <Nav>
              <Nav.Link href="#home">Nuestras Redes</Nav.Link>
              <Nav.Link href="#features">#</Nav.Link>
              <Nav.Link href="#pricing">#</Nav.Link>
              <Nav.Link href="#pricing" style={{marginRight: "5vw"}}>#</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default FooterContainer;
