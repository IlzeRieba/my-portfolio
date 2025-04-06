import React from "react";
import "./Portfolio.css";
import AnimCursor from "./components/AnimCursor";
import RippleImage from "./RippleImage";
import Header from "./Header";
import About from "./About";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <RippleImage imageUrl="/water33.jpg" />
      <AnimCursor />
      <Header />
    </div>
  );
}
