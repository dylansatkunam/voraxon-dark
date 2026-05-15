"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "discover",
    title: "01",
    heading: "Book a Call",
    description:
      "Tell our team about your business, workflows, and biggest bottlenecks. We&apos;ll identify exactly where AI agents can save you the most time and money.",
  },
  {
    id: "build",
    title: "02",
    heading: "We Build Your AI Team",
    description:
      "We design, build, and deploy custom AI agents tailored to your operations. Integrated with your existing tools, tested against real scenarios, and monitored from day one.",
  },
  {
    id: "scale",
    title: "03",
    heading: "You Scale Faster",
    description:
      "Your AI team works 24/7. You get hours back every week, reduce errors, and free your people to focus on what actually grows your business.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="section-shell bg-white/[0.015]">
      <div className="site-container">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker mb-4">How It Works</p>
          <h2 className="section-title mb-4">A simple rollout process with clear accountability.</h2>
          <p className="section-copy">You always know what is being built, why it matters, and how success is measured.</p>
        </div>
        <div className="space-y-5">
          {steps.map((step, index) => (
            <motion.article
              key={step.id}
              className="glass-panel grid gap-5 p-6 md:grid-cols-[84px_1fr] md:items-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <p className="text-3xl font-semibold text-[#4ade80]">{step.title}</p>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">{step.heading}</h3>
                <p className="text-white/65">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
