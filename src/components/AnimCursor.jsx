import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={40}
      color="0, 42, 60" // RGB for #002A3C
      outerAlpha={0.2}
      innerScale={0.9}
      outerScale={3}
      outerStyle={{
        backgroundColor: "rgba(0, 42, 60, 0.15)", // Translucent outer circle
        border: "none",
      }}
      innerStyle={{
        backgroundColor: "#33596E", // Slightly lighter than #002A3C
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      touch={true} // This ensures the cursor will follow touch input on mobile and tablet
    />
  );
}
