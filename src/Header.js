import React from "react";
import Container from "react-bootstrap/Container";
import "./Portfolio.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header({ darkText }) {
  return (
    <div className={`NavBarStyling ${darkText ? "dark-text" : ""}`}>
      <Navbar expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand className="NavBarBrand">
            <Link to="/" className="nav-link">
              Ocean Waves
            </Link>
          </Navbar.Brand>

          {/* 👇 Toggle button for mobile view */}
          <Navbar.Toggle aria-controls="navbarScroll" />

          {/* 👇 Collapsible links section */}
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/about">
                about
              </Nav.Link>
              <Nav.Link as={Link} to="/work">
                work with me
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
