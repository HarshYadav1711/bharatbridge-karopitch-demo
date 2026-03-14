"use client";

import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "accent" | "outline" | "ghost";
export type ButtonSize = "default" | "sm" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-brand text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary-brand/50 border border-transparent",
  accent:
    "bg-accent-brand text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent-brand/50 border border-transparent",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
  ghost:
    "bg-transparent text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-9 px-4 text-sm",
  sm: "h-8 px-3 text-sm",
  lg: "h-10 px-6 text-base",
};

const scaleTransition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      children,
      className,
      type = "button",
      ...props
    },
    ref
  ) => {
    const reduceMotion = useReducedMotion();
    const isPrimaryOrAccent = variant === "primary" || variant === "accent";

    const button = (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );

    if (reduceMotion || !isPrimaryOrAccent) {
      return button;
    }

    return (
      <motion.span
        className="inline-block"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={scaleTransition}
      >
        {button}
      </motion.span>
    );
  }
);

Button.displayName = "Button";

export { Button };
