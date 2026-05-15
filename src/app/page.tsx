import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyVoraxon } from "@/components/sections/WhyVoraxon";
import { Integrations } from "@/components/sections/Integrations";
import { Pricing } from "@/components/sections/Pricing";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Integrations />
      <SocialProof />
      <WhatWeBuild />
      <WhyVoraxon />
      <HowItWorks />
      <Pricing />
      <CtaSection />
      <Footer />
    </main>
  );
}
