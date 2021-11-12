import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo-color.png';
import minibean from '../../assets/rectangle_71.png';
import {ImSearch} from 'react-icons/im';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../../css/main2.scss"

const NavBar = () => {
  return (
    <Navbar className="navbar" width='100%' bg="light" expand="lg">
      <Container>
        <Row>
        <Col md={4} className="logo">
        <Link to='/' className="logo"><Navbar.Brand className="logo"><img src={Logo} alt='logo make_sense' width='auto' height='25.85px' style={{paddingLeft:'4vw'}}/></Navbar.Brand></Link>
        </Col>
        <Col md={2}></Col>
        <Col md={6} className="d-inline-flex justify-content-end">
        <div>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            navbarScroll
          >
            <Nav.Link to='/ayuda' style={{marginRight: "2vw"}}>Ayuda</Nav.Link>
            <Nav.Link to='/quienes-somos' style={{marginRight: "2vw"}}>¿Quiénes somos?</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder='Ingresa tu búsqueda'
              aria-label="buscar"
            />
            <Button variant="outline-success"><ImSearch /></Button>
          </Form>
        </Navbar.Collapse>
        </div>
        </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavBar;