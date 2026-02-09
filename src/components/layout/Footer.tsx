"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Johan-Agouni",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/johan-agouni",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:agouni.johan@proton.me",
    icon: Mail,
  },
];

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-[var(--border-glass)] bg-[var(--bg-secondary)]/50">
      <div className="wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="gradient-text">Johan</span>
              <span className="text-[var(--text-secondary)]">.dev</span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm max-w-xs">
              Passionate Full-Stack developer, turning ideas into
              high-performance modern web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors"
                    data-cursor="pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Follow me
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-[var(--bg-glass)] border border-[var(--border-glass)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-glass-hover)] transition-colors"
                  data-cursor="pointer"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border-glass)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-tertiary)] text-sm flex items-center gap-1">
            © {currentYear} Johan Agouni. Made with
            <Heart size={14} className="text-[var(--accent-tertiary)] fill-current" />
            in Aix-en-Provence
          </p>
          <p className="text-[var(--text-tertiary)] text-xs">
            Design & Développement par{" "}
            <span className="gradient-text font-medium">Johan Agouni</span>
          </p>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-50" />
    </footer>
  );
}
