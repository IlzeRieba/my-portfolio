import React from "react";
import Container from "react-bootstrap/Container";
import "./Portfolio.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import About from "./About"; 


export default function Header() {
    return (
      <div className="NavBarStyling">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand className="NavBarBrand" href="#">
             Ocean Waves
            </Navbar.Brand>
    
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="nav-link me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
              >
                <Nav.Link href="#about-me-section">about</Nav.Link>
                <Nav.Link href="#my-work">wrok with me</Nav.Link>
                <Nav.Link href="#get-in-touch">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}