import { motion } from "framer-motion";
import { Component1 } from "./Compeoont1";
import { Component2 } from "./Compeoont2";
import Component3 from "./Compeoont3";
import { Component4 } from "./Compeoont4";

export function WhatWeDo() {
  // Framer Motion animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div id="what-we-do-section">
      {/* Component 1: Left Side Text, Right Side Image */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Component1 />
      </motion.div>

      {/* Component 2: Full-Width Background Image with Text Overlaid */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Component2 />
      </motion.div>

      {/* Component 3: Right Side Text, Left Side Image */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Component3 />
      </motion.div>

      {/* Component 4: Split Background with Text */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Component4 />
      </motion.div>
    </div>
  );
}
