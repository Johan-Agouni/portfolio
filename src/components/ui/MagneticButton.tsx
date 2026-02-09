"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const ref = href ? anchorRef.current : buttonRef.current;
    if (!ref) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;

    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonClasses = cn(
    "btn",
    variant === "primary" ? "btn-primary" : "btn-secondary",
    className
  );

  const springTransition = {
    type: "spring" as const,
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  if (href) {
    return (
      <motion.a
        ref={anchorRef}
        href={href}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={springTransition}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={buttonClasses}
        data-cursor="pointer"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={springTransition}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      data-cursor="pointer"
    >
      {children}
    </motion.button>
  );
}
