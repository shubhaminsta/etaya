"use client";
import { motion } from "framer-motion";
import React from "react";

type AnimateProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

// Left to Right Component
export const AnimateLeftToRight: React.FC<AnimateProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Right to Left Component
export const AnimateRightToLeft: React.FC<AnimateProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
