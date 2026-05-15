"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function SocialProof() {
  return (
    <section id="outcomes" className="section-shell pt-10">
      <div className="site-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">See the Difference</h2>
          <p className="mt-4 text-lg text-white/60">See how AI-powered workflows outperform manual operations.</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Without Voraxon */}
          <motion.div 
            className="rounded-2xl border border-white/5 bg-white/[0.01] p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-xl font-semibold text-white/50">Without AI Systems</h3>
              <span className="rounded bg-red-500/10 px-2 py-1 text-xs font-medium text-red-500">Manual</span>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 rounded-full bg-red-500/10 p-1">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-white/80">Delayed Follow-up</p>
                  <p className="text-sm text-white/40">Leads wait hours or days for a response, killing conversion rates.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 rounded-full bg-red-500/10 p-1">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-white/80">Expensive Scaling</p>
                  <p className="text-sm text-white/40">Growing volume means hiring more staff for repetitive tasks.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 rounded-full bg-red-500/10 p-1">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <p className="font-medium text-white/80">Inconsistent Data</p>
                  <p className="text-sm text-white/40">Manual CRM entry leads to messy data and lost opportunities.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* With Voraxon */}
          <motion.div 
            className="rounded-2xl border border-[#4ade80]/30 bg-[#4ade80]/5 p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6 flex items-center justify-between border-b border-[#4ade80]/20 pb-4">
              <h3 className="text-xl font-semibold text-white">With Voraxon</h3>
              <span className="rounded bg-[#4ade80]/20 px-2 py-1 text-xs font-medium text-[#4ade80]">Automated</span>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 rounded-full bg-[#4ade80]/20 p-1">
                  <Check className="h-4 w-4 text-[#4ade80]" />
                </div>
                <div>
                  <p className="font-medium text-white">Instant Response (24/7)</p>
                  <p className="text-sm text-white/70">Leads are qualified and booked in minutes, even at 2 AM.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 rounded-full bg-[#4ade80]/20 p-1">
                  <Check className="h-4 w-4 text-[#4ade80]" />
                </div>
                <div>
                  <p className="font-medium text-white">Infinite Scale</p>
                  <p className="text-sm text-white/70">Handle 10 or 10,000 inquiries a day without adding headcount.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 rounded-full bg-[#4ade80]/20 p-1">
                  <Check className="h-4 w-4 text-[#4ade80]" />
                </div>
                <div>
                  <p className="font-medium text-white">Perfect Synchronization</p>
                  <p className="text-sm text-white/70">Every action is instantly logged to your CRM, Slack, and email.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
