"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientText from "@/components/ui/GradientText";
import { fadeInUp, staggerContainer, floatAnimation } from "@/lib/animations";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="animated-gradient-bg" />

      {/* Noise Overlay */}
      <div className="noise absolute inset-0 pointer-events-none" />

      {/* Floating Elements */}
      <motion.div
        animate={floatAnimation}
        className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-[var(--accent-primary)]/10 blur-[100px]"
      />
      <motion.div
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-[var(--accent-secondary)]/10 blur-[120px]"
      />
      <motion.div
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent-tertiary)]/5 blur-[150px]"
      />

      {/* Content */}
      <div className="wrapper relative z-10 flex justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-glass)] backdrop-blur-sm border border-[var(--border-glass)]">
              <Sparkles size={16} className="text-[var(--accent-primary)]" />
              <span className="text-sm text-[var(--text-secondary)]">
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <AnimatedText
            text="Johan Agouni"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            gradient
          />

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-[var(--text-secondary)] mb-4"
          >
            <GradientText animate>Full-Stack</GradientText>
            {" "}Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text-tertiary)] text-lg max-w-2xl mx-auto mb-12"
          >
            I design and build modern, high-performance and secure web applications.
            Specialized in React, Next.js, Node.js and TypeScript.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton onClick={scrollToProjects} variant="primary">
              View my work
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Get in touch
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[var(--border-glass)]"
          >
            {[
              { value: "2+", label: "Years learning" },
              { value: "4", label: "Projects built" },
              { value: "100%", label: "Passion driven" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-[var(--text-tertiary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          data-cursor="pointer"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
}
