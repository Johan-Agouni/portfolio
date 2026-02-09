"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hover3D?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover3D = false,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card p-6",
        hover3D && "[transform-style:preserve-3d]",
        glow && "glow",
        className
      )}
      whileHover={
        hover3D
          ? {
              scale: 1.02,
              rotateX: -2,
              rotateY: 2,
              transition: { duration: 0.3 },
            }
          : { scale: 1.02 }
      }
      data-cursor="pointer"
      {...props}
    >
      {children}
    </motion.div>
  );
}
