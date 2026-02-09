"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  gradient = false,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "section-title",
          gradient && "gradient-text"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "section-subtitle mt-4",
          centered && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
