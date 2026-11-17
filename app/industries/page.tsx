import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Scale,
  LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { industriesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Industries Served | Chemical, Heavy Engineering, Logistics & Energy",
  description:
    "Tailored industrial safety, process risk engineering, and environmental compliance for high-hazard sectors: Chemical, Manufacturing, Infrastructure, Logistics, and Energy."
};

const iconMap: Record<string, LucideIcon> = {
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap
};

const industryImages: Record<string, string> = {
  "manufacturing-engineering": "/images/industry-manufacturing.jpg",
  "chemical-pharmaceuticals": "/images/industry-chemical.jpg",
  "infrastructure-construction": "/images/hse-inspection.jpg",
  "logistics-warehousing": "/images/industry-logistics.jpg",
  "energy-power-utilities": "/images/industry-energy.jpg",
};

export default function IndustriesPage() {
  return (
    <div className="industries-page">
      <Breadcrumb items={[{ label: "Industries We Serve" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            SECTOR SPECIALIZATION <i>•</i> OPERATIONAL REALITY
          </p>
          <h1>
            Safety solutions engineered for<br />
            <em>your operational physics.</em>
          </h1>
          <p className="page-hero-desc">
            Industrial safety cannot be one-size-fits-all. A continuous chemical reactor faces fundamentally different failure modes than an automated high-bay fulfillment warehouse or a medium-voltage substation. We design our technical interventions around your specific operational physics and statutory obligations.
          </p>
        </div>
      </section>

      {/* Fast Sector Navigation Anchor Strip */}
      <section className="standards-banner">
        <div className="section-wrap standards-banner-inner">
          <span className="standards-banner-title">EXPLORE INDUSTRIAL SECTORS</span>
          <div className="standards-pills-row">
            {industriesData.map((ind) => (
              <a
                key={ind.no}
                href={`#${ind.slug}`}
                className="standards-item"
                style={{ textDecoration: "none" }}
              >
                <b>{ind.no}</b>
                <span>{ind.title.split("&")[0].trim()}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Detailed Sections */}
      <section className="industries-detailed-section section-wrap">
        <div className="industries-stack">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.iconName] || Factory;
            const photoSrc = industryImages[ind.slug];

            return (
              <article key={ind.slug} className="industry-detail-block" id={ind.slug}>
                {photoSrc && (
                  <div style={{ position: "relative", height: "220px", borderRadius: "var(--radius-sm)", overflow: "hidden", marginBottom: "28px" }}>
                    <Image
                      src={photoSrc}
                      alt={ind.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(0deg, rgba(16, 28, 35, 0.85) 0%, rgba(16, 28, 35, 0.25) 100%)",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "24px",
                        color: "#FFFFFF"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span className="spec-badge">SECTOR {ind.no}</span>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#F4F2EC" }}>{ind.tagline}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="ind-block-header">
                  <div className="ind-badge-wrap">
                    <Icon size={32} className="ind-header-icon" />
                  </div>
                  <div>
                    <h2>{ind.title}</h2>
                    <p className="ind-tagline">{ind.tagline}</p>
                  </div>
                </div>

                <p className="ind-desc">{ind.description}</p>

                <div className="ind-content-grid">
                  {/* Left: Hazards & Regulatory Codes */}
                  <div className="ind-hazards-col">
                    <div className="ind-subcard hazard-subcard">
                      <h4>
                        <AlertTriangle size={18} className="hazard-header-icon" /> Typical Hazard Exposures
                      </h4>
                      <ul>
                        {ind.typicalHazards.map((hazard) => (
                          <li key={hazard}>
                            <span className="hazard-dot" />
                            <span>{hazard}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="ind-subcard standards-subcard">
                      <h4>
                        <Scale size={18} className="standards-header-icon" /> Key Compliance Frameworks
                      </h4>
                      <div className="ind-standards-tags">
                        {ind.complianceStandards.map((std) => (
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
                  </div>

                  {/* Right: HESAONE Tailored Solutions & Outcome */}
                  <div className="ind-solutions-col">
                    <div className="ind-subcard solutions-subcard" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                      <h4>
                        <ShieldCheck size={18} className="solutions-header-icon" /> Tailored HESAONE Interventions
                      </h4>
                      <ul>
                        {ind.solutionsProvided.map((sol) => (
                          <li key={sol}>
                            <CheckCircle2 size={16} className="bullet-check" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>

                      <div style={{ background: "#FFFFFF", padding: "16px", borderRadius: "var(--radius-xs)", border: "1px solid var(--border-light)", margin: "20px 0" }}>
                        <small style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                          CORE ENGINEERING OBJECTIVE
                        </small>
                        <p style={{ fontSize: "13px", color: "var(--graphite)", fontWeight: "600", marginTop: "4px" }}>
                          {ind.outcomes}
                        </p>
                      </div>

                      <div style={{ marginTop: "auto" }}>
                        <Link
                          href={`/contact?sector=${encodeURIComponent(ind.title)}`}
                          className="button button-primary"
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          <span>Consult on {ind.title.split("&")[0].trim()} Profile</span>
                          <ArrowUpRight size={15} />
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

      {/* CTA */}
      <CTASection
        title="Operating a specialized industrial facility?"
        subtitle="HESAONE advises heavy process installations including bulk chemical terminals, continuous fabrication plants, and energy substations. Contact our team to review your facility's hazard profile."
        primaryBtnText="Speak with an Industry Specialist"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
