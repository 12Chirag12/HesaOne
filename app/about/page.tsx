import type { Metadata } from "next";
import {
  Users,
  Target,
  CheckCircle2,
  Layers
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Philosophy, Leadership & Standards",
  description:
    "Learn about HESAONE LLP: our origins, our People-Process-Planet philosophy, certified engineering advisory, and commitment to industrial safety."
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <Breadcrumb items={[{ label: "About Us" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            WHO WE ARE <i>•</i> HESAONE LLP
          </p>
          <h1>
            Safety is not a checkbox.<br />
            <em>It is our fundamental duty.</em>
          </h1>
          <p className="page-hero-desc">
            HESAONE LLP was founded with a clear mission: to replace superficial,
            paper-heavy compliance with robust, engineering-backed Health, Safety, and
            Environmental systems that truly protect lives, assets, and the planet.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-section section-wrap">
        <div className="mission-grid">
          <div className="mission-card">
            <span className="card-kicker">OUR PURPOSE</span>
            <h3>Our Mission</h3>
            <p>
              To empower industrial leaders with the technical clarity, practical
              engineering tools, and cultural leadership required to eliminate workplace
              fatalities, prevent major containment disasters, and achieve sustainable
              compliance.
            </p>
          </div>
          <div className="mission-card">
            <span className="card-kicker">OUR HORIZON</span>
            <h3>Our Vision</h3>
            <p>
              To become the benchmark industrial HSE advisory practice—trusted globally
              by plant engineers, corporate executives, and statutory authorities for
              unflinching technical integrity and human-centric safety innovation.
            </p>
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
              True industrial excellence occurs at the intersection of human care,
              engineering precision, and environmental stewardship.
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
                  <CheckCircle2 size={16} /> Behavior-Based Safety (BBS) and cultural buy-in
                </li>
                <li>
                  <CheckCircle2 size={16} /> Unconditional Stop-Work Authority for all ranks
                </li>
                <li>
                  <CheckCircle2 size={16} /> Ergonomic health and occupational hygiene monitoring
                </li>
                <li>
                  <CheckCircle2 size={16} /> Multilingual, hands-on workforce skill enablement
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
                Flawless engineering barriers that prevent loss of containment.
              </p>
              <ul className="pillar-list">
                <li>
                  <CheckCircle2 size={16} /> Rigorous HAZOP, HAZID &amp; What-If risk studies
                </li>
                <li>
                  <CheckCircle2 size={16} /> SIL/LOPA Functional Safety verification (IEC 61511)
                </li>
                <li>
                  <CheckCircle2 size={16} /> Machine safeguarding and strict LOTO energy isolation
                </li>
                <li>
                  <CheckCircle2 size={16} /> Quantitative Consequence and Dispersion Modeling
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
                  <CheckCircle2 size={16} /> Comprehensive Environmental Impact Assessments (EIA)
                </li>
                <li>
                  <CheckCircle2 size={16} /> Industrial Effluent Treatment &amp; Zero Liquid Discharge
                </li>
                <li>
                  <CheckCircle2 size={16} /> Air Pollution Control &amp; Continuous Stack Audits
                </li>
                <li>
                  <CheckCircle2 size={16} /> Corporate Carbon Accounting (Scope 1, 2 &amp; 3)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
            We hold ourselves to the highest ethical and professional standards in
            every client engagement.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-item">
            <span className="value-no">01</span>
            <h4>Field Grounding</h4>
            <p>
              Safety solutions designed in air-conditioned boardrooms often fail on the
              shop floor. We walk the process lines, inspect the pump rooms, and listen
              to the front line.
            </p>
          </div>
          <div className="value-item">
            <span className="value-no">02</span>
            <h4>Technical Rigor</h4>
            <p>
              We base every recommendation on established engineering codes—API, NFPA,
              OSHA, ISO, IEC—not anecdotal guesswork.
            </p>
          </div>
          <div className="value-item">
            <span className="value-no">03</span>
            <h4>Uncompromising Confidentiality</h4>
            <p>
              Process chemistries, proprietary flowsheets, and internal audit findings
              remain strictly protected under robust non-disclosure frameworks.
            </p>
          </div>
          <div className="value-item">
            <span className="value-no">04</span>
            <h4>Actionable Pragmatism</h4>
            <p>
              We do not deliver 500-page theoretical reports that collect dust. We provide
              prioritized, step-by-step action trackers that engineering teams can
              implement.
            </p>
          </div>
        </div>
      </section>

      {/* Standards & Certifications Alignment Strip */}
      <section className="standards-matrix-section">
        <div className="section-wrap">
          <div className="standards-matrix-box">
            <div className="matrix-text">
              <span className="badge-tag">GOVERNANCE &amp; ACCREDITATION</span>
              <h3>Global Frameworks &amp; Statutory Familiarity</h3>
              <p>
                Our consultants maintain active credentials and deep working experience
                with principal international and statutory governing bodies:
              </p>
            </div>
            <div className="matrix-tags-grid">
              <div className="matrix-tag-item">
                <strong>ISO 45001:2018</strong>
                <small>Occupational Health &amp; Safety Management</small>
              </div>
              <div className="matrix-tag-item">
                <strong>ISO 14001:2015</strong>
                <small>Environmental Management Systems</small>
              </div>
              <div className="matrix-tag-item">
                <strong>OSHA 29 CFR 1910.119</strong>
                <small>Process Safety Management of Highly Hazardous Chemicals</small>
              </div>
              <div className="matrix-tag-item">
                <strong>NFPA Codes</strong>
                <small>National Fire Protection Association Standards</small>
              </div>
              <div className="matrix-tag-item">
                <strong>IEC 61508 / 61511</strong>
                <small>Functional Safety &amp; Safety Instrumented Systems</small>
              </div>
              <div className="matrix-tag-item">
                <strong>CPCB / SPCB Guidelines</strong>
                <small>Pollution Control Board Consents &amp; Auditing</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Partner with HESAONE for your next safety milestone."
        subtitle="Whether preparing for ISO 45001 certification, commissioning a new chemical reactor, or overhauling machine safeguarding, our advisory team is ready."
        primaryBtnText="Schedule an Advisory Call"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
