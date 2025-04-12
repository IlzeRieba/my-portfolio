import React from "react";
import "./Portfolio.css";
import AnimCursor from "./components/AnimCursor";
import RippleImage from "./RippleImage";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="heroSection">
      
        <RippleImage imageUrl="/water33.jpg" />
      </div>
      <AnimCursor />
    </div>
  );
}
