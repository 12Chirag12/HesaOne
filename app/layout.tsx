import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { companyInfo } from "@/lib/siteData";

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
  metadataBase: new URL("https://www.hesaonellp.com"),
  title: {
    default: "HESAONE LLP | Industrial Health, Safety & Environment Engineering Advisory",
    template: "%s | HESAONE LLP"
  },
  description:
    "HESAONE LLP (Est. 2018) is a DISH Approved industrial Health, Safety & Environment (HSE) engineering advisory. Providing HAZOP, HIRA, PSSR, Fire Safety Audits, ETP Troubleshooting, and 20,000+ M/Hrs of certified training.",
  keywords: [
    "HESAONE LLP",
    "HESA-ONE LLP",
    "DISH Approved Safety Auditor Maharashtra",
    "HAZOP Study Palghar Boisar",
    "Process Safety Studies HIRA LOPA",
    "Factory Layout Approval DISH",
    "ETP Troubleshooting Water Auditing",
    "Industrial Fire Safety Audit Hydrant AMC",
    "Behavior Based Safety BBS Training",
    "Aarti Industries Safety Consultant",
    "Mahindra Safety Consultant"
  ],
  authors: [{ name: "HESAONE LLP" }],
  openGraph: {
    title: "HESAONE LLP | Industrial HSE & Process Safety Advisory",
    description:
      "DISH Approved Industrial Safety Auditor practice. 20+ years of engineering leadership, 20,000+ training man-hours delivered across Automotive, Chemical, and Pharma sectors.",
    url: "https://www.hesaonellp.com",
    siteName: "HESAONE LLP",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HESAONE LLP | Total Safety Solutions",
    description:
      "DISH Approved Industrial Health, Safety & Environmental Advisory. Formed in 2018. Serving Mahindra, Aarti Industries, Lupin, HPCL."
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
    alternateName: "HESA-ONE LLP",
    slogan: companyInfo.sanskritMotto,
    foundingDate: "2018",
    description: companyInfo.mission,
    email: companyInfo.email,
    telephone: companyInfo.phones[0].number,
    url: "https://www.hesaonellp.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyInfo.headOffice.addressLine1}, ${companyInfo.headOffice.addressLine2}`,
      addressLocality: "Boisar",
      addressRegion: "Maharashtra",
      postalCode: companyInfo.headOffice.pinCode,
      addressCountry: "IN"
    },
    alumni: [
      {
        "@type": "Person",
        name: "Mr. V. Raghunath",
        jobTitle: "Principal Safety Consultant"
      },
      {
        "@type": "Person",
        name: "Mr. Jitendra Thakur",
        jobTitle: "Associate Partner & Safety Consultant"
      }
    ],
    serviceType: [
      "Process Safety Studies (HAZOP / HIRA / PSSR / LOPA)",
      "Safety System Implementation (PTW / BBS / CAPA)",
      "Industrial Fire & Life Safety (Hydrant AMC / Fire Audit / OEP)",
      "Environmental & Pollution Control (ETP Troubleshooting / Water Audit)",
      "Engineering Services & Factory Licensing Support (DISH Layout Approval)",
      "HSE Training & Workforce Competency"
    ]
  };

  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
      </head>
      <body className="bg-white text-corporate-dark antialiased min-h-screen flex flex-col selection:bg-sky-100 selection:text-sky-900">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
