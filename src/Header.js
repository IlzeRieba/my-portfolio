import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function Header({ darkText, className }) {
  const [scrolled, setScrolled] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are scrolled more than 3px from the top of the page
      if (window.scrollY > 3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = (expanded) => {
    setNavExpanded(expanded);
  };

  const showWhiteBg = scrolled || navExpanded; // Apply white background when scrolled or toggled

  return (
    <div
      className={`NavBarStyling ${darkText ? "dark-text" : ""} ${
        className || ""
      }`}
    >
      <Navbar
        expand="lg"
        collapseOnSelect
        fixed="top"
        expanded={navExpanded}
        onToggle={handleToggle}
        className={`custom-navbar ${
          showWhiteBg ? "navbar-white-bg-scrolled" : ""
        } ${navExpanded ? "navbar-white-bg-toggled" : ""}`}
      >
        <Container fluid>
          <Navbar.Brand className="NavBarBrand">
            <Link to="/" className="nav-link">
              Ocean Waves
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            className={`svg-wave-toggle ${
              darkText || showWhiteBg ? "dark" : ""
            }`}
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
