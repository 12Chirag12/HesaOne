import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  FileCheck,
  Layers
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { caseStudiesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Representative Scopes & Case Profiles | Industrial HSE Advisory",
  description:
    "Review representative engineering case profiles across high-consequence industries: HAZOP & SIL allocation for agrochemicals, machinery safeguarding for automotive Tier-1, fire hydrant network audit, ETP optimization, and zero-accident BBS culture.",
};

export default function CaseStudiesPage() {
  const additionalPracticeProfiles = [
    {
      id: "bulk-storage-terminal-qra",
      title: "Quantitative Risk Assessment (QRA) for Flammable Bulk Terminal",
      clientSector: "Chemical Storage & Port Logistics",
      challenge:
        "An expanding flammable solvent tank farm required statutory Quantitative Risk Assessment (QRA) under the MSIHC Rules 1989 and DISH guidelines before commissioning three new 2,500 m³ hydrocarbon storage tanks.",
      solution:
        "HESAONE conducted 3D thermal radiation contour mapping, vapor cloud explosion (VCE) modeling using multi-energy models, and toxic dispersion calculations. Formulated on-site emergency plans (OEP) with foam dosage calculations per NFPA 11.",
      results: [
        "Identified individual risk per year (IRPA) within ALARP guidelines",
        "Optimized deluge foam water monitor placement reducing blind spots by 100%",
        "Secured statutory DISH layout approval and factory license amendment without delay"
      ],
      metrics: [
        { label: "Storage Capacity", value: "7,500 m³" },
        { label: "Fire Monitors", value: "14 Optimized" },
        { label: "DISH Status", value: "100% Cleared" }
      ]
    },
    {
      id: "heavy-foundry-loto",
      title: "Zero-Energy Lockout/Tagout (LOTO) Program for Metal Fabrication",
      clientSector: "Heavy Engineering & Alloy Foundries",
      challenge:
        "A multi-line continuous casting and rolling mill experienced frequent near-miss pinch events during ladle maintenance and hydraulic power pack servicing due to uncoordinated energy isolation.",
      solution:
        "HESAONE surveyed 84 mechanical, pneumatic, and high-voltage electrical energy points. Authored visual, machine-specific LOTO placards in Marathi and Hindi, supplied lockout padlocks and hasps, and trained all shift electricians and millwrights.",
      results: [
        "84 Machine-specific zero-energy isolation procedures drafted and mounted",
        "Conducted 12 practical lock application drills across three operating shifts",
        "Zero mechanical pinch or re-energization incidents over 18 continuous months"
      ],
      metrics: [
        { label: "LOTO Points", value: "84 Placards" },
        { label: "Drills Imparted", value: "12 Certified" },
        { label: "LTI Impact", value: "Zero Incidents" }
      ]
    }
  ];

  const allPracticeProfiles = [...caseStudiesData, ...additionalPracticeProfiles];

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: "Representative Scopes" }]} />

      {/* Hero Header */}
      <section className="bg-white text-slate-900 py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden blueprint-grid-light">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
            <span>REPRESENTATIVE SCOPES &bull; TECHNICAL EXECUTION</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Representative engineering challenges.{" "}
              <span className="text-sky-600">Methodical safety solutions.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore how HESAONE LLP conducts specialized process safety assessments, fire engineering evaluations, machinery safeguarding, and management system audits across high-hazard industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Framework Overview Ribbon */}
      <section className="bg-slate-50 border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <span className="font-mono text-sky-700 uppercase font-bold tracking-wider text-[11px] shrink-0">
            DIAGNOSTIC CAPABILITIES APPLIED:
          </span>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-sky-600" />
              <strong className="text-slate-900">Process Safety:</strong>
              <span>HAZOP &bull; LOPA &bull; QRA (IEC 61511)</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5">
              <FileCheck size={14} className="text-sky-600" />
              <strong className="text-slate-900">Management Systems:</strong>
              <span>ISO 45001 &bull; Factories Act 1948</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5">
              <Layers size={14} className="text-sky-600" />
              <strong className="text-slate-900">Fire Engineering:</strong>
              <span>Hydraulic Sprinkler &bull; NBC 2016</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Scopes Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Bilateral NDA Policy Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
            <Lock size={22} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-slate-900">
              Bilateral Non-Disclosure Agreement (NDA) &amp; Client Confidentiality Policy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In strict accordance with professional engineering ethics and mutual non-disclosure agreements, actual client facility identities, proprietary chemical formulations, and confidential plant topologies are protected. The following practice profiles illustrate typical technical challenges, diagnostic methodologies, and tangible deliverables executed across high-hazard industrial sectors.
            </p>
          </div>
        </div>

        {/* Practice Profiles Stack */}
        <div className="space-y-10">
          {allPracticeProfiles.map((cs, idx) => (
            <article
              key={cs.id}
              id={cs.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 hover:border-sky-400 transition-colors scroll-mt-24"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">
                  REPRESENTATIVE PROFILE 0{idx + 1}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-mono text-xs font-medium self-start sm:self-auto shadow-2xs">
                  {cs.clientSector}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {cs.title}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left: Challenge & Solution */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Operational Context &amp; Challenge:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      HESAONE Technical Execution:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Right: Results & Metrics */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                  <span className="font-mono text-[11px] font-bold text-sky-700 uppercase tracking-wider block">
                    Documented Deliverables &amp; Outcomes:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-white border border-slate-200 p-2.5 rounded-lg text-center shadow-2xs"
                      >
                        <b className="block font-mono text-[11px] text-slate-900 font-bold mb-0.5 leading-snug">
                          {m.value}
                        </b>
                        <small className="text-[10px] text-slate-500 block">
                          {m.label}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/contact?priority=${encodeURIComponent(
                    `Practice Profile Inquiry: ${cs.title}`
                  )}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-2xs"
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
