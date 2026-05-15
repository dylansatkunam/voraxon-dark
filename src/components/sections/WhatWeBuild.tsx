"use client";

import { motion } from "framer-motion";
import { Bot, Hammer, TrendingUp } from "lucide-react";

const features = [
  {
    title: "01. AI Agents",
    description: "Handle customer inquiries, qualify leads, and support tickets. Around the clock.",
    icon: Bot,
  },
  {
    title: "02. Workflow Automation",
    description: "Eliminate the repetitive tasks draining your team's time and energy.",
    icon: Hammer,
  },
  {
    title: "03. Custom Integrations",
    description: "Connect your CRM, email, Slack, and tools into one seamless system.",
    icon: TrendingUp,
  },
];

export function WhatWeBuild() {
  return (
    <section id="services" className="section-shell relative bg-[#111111] py-32">
      <div className="site-container">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-normal text-[#F5F5F0] md:text-5xl lg:text-6xl mb-6 font-heading tracking-tight">
            What We <span className="italic text-[#F5F5F0]/60">Build.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <article className="group flex h-full flex-col rounded-2xl border border-[#F5F5F0]/10 bg-[#F5F5F0]/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f9955]/30 hover:bg-[#F5F5F0]/[0.04]">
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1f9955]/10 text-[#1f9955] transition-colors duration-300 group-hover:bg-[#1f9955]/20">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-2xl font-normal text-[#F5F5F0] font-heading tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-[#F5F5F0]/70 font-sans font-light">
                  {feature.description}
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
