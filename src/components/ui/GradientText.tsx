"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GradientText({
  children,
  className,
  animate = false,
}: GradientTextProps) {
  if (animate) {
    return (
      <motion.span
        className={cn("gradient-text", className)}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        {children}
      </motion.span>
    );
  }

  return <span className={cn("gradient-text", className)}>{children}</span>;
}
