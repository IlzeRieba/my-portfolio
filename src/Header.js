import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./Portfolio.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header({ darkText }) {
  const [stickyOnHero, setStickyOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".HeroSection");
      const heroHeight = hero?.offsetHeight || 600;
      setStickyOnHero(window.scrollY < heroHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`NavBarStyling ${stickyOnHero ? "sticky-on-hero" : ""} ${
        darkText ? "dark-text" : ""
      }`}
    >
      <Navbar expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand className="NavBarBrand">
            <Link to="/" className="nav-link">
              Ocean Waves
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            as="button"
            className={`svg-wave-toggle ${darkText ? "dark" : ""}`}
          >
            <svg
              width="30"
              height="24"
              viewBox="0 0 30 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="wave-path" d="M0 4 C10 0, 20 8, 30 4" />
              <path className="wave-path" d="M0 12 C10 8, 20 16, 30 12" />
              <path className="wave-path" d="M0 20 C10 16, 20 24, 30 20" />
            </svg>
          </Navbar.Toggle>

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
