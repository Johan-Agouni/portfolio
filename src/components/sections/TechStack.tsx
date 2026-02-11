"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const techStack = {
  frontend: [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#ffffff" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Framer Motion", color: "#FF0055" },
  ],
  backend: [
    { name: "Node.js", color: "#339933" },
    { name: "NestJS", color: "#E0234E" },
    { name: "Express", color: "#ffffff" },
    { name: "PHP", color: "#777BB4" },
  ],
  database: [
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "MySQL", color: "#4479A1" },
    { name: "Redis", color: "#DC382D" },
  ],
  tools: [
    { name: "Docker", color: "#2496ED" },
    { name: "GitHub Actions", color: "#2088FF" },
    { name: "Vercel", color: "#ffffff" },
    { name: "Stripe", color: "#635BFF" },
  ],
};

const categories = [
  { key: "frontend", label: "Frontend", icon: "🎨" },
  { key: "backend", label: "Backend", icon: "⚙️" },
  { key: "database", label: "Database", icon: "🗄️" },
  { key: "tools", label: "Tools", icon: "🛠️" },
] as const;

export default function TechStack() {
  return (
    <section id="tech" className="section bg-[var(--bg-secondary)]/30">
      <div className="wrapper flex flex-col items-center">
        <SectionHeading
          title="Tech Stack"
          subtitle="The technologies I use daily to build high-performance applications."
          gradient
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.key}
              variants={staggerItem}
              className="glass-card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {category.label}
                </h3>
              </div>

              {/* Tech List */}
              <div className="space-y-3">
                {techStack[category.key].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-tertiary)]/50 hover:bg-[var(--bg-tertiary)] border border-transparent hover:border-[var(--border-glass)] transition-all"
                    data-cursor="pointer"
                  >
                    {/* Color Dot */}
                    <div
                      className="w-3 h-3 rounded-full shrink-0 transition-transform group-hover:scale-125"
                      style={{ backgroundColor: tech.color }}
                    />

                    {/* Name */}
                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                      {tech.name}
                    </span>

                    {/* Glow Effect on Hover */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"
                      style={{ backgroundColor: tech.color }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-[var(--border-glass)] flex flex-wrap justify-center gap-4"
        >
          {[
            "REST API",
            "JWT",
            "OAuth",
            "Prisma",
            "Jest",
            "Cypress",
            "CI/CD",
          ].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full bg-[var(--bg-glass)] border border-[var(--border-glass)] text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-glass-hover)] transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
