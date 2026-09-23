"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
}

export default function AnimateStagger({
  children,
  className = "",
  staggerDelay = 0.1,
  duration = 0.6,
  threshold = 0.2,
}: AnimateStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: threshold,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
