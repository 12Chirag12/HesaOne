import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lock, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Full-bleed cinematic industrial hero photo with refined contrast */}
      <div className="hero-photo" aria-hidden="true" />
      {/* Multi-gradient wash for flawless typography contrast */}
      <div className="hero-wash" aria-hidden="true" />

      {/* Hero content container */}
      <div className="section-wrap hero-body">
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="kicker-dot" />
            <span>HSE ENGINEERING CONSULTANCY &bull; PAN-INDIA ADVISORY</span>
          </div>

          <h1 id="hero-title" className="hero-heading">
            Engineering Process Safety.<br />
            <em>Protecting Industrial Lives.</em>
          </h1>

          <p className="hero-description">
            HESAONE LLP provides specialized process hazard analysis (HAZOP / LOPA), fire safety hydraulics, and statutory safety audits. We partner with industrial leaders to safeguard facilities, prevent loss of primary containment, and engineer enduring safety cultures.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              <span>Schedule Technical Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <Link className="button button-outline-light" href="/services">
              <span>Explore Practice Disciplines</span>
            </Link>
          </div>

          <div className="hero-trust-indicators">
            <div className="trust-indicator-item">
              <span className="trust-indicator-dot" />
              <span>Pan-India On-Site Deployment</span>
            </div>
            <div className="trust-indicator-divider" />
            <div className="trust-indicator-item">
              <span className="trust-indicator-dot" />
              <span>Bilateral NDA Confidentiality</span>
            </div>
            <div className="trust-indicator-divider" />
            <div className="trust-indicator-item">
              <span className="trust-indicator-dot" />
              <span>Quantitative Risk Modeling (QRA)</span>
            </div>
          </div>
        </div>

        {/* Right-hand architectural engineering panel */}
        <div className="hero-sidebar">
          <div className="hero-blueprint-panel">
            <div className="blueprint-top">
              <span className="blueprint-badge">PRACTICE SPECIFICATION</span>
              <span className="blueprint-nda">
                <Lock size={12} /> Bilateral NDA Protected
              </span>
            </div>
            <div className="blueprint-code">GOVERNING CODES: FACTORIES ACT &bull; ISO 45001 &bull; IEC 61511</div>
            <h3>Process Hazard Studies &amp; Statutory Audits</h3>
            <p>
              Multidisciplinary engineering verification from greenfield HAZOP / SIL allocation to brownfield plant compliance audits and behavior-based safety leadership.
            </p>

            <div className="blueprint-specs-grid">
              <div className="spec-metric-item">
                <span className="spec-metric-num">100%</span>
                <span className="spec-metric-lbl">Statutory Compliance Scope</span>
              </div>
              <div className="spec-metric-item">
                <span className="spec-metric-num">6</span>
                <span className="spec-metric-lbl">Core Engineering Disciplines</span>
              </div>
            </div>

            <div className="blueprint-features">
              <div className="blueprint-feature-row">
                <CheckCircle2 size={14} className="blueprint-check" />
                <span>Multidisciplinary HAZOP &amp; LOPA Workshops</span>
              </div>
              <div className="blueprint-feature-row">
                <CheckCircle2 size={14} className="blueprint-check" />
                <span>Consequence Dispersion &amp; Quantitative Risk (QRA)</span>
              </div>
              <div className="blueprint-feature-row">
                <CheckCircle2 size={14} className="blueprint-check" />
                <span>Audit-Ready Engineering CAPA Registers</span>
              </div>
            </div>

            <div className="blueprint-footer">
              <Link href="/services" className="blueprint-action-link">
                <span>View All 6 Practice Disciplines</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional bottom capability bar spanning full width */}
      <div className="hero-bottom">
        <div className="section-wrap hero-bottom-inner">
          <div className="hero-bottom-item">
            <b>01</b>
            <span>Process Safety &amp; HAZOP/LOPA</span>
          </div>
          <div className="hero-bottom-item">
            <b>02</b>
            <span>Safety Management (ISO 45001)</span>
          </div>
          <div className="hero-bottom-item">
            <b>03</b>
            <span>Fire Safety &amp; Active Suppression</span>
          </div>
          <div className="hero-bottom-item">
            <b>04</b>
            <span>Environmental &amp; SPCB Consents</span>
          </div>
          <Link href="/contact" className="hero-bottom-cta">
            <span>Request Facility Scope</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
