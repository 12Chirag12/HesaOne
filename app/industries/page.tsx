import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Scale,
  LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { industriesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Industries Served | Chemical, Heavy Engineering, Logistics & Energy",
  description:
    "Tailored industrial safety, process risk engineering, and environmental compliance for high-hazard sectors: Chemical, Manufacturing, Infrastructure, Logistics, and Energy."
};

const iconMap: Record<string, LucideIcon> = {
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap
};

const industryImages: Record<string, string> = {
  "manufacturing-engineering": "/images/industry-manufacturing.jpg",
  "chemical-pharmaceuticals": "/images/industry-chemical.jpg",
  "infrastructure-construction": "/images/hse-inspection.jpg",
  "logistics-warehousing": "/images/industry-logistics.jpg",
  "energy-power-utilities": "/images/industry-energy.jpg",
};

export default function IndustriesPage() {
  return (
    <div className="bg-limestone-warm min-h-screen">
      <Breadcrumb items={[{ label: "Industries We Serve" }]} />

      {/* Hero Header */}
      <section className="bg-canopy text-white py-16 lg:py-20 border-b border-canopy-border relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canopy-subtle border border-safety/30 text-safety-light text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
            <span>SECTOR SPECIALIZATION &bull; OPERATIONAL REALITY</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Safety solutions engineered for<br />
            <span className="italic text-safety-light font-normal">your operational physics.</span>
          </h1>

          <p className="text-base sm:text-lg text-limestone-muted max-w-3xl leading-relaxed">
            Industrial safety cannot be one-size-fits-all. A continuous chemical reactor faces fundamentally different failure modes than an automated high-bay fulfillment warehouse or a medium-voltage substation. We design our technical interventions around your specific operational physics and statutory obligations.
          </p>
        </div>
      </section>

      {/* Fast Sector Navigation Anchor Strip */}
      <section className="bg-void border-b border-canopy-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <span className="font-mono text-safety-light uppercase font-bold tracking-wider text-[11px] shrink-0">
            EXPLORE INDUSTRIAL SECTORS:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {industriesData.map((ind) => (
              <a
                key={ind.no}
                href={`#${ind.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-canopy border border-canopy-border text-limestone-muted hover:text-white hover:border-safety/50 transition-colors font-mono text-[11px]"
              >
                <b className="text-safety">{ind.no}</b>
                <span>{ind.title.split("&")[0].trim()}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Detailed Sections */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {industriesData.map((ind) => {
          const Icon = iconMap[ind.iconName] || Factory;
          const photoSrc = industryImages[ind.slug];

          return (
            <article
              key={ind.slug}
              id={ind.slug}
              className="bg-white border border-limestone-border rounded-2xl p-6 sm:p-10 shadow-sm scroll-mt-24 space-y-8 hover:border-graphite-muted/40 transition-colors"
            >
              {/* Authentic Photo Banner */}
              {photoSrc && (
                <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-canopy-border shadow-md">
                  <Image
                    src={photoSrc}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canopy via-canopy/40 to-transparent flex items-end p-6 text-white">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded bg-safety text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                        SECTOR {ind.no}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-limestone-light">
                        {ind.tagline}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-4 border-b border-limestone-border pb-6">
                <div className="w-12 h-12 rounded-xl bg-limestone-tint border border-limestone-border flex items-center justify-center text-graphite shrink-0">
                  <Icon size={26} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                    {ind.title}
                  </h2>
                  <p className="text-xs text-graphite-muted mt-0.5">{ind.tagline}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-graphite-secondary leading-relaxed">
                {ind.description}
              </p>

              {/* 2-column Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Left: Hazards & Compliance */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="bg-limestone-tint border border-limestone-border rounded-xl p-5 space-y-3">
                    <h4 className="font-mono text-xs font-bold text-safety uppercase tracking-wider flex items-center gap-2">
                      <AlertTriangle size={15} />
                      <span>Typical Hazard Exposures</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-graphite-secondary">
                      {ind.typicalHazards.map((hazard) => (
                        <li key={hazard} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-safety shrink-0 mt-1.5" />
                          <span>{hazard}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border border-limestone-border rounded-xl p-5 space-y-3 shadow-sm">
                    <h4 className="font-mono text-xs font-bold text-graphite uppercase tracking-wider flex items-center gap-2">
                      <Scale size={15} className="text-safety" />
                      <span>Key Compliance Frameworks</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {ind.complianceStandards.map((std) => (
                        <span
                          key={std}
                          className="px-2.5 py-1 rounded-md bg-limestone-tint border border-limestone-border text-graphite text-[11px] font-mono"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Tailored Solutions & Outcome */}
                <div className="lg:col-span-6 bg-limestone-tint border border-limestone-border rounded-xl p-6 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs font-bold text-graphite uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck size={16} className="text-emerald-600" />
                      <span>Tailored HESAONE Interventions</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs text-graphite-secondary">
                      {ind.solutionsProvided.map((sol) => (
                        <li key={sol} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-white border border-limestone-border rounded-lg p-4 space-y-1">
                      <span className="font-mono text-[10px] uppercase font-bold text-safety tracking-wider block">
                        CORE ENGINEERING OBJECTIVE
                      </span>
                      <p className="text-xs text-graphite font-semibold leading-relaxed">
                        {ind.outcomes}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/contact?sector=${encodeURIComponent(ind.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-safety text-white text-xs sm:text-sm font-semibold hover:bg-safety-hover transition-colors shadow-md"
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
        subtitle="HESAONE advises heavy process installations including bulk chemical terminals, continuous fabrication plants, and energy substations. Contact our team to review your facility's hazard profile."
        primaryBtnText="Speak with an Industry Specialist"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
