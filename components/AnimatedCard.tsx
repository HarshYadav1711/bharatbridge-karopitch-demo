"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const hoverTransition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card wrapper with subtle hover lift and scale. Use for investor/startup cards.
 * Respects prefers-reduced-motion.
 */
export function AnimatedCard({ children, className }: AnimatedCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className
      )}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -2, scale: 1.02, boxShadow: "0 4px 14px rgba(0,0,0,0.08)" }
      }
      transition={hoverTransition}
    >
      {children}
    </motion.div>
  );
}
