"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import clsx from "clsx";
import { openGHLBooking } from "@/components/ui/ghl-booking";

const faqs = [
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. After launch, we monitor your agents, handle updates, and scale the system as your business grows. You're never left to manage it alone.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most projects go live within 2 to 4 weeks. After our initial call, we move fast: scoping, building, and deploying your AI agents with regular check-ins along the way.",
  },
  {
    question: "What tools do you integrate with?",
    answer:
      "We work with whatever your team already uses: Slack, HubSpot, Notion, Google Workspace, Zapier, custom APIs, and more. If there's an API, we can connect to it.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "Not at all. We handle everything from design to deployment. You just tell us what problems you want solved and we take it from there.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "We scope every project carefully before building, so we only take on work where we're confident AI will deliver real results. That said, we iterate with you and adjust until the agents perform exactly the way you need.",
  },
  {
    question: "How are engagements structured?",
    answer:
      "Most teams start with a focused implementation scope and expand after measurable wins. We provide a fixed project proposal with clear deliverables, timeline, and ownership before kickoff.",
  },
];

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-[#F5F5F0]/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-lg font-medium text-[#F5F5F0] transition-colors duration-300 group-hover:text-[#1f9955] md:text-xl font-sans">
          {question}
        </span>
        <ChevronDown
          className={clsx(
            "h-5 w-5 flex-shrink-0 transition-transform duration-300",
            isOpen ? "rotate-180 text-[#1f9955]" : "text-[#F5F5F0]/40 group-hover:text-[#1f9955]/70"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 text-[#F5F5F0]/70 leading-relaxed font-sans font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="faq" className="section-shell relative bg-[#111111] py-32">
      <div className="site-container max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#1f9955]/30 bg-[#1f9955]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f9955] font-sans">
            Offer & FAQ
          </p>
          <h2 className="mb-6 text-4xl font-normal tracking-tight text-[#F5F5F0] md:text-5xl lg:text-6xl font-heading">
            Clear scope before we build.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#F5F5F0]/70 md:text-xl font-sans font-light">
            Every engagement starts with strategy and ends with production outcomes. You get transparent milestones, communication cadence, and measurable success criteria.
          </p>
        </div>

        {/* The Offer Card */}
        <motion.div
          className="relative mb-20 overflow-hidden rounded-2xl border border-[#F5F5F0]/10 bg-[#F5F5F0]/[0.02] p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1f9955]/10 blur-[80px]" />
          
          <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="mb-6 text-2xl font-normal text-[#F5F5F0] font-heading">
                Typical Engagement
              </h3>
              <ul className="space-y-4">
                {[
                  "Automation opportunity audit & KPI definition",
                  "Custom AI agent design & implementation",
                  "Integration with CRM & communication channels",
                  "Post-launch monitoring & optimization support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 rounded-full bg-[#1f9955]/20 p-1">
                      <Check className="h-3 w-3 text-[#1f9955]" />
                    </div>
                    <span className="text-base leading-relaxed text-[#F5F5F0]/80 font-sans font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col items-start justify-center border-t border-[#F5F5F0]/10 pt-8 md:items-end md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="mb-6 text-lg text-[#F5F5F0]/70 font-sans font-light md:text-right">
                Ready to turn AI from an idea into a dependable operating advantage?
              </p>
              <button 
                onClick={openGHLBooking}
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#1f9955] px-8 text-lg text-[#F5F5F0] transition-all duration-300 font-sans hover:scale-105 hover:bg-[#167a42] focus:outline-none focus:ring-2 focus:ring-[#1f9955] focus:ring-offset-2 focus:ring-offset-[#111111]"
              >
                <span className="mr-2">Book a Strategy Call</span>
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.h3
          className="mb-8 text-center text-3xl font-normal text-[#F5F5F0] font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Common Questions
        </motion.h3>

        <div className="border-t border-[#F5F5F0]/10">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
