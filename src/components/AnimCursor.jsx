import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimCursor() {
    return (
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="145, 141, 141"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        outerStyle={{
          border: "1px solid var(--primary-color-black)",
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