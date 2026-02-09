"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const highlights = [
  {
    icon: MapPin,
    title: "Based in",
    value: "Aix-en-Provence",
  },
  {
    icon: Calendar,
    title: "Learning since",
    value: "2+ years",
  },
  {
    icon: Coffee,
    title: "Coffees / day",
    value: "∞",
  },
  {
    icon: Code2,
    title: "Projects built",
    value: "4",
  },
];

const techCategories = [
  {
    title: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    techs: ["Node.js", "NestJS", "Express", "PHP"],
  },
  {
    title: "Database",
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "DevOps",
    techs: ["Docker", "GitHub Actions", "Vercel", "Railway"],
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrapper flex flex-col items-center">
        <SectionHeading
          title="About"
          subtitle="Passionate about web development for over 2 years, I build applications that combine performance, design and user experience."
        />

        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.p
              variants={staggerItem}
              className="text-lg text-[var(--text-secondary)]"
            >
              Full-Stack developer specializing in building modern and
              high-performance web applications. My approach combines solid
              technical skills with a strong focus on design and user experience.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg text-[var(--text-secondary)]"
            >
              I build everything from SaaS platforms to admin dashboards,
              e-commerce sites and complex APIs. Always learning, always shipping.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-glass)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <item.icon size={20} className="text-[var(--accent-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-tertiary)]">
                      {item.title}
                    </div>
                    <div className="font-semibold text-[var(--text-primary)]">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Tech Stack */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {techCategories.map((category, index) => (
              <GlassCard
                key={index}
                variants={staggerItem}
                hover3D
                className="space-y-3"
              >
                <h4 className="text-sm font-semibold text-[var(--accent-primary)] uppercase tracking-wider">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-glass)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
