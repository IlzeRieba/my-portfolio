import { motion } from "framer-motion";
import { useState } from "react";

const RippleEffect = ({ children }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();

    const newRipple = {
      id: Date.now(),
      x: clientX - left,
      y: clientY - top,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove the ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      className="relative overflow-hidden inline-block"
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white opacity-50 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 5, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            width: 50,
            height: 50,
            top: ripple.y - 25,
            left: ripple.x - 25,
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
