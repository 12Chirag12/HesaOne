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
  Layers,
  LucideIcon
} from "lucide-react";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
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

      {/* Engineering Practice Standards Alignment Strip */}
      <section className="standards-banner">
        <div className="section-wrap standards-banner-inner">
          <span className="standards-banner-title">GOVERNING FRAMEWORKS &amp; CODES</span>
          <div className="standards-pills-row">
            <div className="standards-item">
              <b>ISO 45001 &bull; 14001</b>
              <span>OHSMS &amp; Environmental Systems</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <b>OSHA 1910.119</b>
              <span>Process Safety Management (PSM)</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <b>IEC 61508 / 61511</b>
              <span>Functional Safety &amp; SIL Allocation</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <b>NFPA Fire Codes</b>
              <span>Hydraulic Sprinkler &amp; Life Safety</span>
            </div>
            <div className="standards-divider" />
            <div className="standards-item">
              <b>CCPS Guidelines</b>
              <span>Center for Chemical Process Safety</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Practice Statement */}
      <section className="intro section-wrap" id="about">
        <div className="intro-grid">
          <div className="intro-left">
            <div className="section-kicker">ABOUT HESAONE LLP</div>
            <h2>
              Safety is not administrative paperwork.
              <em> It is the engineering foundation of resilient industry.</em>
            </h2>
          </div>
          <div className="intro-right">
            <p className="intro-lead">
              HESAONE LLP provides specialized engineering advisory and compliance solutions for high-hazard industrial operations. We bridge the gap between regulatory requirements and frontline plant reality through quantitative risk studies, objective audits, and field-tested safety leadership.
            </p>
            <div className="intro-pillars-mini">
              <div className="pillar-mini-item">
                <ShieldCheck size={20} className="pillar-icon" />
                <div>
                  <strong>People First</strong>
                  <span>Safeguarding workforce lives and creating authentic safety ownership.</span>
                </div>
              </div>
              <div className="pillar-mini-item">
                <Layers size={20} className="pillar-icon" />
                <div>
                  <strong>Process Integrity</strong>
                  <span>Rigorous engineering barriers preventing loss of containment and fires.</span>
                </div>
              </div>
              <div className="pillar-mini-item">
                <Leaf size={20} className="pillar-icon" />
                <div>
                  <strong>Planet Stewardship</strong>
                  <span>Technical pollution abatement and strict statutory consent compliance.</span>
                </div>
              </div>
            </div>
            <div className="intro-actions">
              <Link className="text-link-arrow" href="/about">
                <span>Read our full organizational philosophy</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="services" id="services">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="section-kicker">PRACTICE DISCIPLINES</p>
              <h2>
                Specialized HSE engineering<br />
                <em>built for industrial realities.</em>
              </h2>
            </div>
            <div className="section-heading-right">
              <p className="section-description">
                Explore our six core advisory disciplines covering early process design, statutory risk quantification, fire hydraulics, and frontline safety culture.
              </p>
              <Link href="/services" className="text-link-all">
                <span>View complete capabilities</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="service-grid">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.iconName] || ShieldCheck;
              return (
                <article className="service-card" key={svc.no}>
                  <div className="service-top">
                    <span className="service-index">{svc.no}</span>
                    <Icon size={24} strokeWidth={1.5} className="service-icon" />
                  </div>
                  <h3>{svc.title}</h3>
                  <p className="service-desc">{svc.shortDesc}</p>

                  <div className="service-standards-tag">
                    <span className="code-label">Standard:</span>
                    <code>{svc.keyStandards[0].split("(")[0].trim()}</code>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="service-card-link"
                    aria-label={`View technical scope for ${svc.title}`}
                  >
                    <span>View technical scope</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Lifecycle Framework (Replacing the gimmicky quiz) */}
      <section className="lifecycle-section section-wrap">
        <div className="lifecycle-inner">
          <div className="lifecycle-header">
            <span className="section-kicker">ENGINEERING LIFECYCLE</span>
            <h2>How HESAONE Partners With Your Facility</h2>
            <p>
              Every industrial site possesses unique operating physics. Our disciplined 4-stage lifecycle ensures every recommendation is scientifically validated, prioritized, and operationally viable.
            </p>
          </div>

          <div className="lifecycle-stages-grid">
            <div className="lifecycle-stage-card">
              <span className="stage-step-num">01</span>
              <h4>Understand &amp; Scope</h4>
              <p>
                In-depth review of P&amp;IDs, process flow envelopes, statutory consent conditions, and historical near-miss logs.
              </p>
              <div className="stage-deliverable-label">
                <b>Deliverable:</b> Scoping Blueprint &amp; Hazard Baseline
              </div>
            </div>

            <div className="lifecycle-stage-card">
              <span className="stage-step-num">02</span>
              <h4>Assess &amp; Quantify</h4>
              <p>
                Multidisciplinary HAZOP workshops, quantitative consequence modeling (dispersion/fire), and hydraulic flow verification.
              </p>
              <div className="stage-deliverable-label">
                <b>Deliverable:</b> Node Worksheets &amp; Risk Contours
              </div>
            </div>

            <div className="lifecycle-stage-card">
              <span className="stage-step-num">03</span>
              <h4>Engineer &amp; Recommend</h4>
              <p>
                Applying the hierarchy of controls to design independent protection layers, SIL interlocks, and physical machine safeguarding.
              </p>
              <div className="stage-deliverable-label">
                <b>Deliverable:</b> Prioritized CAPA &amp; Engineering Specs
              </div>
            </div>

            <div className="lifecycle-stage-card">
              <span className="stage-step-num">04</span>
              <h4>Strengthen &amp; Sustain</h4>
              <p>
                Frontline training in Behavior-Based Safety, energy isolation (LOTO), and internal auditor coaching for lasting compliance.
              </p>
              <div className="stage-deliverable-label">
                <b>Deliverable:</b> Governance System &amp; Workforce Competency
              </div>
            </div>
          </div>

          <div className="lifecycle-footer-action">
            <Link className="button button-primary" href="/contact">
              Initiate a Facility Scoping Review <ArrowRight size={16} />
            </Link>
            <Link className="button button-outline" href="/approach">
              Explore Our Full Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Showcase Section */}
      <section className="industries" id="industries">
        <div className="industries-inner section-wrap">
          <div className="industries-left">
            <p className="section-kicker light">SECTOR SPECIALIZATION</p>
            <h2>
              Engineered for your<br />
              <em>operational physics.</em>
            </h2>
            <p className="industries-copy">
              A continuous batch chemical reactor faces completely different risk profiles than an automated high-bay fulfillment warehouse or a medium-voltage substation. We tailor our technical interventions directly to your sector&apos;s hazards.
            </p>
            <div className="industries-cta-group">
              <Link className="button button-primary" href="/industries">
                Explore All Sectors <ArrowRight size={16} />
              </Link>
              <Link className="button button-ghost" href="/contact">
                Discuss Your Facility Profile
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
              <span className="spotlight-kicker">TECHNICAL PRACTICE PROFILE</span>
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
                View All Practice Profiles <ArrowRight size={15} />
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
        subtitle="Tell us about your facility, expansion scope, or upcoming audit milestones. Our lead safety engineers provide scoped, objective guidance under mutual NDA."
        primaryBtnText="Request a Technical Consultation"
        primaryBtnLink="/contact"
      />
    </>
  );
}
