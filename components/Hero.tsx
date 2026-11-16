import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Full-bleed cinematic industrial hero photo */}
      <div className="hero-photo" aria-hidden="true" />
      {/* Editorial multi-gradient wash */}
      <div className="hero-wash" aria-hidden="true" />

      {/* Hero content container */}
      <div className="section-wrap hero-body">
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="kicker-dot" />
            <span>PROCESS SAFETY &bull; INDUSTRIAL HSE ADVISORY</span>
          </div>

          <h1 id="hero-title" className="hero-heading">
            Engineering Process Safety.<br />
            <em>Protecting Industrial Lives.</em>
          </h1>

          <p className="hero-description">
            HESAONE LLP provides specialized process hazard analysis (HAZOP / LOPA), fire safety engineering, and statutory EHS compliance advisory. We partner with industrial leaders to safeguard facilities, eliminate loss of containment, and engineer enduring cultures of safety.
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

          <div className="hero-standards-strip">
            <span className="strip-title">REGULATORY CODE ALIGNMENT</span>
            <div className="strip-tags">
              <span className="std-pill">ISO 45001 / 14001</span>
              <span className="std-pill">OSHA 29 CFR 1910.119</span>
              <span className="std-pill">IEC 61508 / 61511</span>
              <span className="std-pill">NFPA Codes</span>
              <span className="std-pill">CCPS Guidelines</span>
            </div>
          </div>
        </div>

        {/* Right-hand architectural capability badge on desktop */}
        <div className="hero-sidebar">
          <div className="hero-spec-card">
            <div className="spec-card-header">
              <span className="spec-badge">CORE CAPABILITY</span>
              <span className="nda-badge">
                <Lock size={12} /> Mutual NDA Protected
              </span>
            </div>
            <h3>Process Hazard Studies &amp; Statutory Audits</h3>
            <p>
              From greenfield HAZOP/SIL allocation to brownfield plant compliance audits and behavior-based safety leadership.
            </p>
            <div className="spec-features">
              <div className="spec-item">
                <CheckCircle2 size={14} className="spec-check" />
                <span>Multidisciplinary Workshop Facilitation</span>
              </div>
              <div className="spec-item">
                <CheckCircle2 size={14} className="spec-check" />
                <span>Quantitative Consequence Modeling</span>
              </div>
              <div className="spec-item">
                <CheckCircle2 size={14} className="spec-check" />
                <span>Actionable Engineering CAPA Registers</span>
              </div>
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
            <span>Environmental Audits &amp; EIA</span>
          </div>
          <Link href="/contact" className="hero-bottom-cta">
            <span>Request Facility Scope</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
