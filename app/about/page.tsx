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
    <div className="about-page">
      <Breadcrumb items={[{ label: "About Us" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            PRACTICE ORIGINS <i>•</i> HESAONE LLP
          </p>
          <h1>
            Safety is not a checkbox.<br />
            <em>It is our fundamental duty.</em>
          </h1>
          <p className="page-hero-desc">
            HESAONE LLP was established to bridge the gap between regulatory theory and frontline plant realities. We replace superficial paperwork with robust, engineering-backed Health, Safety, and Environmental systems that protect lives, plant primary containment, and the environment.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section with Real Plant Inspection Photo */}
      <section className="about-mission-section section-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "center" }}>
          <div className="mission-grid" style={{ gridTemplateColumns: "1fr", gap: "24px" }}>
            <div className="mission-card">
              <span className="card-kicker">OUR PURPOSE</span>
              <h3>Our Mission</h3>
              <p>
                To empower industrial leaders with the technical clarity, practical engineering tools, and cultural leadership required to eliminate workplace fatalities, prevent major loss of containment disasters, and achieve resilient compliance.
              </p>
            </div>
            <div className="mission-card">
              <span className="card-kicker">OUR HORIZON</span>
              <h3>Our Vision</h3>
              <p>
                To serve as a trusted industrial HSE advisory practice—recognized by plant engineers, corporate executives, and statutory authorities for uncompromising technical rigor and field-tested safety solutions.
              </p>
            </div>
          </div>

          <div style={{ position: "relative", height: "420px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-light)" }}>
            <Image
              src="/images/hse-inspection.jpg"
              alt="HESAONE Safety Engineers Conducting Industrial Inspection"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(0deg, rgba(16, 28, 35, 0.88) 0%, rgba(16, 28, 35, 0.2) 60%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "24px",
                color: "#FFFFFF"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <ShieldCheck size={16} color="var(--amber-bright)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: "700", color: "var(--amber-bright)", letterSpacing: "0.1em" }}>
                  ON-SITE ENGINEERING RIGOR
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-light-muted)", margin: 0 }}>
                Every recommendation is formulated on the plant floor alongside operating teams, not from an ivory tower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="pillars-section">
        <div className="section-wrap">
          <div className="section-center-heading">
            <p className="eyebrow dark">OUR CORE ARCHITECTURE</p>
            <h2>
              The Three Pillars: <em>People. Process. Planet.</em>
            </h2>
            <p>
              True industrial excellence occurs at the intersection of human care, engineering precision, and environmental stewardship.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Users size={32} />
              </div>
              <span className="pillar-num">PILLAR 01</span>
              <h3>People</h3>
              <p className="pillar-lead">
                Every worker deserves to return home safely at the end of every shift.
              </p>
              <ul className="pillar-list">
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Behavior-Based Safety (BBS) and cultural ownership</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Unconditional Stop-Work Authority enablement</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Ergonomic assessment and industrial hygiene monitoring</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Multilingual, practical shop-floor training modules</span>
                </li>
              </ul>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Layers size={32} />
              </div>
              <span className="pillar-num">PILLAR 02</span>
              <h3>Process</h3>
              <p className="pillar-lead">
                Flawless engineering barriers that prevent loss of primary containment.
              </p>
              <ul className="pillar-list">
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Rigorous HAZOP, HAZID &amp; What-If risk workshops</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>SIL/LOPA Functional Safety allocation (IEC 61511)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Machine safeguarding and strict LOTO energy isolation</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Quantitative Consequence Dispersion &amp; Blast Modeling</span>
                </li>
              </ul>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Target size={32} />
              </div>
              <span className="pillar-num">PILLAR 03</span>
              <h3>Planet</h3>
              <p className="pillar-lead">
                Preserving natural ecosystems and securing statutory environmental consents.
              </p>
              <ul className="pillar-list">
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Environmental Impact Assessments (EIA) and EMPs</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Effluent Treatment Plant (ETP) &amp; Zero Liquid Discharge (ZLD)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Air pollution control &amp; continuous stack emission audits</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>Statutory Consent to Establish (CTE) &amp; Operate (CTO)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operating Values */}
      <section className="values-section section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">HOW WE WORK</p>
            <h2>
              Our Operating Values &amp;<br />
              <em>Professional Code</em>
            </h2>
          </div>
          <p className="section-description">
            We hold ourselves to the highest ethical and professional standards in every client engagement.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-item">
            <span className="value-no">01</span>
            <h4>Field Grounding</h4>
            <p>
              Safety systems designed in remote conference rooms often fail on the shop floor. We inspect piping runs, verify valves, and listen to shift operators.
            </p>
          </div>
          <div className="value-item">
            <span className="value-no">02</span>
            <h4>Technical Rigor</h4>
            <p>
              We ground every finding in established statutory and engineering codes—The Factories Act, MSIHC Rules, NFPA, IEC, and CCPS—never anecdotal guesswork.
            </p>
          </div>
          <div className="value-item">
            <span className="value-no">03</span>
            <h4>Strict Confidentiality</h4>
            <p>
              Proprietary chemical flowsheets, P&amp;IDs, and audit findings are strictly protected under bilateral non-disclosure agreements (NDAs).
            </p>
          </div>
          <div className="value-item">
            <span className="value-no">04</span>
            <h4>Actionable Pragmatism</h4>
            <p>
              We avoid 500-page theoretical manuals that collect dust. We formulate prioritized, realistic action registers that plant engineering teams can execute.
            </p>
          </div>
        </div>
      </section>

      {/* Standards & Certifications Alignment Strip */}
      <section className="standards-matrix-section">
        <div className="section-wrap">
          <div className="standards-matrix-box">
            <div className="matrix-text">
              <span className="badge-tag">STATUTORY &amp; GOVERNING FRAMEWORKS</span>
              <h3>Statutory Compliance &amp; International Code Alignment</h3>
              <p>
                Our engineering team maintains active working familiarity with both Indian statutory requirements and international safety codes:
              </p>
            </div>
            <div className="matrix-tags-grid">
              <div className="matrix-tag-item">
                <strong>The Factories Act, 1948</strong>
                <small>Sections 41B, 41C &amp; State Factory Rules Compliance</small>
              </div>
              <div className="matrix-tag-item">
                <strong>MSIHC Rules, 1989</strong>
                <small>Hazardous Chemical Storage &amp; Safety Audit Reports</small>
              </div>
              <div className="matrix-tag-item">
                <strong>ISO 45001:2018</strong>
                <small>Occupational Health &amp; Safety Management Systems</small>
              </div>
              <div className="matrix-tag-item">
                <strong>ISO 14001:2015</strong>
                <small>Environmental Management Systems &amp; Auditing</small>
              </div>
              <div className="matrix-tag-item">
                <strong>IEC 61508 / 61511</strong>
                <small>Functional Safety, SIF Design &amp; SIL Allocation</small>
              </div>
              <div className="matrix-tag-item">
                <strong>NBC 2016 &bull; NFPA Codes</strong>
                <small>Fire Protection, Hydraulics &amp; Life Safety Egress</small>
              </div>
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
