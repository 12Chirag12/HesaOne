import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { servicesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Services & Practice Disciplines | Industrial HSE Advisory",
  description:
    "Comprehensive industrial HSE advisory: Process Hazard Analysis (HAZOP / LOPA), Factories Act statutory compliance, ISO 45001 audits, fire safety hydraulics, and machine safeguarding."
};

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Breadcrumb items={[{ label: "Services & Capabilities" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            OUR DISCIPLINES <i>•</i> 6 CORE HSE CAPABILITIES
          </p>
          <h1>
            Engineering expertise for<br />
            <em>high-consequence industrial safety.</em>
          </h1>
          <p className="page-hero-desc">
            We provide deep-domain engineering advisory across the operational lifecycle—from early process hazard evaluations and consequence modeling to statutory compliance audits and frontline safety culture.
          </p>
        </div>
      </section>

      {/* Fast Discipline Navigation Anchor Strip */}
      <section className="standards-banner">
        <div className="section-wrap standards-banner-inner">
          <span className="standards-banner-title">QUICK CAPABILITY INDEX</span>
          <div className="standards-pills-row">
            {servicesData.map((svc) => (
              <a
                key={svc.no}
                href={`#${svc.slug}`}
                className="standards-item"
                style={{ textDecoration: "none" }}
              >
                <b>{svc.no}</b>
                <span>{svc.title.split("&")[0].trim()}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Editorial Service Blocks */}
      <section className="services-catalog-section section-wrap">
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.iconName] || ShieldCheck;
            return (
              <article
                key={svc.slug}
                id={svc.slug}
                className="catalog-card"
                style={{ padding: "40px" }}
              >
                <div className="catalog-card-header" style={{ marginBottom: "24px", paddingBottom: "18px", borderBottom: "1px solid var(--border-light)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span className="catalog-no-badge">DISCIPLINE {svc.no}</span>
                    <Icon size={26} color="var(--graphite)" />
                    <h2 style={{ fontSize: "24px", margin: 0, color: "var(--graphite)" }}>{svc.title}</h2>
                  </div>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="button button-outline"
                    style={{ padding: "8px 18px", fontSize: "12.5px" }}
                  >
                    <span>Full Technical Scope</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="ind-content-grid">
                  {/* Left Column: Narrative & Deliverables */}
                  <div>
                    <p style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--text-secondary)", marginBottom: "24px" }}>
                      {svc.fullDesc}
                    </p>
                    <div className="catalog-deliverables">
                      <h4>Core Scope &amp; Deliverables:</h4>
                      <ul>
                        {svc.deliverables.map((item) => (
                          <li key={item}>
                            <CheckCircle2 size={15} className="bullet-check" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Standards, Benefits & Direct Action */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="ind-subcard" style={{ background: "var(--limestone)" }}>
                      <h4 style={{ fontSize: "13px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "10px" }}>
                        Governing Standards &amp; Codes:
                      </h4>
                      <div className="strip-tags">
                        {svc.keyStandards.map((std) => (
                          <span
                            key={std}
                            className="std-pill"
                            style={{ background: "#FFFFFF", color: "var(--graphite)", borderColor: "var(--border-light)" }}
                          >
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="ind-subcard" style={{ background: "#FFFFFF", border: "1px solid var(--border-light)", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <h4 style={{ fontSize: "13px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "10px" }}>
                          Typical Facility Application:
                        </h4>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "var(--text-secondary)" }}>
                          {svc.sampleUseCases.map((uc) => (
                            <li key={uc} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                              <span style={{ color: "var(--amber)", fontWeight: "bold" }}>&rsaquo;</span>
                              <span>{uc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid var(--border-subtle)" }}>
                        <Link
                          className="button button-primary"
                          style={{ width: "100%", justifyContent: "center" }}
                          href={`/contact?service=${encodeURIComponent(svc.title)}`}
                        >
                          <span>Request Proposal for {svc.title.split("&")[0].trim()}</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Consultation CTA */}
      <CTASection
        title="Need a specialized technical consultation?"
        subtitle="Our principal safety engineers evaluate process diagrams, fire networks, and statutory compliance under mutual NDA."
        primaryBtnText="Initiate Facility Scope"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
