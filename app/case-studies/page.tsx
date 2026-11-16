import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  FileCheck,
  Layers,
  Scale
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { caseStudiesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Technical Practice Profiles | Engineering Scopes & Methodologies",
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
      { label: "Governing Code", value: "ISO 12100 / OSHA 1910.147" },
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
      <Breadcrumb items={[{ label: "Technical Practice Profiles" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            PRACTICE PROFILES <i>•</i> TECHNICAL EXECUTION
          </p>
          <h1>
            Representative engineering challenges.<br />
            <em>Methodical safety solutions.</em>
          </h1>
          <p className="page-hero-desc">
            Explore how HESAONE LLP conducts specialized process safety assessments,
            fire engineering evaluations, machinery safeguarding, and management system
            audits across high-hazard industrial environments.
          </p>
        </div>
      </section>

      {/* Technical Framework Overview */}
      <section className="track-record-stats section-wrap">
        <div className="stats-highlight-grid">
          <div className="stat-highlight-box">
            <span className="profile-stat-icon"><ShieldCheck size={26} /></span>
            <span className="big-stat">Process Rigor</span>
            <span className="stat-label">Formal HAZOP, HAZID &amp; SIL/LOPA Studies under IEC 61511</span>
          </div>
          <div className="stat-highlight-box">
            <span className="profile-stat-icon"><FileCheck size={26} /></span>
            <span className="big-stat">Management Systems</span>
            <span className="stat-label">ISO 45001 &amp; ISO 14001 Audit-Ready OHSMS Frameworks</span>
          </div>
          <div className="stat-highlight-box">
            <span className="profile-stat-icon"><Layers size={26} /></span>
            <span className="big-stat">Fire &amp; Life Safety</span>
            <span className="stat-label">Hydraulic Network Modeling &amp; Egress Simulation under NFPA</span>
          </div>
          <div className="stat-highlight-box">
            <span className="profile-stat-icon"><Scale size={26} /></span>
            <span className="big-stat">Statutory Compliance</span>
            <span className="stat-label">Factories Act, CPCB/SPCB Consents &amp; OSHA Criteria</span>
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Cards */}
      <section className="case-studies-list-section section-wrap">
        <div className="cases-stack">
          {allPracticeProfiles.map((cs, idx) => (
            <article key={cs.id} className="case-study-card-expanded" id={cs.id}>
              <div className="case-card-top-bar">
                <span className="case-index">PRACTICE PROFILE 0{idx + 1}</span>
                <span className="case-sector-pill">{cs.clientSector}</span>
              </div>

              <h2>{cs.title}</h2>

              <div className="case-narrative-grid">
                <div className="narrative-col">
                  <div className="narrative-block">
                    <h4>Operational Context &amp; Challenge</h4>
                    <p>{cs.challenge}</p>
                  </div>

                  <div className="narrative-block">
                    <h4>HESAONE Technical Execution</h4>
                    <p>{cs.solution}</p>
                  </div>
                </div>

                <div className="metrics-col">
                  <div className="impact-box">
                    <h4>Documented Deliverables &amp; Outcomes:</h4>
                    <ul className="results-list">
                      {cs.results.map((r) => (
                        <li key={r}>
                          <CheckCircle2 size={16} className="bullet-check" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="metrics-row">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="metric-pill">
                          <b>{m.value}</b>
                          <small>{m.label}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-card-footer">
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
