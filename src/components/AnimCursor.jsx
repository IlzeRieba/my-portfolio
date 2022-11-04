import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimCursor() {
    return (
      <AnimatedCursor
        innerSize={10}
        outerSize={13}
        color="145, 141, 141"
        outerAlpha={0.3}
        innerScale={0.9}
        outerScale={6}
        outerStyle={{
          color: "var(--cursor-color)",
          border: "var(--cursor-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
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