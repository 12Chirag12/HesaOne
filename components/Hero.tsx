import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, Lock, CheckCircle2, Activity, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#101C24] to-[#0A1118] text-white overflow-hidden border-b border-white/10 pt-16 lg:pt-20">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-60" />

      {/* Radial burnt orange volumetric glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[550px] bg-radial from-safety/15 to-transparent pointer-events-none -z-0 blur-2xl" />

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16 lg:pb-24">
        {/* Left Column: Authoritative Editorial Statement */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-safety/10 border border-safety/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-safety-bright shadow-[0_0_8px_#FF7828] animate-pulse" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-safety-bright uppercase">
              STATUTORY ADVISORY &bull; THE FACTORIES ACT 1948 &bull; MSIHC 1989
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Engineering Process Safety.<br />
            <span className="font-serif italic font-normal text-safety-bright">Protecting Industrial Lives.</span>
          </h1>

          {/* Lead Paragraph */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
            HESAONE LLP delivers certified process hazard analysis (HAZOP / LOPA), fire safety hydraulics, and statutory safety audits. We partner with chemical, manufacturing, and energy leaders to eliminate single-point catastrophic failure modes and engineer enduring compliance resilience.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-safety hover:bg-safety-amber text-white text-sm font-bold tracking-wide transition-all shadow-xl shadow-safety/25 hover:shadow-safety/40 w-full sm:w-auto"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all w-full sm:w-auto"
            >
              <span>Explore 6 Practice Disciplines</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Key Engineering Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full">
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="text-safety-bright shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-white tracking-wide">Pan-India Deployment</strong>
                <span className="block text-[11.5px] text-slate-400 mt-0.5">Field audits &amp; plant reviews</span>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:border-l sm:border-white/10 sm:pl-6">
              <Lock size={18} className="text-safety-bright shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-white tracking-wide">Bilateral NDA Shield</strong>
                <span className="block text-[11.5px] text-slate-400 mt-0.5">100% Confidential P&amp;IDs</span>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:border-l sm:border-white/10 sm:pl-6">
              <Award size={18} className="text-safety-bright shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs font-bold text-white tracking-wide">IEC 61511 / SIL Scope</strong>
                <span className="block text-[11.5px] text-slate-400 mt-0.5">Functional safety integrity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Framed Showcase */}
        <div className="lg:col-span-5 flex flex-col gap-5 relative">
          {/* Framed authentic photograph */}
          <div className="relative w-full h-[320px] sm:h-[360px] rounded-xl overflow-hidden border border-white/15 shadow-2xl">
            <Image
              src="/images/hesaone-industrial-hero.jpg"
              alt="Industrial Processing Facility at Twilight"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101C24]/85 via-transparent to-black/20" />
            
            {/* Technical HUD Overlay Tags */}
            <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1 rounded bg-[#101C24]/90 border border-white/15 text-safety-bright font-mono text-[10px] tracking-wider backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-safety-bright" />
              <span>ZONE 1 / 2 PRIMARY CONTAINMENT</span>
            </div>
            <div className="absolute bottom-3.5 right-3.5 z-10 px-3 py-1 rounded bg-[#101C24]/90 border border-white/15 text-slate-300 font-mono text-[10px] tracking-wider backdrop-blur-md">
              VERIFIED FACILITY TOPOLOGY
            </div>
          </div>

          {/* Floating Blueprint Specification HUD Card */}
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10.5px] font-bold text-safety-bright tracking-widest uppercase">
                ENGINEERING SPECIFICATION
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[9.5px] font-bold">
                <Activity size={11} /> ACTIVE DESK
              </span>
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">
              Process Hazard Studies &amp; Statutory Audits
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              From greenfield HAZOP &amp; SIL allocation to brownfield plant compliance audits and behavior-based safety leadership.
            </p>

            <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 mb-4">
              <div>
                <span className="block font-mono text-xl font-extrabold text-safety-bright leading-none mb-1">100%</span>
                <span className="block text-[11px] text-slate-400">Statutory Scope Coverage</span>
              </div>
              <div className="border-l border-white/10 pl-3">
                <span className="block font-mono text-xl font-extrabold text-safety-bright leading-none mb-1">6</span>
                <span className="block text-[11px] text-slate-400">Core Advisory Disciplines</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-safety-bright shrink-0" />
                <span>Multidisciplinary HAZOP &amp; LOPA Workshops</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-safety-bright shrink-0" />
                <span>Quantitative Consequence Dispersion &amp; Risk (QRA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-safety-bright shrink-0" />
                <span>Audit-Ready Engineering CAPA Registers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Capability Ticker Dock */}
      <div className="bg-black/30 border-t border-white/10 py-4">
        <div className="section-container flex items-center justify-between gap-6 overflow-x-auto text-xs">
          <Link href="/services#process-safety-risk-studies" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors shrink-0">
            <span className="font-mono font-bold text-safety-bright">01</span>
            <span>Process Safety &amp; HAZOP/LOPA</span>
          </Link>
          <div className="hidden md:block w-px h-4 bg-white/10 shrink-0" />
          <Link href="/services#safety-management-systems" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors shrink-0">
            <span className="font-mono font-bold text-safety-bright">02</span>
            <span>Safety Management (ISO 45001)</span>
          </Link>
          <div className="hidden md:block w-px h-4 bg-white/10 shrink-0" />
          <Link href="/services#fire-emergency-safety" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors shrink-0">
            <span className="font-mono font-bold text-safety-bright">03</span>
            <span>Fire Protection Hydraulics</span>
          </Link>
          <div className="hidden md:block w-px h-4 bg-white/10 shrink-0" />
          <Link href="/services#environmental-management-compliance" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors shrink-0">
            <span className="font-mono font-bold text-safety-bright">04</span>
            <span>Environmental Consents (CTE/CTO)</span>
          </Link>
          <div className="hidden lg:block w-px h-4 bg-white/10 shrink-0" />
          <Link href="/contact" className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-safety-bright hover:underline shrink-0">
            <span>Request Facility Scope</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
