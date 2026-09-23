"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Counter({ from, to }: { from: number; to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    // This logic handles the decimal point (e.g., 99.5)
    return latest.toFixed(to % 1 !== 0 ? 1 : 0);
  });

  useEffect(() => {
    const controls = animate(count, to, { duration: 2 });
    return () => controls.stop();
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}