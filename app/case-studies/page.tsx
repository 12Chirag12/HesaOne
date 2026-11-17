import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  FileCheck,
  Layers,
  Lock
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { caseStudiesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Representative Scopes & Practice Profiles | Industrial HSE Advisory",
  description:
    "Review representative engineering case profiles from HESAONE LLP: HAZOP studies, ISO 45001 management systems, high-bay fire safety engineering, and statutory compliance."
};

const additionalProfiles = [
  {
    id: "cs-foundry-loto",
    title: "Heavy Engineering: Machine Safety Evaluation & LOTO Framework",
    clientSector: "Heavy Engineering & Manufacturing",
    challenge:
      "A heavy fabrication facility operating hydraulic presses and automated transfer lines required an independent machinery safety review to identify mechanical pinch points and formalize zero-energy lockout/tagout procedures for maintenance teams.",
    solution:
      "HESAONE conducted ISO 12100 machine risk assessments across primary production assets, specified Category 3 and 4 interlocked safety guards, and engineered bilingual visual energy isolation procedures.",
    results: [
      "Generated detailed machinery risk registers mapping all mechanical and electrical hazard zones",
      "Standardized step-by-step visual lockout/tagout (LOTO) placarding for high-energy machinery",
      "Delivered hands-on supervisor and maintenance technician energy isolation certification"
    ],
    metrics: [
      { label: "Governing Code", value: "ISO 12100 / The Factories Act" },
      { label: "Core Scope", value: "Machine Guarding & LOTO" },
      { label: "Key Milestone", value: "Verified Isolation Placards" }
    ]
  },
  {
    id: "cs-substation-arcflash",
    title: "Industrial Utility: Substation Arc Flash Analysis & Electrical Safety",
    clientSector: "Energy & Industrial Utilities",
    challenge:
      "An industrial continuous process facility operating medium-voltage switchgear required electrical hazard calculations to establish arc flash protection boundaries, determine incident energy levels, and specify personal protective equipment (PPE).",
    solution:
      "HESAONE modeled electrical network single-line diagrams (SLDs), performed incident energy calculations in accordance with IEEE 1584, generated NFPA 70E warning labels, and trained high-voltage maintenance personnel.",
    results: [
      "Calculated incident energy and arc flash protection boundaries for all major busbars and breakers",
      "Applied standardized warning labels detailing working distance, incident energy, and PPE levels",
      "Formulated electrical safe work practices and energized work permit protocols"
    ],
    metrics: [
      { label: "Governing Code", value: "IEEE 1584 / NFPA 70E" },
      { label: "Core Scope", value: "Arc Flash & Incident Energy" },
      { label: "Key Milestone", value: "Engineered Warning Labels" }
    ]
  }
];

const allPracticeProfiles = [...caseStudiesData, ...additionalProfiles];

export default function CaseStudiesPage() {
  return (
    <div className="bg-limestone-warm min-h-screen">
      <Breadcrumb items={[{ label: "Representative Scopes" }]} />

      {/* Hero Header */}
      <section className="bg-canopy text-white py-16 lg:py-20 border-b border-canopy-border relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canopy-subtle border border-safety/30 text-safety-light text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
            <span>REPRESENTATIVE SCOPES &bull; TECHNICAL EXECUTION</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Representative engineering challenges.<br />
            <span className="italic text-safety-light font-normal">Methodical safety solutions.</span>
          </h1>

          <p className="text-base sm:text-lg text-limestone-muted max-w-3xl leading-relaxed">
            Explore how HESAONE LLP conducts specialized process safety assessments, fire engineering evaluations, machinery safeguarding, and management system audits across high-hazard industrial environments.
          </p>
        </div>
      </section>

      {/* Technical Framework Overview Ribbon */}
      <section className="bg-void border-b border-canopy-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <span className="font-mono text-safety-light uppercase font-bold tracking-wider text-[11px] shrink-0">
            DIAGNOSTIC CAPABILITIES APPLIED:
          </span>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-limestone-muted">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-safety" />
              <strong className="text-white">Process Safety:</strong>
              <span>HAZOP &bull; LOPA &bull; QRA (IEC 61511)</span>
            </div>
            <span className="text-canopy-border hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5">
              <FileCheck size={14} className="text-safety" />
              <strong className="text-white">Management Systems:</strong>
              <span>ISO 45001 &bull; Factories Act 1948</span>
            </div>
            <span className="text-canopy-border hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5">
              <Layers size={14} className="text-safety" />
              <strong className="text-white">Fire Engineering:</strong>
              <span>Hydraulic Sprinkler &bull; NBC 2016</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Scopes Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Bilateral NDA Policy Banner */}
        <div className="bg-canopy border border-safety/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-canopy-subtle border border-safety/40 flex items-center justify-center text-safety shrink-0">
            <Lock size={22} />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-serif text-lg font-bold text-white">
              Bilateral Non-Disclosure Agreement (NDA) &amp; Client Confidentiality Policy
            </h3>
            <p className="text-xs sm:text-sm text-limestone-muted leading-relaxed">
              In strict accordance with professional engineering ethics and mutual non-disclosure agreements, actual client organization names, proprietary chemical formulations, and confidential plant topologies are withheld. The following practice profiles represent typical technical challenges, diagnostic methodologies, and tangible deliverables executed across high-hazard industrial sectors.
            </p>
          </div>
        </div>

        {/* Practice Profiles Stack */}
        <div className="space-y-10">
          {allPracticeProfiles.map((cs, idx) => (
            <article
              key={cs.id}
              id={cs.id}
              className="bg-white border border-limestone-border rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 hover:border-graphite-muted/40 transition-colors scroll-mt-24"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-limestone-border pb-4">
                <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider">
                  REPRESENTATIVE PROFILE 0{idx + 1}
                </span>
                <span className="px-3 py-1 rounded-full bg-limestone-tint border border-limestone-border text-graphite font-mono text-xs font-medium self-start sm:self-auto">
                  {cs.clientSector}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                {cs.title}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left: Challenge & Solution */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] font-bold text-graphite-muted uppercase tracking-wider block">
                      Operational Context &amp; Challenge:
                    </span>
                    <p className="text-xs sm:text-sm text-graphite-secondary leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] font-bold text-graphite-muted uppercase tracking-wider block">
                      HESAONE Technical Execution:
                    </span>
                    <p className="text-xs sm:text-sm text-graphite-secondary leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Right: Results & Metrics */}
                <div className="lg:col-span-5 bg-limestone-tint border border-limestone-border rounded-xl p-5 space-y-4">
                  <span className="font-mono text-[11px] font-bold text-safety uppercase tracking-wider block">
                    Documented Deliverables &amp; Outcomes:
                  </span>
                  <ul className="space-y-2 text-xs text-graphite-secondary">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-limestone-border">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-white border border-limestone-border p-2.5 rounded-lg text-center"
                      >
                        <b className="block font-mono text-[11px] text-graphite font-bold mb-0.5 leading-snug">
                          {m.value}
                        </b>
                        <small className="text-[10px] text-graphite-muted block">
                          {m.label}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-limestone-border flex items-center justify-between">
                <Link
                  href={`/contact?priority=${encodeURIComponent(
                    `Practice Profile Inquiry: ${cs.title}`
                  )}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-canopy text-white text-xs font-semibold hover:bg-void transition-colors"
                >
                  <span>Discuss a Similar Requirement for Your Facility</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Discuss your facility's safety and compliance requirements."
        subtitle="Contact HESAONE's engineering practice to review your risk registers, plant layouts, or safety training requirements under confidential NDA."
        primaryBtnText="Initiate Technical Consultation"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
