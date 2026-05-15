"use client";

import { motion } from "framer-motion";
import { openGHLBooking } from "@/components/ui/ghl-booking";
import { ButtonColorful } from "@/components/ui/button-colorful";

export function CtaSection() {
  return (
    <section className="section-shell bg-gradient-to-b from-white/[0.02] to-voraxon-bg">
      <div className="site-container">
        <motion.h2
          className="section-title mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to build your AI team?
        </motion.h2>

        <motion.p
          className="section-copy mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Book a free strategy call. We&apos;ll show you exactly where AI can save you time and money.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ButtonColorful onClick={openGHLBooking} label="Book a Strategy Call" className="h-auto px-8 py-6 text-base" />
        </motion.div>
      </div>
    </section>
  );
}
