import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hesaone.com"),
  title: {
    default: "HESAONE LLP | Industrial Health, Safety & Environment Engineering Advisory",
    template: "%s | HESAONE LLP"
  },
  description:
    "Specialized industrial HSE advisory, Process Hazard Analysis (HAZOP / LOPA), statutory compliance (Factories Act / MSIHC / PESO), ISO 45001 systems, and fire protection engineering for high-hazard process facilities.",
  keywords: [
    "Industrial HSE Consulting",
    "Process Safety Management",
    "HAZOP Study India",
    "Factories Act 1948 Safety Compliance",
    "MSIHC Rules Audit",
    "ISO 45001 Certification Advisory",
    "Fire Risk Assessment NFPA",
    "Machine Guarding ISO 12100",
    "LOTO Energy Isolation",
    "HESAONE LLP"
  ],
  authors: [{ name: "HESAONE LLP" }],
  openGraph: {
    title: "HESAONE LLP | Industrial Health, Safety & Environment Engineering",
    description:
      "Engineering process safety. Protecting industrial lives. Certified technical advisory, qualitative & quantitative hazard studies, and statutory compliance across high-hazard operations.",
    url: "https://hesaone.com",
    siteName: "HESAONE LLP",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HESAONE LLP | Industrial Safety Engineering",
    description:
      "Specialized Process Safety (PSM), HAZOP, and statutory HSE advisory for manufacturing, chemical, and energy operations."
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "HESAONE LLP",
    image: "https://hesaone.com/images/hesaone-industrial-hero.jpg",
    description:
      "Specialized industrial Health, Safety and Environment (HSE) engineering advisory, Process Hazard Analysis (HAZOP / LOPA), and statutory compliance for high-hazard industrial operations.",
    email: "hesaonellp@gmail.com",
    url: "https://hesaone.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN"
    },
    serviceType: [
      "Process Safety & Risk Studies (HAZOP / LOPA)",
      "Safety Management Systems (ISO 45001 / Factories Act)",
      "Industrial Fire & Emergency Safety Engineering",
      "Environmental Compliance & SPCB Consents",
      "Technical Machine Guarding & Energy Isolation (LOTO)",
      "Competency-Based HSE Workforce Training"
    ]
  };

  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Figma MCP Capture Script */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
      </head>
      <body>
        <Header />
        <main className="main-content-flow">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
