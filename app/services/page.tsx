import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { servicesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Services & Practice Disciplines | Industrial HSE Advisory",
  description:
    "Comprehensive industrial HSE advisory: Process Hazard Analysis (HAZOP / LOPA), Factories Act statutory compliance, ISO 45001 audits, fire safety hydraulics, and machine safeguarding."
};

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap
};

export default function ServicesPage() {
  return (
    <div className="bg-limestone-warm min-h-screen">
      <Breadcrumb items={[{ label: "Services & Capabilities" }]} />

      {/* Hero Header */}
      <section className="bg-canopy text-white py-16 lg:py-20 border-b border-canopy-border relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canopy-subtle border border-safety/30 text-safety-light text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
            <span>OUR DISCIPLINES &bull; 6 CORE HSE CAPABILITIES</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Engineering expertise for<br />
            <span className="italic text-safety-light font-normal">high-consequence industrial safety.</span>
          </h1>

          <p className="text-base sm:text-lg text-limestone-muted max-w-3xl leading-relaxed">
            We provide deep-domain engineering advisory across the operational lifecycle—from early process hazard evaluations and consequence modeling to statutory compliance audits and frontline safety culture.
          </p>
        </div>
      </section>

      {/* Fast Discipline Navigation Anchor Strip */}
      <section className="bg-void border-b border-canopy-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <span className="font-mono text-safety-light uppercase font-bold tracking-wider text-[11px] shrink-0">
            QUICK CAPABILITY INDEX:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {servicesData.map((svc) => (
              <a
                key={svc.no}
                href={`#${svc.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-canopy border border-canopy-border text-limestone-muted hover:text-white hover:border-safety/50 transition-colors font-mono text-[11px]"
              >
                <b className="text-safety">{svc.no}</b>
                <span>{svc.title.split("&")[0].trim()}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Editorial Service Blocks */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {servicesData.map((svc) => {
          const Icon = iconMap[svc.iconName] || ShieldCheck;
          return (
            <article
              key={svc.slug}
              id={svc.slug}
              className="bg-white border border-limestone-border rounded-2xl p-6 sm:p-10 shadow-sm scroll-mt-24 space-y-8 hover:border-graphite-muted/40 transition-colors"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-limestone-border pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-limestone-tint border border-limestone-border flex items-center justify-center text-graphite shrink-0">
                    <Icon size={26} />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-safety tracking-wider uppercase block">
                      DISCIPLINE {svc.no}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                      {svc.title}
                    </h2>
                  </div>
                </div>

                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-canopy text-white text-xs font-medium hover:bg-void transition-colors self-start md:self-auto"
                >
                  <span>Full Technical Scope</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* 2-column Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Left Column: Narrative & Deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-sm text-graphite-secondary leading-relaxed">
                    {svc.fullDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-graphite">
                      Core Scope &amp; Deliverables:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-graphite-secondary">
                      {svc.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Standards, Scopes & Direct Consultation CTA */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="bg-limestone-tint border border-limestone-border rounded-xl p-5 space-y-3">
                    <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-graphite-muted">
                      Governing Standards &amp; Codes:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {svc.keyStandards.map((std) => (
                        <span
                          key={std}
                          className="px-2.5 py-1 rounded-md bg-white border border-limestone-border text-graphite text-[11px] font-mono"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-limestone-border rounded-xl p-5 space-y-4 shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-graphite-muted mb-2.5">
                        Typical Facility Application:
                      </h4>
                      <ul className="space-y-2 text-xs text-graphite-secondary">
                        {svc.sampleUseCases.map((uc) => (
                          <li key={uc} className="flex items-start gap-2">
                            <span className="text-safety font-bold">&rsaquo;</span>
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-limestone-border">
                      <Link
                        href={`/contact?service=${encodeURIComponent(svc.title)}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-safety text-white text-xs font-semibold hover:bg-safety-hover transition-colors"
                      >
                        <span>Request Proposal for {svc.title.split("&")[0].trim()}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Consultation CTA */}
      <CTASection
        title="Need a specialized technical consultation?"
        subtitle="Our principal safety engineers evaluate process diagrams, fire networks, and statutory compliance under mutual NDA."
        primaryBtnText="Initiate Facility Scope"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
