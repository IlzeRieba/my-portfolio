import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkMode from "./components/DarkMode";


export default function Header() {
    return (
      <div>
        <Navbar expand="lg mt-3">
          <Container fluid>
            <span class="DarkModeIcon">
              <DarkMode />{" "}
            </span>
            <Navbar.Brand href="#">Ilze Rieba</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
              >
                <Nav.Link href="#about-me-section">about</Nav.Link>
                <Nav.Link href="#my-work">my work</Nav.Link>
                <Nav.Link href="#get-in-touch">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}