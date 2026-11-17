import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Flame,
  Leaf,
  ClipboardCheck,
  GraduationCap,
  HardHat,
  Factory,
  Building2,
  FlaskConical,
  Truck,
  CheckCircle2,
  Zap,
  Lock,
  LucideIcon
} from "lucide-react";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import InteractiveRiskAssessment from "@/components/InteractiveRiskAssessment";
import { servicesData, industriesData, caseStudiesData } from "@/lib/siteData";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap,
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap
};

export default function Home() {
  const featuredStudy = caseStudiesData[0];

  return (
    <div className="bg-[#FAF9F5] text-graphite">
      {/* 1. Hero Split-Stage */}
      <Hero />

      {/* 2. Statutory Regulatory Ledger Ribbon */}
      <section className="bg-[#0A1118] text-white border-b border-white/10 py-5">
        <div className="section-container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col shrink-0">
            <span className="font-mono text-[10px] tracking-[0.18em] font-bold text-safety-bright uppercase">
              GOVERNING STATUTES
            </span>
            <span className="font-sans text-xs font-semibold text-slate-300">
              Pan-India Regulatory Alignment
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 shrink-0">
              <span className="font-mono font-bold text-safety-bright text-[11px]">The Factories Act 1948</span>
              <span className="text-slate-400 text-[11px]">&bull; Sec 41B/41C</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 shrink-0">
              <span className="font-mono font-bold text-safety-bright text-[11px]">MSIHC Rules 1989</span>
              <span className="text-slate-400 text-[11px]">&bull; Rule 10 Audits</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 shrink-0">
              <span className="font-mono font-bold text-safety-bright text-[11px]">ISO 45001 &bull; 14001</span>
              <span className="text-slate-400 text-[11px]">&bull; Certified OHSMS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 shrink-0">
              <span className="font-mono font-bold text-safety-bright text-[11px]">IEC 61511</span>
              <span className="text-slate-400 text-[11px]">&bull; SIL 1-3 Allocation</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 shrink-0">
              <span className="font-mono font-bold text-safety-bright text-[11px]">NBC 2016 Part 4</span>
              <span className="text-slate-400 text-[11px]">&bull; Fire Hydraulics</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Philosophy & Engineering Charter */}
      <section className="py-20 lg:py-28 border-b border-limestone-200" id="about">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-safety uppercase mb-4">
                <span>01</span>
                <span>/</span>
                <span>PRACTICE PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-graphite leading-[1.15] mb-6">
                Safety is not administrative paperwork.<br />
                <span className="font-serif italic font-normal text-safety">It is the engineering foundation of resilient industry.</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                HESAONE LLP provides specialized engineering advisory and compliance solutions for high-hazard industrial operations. We bridge the gap between regulatory mandates and plant frontline realities through quantitative hazard modeling, objective compliance audits, and field-tested safety leadership.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-safety hover:text-safety-amber transition-colors"
              >
                <span>Read our full organizational charter &amp; governance</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Pillar 01 */}
              <div className="p-8 rounded-xl bg-white border border-limestone-200 shadow-card hover:border-safety/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-safety tracking-wider">PILLAR 01 // CULTURAL</span>
                  <ShieldCheck size={20} className="text-safety" />
                </div>
                <h3 className="text-xl font-bold text-graphite mb-2">People First &bull; Workforce Safeguarding</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Every worker deserves to return home safely at the end of every shift. We implement Behavior-Based Safety (BBS), unconditional Stop-Work Authority, and ergonomic risk assessments that build frontline safety ownership.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                  <span className="px-2.5 py-1 rounded bg-limestone-100">BBS Culture</span>
                  <span className="px-2.5 py-1 rounded bg-limestone-100">Stop-Work Authority</span>
                  <span className="px-2.5 py-1 rounded bg-limestone-100">Shop-Floor Training</span>
                </div>
              </div>

              {/* Pillar 02 */}
              <div className="p-8 rounded-xl bg-white border border-limestone-200 shadow-card hover:border-safety/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-safety tracking-wider">PILLAR 02 // TECHNICAL</span>
                  <Flame size={20} className="text-safety" />
                </div>
                <h3 className="text-xl font-bold text-graphite mb-2">Process Integrity &bull; Primary Containment</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Flawless engineering barriers that prevent loss of primary containment. We facilitate rigorous multidisciplinary HAZOP/LOPA workshops, SIL functional safety validation (IEC 61511), and blast consequence dispersion modeling.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                  <span className="px-2.5 py-1 rounded bg-limestone-100">HAZOP / LOPA</span>
                  <span className="px-2.5 py-1 rounded bg-limestone-100">IEC 61511 Functional Safety</span>
                  <span className="px-2.5 py-1 rounded bg-limestone-100">Consequence Dispersion</span>
                </div>
              </div>

              {/* Pillar 03 */}
              <div className="p-8 rounded-xl bg-white border border-limestone-200 shadow-card hover:border-safety/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-safety tracking-wider">PILLAR 03 // ENVIRONMENTAL</span>
                  <Leaf size={20} className="text-safety" />
                </div>
                <h3 className="text-xl font-bold text-graphite mb-2">Planet Stewardship &bull; Zero Liquid Discharge</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Preserving ecosystems through technical environmental engineering. We audit effluent treatment plants (ETP/ZLD), model air stack emissions, and secure State Pollution Control Board Consent to Establish (CTE) &amp; Operate (CTO).
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                  <span className="px-2.5 py-1 rounded bg-limestone-100">SPCB Consents (CTE/CTO)</span>
                  <span className="px-2.5 py-1 rounded bg-limestone-100">ETP / ZLD Audits</span>
                  <span className="px-2.5 py-1 rounded bg-limestone-100">Stack Dispersion Modeling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Practice Disciplines — Architectural Capability Ledger */}
      <section className="py-20 lg:py-28 bg-[#F3F1EA] border-b border-limestone-200" id="services">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-safety uppercase mb-4">
                <span>02</span>
                <span>/</span>
                <span>CORE DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-graphite leading-[1.15] mb-4">
                Specialized HSE engineering<br />
                <span className="font-serif italic font-normal text-safety">built for operational reality.</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Explore our six core advisory disciplines covering early process design, quantitative risk studies, fire hydraulics, and frontline safety governance.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-safety hover:bg-safety-amber text-white text-sm font-bold shadow-md transition-all"
                >
                  <span>Request Scoped Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-graphite hover:text-safety transition-colors pt-2"
                >
                  <span>View Complete Service Matrix</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Capability Ledger Cards */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {servicesData.map((svc) => {
                const Icon = iconMap[svc.iconName] || ShieldCheck;
                return (
                  <article
                    key={svc.no}
                    className="p-6 sm:p-8 rounded-xl bg-white border border-limestone-200 shadow-card hover:border-safety/40 transition-all group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-lg bg-limestone-100 flex items-center justify-center text-graphite shrink-0 group-hover:bg-safety/10 group-hover:text-safety transition-colors">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="font-mono text-xs font-bold text-safety">DISCIPLINE {svc.no}</span>
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-limestone-100 text-slate-600">
                            {svc.keyStandards[0].split("(")[0].trim()}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-graphite group-hover:text-safety transition-colors mb-2">
                          {svc.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed max-w-xl mb-3">
                          {svc.shortDesc}
                        </p>
                        <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                          <span className="inline-flex items-center gap-1 text-slate-600">
                            &bull; Certified Lead Auditors
                          </span>
                          <span className="inline-flex items-center gap-1 text-slate-600">
                            &bull; Audit-Ready CAPA
                          </span>
                          <span className="inline-flex items-center gap-1 text-slate-600">
                            &bull; Statutory Acceptance
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/services/${svc.slug}`}
                      className="w-10 h-10 rounded-full border border-limestone-200 flex items-center justify-center text-slate-400 group-hover:bg-safety group-hover:border-safety group-hover:text-white transition-all shrink-0 self-end sm:self-center"
                      aria-label={`View technical scope for ${svc.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-Stage Engineering Lifecycle Framework */}
      <section className="py-20 lg:py-28 bg-[#101C24] text-white border-b border-white/10" id="approach">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-safety-bright uppercase mb-3">
              <span>03</span>
              <span>/</span>
              <span>ENGINEERING LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              How HESAONE Partners With Your Facility
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every industrial site possesses unique operating physics. Our disciplined 4-stage lifecycle ensures every recommendation is scientifically validated, prioritized, and operationally viable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Stage 1 */}
            <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between hover:border-safety/40 transition-all">
              <div>
                <span className="font-mono text-xs font-bold text-safety-bright tracking-wider block mb-2">PHASE 01</span>
                <h4 className="text-lg font-bold text-white mb-3">Understand &amp; Scope</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  In-depth review of P&amp;IDs, process envelopes, statutory consent conditions, and historical near-miss logs.
                </p>
              </div>
              <div className="p-3 rounded bg-white/[0.03] border border-white/5">
                <span className="block font-mono text-[9.5px] uppercase tracking-wider text-safety-bright mb-1">STAGE OUTPUT</span>
                <strong className="block text-xs text-slate-200">Scoping Blueprint &amp; Hazard Baseline</strong>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between hover:border-safety/40 transition-all">
              <div>
                <span className="font-mono text-xs font-bold text-safety-bright tracking-wider block mb-2">PHASE 02</span>
                <h4 className="text-lg font-bold text-white mb-3">Assess &amp; Quantify</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Multidisciplinary HAZOP workshops, quantitative consequence modeling (dispersion/fire), and hydraulic flow verification.
                </p>
              </div>
              <div className="p-3 rounded bg-white/[0.03] border border-white/5">
                <span className="block font-mono text-[9.5px] uppercase tracking-wider text-safety-bright mb-1">STAGE OUTPUT</span>
                <strong className="block text-xs text-slate-200">Node Worksheets &amp; Risk Contours</strong>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between hover:border-safety/40 transition-all">
              <div>
                <span className="font-mono text-xs font-bold text-safety-bright tracking-wider block mb-2">PHASE 03</span>
                <h4 className="text-lg font-bold text-white mb-3">Engineer &amp; Recommend</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Applying the hierarchy of controls to design independent protection layers, SIL interlocks, and machine safeguarding.
                </p>
              </div>
              <div className="p-3 rounded bg-white/[0.03] border border-white/5">
                <span className="block font-mono text-[9.5px] uppercase tracking-wider text-safety-bright mb-1">STAGE OUTPUT</span>
                <strong className="block text-xs text-slate-200">Prioritized CAPA &amp; Engineering Specs</strong>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between hover:border-safety/40 transition-all">
              <div>
                <span className="font-mono text-xs font-bold text-safety-bright tracking-wider block mb-2">PHASE 04</span>
                <h4 className="text-lg font-bold text-white mb-3">Strengthen &amp; Sustain</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Frontline training in Behavior-Based Safety, energy isolation (LOTO), and internal auditor coaching for lasting compliance.
                </p>
              </div>
              <div className="p-3 rounded bg-white/[0.03] border border-white/5">
                <span className="block font-mono text-[9.5px] uppercase tracking-wider text-safety-bright mb-1">STAGE OUTPUT</span>
                <strong className="block text-xs text-slate-200">Governance System &amp; Workforce Competency</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-safety hover:bg-safety-amber text-white text-sm font-bold transition-all shadow-lg"
            >
              <span>Initiate a Facility Scoping Review</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all"
            >
              <span>Explore Our Full Methodology</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Interactive Facility Risk Diagnostic Engine */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-limestone-200">
        <div className="section-container">
          <InteractiveRiskAssessment />
        </div>
      </section>

      {/* 7. High-Hazard Industrial Sectors */}
      <section className="py-20 lg:py-28 bg-[#101C24] text-white border-b border-white/10" id="industries">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-safety-bright uppercase mb-3">
                <span>04</span>
                <span>/</span>
                <span>SECTOR SPECIALIZATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                Engineered for your<br />
                <span className="font-serif italic font-normal text-safety-bright">operational physics.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                A continuous batch chemical reactor faces fundamentally different failure modes than an automated high-bay fulfillment warehouse or a medium-voltage substation. We tailor our technical interventions directly to your sector&apos;s hazards and statutory obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-safety hover:bg-safety-amber text-white text-sm font-bold shadow-md transition-all"
                >
                  <span>Explore All Sectors</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all"
                >
                  <span>Discuss Your Facility Profile</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-3">
              {industriesData.map((ind) => {
                const Icon = iconMap[ind.iconName] || Factory;
                return (
                  <Link
                    key={ind.title}
                    href={`/industries#${ind.slug}`}
                    className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-safety/50 hover:bg-white/[0.08] transition-all flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-safety-bright">{ind.no}</span>
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-safety-bright transition-colors">
                        <Icon size={20} />
                      </div>
                      <div>
                        <strong className="block text-sm font-bold text-white group-hover:text-safety-bright transition-colors">
                          {ind.title}
                        </strong>
                        <span className="block text-xs text-slate-400 mt-0.5">{ind.tagline}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-500 group-hover:text-safety-bright transition-colors shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Representative Technical Practice Dossier */}
      <section className="py-20 lg:py-28 bg-[#F3F1EA] border-b border-limestone-200">
        <div className="section-container">
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-limestone-200 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-limestone-200 mb-8">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="font-mono text-xs font-bold text-safety tracking-wider">
                    05 // REPRESENTATIVE TECHNICAL DOSSIER
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-limestone-100 text-slate-700 font-semibold">
                    {featuredStudy.clientSector}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-graphite">{featuredStudy.title}</h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-bold shrink-0 self-start sm:self-center">
                <Lock size={12} /> Bilateral NDA Protected
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <h4 className="font-mono text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">
                    Operational Context &amp; Challenge
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">{featuredStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">
                    HESAONE Technical Intervention
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">{featuredStudy.solution}</p>
                </div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-bold text-safety hover:text-safety-amber pt-2"
                >
                  <span>Explore All Representative Practice Scopes</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-limestone-50 border border-limestone-200">
                <h4 className="font-mono text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">
                  Documented Outcomes &amp; Metrics
                </h4>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {featuredStudy.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded bg-white border border-limestone-200 text-center">
                      <b className="block font-mono text-xs text-graphite mb-1">{m.value}</b>
                      <small className="block text-[10px] text-slate-500 leading-tight">{m.label}</small>
                    </div>
                  ))}
                </div>

                <ul className="flex flex-col gap-2.5 text-xs text-slate-700">
                  {featuredStudy.results.map((res) => (
                    <li key={res} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-safety shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Executive Consultation CTA Banner */}
      <CTASection
        title="Start a confidential technical dialogue with HESAONE."
        subtitle="Tell us about your facility, expansion scope, or upcoming statutory audit milestones. Our lead safety engineers provide scoped, objective guidance under bilateral NDA."
        primaryBtnText="Request a Technical Consultation"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
