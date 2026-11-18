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
  title: "Services & Capabilities | Industrial HSE & Safety Engineering",
  description:
    "Explore HESAONE's 6 core engineering capabilities: Process Safety (HAZOP/LOPA), Safety Management Systems (ISO 45001/Factories Act), Fire Engineering & AMC, Environmental Systems & ETP, Statutory Layout Approval, and Safety Training.",
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
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: "Services & Capabilities" }]} />

      {/* Hero Header */}
      <section className="bg-white text-slate-900 py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden blueprint-grid-light">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
            <span>PRACTICE DISCIPLINES &bull; 6 CORE CAPABILITIES</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Engineering expertise for{" "}
              <span className="text-sky-600">high-consequence industrial safety.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We provide deep-domain advisory across the entire industrial lifecycle—from early process hazard evaluations (HAZOP/LOPA) and DISH statutory audits to fire hydrant network certification and over 20,000 man-hours of behavioral safety training.
            </p>
          </div>
        </div>
      </section>

      {/* Fast Discipline Navigation Anchor Strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <span className="font-mono text-sky-700 uppercase font-bold tracking-wider text-[11px] shrink-0">
            QUICK CAPABILITY INDEX:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {servicesData.map((svc) => (
              <a
                key={svc.no}
                href={`#${svc.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-sky-400 transition-colors font-mono text-[11px] shadow-2xs"
              >
                <b className="text-sky-600">{svc.no}</b>
                <span>{svc.title.split("&")[0].trim()}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Service Blocks */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {servicesData.map((svc) => {
          const Icon = iconMap[svc.iconName] || ShieldCheck;
          return (
            <article
              key={svc.slug}
              id={svc.slug}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm scroll-mt-24 space-y-8 hover:border-sky-400 transition-colors"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                    <Icon size={26} />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-sky-600 tracking-wider uppercase block">
                      DISCIPLINE {svc.no}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {svc.title}
                    </h2>
                  </div>
                </div>

                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors self-start md:self-auto shadow-2xs"
                >
                  <span>Full Technical Scope</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* 2-column Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Left Column: Narrative & Deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {svc.fullDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
                      Core Scope &amp; Deliverables:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
                      {svc.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Standards, Scopes & Direct Consultation CTA */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Governing Standards &amp; Codes:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {svc.keyStandards.map((std) => (
                        <span
                          key={std}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-[11px] font-mono shadow-2xs"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                        Typical Facility Application:
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {svc.sampleUseCases.map((uc) => (
                          <li key={uc} className="flex items-start gap-2">
                            <span className="text-sky-600 font-bold">&rsaquo;</span>
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <Link
                        href={`/contact?service=${encodeURIComponent(svc.title)}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors shadow-2xs"
                      >
                        <span>Request Scope for {svc.title.split("&")[0].trim()}</span>
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
        subtitle="Our principal safety engineers evaluate process diagrams, fire protection networks, and statutory compliance under mutual NDA."
        primaryBtnText="Initiate Facility Scope"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
