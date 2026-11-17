import type { Metadata } from "next";
import Image from "next/image";
import {
  Users,
  Target,
  CheckCircle2,
  Layers,
  ShieldCheck
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Practice | Philosophy, Governance & Standards",
  description:
    "Learn about HESAONE LLP: our People-Process-Planet engineering philosophy, statutory compliance expertise (Factories Act / MSIHC / ISO 45001), and commitment to industrial safety."
};

export default function AboutPage() {
  return (
    <div className="bg-limestone-warm min-h-screen">
      <Breadcrumb items={[{ label: "About Us" }]} />

      {/* Hero Header */}
      <section className="bg-canopy text-white py-16 lg:py-20 border-b border-canopy-border relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canopy-subtle border border-safety/30 text-safety-light text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
            <span>PRACTICE ORIGINS &bull; HESAONE LLP</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Safety is not a checkbox.<br />
            <span className="italic text-safety-light font-normal">It is our fundamental duty.</span>
          </h1>

          <p className="text-base sm:text-lg text-limestone-muted max-w-3xl leading-relaxed">
            HESAONE LLP was established to bridge the gap between regulatory theory and frontline plant realities. We replace superficial paperwork with robust, engineering-backed Health, Safety, and Environmental systems that protect lives, plant primary containment, and the environment.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section with Real Plant Inspection Photo */}
      <section className="py-16 lg:py-20 border-b border-limestone-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Mission & Vision Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-limestone-border rounded-xl p-6 sm:p-8 shadow-sm space-y-3">
                <span className="font-mono text-xs font-bold text-safety tracking-wider uppercase block">
                  OUR PURPOSE
                </span>
                <h3 className="font-serif text-2xl font-bold text-graphite">
                  Our Mission
                </h3>
                <p className="text-sm text-graphite-secondary leading-relaxed">
                  To empower industrial leaders with the technical clarity, practical engineering tools, and cultural leadership required to eliminate workplace fatalities, prevent major loss of containment disasters, and achieve resilient compliance.
                </p>
              </div>

              <div className="bg-white border border-limestone-border rounded-xl p-6 sm:p-8 shadow-sm space-y-3">
                <span className="font-mono text-xs font-bold text-safety tracking-wider uppercase block">
                  OUR HORIZON
                </span>
                <h3 className="font-serif text-2xl font-bold text-graphite">
                  Our Vision
                </h3>
                <p className="text-sm text-graphite-secondary leading-relaxed">
                  To serve as a trusted industrial HSE advisory practice—recognized by plant engineers, corporate executives, and statutory authorities for uncompromising technical rigor and field-tested safety solutions.
                </p>
              </div>
            </div>

            {/* Right: Framed Authentic Plant Photo */}
            <div className="lg:col-span-5">
              <div className="relative h-96 lg:h-[460px] rounded-2xl overflow-hidden border border-canopy-border shadow-2xl">
                <Image
                  src="/images/hse-inspection.jpg"
                  alt="HESAONE Safety Engineers Conducting Industrial Inspection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canopy via-canopy/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck size={16} className="text-safety" />
                    <span className="font-mono text-[11px] font-bold text-safety-light tracking-wider uppercase">
                      ON-SITE ENGINEERING RIGOR
                    </span>
                  </div>
                  <p className="text-xs text-limestone-muted leading-relaxed">
                    Every recommendation is formulated on the plant floor alongside operating teams, not from an ivory tower.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="py-16 lg:py-24 bg-void text-white relative overflow-hidden border-b border-canopy-border">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold text-safety-light tracking-wider uppercase">
              OUR CORE ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Three Pillars: <span className="italic font-normal text-safety-light">People. Process. Planet.</span>
            </h2>
            <p className="text-sm sm:text-base text-limestone-muted leading-relaxed">
              True industrial excellence occurs at the intersection of human care, engineering precision, and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 01: People */}
            <div className="bg-canopy border border-canopy-border rounded-2xl p-6 sm:p-8 space-y-5 hover:border-safety/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-canopy-subtle border border-safety/30 flex items-center justify-center text-safety">
                <Users size={26} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-safety-light tracking-widest uppercase block">
                  PILLAR 01
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">People</h3>
              </div>
              <p className="text-xs sm:text-sm text-limestone-light leading-relaxed">
                Every worker deserves to return home safely at the end of every shift.
              </p>
              <ul className="space-y-2.5 text-xs text-limestone-muted pt-2 border-t border-canopy-border/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Behavior-Based Safety (BBS) and cultural ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Unconditional Stop-Work Authority enablement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Ergonomic assessment and industrial hygiene monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Multilingual, practical shop-floor training modules</span>
                </li>
              </ul>
            </div>

            {/* Pillar 02: Process */}
            <div className="bg-canopy border border-canopy-border rounded-2xl p-6 sm:p-8 space-y-5 hover:border-safety/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-canopy-subtle border border-safety/30 flex items-center justify-center text-safety">
                <Layers size={26} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-safety-light tracking-widest uppercase block">
                  PILLAR 02
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">Process</h3>
              </div>
              <p className="text-xs sm:text-sm text-limestone-light leading-relaxed">
                Flawless engineering barriers that prevent loss of primary containment.
              </p>
              <ul className="space-y-2.5 text-xs text-limestone-muted pt-2 border-t border-canopy-border/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Rigorous HAZOP, HAZID &amp; What-If risk workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>SIL/LOPA Functional Safety allocation (IEC 61511)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Machine safeguarding and strict LOTO energy isolation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Quantitative Consequence Dispersion &amp; Blast Modeling</span>
                </li>
              </ul>
            </div>

            {/* Pillar 03: Planet */}
            <div className="bg-canopy border border-canopy-border rounded-2xl p-6 sm:p-8 space-y-5 hover:border-safety/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-canopy-subtle border border-safety/30 flex items-center justify-center text-safety">
                <Target size={26} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-safety-light tracking-widest uppercase block">
                  PILLAR 03
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">Planet</h3>
              </div>
              <p className="text-xs sm:text-sm text-limestone-light leading-relaxed">
                Preserving natural ecosystems and securing statutory environmental consents.
              </p>
              <ul className="space-y-2.5 text-xs text-limestone-muted pt-2 border-t border-canopy-border/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Environmental Impact Assessments (EIA) and EMPs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Effluent Treatment Plant (ETP) &amp; Zero Liquid Discharge (ZLD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Air pollution control &amp; continuous stack emission audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                  <span>Statutory Consent to Establish (CTE) &amp; Operate (CTO)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operating Values */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-limestone-border pb-6">
          <div>
            <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block mb-2">
              HOW WE WORK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-graphite tracking-tight">
              Our Operating Values &amp; <span className="italic font-normal">Professional Code</span>
            </h2>
          </div>
          <p className="text-sm text-graphite-secondary max-w-md leading-relaxed">
            We hold ourselves to the highest ethical and professional standards in every client engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-limestone-border rounded-xl p-6 space-y-3 shadow-sm">
            <span className="font-mono text-2xl font-bold text-safety">01</span>
            <h4 className="font-serif text-lg font-bold text-graphite">Field Grounding</h4>
            <p className="text-xs text-graphite-secondary leading-relaxed">
              Safety systems designed in remote conference rooms often fail on the shop floor. We inspect piping runs, verify valves, and listen to shift operators.
            </p>
          </div>

          <div className="bg-white border border-limestone-border rounded-xl p-6 space-y-3 shadow-sm">
            <span className="font-mono text-2xl font-bold text-safety">02</span>
            <h4 className="font-serif text-lg font-bold text-graphite">Technical Rigor</h4>
            <p className="text-xs text-graphite-secondary leading-relaxed">
              We ground every finding in established statutory and engineering codes—The Factories Act, MSIHC Rules, NFPA, IEC, and CCPS—never anecdotal guesswork.
            </p>
          </div>

          <div className="bg-white border border-limestone-border rounded-xl p-6 space-y-3 shadow-sm">
            <span className="font-mono text-2xl font-bold text-safety">03</span>
            <h4 className="font-serif text-lg font-bold text-graphite">Strict Confidentiality</h4>
            <p className="text-xs text-graphite-secondary leading-relaxed">
              Proprietary chemical flowsheets, P&amp;IDs, and audit findings are strictly protected under bilateral non-disclosure agreements (NDAs).
            </p>
          </div>

          <div className="bg-white border border-limestone-border rounded-xl p-6 space-y-3 shadow-sm">
            <span className="font-mono text-2xl font-bold text-safety">04</span>
            <h4 className="font-serif text-lg font-bold text-graphite">Actionable Pragmatism</h4>
            <p className="text-xs text-graphite-secondary leading-relaxed">
              We avoid 500-page theoretical manuals that collect dust. We formulate prioritized, realistic action registers that plant engineering teams can execute.
            </p>
          </div>
        </div>
      </section>

      {/* Standards & Certifications Alignment Strip */}
      <section className="py-16 bg-limestone-tint border-y border-limestone-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block mb-2">
              STATUTORY &amp; GOVERNING FRAMEWORKS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
              Statutory Compliance &amp; International Code Alignment
            </h3>
            <p className="text-sm text-graphite-secondary mt-1 max-w-2xl">
              Our engineering team maintains active working familiarity with both Indian statutory requirements and international safety codes:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-limestone-border rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-graphite">The Factories Act, 1948</strong>
              <span className="text-xs text-graphite-secondary">Sections 41B, 41C &amp; State Factory Rules Compliance</span>
            </div>
            <div className="bg-white border border-limestone-border rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-graphite">MSIHC Rules, 1989</strong>
              <span className="text-xs text-graphite-secondary">Hazardous Chemical Storage &amp; Safety Audit Reports</span>
            </div>
            <div className="bg-white border border-limestone-border rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-graphite">ISO 45001:2018</strong>
              <span className="text-xs text-graphite-secondary">Occupational Health &amp; Safety Management Systems</span>
            </div>
            <div className="bg-white border border-limestone-border rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-graphite">ISO 14001:2015</strong>
              <span className="text-xs text-graphite-secondary">Environmental Management Systems &amp; Auditing</span>
            </div>
            <div className="bg-white border border-limestone-border rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-graphite">IEC 61508 / 61511</strong>
              <span className="text-xs text-graphite-secondary">Functional Safety, SIF Design &amp; SIL Allocation</span>
            </div>
            <div className="bg-white border border-limestone-border rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-graphite">NBC 2016 &bull; NFPA Codes</strong>
              <span className="text-xs text-graphite-secondary">Fire Protection, Hydraulics &amp; Life Safety Egress</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Partner with HESAONE for your next safety milestone."
        subtitle="Whether preparing for statutory safety audits, commissioning a chemical synthesis unit, or formalizing machine safeguarding, our advisory team is ready."
        primaryBtnText="Schedule an Advisory Call"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
