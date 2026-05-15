"use client";

import { motion } from "framer-motion";

const tools = [
  "Built for Speed",
  "No Fluff. Just Results.",
  "Automate in Days",
  "Always On",
];

export function Integrations() {
  return (
    <section className="border-y border-white/10 bg-black py-16">
      <div className="site-container text-center">
        <p className="mb-8 text-sm font-medium uppercase tracking-widest text-white/40">
          We integrate directly into your existing stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-xl font-bold text-white md:text-2xl"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
