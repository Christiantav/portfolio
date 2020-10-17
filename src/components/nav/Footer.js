import React from 'react';
import '../../App.css';
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Footer() {
  return (
    <div className="footer-text">
      <Navbar bg="secondary" variant="light" fixed="bottom">
          <Nav className="mr-auto">
            <Col lg="auto">
              <Nav.Link></Nav.Link>
            </Col>
          </Nav>
          <Nav className="ml-auto">
            <Col lg="auto">
              <Nav.Link></Nav.Link>
            </Col>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;