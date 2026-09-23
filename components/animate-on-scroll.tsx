"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right" | "scale-up" | "fade-in";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animationVariants = {
  "fade-in-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in-down": {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-in-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // Re-trigger animation on every scroll
    amount: threshold,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={animationVariants[animation]}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
