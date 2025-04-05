import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={30}
      color="255, 255, 255"
      outerAlpha={0.15} // Outer circle transparency
      innerScale={0.9}
      outerScale={3}
      outerStyle={{
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Soft white glow
        border: "none",
      }}
      innerStyle={{
        backgroundColor: "rgba(255, 255, 255, 0.4)", // More visible than outer, but still slightly transparent
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
    />
  );
}
