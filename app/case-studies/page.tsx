import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { caseStudiesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Case Studies & Track Record | Quantified HSE Impact",
  description:
    "Review real-world safety case studies from HESAONE LLP: HAZOP studies, ISO 45001 transitions, high-bay fire safety engineering, and zero-harm workplace transformations."
};

const extendedCaseStudies = [
  ...caseStudiesData,
  {
    id: "cs-foundry-loto",
    title: "Heavy Foundry & Forging: Machine Safeguarding & Turnkey LOTO Overhaul",
    clientSector: "Heavy Engineering",
    challenge:
      "A 40-year-old foundry operating 8 hydraulic forging presses and automated conveyor loops suffered repeated pinch-point injuries and 2 near-fatal unisolated hydraulic releases during die changes.",
    solution:
      "HESAONE conducted individual EN ISO 13849 machine safety evaluations, designed Category 4 interlocked light curtains, and deployed a bilingual visual Lockout/Tagout (LOTO) energy isolation procedure for all 48 machinery assets.",
    results: [
      "Zero pinch-point or lockout-related injuries recorded in the subsequent 24 months",
      "Cut machine maintenance changeover downtime by 18% through standardized procedures",
      "Received Regional Safety Council 'Excellence in Safeguarding' recognition"
    ],
    metrics: [
      { label: "LOTO Procedures Mapped", value: "48 Assets" },
      { label: "Changeover Downtime", value: "-18%" },
      { label: "Major Injuries", value: "0 in 2 Yrs" }
    ]
  },
  {
    id: "cs-substation-arcflash",
    title: "Thermal Power & Utilities: 33kV Substation Arc Flash & Electrical Audit",
    clientSector: "Energy & Utilities",
    challenge:
      "An industrial captive power utility required IEEE 1584 arc flash boundary calculations and PPE category labeling across 4 medium-voltage switchgear rooms following a non-fatal arc incident.",
    solution:
      "HESAONE modeled electrical network single-line diagrams (SLDs), calculated incident energy at each busbar, applied NFPA 70E warning labels, and trained 60 high-voltage electrical technicians.",
    results: [
      "Mapped and labeled incident energy for 120 switchgear panels and breakers",
      "Standardized 40 cal/cm² arc flash PPE kits across all utility rooms",
      "Eliminated unplanned electrical breaker trip faults during maintenance"
    ],
    metrics: [
      { label: "Panels Labeled", value: "120 Units" },
      { label: "Electricians Trained", value: "60 Staff" },
      { label: "Incident Energy Mapped", value: "100%" }
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="case-studies-page">
      <Breadcrumb items={[{ label: "Case Studies" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            MEASURABLE FIELD IMPACT <i>•</i> CASE STUDIES
          </p>
          <h1>
            Real industrial challenges.<br />
            <em>Engineered safety solutions.</em>
          </h1>
          <p className="page-hero-desc">
            Explore how HESAONE LLP partners with high-hazard facilities to identify
            latent process risks, eliminate mechanical hazards, ensure statutory compliance,
            and build enduring cultures of safety.
          </p>
        </div>
      </section>

      {/* Aggregated Track Record Statistics */}
      <section className="track-record-stats section-wrap">
        <div className="stats-highlight-grid">
          <div className="stat-highlight-box">
            <span className="big-stat">3.2M+</span>
            <span className="stat-label">Consecutive Safe Man-Hours Supervised</span>
          </div>
          <div className="stat-highlight-box">
            <span className="big-stat">-68%</span>
            <span className="stat-label">Average Reduction in Lost-Time Frequency (LTIFR)</span>
          </div>
          <div className="stat-highlight-box">
            <span className="big-stat">100%</span>
            <span className="stat-label">First-Time Statutory &amp; ISO Certification Pass Rate</span>
          </div>
          <div className="stat-highlight-box">
            <span className="big-stat">0</span>
            <span className="stat-label">Catastrophic Process Containment Failures on Client Sites</span>
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Cards */}
      <section className="case-studies-list-section section-wrap">
        <div className="cases-stack">
          {extendedCaseStudies.map((cs, idx) => (
            <article key={cs.id} className="case-study-card-expanded" id={cs.id}>
              <div className="case-card-top-bar">
                <span className="case-index">CASE STUDY 0{idx + 1}</span>
                <span className="case-sector-pill">{cs.clientSector}</span>
              </div>

              <h2>{cs.title}</h2>

              <div className="case-narrative-grid">
                <div className="narrative-col">
                  <div className="narrative-block">
                    <h4>The Challenge</h4>
                    <p>{cs.challenge}</p>
                  </div>

                  <div className="narrative-block">
                    <h4>HESAONE Solution &amp; Engineering Intervention</h4>
                    <p>{cs.solution}</p>
                  </div>
                </div>

                <div className="metrics-col">
                  <div className="impact-box">
                    <h4>Quantified Results:</h4>
                    <ul className="results-list">
                      {cs.results.map((r) => (
                        <li key={r}>
                          <CheckCircle2 size={16} className="text-orange" />
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
                    `Case Study Reference: ${cs.title}`
                  )}`}
                  className="button button-orange"
                >
                  Discuss a Similar Challenge for Your Facility <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to achieve measurable safety outcomes at your site?"
        subtitle="Contact HESAONE's engineering practice to review your risk registers, plant layouts, or safety training requirements."
        primaryBtnText="Initiate an Engagement Discussion"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
