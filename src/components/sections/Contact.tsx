"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, ArrowRight, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "agouni.johan@proton.me",
    href: "mailto:agouni.johan@proton.me",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Aix-en-Provence, France",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Johan-Agouni",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/johan-agouni",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // EmailJS integration — replace these IDs with your own from https://emailjs.com
      const emailjs = await import("@emailjs/browser");

      await emailjs.sendForm(
        "service_0dv4qpj",
        "template_29uip4m",
        formRef.current!,
        "s2nL-AaYOZ74jHx0E"
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError("Failed to send message. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section">
      <div className="wrapper flex flex-col items-center">
        <SectionHeading
          title="Contact"
          subtitle="Have a project in mind? Let's talk! I'm available for new collaborations."
        />

        <div className="w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            {/* Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="glass-card p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <info.icon size={22} className="text-[var(--accent-primary)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-tertiary)]">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                        data-cursor="pointer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-[var(--text-primary)]">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={staggerItem}>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-5 uppercase tracking-wider">
                Find me on
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Johan-Agouni"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors bg-[var(--bg-glass)] border border-[var(--border-glass)]"
                  style={{ color: "#a1a1aa" }}
                  data-cursor="pointer"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/johan-agouni"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors bg-[var(--bg-glass)] border border-[var(--border-glass)]"
                  style={{ color: "#a1a1aa" }}
                  data-cursor="pointer"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={staggerItem}
              className="glass-card p-5 md:p-8 space-y-5"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Ready to start your project?
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">
                I&apos;m available for freelance work. Get in touch to discuss
                your project and get a free quote.
              </p>
              <p className="text-[var(--text-tertiary)] text-xs">
                Disponible en France et à l&apos;international.
              </p>
              <MagneticButton href="mailto:agouni.johan@proton.me" variant="primary">
                Send an email
                <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-5 md:p-8 space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm text-[var(--text-secondary)]"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-glass)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm text-[var(--text-secondary)]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-glass)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm text-[var(--text-secondary)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-glass)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none"
                  placeholder="Describe your project..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white"
                }`}
                data-cursor="pointer"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : isSubmitted ? (
                  <>
                    <span>Message sent!</span>
                    <span>✓</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
