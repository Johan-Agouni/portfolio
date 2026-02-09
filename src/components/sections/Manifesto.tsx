"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Manifesto() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="wrapper flex justify-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          {/* The open letter */}
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[var(--text-secondary)]"
            >
              <span className="text-[var(--text-primary)] font-medium">
                I&apos;m 20, self-taught, building web apps from Aix-en-Provence.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[var(--text-secondary)]"
            >
              I use AI tools heavily and I&apos;m not ashamed of it — what
              matters is that I ship products that work. I don&apos;t have 10
              years of experience or a CS degree. What I have is 4 real
              projects, an obsession for clean code, and the ability to learn
              anything fast.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[var(--text-secondary)]"
            >
              Most portfolios tell you what you want to hear.{" "}
              <span className="text-[var(--text-primary)] font-medium">
                This one tells you the truth.
              </span>
            </motion.p>
          </div>

          {/* Signature line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 pt-8 border-t border-[var(--border-glass)]"
          >
            <p className="text-sm text-[var(--text-tertiary)] italic">
              — Johan, somewhere between a terminal and a coffee machine
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
