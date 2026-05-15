"use client";

// Step 1: Chat/discovery conversation mockup
export function MockupBookACall() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] overflow-hidden font-mono text-sm">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#111]">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-white/30 text-xs">voraxon / strategy call</span>
      </div>
      <div className="p-6 space-y-4">
        {/* Messages */}
        <div className="flex gap-3">
          <span className="text-[#4ade80] flex-shrink-0">Voraxon</span>
          <p className="text-white/70">Hey! Tell me about your biggest time sink right now.</p>
        </div>
        <div className="flex gap-3">
          <span className="text-white/40 flex-shrink-0">You</span>
          <p className="text-white/50">Manually following up with leads. Takes 3 hours a day.</p>
        </div>
        <div className="flex gap-3">
          <span className="text-[#4ade80] flex-shrink-0">Voraxon</span>
          <p className="text-white/70">Got it. We can automate that entirely: CRM triggers, personalized follow-ups, handoff to your team when they&apos;re ready to buy.</p>
        </div>
        <div className="flex gap-3">
          <span className="text-[#4ade80] flex-shrink-0">Voraxon</span>
          <p className="text-white/70">What tools are you currently using?</p>
        </div>
        <div className="flex gap-3">
          <span className="text-white/40 flex-shrink-0">You</span>
          <p className="text-white/50">HubSpot + Gmail + Slack.</p>
        </div>
        <div className="flex gap-3">
          <span className="text-[#4ade80] flex-shrink-0">Voraxon</span>
          <p className="text-white/70">Perfect. All three integrate natively. <span className="text-[#4ade80]">Let&apos;s scope it out →</span></p>
        </div>
      </div>
    </div>
  );
}

// Step 2: Agent config / build terminal
export function MockupWeBuild() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#111]">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-white/30 text-xs">voraxon / agent builder</span>
      </div>
      <div className="p-6 space-y-2">
        <p className="text-white/30">{/* Deploying lead-followup-agent v1.0 */}</p>
        <p><span className="text-[#4ade80]">✓</span> <span className="text-white/60">Connected to HubSpot CRM</span></p>
        <p><span className="text-[#4ade80]">✓</span> <span className="text-white/60">Gmail SMTP configured</span></p>
        <p><span className="text-[#4ade80]">✓</span> <span className="text-white/60">Slack webhook registered</span></p>
        <p><span className="text-[#4ade80]">✓</span> <span className="text-white/60">Trigger: new lead created</span></p>
        <p><span className="text-[#4ade80]">✓</span> <span className="text-white/60">Sequence: 3-touch follow-up (24h, 72h, 7d)</span></p>
        <p><span className="text-[#4ade80]">✓</span> <span className="text-white/60">Handoff rule: reply detected → notify sales</span></p>
        <p className="text-white/30 pt-2">{/* Running test scenarios... */}</p>
        <p><span className="text-[#4ade80]">✓</span> <span className="text-white/60">12/12 scenarios passed</span></p>
        <p className="pt-2 text-[#4ade80]">→ Agent live. Monitoring active.</p>
      </div>
    </div>
  );
}

// Step 3: Metrics / results dashboard
export function MockupYouScale() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#111]">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-white/30 text-xs">voraxon / dashboard</span>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-white/30 text-xs">WEEK 4 SUMMARY: lead-followup-agent</p>
        <div className="grid grid-cols-2 gap-4 pt-1">
          <div className="rounded-lg bg-white/5 p-4">
            <p className="text-white/40 text-xs mb-1">Leads followed up</p>
            <p className="text-2xl font-bold text-white">247</p>
            <p className="text-[#4ade80] text-xs mt-1">↑ 100% automated</p>
          </div>
          <div className="rounded-lg bg-white/5 p-4">
            <p className="text-white/40 text-xs mb-1">Hours saved</p>
            <p className="text-2xl font-bold text-white">21h</p>
            <p className="text-[#4ade80] text-xs mt-1">↑ this week</p>
          </div>
          <div className="rounded-lg bg-white/5 p-4">
            <p className="text-white/40 text-xs mb-1">Reply rate</p>
            <p className="text-2xl font-bold text-white">99%</p>
            <p className="text-[#4ade80] text-xs mt-1">↑ vs 12% manual</p>
          </div>
          <div className="rounded-lg bg-white/5 p-4">
            <p className="text-white/40 text-xs mb-1">Agent uptime</p>
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-[#4ade80] text-xs mt-1">24/7 active</p>
          </div>
        </div>
      </div>
    </div>
  );
}
