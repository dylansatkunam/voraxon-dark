"use client";

import { useEffect } from "react";

const GHL_CALENDAR_ID = "3UCwFBXcnCACRg2wCYfH";
const GHL_BOOKING_URL = `https://api.leadconnectorhq.com/widget/booking/${GHL_CALENDAR_ID}`;

export function openGHLBooking() {
  // Open GHL booking in a new tab as fallback for popup usage
  if (typeof window !== "undefined") {
    window.open(GHL_BOOKING_URL, "_blank");
  }
}

export function GHLScript() {
  useEffect(() => {
    const existingScript = document.getElementById("ghl-form-embed");
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.id = "ghl-form-embed";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById("ghl-form-embed");
      if (s) document.body.removeChild(s);
    };
  }, []);

  return null;
}

export function GHLBookingEmbed() {
  return (
    <>
      <GHLScript />
      <iframe
        src={GHL_BOOKING_URL}
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        id={`${GHL_CALENDAR_ID}_1776885925937`}
        className="min-h-[700px]"
      />
    </>
  );
}
