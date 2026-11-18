import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/lib/siteData";

export default function Hero() {
  return (
    <section className="relative bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid-light opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Technical Narrative & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Accreditation Beacon Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full crystal-pill text-emerald-900 border-emerald-200/80 bg-emerald-50/70 text-xs font-mono font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>DISH APPROVED SAFETY AUDITOR &bull; EST. 2018</span>
            </div>

            {/* Monumental Corporate Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Engineering Process Safety.<br />
              <span className="text-sky-600">Protecting Industrial Lives &amp; Assets.</span>
            </h1>

            {/* Value Proposition Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              HESAONE LLP provides specialized industrial Health, Safety &amp; Environment (HSE) engineering advisory. Led by senior consultants with 20+ years of plant leadership, we deliver rigorous process hazard analyses (HAZOP/LOPA), statutory safety audits, fire engineering, and over 20,000 man-hours of workforce training.
            </p>

            {/* 3 Crystal Trust Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="p-3.5 rounded-2xl crystal-card">
                <span className="block text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">
                  {companyInfo.stats.experienceYears}
                </span>
                <span className="text-[11px] font-medium text-slate-600 leading-tight block mt-0.5">
                  Years Industrial Leadership
                </span>
              </div>
              <div className="p-3.5 rounded-2xl crystal-card">
                <span className="block text-xl sm:text-2xl font-extrabold text-sky-600 font-mono">
                  {companyInfo.stats.trainingManHours}
                </span>
                <span className="text-[11px] font-medium text-slate-600 leading-tight block mt-0.5">
                  Training Man-Hours
                </span>
              </div>
              <div className="p-3.5 rounded-2xl crystal-card">
                <span className="block text-xl sm:text-2xl font-extrabold text-emerald-600 font-mono">
                  DISH
                </span>
                <span className="text-[11px] font-medium text-slate-600 leading-tight block mt-0.5">
                  Approved Auditor
                </span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 group"
              >
                <span>Request Facility Consultation</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-medium transition-colors shadow-2xs"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Photography & Crystal Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/industry-manufacturing.jpg"
                alt="HESAONE Safety Engineers Conducting Plant Inspection"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={18} className="text-sky-400" />
                  <span className="font-mono text-xs font-bold text-sky-300 uppercase tracking-wider">
                    TOTAL SAFETY SOLUTIONS
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Serving automotive, chemical synthesis, bulk drug, polymer, and heavy manufacturing installations across Maharashtra and pan-India industrial corridors.
                </p>
              </div>
            </div>

            {/* Floating Crystal Glass Accredited Card */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 crystal-panel rounded-2xl p-4 shadow-xl flex items-center gap-3.5 max-w-xs">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0">
                <Award size={22} />
              </div>
              <div className="text-xs">
                <strong className="block font-bold text-slate-900">
                  DISH Approved Practice
                </strong>
                <span className="text-slate-500 text-[11px] block mt-0.5">
                  Govt. of Maharashtra Accreditation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Capabilities Dock */}
      <div className="border-t border-slate-200/80 bg-slate-50/70 py-4 px-4 sm:px-6 lg:px-8 text-xs font-mono">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
            <span>Process Safety (HAZOP / HIRA / PSSR)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
            <span>Fire Audits &amp; Hydrant AMC Support</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
            <span>ETP Troubleshooting &amp; Water Auditing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
            <span>BBS &amp; Frontline Competency Training</span>
          </div>
        </div>
      </div>
    </section>
  );
}
