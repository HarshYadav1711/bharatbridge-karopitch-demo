"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Fade-in + slight upward motion; respects prefers-reduced-motion. */
const sectionTransition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const };

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
}

/** Section wrapper that fades in and moves up on scroll; respects prefers-reduced-motion. */
export function AnimatedSection({
  children,
  id,
  className,
  "aria-labelledby": ariaLabelledBy,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? undefined : { opacity: 0, y: 12 };
  const whileInView = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <motion.section
      id={id}
      className={cn(className)}
      aria-labelledby={ariaLabelledBy}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-40px" }}
      transition={sectionTransition}
    >
      {children}
    </motion.section>
  );
}
