import React from "react";
import "./Portfolio.css";
import AnimCursor from "./components/AnimCursor";
import RippleImage from "./RippleImage";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <RippleImage imageUrl="/water2.jpg" />
      <AnimCursor />
    </div>
  );
}
