"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  gradient?: boolean;
}

export default function AnimatedText({
  text,
  className,
  as: Component = "h1",
  gradient = false,
}: AnimatedTextProps) {
  return (
    <div className="w-full flex justify-center">
      <Component
        className={cn(
          "inline-flex flex-wrap justify-center",
          gradient && "gradient-text",
          className
        )}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.02,
              ease: "easeOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Component>
    </div>
  );
}
