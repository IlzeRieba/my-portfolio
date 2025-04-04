import React from "react";
import About from "./About";
import HeroTitle from "./HeroTitle";
import Work from "./Work";
import Header from "./Header";
import Footer from "./Footer";
import "./Portfolio.css";
import AnimCursor from "./components/AnimCursor";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <AnimCursor />
      <HeroTitle />
      <Work />
      <About />
    </div>
  );
}
