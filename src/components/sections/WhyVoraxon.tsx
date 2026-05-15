"use client";

import { motion } from "framer-motion";

const valueProps = [
  {
    title: "Always On",
    description: "Operate 24/7 without interruption. Capture every lead and execute workflows seamlessly.",
  },
  {
    title: "Built for Your Business",
    description: "Not generic software. Every agent is designed around your specific workflows.",
  },
  {
    title: "Real ROI",
    description: "Less time on repetitive tasks. More time on work that actually moves the needle.",
  },
];

const caseSnapshots = [
  {
    industry: "Home Services",
    result: "Response times dropped from hours to under two minutes.",
  },
  {
    industry: "Professional Services",
    result: "Fully automated lead qualification and follow-up.",
  },
  {
    industry: "Local Healthcare",
    result: "Eliminated manual data entry for client intake.",
  },
];

export function WhyVoraxon() {
  return (
    <section className="section-shell relative py-32">
      <div className="site-container">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#1f9955]/30 bg-[#1f9955]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f9955] font-sans">
            Why Voraxon
          </p>
          <h2 className="mb-6 text-4xl font-normal text-[#F5F5F0] md:text-5xl lg:text-6xl font-heading tracking-tight">
            Built for teams that care about results, <span className="italic text-[#F5F5F0]/60">not AI theater.</span>
          </h2>
          <p className="text-lg text-[#F5F5F0]/70 md:text-xl leading-relaxed font-sans font-light">
            We blend strategic thinking, technical depth, and operational rigor to make automation dependable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
          {/* Card 1: Always On (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#F5F5F0]/10 bg-[#F5F5F0]/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f9955]/30 hover:bg-[#F5F5F0]/[0.04] md:col-span-2 md:row-span-1"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1f9955]/10 blur-[80px] transition-all duration-500 group-hover:bg-[#1f9955]/20" />
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1f9955]/10 text-[#1f9955]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-3xl font-normal text-[#F5F5F0] font-heading">{valueProps[0].title}</h3>
              <p className="max-w-md text-lg leading-relaxed text-[#F5F5F0]/70 font-sans font-light">
                {valueProps[0].description}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Built for Your Business */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#F5F5F0]/10 bg-[#F5F5F0]/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f9955]/30 hover:bg-[#F5F5F0]/[0.04] md:col-span-1 md:row-span-1"
          >
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1f9955]/10 text-[#1f9955]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-normal text-[#F5F5F0] font-heading">{valueProps[1].title}</h3>
              <p className="text-base leading-relaxed text-[#F5F5F0]/70 font-sans font-light">
                {valueProps[1].description}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Real ROI */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#F5F5F0]/10 bg-[#F5F5F0]/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f9955]/30 hover:bg-[#F5F5F0]/[0.04] md:col-span-1 md:row-span-1"
          >
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1f9955]/10 text-[#1f9955]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-normal text-[#F5F5F0] font-heading">{valueProps[2].title}</h3>
              <p className="text-base leading-relaxed text-[#F5F5F0]/70 font-sans font-light">
                {valueProps[2].description}
              </p>
            </div>
          </motion.div>

          {/* Card 4: Case Snapshots (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-[#F5F5F0]/10 bg-[#F5F5F0]/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f9955]/30 hover:bg-[#F5F5F0]/[0.04] md:col-span-2 md:row-span-1"
          >
            <div className="relative z-10 flex h-full flex-col justify-center">
              <h3 className="mb-8 text-2xl font-normal text-[#F5F5F0] font-heading">Proven Outcomes</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {caseSnapshots.map((snapshot) => (
                  <div key={snapshot.industry} className="flex flex-col gap-2 border-l-2 border-[#1f9955]/30 pl-4 transition-colors duration-300 group-hover:border-[#1f9955]">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1f9955] font-sans">
                      {snapshot.industry}
                    </p>
                    <p className="text-sm leading-relaxed text-[#F5F5F0]/80 font-sans font-light">
                      {snapshot.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
