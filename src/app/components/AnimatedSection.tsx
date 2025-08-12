"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection({
  children,
  backgroundColor = "white",
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor }}
    >
      <motion.div style={{ y }} className="absolute inset-0 h-screen w-full">
        {children}
      </motion.div>
    </section>
  );
}
