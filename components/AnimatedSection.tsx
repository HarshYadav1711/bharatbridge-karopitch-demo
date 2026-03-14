"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultTransition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const };

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
}

export function AnimatedSection({
  children,
  id,
  className,
  "aria-labelledby": ariaLabelledBy,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn(className)}
      aria-labelledby={ariaLabelledBy}
      initial={
        reduceMotion
          ? undefined
          : { opacity: 0, y: 12 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: "-40px" }}
      transition={defaultTransition}
    >
      {children}
    </motion.section>
  );
}
