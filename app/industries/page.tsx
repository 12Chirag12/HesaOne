import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap,
  ArrowUpRight,
  AlertTriangle,
  Scale,
  ShieldCheck,
  CheckCircle2,
  LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import ClientLogos from "@/components/ClientLogos";
import { industriesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Industries We Serve | Chemical, Automotive, Pharma & Heavy Engineering",
  description:
    "HESAONE delivers deep-domain HSE safety solutions tailored to high-consequence industries: Chemical & Petrochemicals, Automotive & Precision Engineering, Pharmaceuticals & Bulk Drugs, Polymers & Synthetics, and Utilities.",
};

const iconMap: Record<string, LucideIcon> = {
  FlaskConical,
  Factory,
  Building2,
  Truck,
  Zap
};

const industryImages: Record<string, string> = {
  "chemical-petrochemical": "/images/industry-chemical.jpg",
  "automotive-engineering": "/images/industry-automotive.jpg",
  "pharmaceutical-bulk-drugs": "/images/industry-manufacturing.jpg",
  "polymers-packaging": "/images/industry-polymers.jpg",
  "infrastructure-utilities": "/images/industry-manufacturing.jpg",
};

const verifiedClientsBySector: Record<string, string[]> = {
  "chemical-petrochemical": ["Aarti Industries", "HPCL", "IGPL", "Val Organics", "Apcotex"],
  "automotive-engineering": ["Mahindra & Mahindra", "Bosch", "Viraj Profiles", "JSW Steel"],
  "pharmaceutical-bulk-drugs": ["Lupin Ltd.", "Ajanta Pharma", "Ipca Laboratories"],
  "polymers-packaging": ["Polygenta Technologies", "Ester Industries"],
  "infrastructure-utilities": ["HPCL Terminals", "Chemical Warehousing Corridors"]
};

export default function IndustriesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: "Industries We Serve" }]} />

      {/* Hero Header */}
      <section className="bg-white text-slate-900 py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden blueprint-grid-light">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
            <span>SECTOR EXPERTISE &bull; OPERATIONAL PHYSICS</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Safety solutions engineered for{" "}
              <span className="text-sky-600">your operational physics.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Industrial safety cannot be one-size-fits-all. A batch chemical reactor faces fundamentally different failure modes than an automotive automated assembly plant or bulk fuel terminal. We design our technical interventions around your specific operational physics and statutory obligations.
            </p>
          </div>
        </div>
      </section>

      {/* Fast Sector Navigation Anchor Strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <span className="font-mono text-sky-700 uppercase font-bold tracking-wider text-[11px] shrink-0">
            EXPLORE INDUSTRIAL SECTORS:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {industriesData.map((ind) => (
              <a
                key={ind.no}
                href={`#${ind.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-sky-400 transition-colors font-mono text-[11px] shadow-2xs"
              >
                <b className="text-sky-600">{ind.no}</b>
                <span>{ind.title.split("&")[0].trim()}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Client Trust Roster */}
      <ClientLogos />

      {/* Industries Detailed Sections */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {industriesData.map((ind) => {
          const Icon = iconMap[ind.iconName] || Factory;
          const photoSrc = industryImages[ind.slug];
          const sectorClients = verifiedClientsBySector[ind.slug] || [];

          return (
            <article
              key={ind.slug}
              id={ind.slug}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm scroll-mt-24 space-y-8 hover:border-sky-400 transition-colors"
            >
              {/* Authentic Photo Banner */}
              {photoSrc && (
                <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src={photoSrc}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6 text-white">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded bg-sky-600 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                        SECTOR {ind.no}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {ind.tagline}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                  <Icon size={26} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {ind.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">{ind.tagline}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {ind.description}
              </p>

              {/* Verified Sector Engagements Pill Strip */}
              {sectorClients.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-700 block">
                    VERIFIED CLIENTS &amp; REPRESENTATIVE INDUSTRIAL ENGAGEMENTS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {sectorClients.map((client) => (
                      <span
                        key={client}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 2-column Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Left: Hazards & Compliance */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <h4 className="font-mono text-xs font-bold text-sky-700 uppercase tracking-wider flex items-center gap-2">
                      <AlertTriangle size={15} />
                      <span>Typical Hazard Exposures</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {ind.typicalHazards.map((hazard) => (
                        <li key={hazard} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                          <span>{hazard}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Scale size={15} className="text-sky-600" />
                      <span>Key Compliance Frameworks</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {ind.complianceStandards.map((std) => (
                        <span
                          key={std}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-[11px] font-mono shadow-2xs"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Tailored Solutions & Outcome */}
                <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck size={16} className="text-emerald-700" />
                      <span>Tailored HESAONE Interventions</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs text-slate-600">
                      {ind.solutionsProvided.map((sol) => (
                        <li key={sol} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1 shadow-2xs">
                      <span className="font-mono text-[10px] uppercase font-bold text-sky-700 tracking-wider block">
                        CORE ENGINEERING OBJECTIVE
                      </span>
                      <p className="text-xs text-slate-900 font-semibold leading-relaxed">
                        {ind.outcomes}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/contact?sector=${encodeURIComponent(ind.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-sky-600 text-white text-xs sm:text-sm font-semibold hover:bg-sky-700 transition-colors shadow-2xs"
                  >
                    <span>Consult on {ind.title.split("&")[0].trim()} Profile</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA */}
      <CTASection
        title="Operating a specialized industrial facility?"
        subtitle="HESAONE advises heavy process installations including bulk chemical terminals, continuous fabrication plants, and energy substations. Contact our team to review your facility's hazard profile under bilateral NDA."
        primaryBtnText="Speak with an Industry Specialist"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
