"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/projects";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrapper flex flex-col items-center">
        <SectionHeading
          title="Projects"
          subtitle="A selection of my recent work, from SaaS platforms to dashboards and APIs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={staggerItem}
              className="group relative rounded-3xl bg-[var(--bg-glass)] border border-[var(--border-glass)] hover:border-[var(--border-glass-hover)] transition-all duration-500"
              style={{
                boxShadow: `0 0 0 0 ${project.color}00`,
              }}
              whileHover={{
                boxShadow: `0 20px 60px ${project.color}20`,
                y: -8,
              }}
              data-cursor="pointer"
            >
              {/* Image / Gradient Header */}
              <div
                className="relative h-48 rounded-t-3xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 100%)`,
                }}
              >
                {/* Project Screenshot */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* Project Number */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: `${project.color}20`,
                    color: project.color,
                  }}
                >
                  0{index + 1}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur-sm text-xs text-[var(--text-secondary)] uppercase tracking-wider">
                  {project.category}
                </div>

              </div>

              {/* Content */}
              <div style={{ padding: "24px 32px" }}>
                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.frontend?.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={`frontend-${techIndex}`}
                      className="text-xs px-2 py-0.5 rounded-full border border-[var(--border-glass)] text-[var(--text-tertiary)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.backend?.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={`backend-${techIndex}`}
                      className="text-xs px-2 py-0.5 rounded-full border border-[var(--border-glass)] text-[var(--text-tertiary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} strokeWidth={1.5} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} strokeWidth={1.5} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`,
                }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
