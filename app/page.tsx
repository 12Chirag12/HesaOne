import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Flame,
  Leaf,
  ClipboardCheck,
  GraduationCap,
  HardHat,
  Factory,
  Building2,
  FlaskConical,
  Truck,
  CheckCircle2,
  Zap,
  LucideIcon
} from "lucide-react";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import InteractiveRiskAssessment from "@/components/InteractiveRiskAssessment";
import { servicesData, industriesData, caseStudiesData } from "@/lib/siteData";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap,
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap
};

export default function Home() {
  const featuredStudy = caseStudiesData[0];

  return (
    <>
      <Hero />

      {/* Engineering Practice Standards Alignment Ribbon */}
      <section className="standards-banner">
        <div className="section-wrap standards-banner-inner">
          <div className="standards-banner-title">
            <span>GOVERNING STATUTES</span>
            <small>PAN-INDIA ACCREDITATION</small>
          </div>
          <div className="standards-pills-row">
            <div className="standards-item">
              <b>The Factories Act, 1948</b>
              <span>Statutory Plant Audits</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <b>MSIHC Rules, 1989</b>
              <span>Hazardous Chemicals &amp; MAH</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <b>ISO 45001 &bull; 14001</b>
              <span>OHSMS &amp; Environmental Systems</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <b>IEC 61508 / 61511</b>
              <span>Functional Safety &amp; SIL Allocation</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <b>NBC 2016 Part 4</b>
              <span>Fire Hydraulics &amp; Life Safety</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Practice Statement */}
      <section className="intro section-wrap" id="about">
        <div className="intro-grid">
          <div className="intro-left">
            <div className="section-kicker">01 // PRACTICE PHILOSOPHY</div>
            <h2>
              Safety is not administrative paperwork.
              <em> It is the engineering foundation of resilient industry.</em>
            </h2>
          </div>
          <div className="intro-right">
            <p className="intro-lead">
              HESAONE LLP provides specialized engineering advisory and compliance solutions for high-hazard industrial operations. We bridge the gap between regulatory requirements and frontline plant reality through quantitative risk studies, objective audits, and field-tested safety leadership.
            </p>
            <div className="intro-charter">
              <div className="charter-row">
                <span className="charter-num">01</span>
                <div className="charter-content">
                  <strong>People First &bull; Workforce Safeguarding</strong>
                  <p>Protecting frontline worker lives through redundant engineering safeguards and authentic frontline safety culture.</p>
                </div>
              </div>
              <div className="charter-row">
                <span className="charter-num">02</span>
                <div className="charter-content">
                  <strong>Process Integrity &bull; Barrier Defense</strong>
                  <p>Rigorous physics-based barriers preventing loss of primary containment, toxic dispersion, and catastrophic industrial fires.</p>
                </div>
              </div>
              <div className="charter-row">
                <span className="charter-num">03</span>
                <div className="charter-content">
                  <strong>Planet Stewardship &bull; Zero Discharge</strong>
                  <p>Technical pollution abatement, air dispersion modeling, and complete statutory State Pollution Control Board consent compliance.</p>
                </div>
              </div>
            </div>
            <div className="intro-actions">
              <Link className="text-link-arrow" href="/about">
                <span>Read our full organizational philosophy &amp; governance</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Disciplines — Architectural Capability Ledger */}
      <section className="services" id="services">
        <div className="section-wrap">
          <div className="services-master-layout">
            <div className="services-sticky-sidebar">
              <div className="section-kicker">02 // PRACTICE DISCIPLINES</div>
              <h2>
                Specialized HSE engineering<br />
                <em>built for industrial realities.</em>
              </h2>
              <p className="services-lead-text">
                Explore our six core advisory disciplines covering early process design, statutory risk quantification, fire hydraulics, and frontline safety culture.
              </p>
              <div className="services-sidebar-cta">
                <Link className="button button-primary" href="/contact">
                  <span>Request Scoped Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/services" className="text-link-arrow" style={{ marginTop: "14px" }}>
                  <span>View Complete Service Matrix</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="services-ledger-list">
              {servicesData.map((svc) => {
                const Icon = iconMap[svc.iconName] || ShieldCheck;
                return (
                  <article className="ledger-item" key={svc.no}>
                    <div className="ledger-num-col">
                      <span className="ledger-index">{svc.no}</span>
                      <Icon size={22} strokeWidth={1.5} className="ledger-icon" />
                    </div>
                    <div className="ledger-main-col">
                      <div className="ledger-header">
                        <h3>{svc.title}</h3>
                        <span className="ledger-standard-tag">
                          <code>{svc.keyStandards[0].split("(")[0].trim()}</code>
                        </span>
                      </div>
                      <p className="ledger-desc">{svc.shortDesc}</p>
                      <div className="ledger-deliverables-row">
                        <span className="deliverable-chip">Certified Lead Engineers</span>
                        <span className="deliverable-chip">Actionable CAPA</span>
                        <span className="deliverable-chip">Statutory Acceptance</span>
                      </div>
                    </div>
                    <div className="ledger-action-col">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="ledger-arrow-btn"
                        aria-label={`View technical scope for ${svc.title}`}
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Lifecycle Framework */}
      <section className="lifecycle-section section-wrap">
        <div className="lifecycle-inner">
          <div className="lifecycle-header">
            <span className="section-kicker">03 // METHODOLOGY</span>
            <h2>How HESAONE Partners With Your Facility</h2>
            <p>
              Every industrial site possesses unique operating physics. Our disciplined 4-stage lifecycle ensures every recommendation is scientifically validated, prioritized, and operationally viable.
            </p>
          </div>

          <div className="lifecycle-stages-grid">
            <div className="lifecycle-stage-card">
              <span className="stage-step-num">PHASE 01</span>
              <h4>Understand &amp; Scope</h4>
              <p>
                In-depth review of P&amp;IDs, process envelopes, statutory consent conditions, and historical near-miss logs.
              </p>
              <div className="stage-deliverable-label">
                <span>DELIVERABLE</span>
                <b>Scoping Blueprint &amp; Hazard Baseline</b>
              </div>
            </div>

            <div className="lifecycle-stage-card">
              <span className="stage-step-num">PHASE 02</span>
              <h4>Assess &amp; Quantify</h4>
              <p>
                Multidisciplinary HAZOP workshops, quantitative consequence modeling (dispersion/fire), and hydraulic flow verification.
              </p>
              <div className="stage-deliverable-label">
                <span>DELIVERABLE</span>
                <b>Node Worksheets &amp; Risk Contours</b>
              </div>
            </div>

            <div className="lifecycle-stage-card">
              <span className="stage-step-num">PHASE 03</span>
              <h4>Engineer &amp; Recommend</h4>
              <p>
                Applying the hierarchy of controls to design independent protection layers, SIL interlocks, and machine safeguarding.
              </p>
              <div className="stage-deliverable-label">
                <span>DELIVERABLE</span>
                <b>Prioritized CAPA &amp; Engineering Specs</b>
              </div>
            </div>

            <div className="lifecycle-stage-card">
              <span className="stage-step-num">PHASE 04</span>
              <h4>Strengthen &amp; Sustain</h4>
              <p>
                Frontline training in Behavior-Based Safety, energy isolation (LOTO), and internal auditor coaching for lasting compliance.
              </p>
              <div className="stage-deliverable-label">
                <span>DELIVERABLE</span>
                <b>Governance System &amp; Workforce Competency</b>
              </div>
            </div>
          </div>

          <div className="lifecycle-footer-action">
            <Link className="button button-primary" href="/contact">
              <span>Initiate a Facility Scoping Review</span>
              <ArrowRight size={16} />
            </Link>
            <Link className="button button-outline" href="/approach">
              <span>Explore Our Full Methodology</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Facility Risk Diagnostic Section */}
      <section className="section-wrap diagnostic-container">
        <InteractiveRiskAssessment />
      </section>

      {/* Industries Showcase Section */}
      <section className="industries" id="industries">
        <div className="industries-inner section-wrap">
          <div className="industries-left">
            <p className="section-kicker light">04 // SECTOR SPECIALIZATION</p>
            <h2>
              Engineered for your<br />
              <em>operational physics.</em>
            </h2>
            <p className="industries-copy">
              A continuous batch chemical reactor faces completely different risk profiles than an automated high-bay fulfillment warehouse or a medium-voltage substation. We tailor our technical interventions directly to your sector&apos;s hazards and statutory obligations.
            </p>
            <div className="industries-cta-group">
              <Link className="button button-primary" href="/industries">
                <span>Explore All Sectors</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="button button-ghost" href="/contact">
                <span>Discuss Your Facility Profile</span>
              </Link>
            </div>
          </div>
          <div className="industry-list">
            {industriesData.map((ind) => {
              const Icon = iconMap[ind.iconName] || Factory;
              return (
                <Link
                  href={`/industries#${ind.slug}`}
                  key={ind.title}
                  className="industry-row-item"
                >
                  <span className="industry-num">{ind.no}</span>
                  <Icon size={20} className="industry-icon" />
                  <div className="industry-content">
                    <b>{ind.title}</b>
                    <small>{ind.tagline}</small>
                  </div>
                  <ArrowUpRight size={16} className="industry-arrow" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Practice Profile Spotlight */}
      <section className="case-spotlight section-wrap">
        <div className="case-spotlight-inner">
          <div className="case-spotlight-header">
            <div className="spotlight-badge-row">
              <span className="spotlight-kicker">05 // REPRESENTATIVE TECHNICAL DOSSIER</span>
              <span className="case-sector-badge">{featuredStudy.clientSector}</span>
            </div>
            <h3>{featuredStudy.title}</h3>
          </div>
          <div className="case-spotlight-grid">
            <div className="case-text-col">
              <h4>Operational Context</h4>
              <p>{featuredStudy.challenge}</p>
              <h4>HESAONE Engineering Intervention</h4>
              <p>{featuredStudy.solution}</p>
              <Link href="/case-studies" className="button button-outline">
                <span>View All Representative Scopes</span>
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="case-metrics-col">
              <h4>Scope &amp; Engineering Deliverables</h4>
              <div className="metrics-box-grid">
                {featuredStudy.metrics.map((m) => (
                  <div key={m.label} className="metric-box">
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
              <ul className="case-bullet-list">
                {featuredStudy.results.map((res) => (
                  <li key={res}>
                    <CheckCircle2 size={16} className="bullet-check" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Confidential Consultation CTA */}
      <CTASection
        title="Start a confidential technical dialogue with HESAONE."
        subtitle="Tell us about your facility, expansion scope, or upcoming statutory audit milestones. Our lead safety engineers provide scoped, objective guidance under bilateral NDA."
        primaryBtnText="Request a Technical Consultation"
        primaryBtnLink="/contact"
      />
    </>
  );
}
