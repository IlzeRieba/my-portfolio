import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimCursor() {
  const isMobile = window.innerWidth <= 768; // or use a more precise mobile detection

  if (isMobile) {
    return null; // Don't render anything on mobile
  }

  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={40}
      color="0, 42, 60"
      outerAlpha={0.2}
      innerScale={0.9}
      outerScale={3}
      outerStyle={{
        backgroundColor: "rgba(0, 42, 60, 0.15)",
        border: "none",
      }}
      innerStyle={{
        backgroundColor: "#33596E",
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
