import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://hesaone.com"),
  title: {
    default: "HESAONE LLP | Industrial Health, Safety & Environment (HSE) Solutions",
    template: "%s | HESAONE LLP"
  },
  description:
    "Integrated Health, Safety, and Environment (HSE) consulting, Process Safety Management (PSM), HAZOP studies, ISO 45001 compliance, and fire safety engineering for high-hazard industries.",
  keywords: [
    "HSE consulting",
    "Process Safety Management",
    "HAZOP study",
    "ISO 45001 audit",
    "Fire risk assessment",
    "Industrial safety engineering",
    "Behavior-based safety",
    "QRA risk analysis",
    "Environmental compliance EIA",
    "HESAONE LLP"
  ],
  authors: [{ name: "HESAONE LLP" }],
  openGraph: {
    title: "HESAONE LLP | Health, Safety & Environment Solutions",
    description:
      "Building safer industries. Protecting every tomorrow. Practical guidance, technical expertise, and zero-harm engineering for industrial operations.",
    url: "https://hesaone.com",
    siteName: "HESAONE LLP",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HESAONE LLP | Industrial HSE Solutions",
    description: "Integrated Health, Safety & Environment engineering for safer, resilient industries."
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
      "Integrated Health, Safety and Environment solutions for heavy manufacturing, chemical, infrastructure, energy, and logistics industries.",
    email: "hesaonellp@gmail.com",
    telephone: "+91-0000000000",
    url: "https://hesaone.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN"
    },
    areaServed: "Pan-National & Global Industrial Corridors",
    serviceType: [
      "Process Safety & Risk Studies",
      "Safety Management Systems (ISO 45001 / ISO 14001)",
      "Fire & Emergency Safety Engineering",
      "Environment & Sustainability Solutions",
      "Technical Safety & Machinery Guarding",
      "Workforce Safety Training & Culture"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
