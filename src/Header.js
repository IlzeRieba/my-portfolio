import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function Header({ darkText, className, isFixed = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

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
      } ${isFixed ? "fixed-header" : ""}`}
    >
      <Navbar
        expand="lg"
        collapseOnSelect
        fixed={isFixed ? "top" : undefined}
        expanded={navExpanded}
        onToggle={handleToggle}
        className={`custom-navbar ${
          showWhiteBg ? "navbar-white-bg-scrolled" : ""
        } ${navExpanded ? "navbar-white-bg-toggled" : ""}`}
      >
        <Container fluid>
          <Navbar.Brand className="NavBarBrand">
            <Link
              to="/"
              className={`nav-link logo-link ${
                darkText || showWhiteBg ? "dark" : ""
              }`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <svg
                width="50"
                height="50
                "
                viewBox="0 0 636 636"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "8px" }}
              >
                <path
                  d="M318 635.11C233.3 635.11 153.68 602.13 93.7899 542.24C33.8999 482.35 0.919922 402.72 0.919922 318.03C0.919922 233.34 33.8999 153.71 93.7899 93.82C153.68 33.93 233.31 0.949951 318 0.949951C402.69 0.949951 482.32 33.93 542.21 93.82C602.1 153.71 635.08 233.34 635.08 318.03C635.08 402.72 602.1 482.35 542.21 542.24C482.32 602.13 402.69 635.11 318 635.11ZM318 8.93996C235.44 8.93996 157.82 41.09 99.4399 99.47C41.0599 157.85 8.90993 235.47 8.90993 318.03C8.90993 400.59 41.0599 478.21 99.4399 536.59C157.82 594.97 235.44 627.12 318 627.12C400.56 627.12 478.18 594.97 536.56 536.59C594.94 478.21 627.09 400.59 627.09 318.03C627.09 235.47 594.94 157.85 536.56 99.47C478.18 41.09 400.56 8.93996 318 8.93996Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="5"
                />
                <path
                  d="M337.69 352.11C340.21 355.07 403.97 370.63 412.71 372.15C427.47 374.71 463.15 379.86 476.35 376.04C479.08 375.25 484.23 370.5 482.41 367.16C479.24 361.35 458.29 354.2 451.94 349.54C445.12 344.53 436.02 330.9 443.08 323.37C453.43 312.33 471.72 326.58 482.23 330.33C501.16 337.07 522.52 340.07 539.8 350.28C556.35 360.05 569.36 378.49 584.15 390.97L625.3 380.13C625.54 384.2 618.81 388.38 615.87 390.06C609.36 393.78 599.49 396.87 592.09 398.6C620.96 427.53 615.48 466.1 570.84 470.55C535.58 474.07 454.21 466.13 423.52 448.1C415.13 443.17 401.34 426.77 397.91 424.82C395.54 423.47 388.89 424.9 384.87 423.99C370.92 420.84 315.76 394.86 313.83 380.76C312.22 368.98 329.97 374.36 334.66 373.76C336.89 373.47 339.53 369.89 343.92 369.16C364.33 365.73 369.63 378.12 383.03 381.54C389.68 383.24 397.84 381.13 404.7 382.02C432.18 385.59 457.78 398.38 484.96 403.28C516.08 408.88 548.01 405.9 577.3 394C562.07 380.29 545.9 360.19 526.88 352.13C515.37 347.25 500.9 344.41 488.78 340.39C479.07 337.17 459.85 325.91 451.16 328.75C449.02 329.45 448.11 330.71 448.08 332.99C447.92 346.84 483.76 352.51 487.87 365.28C495.89 390.15 454 385.09 439.8 383.83C388.51 379.28 328.04 358.44 280.62 339.98C249.36 327.8 221.08 330.47 189.69 321.11C199.75 336.78 241.92 359.7 232.59 381.52C223.93 401.78 193.85 367.05 185.03 359.9C171.11 348.62 156.35 338.12 142.67 326.58C125.68 312.24 111.8 291.66 90.0199 284.16C97.8499 279.41 111.99 280.57 121.38 283.27C137.19 287.82 150.61 296.61 165.69 302.62C158.28 292.87 152.78 286.47 144.08 278.07C142.35 276.4 140.49 274.86 138.52 273.47L128.38 266.33C159.33 269.79 195.85 284.28 224.15 296.77C252.86 309.44 302.46 342.11 329.08 348.74C330.1 348.99 332.08 349.28 331.79 347.86C330.22 346.36 328.81 344.67 327.23 343.19C304.23 321.71 224.73 286.65 192.77 272.77C129.6 245.33 85.9699 233.25 17.6499 255.19C15.8099 255.78 11.7499 257.88 10.6499 255.57C71.6799 216.09 142.26 244.19 202 270.93C226.93 282.09 318.73 323.15 332.81 339.46C337.26 344.62 336.71 351.04 337.66 352.15L337.69 352.11ZM267.23 324.76C230.31 305.98 193.2 287.27 152.81 276.77C164.28 285.67 172.89 306.29 184.77 312.16C202.08 320.73 215.48 318.92 233.09 321.06C242.73 322.23 252.09 323.93 261.61 325.78C263.51 326.15 267.67 328.19 267.23 324.77V324.76ZM144.55 321C168.04 340.61 194.14 357.16 216.43 378.32L226.63 380.12C226.63 376.92 227.03 373.51 226.24 370.35C223.97 361.34 195.95 339.18 187.83 331.24C183.64 327.15 178.23 317.35 174.39 314.24C165.8 307.27 117.03 287.58 105.8 286.14M381.67 417.01C371.77 407.98 360.07 401.09 349.42 392.98C340.19 385.95 335.71 374.31 320.76 380.14C317.57 384.17 374.53 417.78 381.67 417.01ZM385.35 411.49C383.26 404.25 379.79 400.24 383.22 392.27L371.91 385.36C366.43 382.02 359.81 381.11 353.64 382.87L350.31 383.82L385.36 411.49H385.35ZM390.91 398.58C397.36 413.87 410.77 434.32 425.94 441.97C454.26 456.27 505.59 459.67 537.65 461.31C584.32 463.69 630.9 451.92 583.52 402.63C559.91 409.04 534.82 416.65 509.96 415.16C471.84 412.88 438.11 391.11 400.12 389.36L418.23 399.25C419.91 400.17 421.53 401.2 423.11 402.29C431.43 408.03 444.15 414.51 451.93 419.64C454.47 421.32 462.27 424.16 462.61 424.65C464.04 426.66 464.01 430.03 460.07 430.02C437.83 429.97 410.76 407.14 390.88 398.58H390.91Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
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
