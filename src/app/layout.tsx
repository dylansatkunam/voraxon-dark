import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GHLScript } from "@/components/ui/ghl-booking";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voraxon.ai"),
  title: "Voraxon | AI Systems That Drive Business Outcomes",
  description: "Voraxon designs and deploys custom AI agent systems for growth-focused teams. Improve execution speed, reduce repetitive work, and scale with confidence.",
  alternates: {
    canonical: "https://voraxon.ai",
  },
  openGraph: {
    title: "Voraxon | AI Systems That Drive Business Outcomes",
    description: "Custom AI agent implementation, workflow automation, and system integrations for teams that need reliable results.",
    url: "https://voraxon.ai",
    siteName: "Voraxon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voraxon AI systems and automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voraxon | AI Systems That Drive Business Outcomes",
    description: "AI agent implementation and automation for teams that need dependable execution.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#0a0a0a",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://voraxon.ai/#organization",
      "name": "Voraxon",
      "url": "https://voraxon.ai",
      "logo": "https://voraxon.ai/favicon.svg",
      "description": "Voraxon builds custom AI agents and workflow automation for businesses. We handle the repetitive work so your team can focus on growth.",
      "knowsAbout": ["AI agents", "workflow automation", "CRM integrations"],
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://voraxon.ai/#website",
      "url": "https://voraxon.ai",
      "name": "Voraxon",
      "publisher": { "@id": "https://voraxon.ai/#organization" }
    },
    {
      "@type": "Service",
      "@id": "https://voraxon.ai/#service",
      "name": "AI Agents & Automation",
      "provider": { "@id": "https://voraxon.ai/#organization" },
      "description": "Custom AI agent implementation for lead operations, workflow automation, and system integrations.",
      "serviceType": "AI Automation",
      "areaServed": "Worldwide"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <GHLScript />
        {children}
      </body>
    </html>
  );
}
