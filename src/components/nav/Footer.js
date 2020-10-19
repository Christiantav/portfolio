import React from 'react';
import '../../App.css';
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Footer() {
  return (
    <div className="footer-text">
      <Navbar bg="secondary" variant="light" fixed="bottom" style={{ justifyContent: "center" }}>
          <Nav>
            <Nav.Item className="font" id="footer" style={{ textAlign: "center" }}>
              @ Christian Tavares 2020
            </Nav.Item>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;