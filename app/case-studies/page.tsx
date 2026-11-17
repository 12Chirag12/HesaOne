import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  FileCheck,
  Layers,
  Scale,
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
    <div className="case-studies-page">
      <Breadcrumb items={[{ label: "Representative Scopes" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            REPRESENTATIVE SCOPES <i>•</i> TECHNICAL EXECUTION
          </p>
          <h1>
            Representative engineering challenges.<br />
            <em>Methodical safety solutions.</em>
          </h1>
          <p className="page-hero-desc">
            Explore how HESAONE LLP conducts specialized process safety assessments, fire engineering evaluations, machinery safeguarding, and management system audits across high-hazard industrial environments.
          </p>
        </div>
      </section>

      {/* Technical Framework Overview */}
      <section className="standards-banner">
        <div className="section-wrap standards-banner-inner">
          <span className="standards-banner-title">DIAGNOSTIC CAPABILITIES APPLIED</span>
          <div className="standards-pills-row">
            <div className="standards-item">
              <ShieldCheck size={16} color="var(--amber)" />
              <b>Process Safety</b>
              <span>HAZOP &bull; LOPA &bull; QRA (IEC 61511)</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <FileCheck size={16} color="var(--amber)" />
              <b>Management Systems</b>
              <span>ISO 45001 &bull; Factories Act 1948</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <Layers size={16} color="var(--amber)" />
              <b>Fire Engineering</b>
              <span>Hydraulic Sprinkler &bull; NBC 2016</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <Scale size={16} color="var(--amber)" />
              <b>Statutory Consents</b>
              <span>MSIHC Rules &bull; SPCB Parameters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Cards */}
      <section className="case-studies-list-section section-wrap">
        {/* Confidentiality Disclosure Banner */}
        <div className="confidentiality-disclosure-banner">
          <div className="disclosure-icon-wrap">
            <Lock size={20} />
          </div>
          <div className="disclosure-copy">
            <strong>Bilateral Non-Disclosure Agreement (NDA) &amp; Client Confidentiality Policy</strong>
            <p>
              In strict accordance with professional engineering ethics and mutual non-disclosure agreements, actual client organization names, proprietary chemical formulations, and confidential plant topologies are withheld. The following practice profiles represent typical technical challenges, diagnostic methodologies, and tangible deliverables executed across high-hazard industrial sectors.
            </p>
          </div>
        </div>

        <div className="cases-stack">
          {allPracticeProfiles.map((cs, idx) => (
            <article key={cs.id} className="case-study-card-expanded" id={cs.id}>
              <div className="case-card-top-bar">
                <span className="case-index">REPRESENTATIVE PROFILE 0{idx + 1}</span>
                <span className="case-sector-pill">{cs.clientSector}</span>
              </div>

              <h2 style={{ fontSize: "24px", color: "var(--graphite)", marginBottom: "20px" }}>{cs.title}</h2>

              <div className="case-narrative-grid">
                <div className="narrative-col" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <h4 style={{ fontSize: "12.5px", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                      Operational Context &amp; Challenge
                    </h4>
                    <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: "1.6" }}>{cs.challenge}</p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: "12.5px", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                      HESAONE Technical Execution
                    </h4>
                    <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: "1.6" }}>{cs.solution}</p>
                  </div>
                </div>

                <div className="metrics-col">
                  <div className="ind-subcard" style={{ background: "var(--limestone)" }}>
                    <h4 style={{ fontSize: "12.5px", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "12px" }}>
                      Documented Deliverables &amp; Outcomes:
                    </h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                      {cs.results.map((r) => (
                        <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.45" }}>
                          <CheckCircle2 size={16} className="bullet-check" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                      {cs.metrics.map((m) => (
                        <div key={m.label} style={{ background: "#FFFFFF", border: "1px solid var(--border-light)", padding: "10px 8px", borderRadius: "var(--radius-xs)", textAlign: "center" }}>
                          <b style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--graphite)", marginBottom: "2px" }}>{m.value}</b>
                          <small style={{ fontSize: "10px", color: "var(--text-muted)" }}>{m.label}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
                <Link
                  href={`/contact?priority=${encodeURIComponent(
                    `Practice Profile Inquiry: ${cs.title}`
                  )}`}
                  className="button button-primary"
                >
                  <span>Discuss a Similar Requirement for Your Facility</span>
                  <ArrowUpRight size={15} />
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
