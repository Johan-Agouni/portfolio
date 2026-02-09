"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Server,
  Smartphone,
  Shield,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Landing pages, websites and custom web applications built with the latest technologies.",
    features: ["React / Next.js", "SEO optimized", "A+ Performance"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Admin",
    description:
      "Complete admin interfaces with data visualizations and advanced management features.",
    features: ["Data visualization", "Real-time", "Roles & permissions"],
  },
  {
    icon: Server,
    title: "API & Backend",
    description:
      "Robust and scalable RESTful APIs for your applications.",
    features: ["Node.js / NestJS", "Documentation", "Automated tests"],
  },
  {
    icon: Smartphone,
    title: "SaaS Applications",
    description:
      "Complete SaaS solutions with subscriptions, multi-tenancy and third-party integrations.",
    features: ["Multi-tenant", "Stripe payments", "Scalable"],
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "OWASP compliance audits and protection against common vulnerabilities.",
    features: ["OWASP Top 10", "JWT / OAuth", "Rate limiting"],
  },
  {
    icon: Zap,
    title: "Optimization",
    description:
      "Performance audits and optimization of your existing applications.",
    features: ["Core Web Vitals", "Caching", "CDN"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-[var(--bg-secondary)]/30">
      <div className="wrapper flex flex-col items-center">
        <SectionHeading
          title="Services"
          subtitle="Custom solutions to meet all your web development needs."
          gradient
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <GlassCard
              key={index}
              variants={staggerItem}
              hover3D
              glow
              className="group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon
                  size={28}
                  className="text-[var(--accent-primary)]"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-secondary)] text-sm mb-5">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl" />
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
