"use client";

import { motion } from "framer-motion";
import { openGHLBooking } from "@/components/ui/ghl-booking";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
      {/* Premium Enterprise Background with Artifacts */}
      <div className="absolute inset-0 -z-10 bg-[#111111]" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#F5F5F0_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03]" 
      />

      {/* Glowing Orbs for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1f9955] opacity-[0.15] blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-[#1f9955] opacity-[0.08] blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="site-container relative z-10 flex flex-col items-center text-center">
        <motion.h1
          className="mb-8 max-w-4xl text-5xl font-normal tracking-tight text-[#F5F5F0] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The AI Team <br />
          <span className="text-[#F5F5F0]/50 italic">Behind Your Business.</span>
        </motion.h1>

        <motion.p
          className="mb-10 max-w-xl text-lg text-[#F5F5F0]/70 md:text-xl leading-relaxed font-sans font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We build custom AI workers that handle the repetitive work. Your team focuses on what actually grows the business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            onClick={openGHLBooking}
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#1f9955] px-8 font-sans text-lg text-[#F5F5F0] transition-all duration-300 hover:bg-[#167a42] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1f9955] focus:ring-offset-2 focus:ring-offset-[#111111]"
          >
            <span className="mr-2">Get Your System Built</span>
            <svg 
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
