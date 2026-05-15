"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { openGHLBooking } from "@/components/ui/ghl-booking";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="site-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Image src="/voraxon-black.png" alt="Voraxon Logo" width={240} height={50} className="h-10 w-auto object-contain invert brightness-0" />

          {/* Nav Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={openGHLBooking}
              className="text-sm font-medium text-voraxon-accent transition-colors hover:text-voraxon-accent/80"
            >
              Book a Strategy Call
            </button>
          </nav>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Copyright */}
        <div className="text-center text-sm text-white/50">
          © 2026 Voraxon. Built for measurable outcomes.
        </div>
      </div>
    </footer>
  );
}
