import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Industries Served | Chemical, Manufacturing, Logistics & Energy",
  description:
    "Tailored industrial safety, process risk engineering, and environmental compliance for high-hazard sectors: Chemical, Heavy Manufacturing, Infrastructure, Logistics, and Energy."
};

const iconMap: Record<string, LucideIcon> = {
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap
};

export default function IndustriesPage() {
  return (
    <div className="industries-page">
      <Breadcrumb items={[{ label: "Industries We Serve" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            SECTOR EXPERTISE <i>•</i> WHERE WE WORK
          </p>
          <h1>
            Safety solutions engineered for<br />
            <em>your operating reality.</em>
          </h1>
          <p className="page-hero-desc">
            Industrial safety cannot be one-size-fits-all. A continuous chemical reactor
            faces drastically different failure modes than an automated high-bay
            fulfillment warehouse or a heavy structural steel foundry. We design our
            interventions around your specific operational physics.
          </p>
        </div>
      </section>

      {/* Industries Detailed Sections */}
      <section className="industries-detailed-section section-wrap">
        <div className="industries-stack">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.iconName] || Factory;
            return (
              <div key={ind.slug} className="industry-detail-block" id={ind.slug}>
                <div className="ind-block-header">
                  <div className="ind-badge-wrap">
                    <span className="ind-no-tag">SECTOR {ind.no}</span>
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
                          <span key={std} className="std-chip">
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: HESAONE Tailored Solutions & Outcome */}
                  <div className="ind-solutions-col">
                    <div className="ind-subcard solutions-subcard">
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

                      <div className="ind-outcome-banner">
                        <small>CORE ENGINEERING OBJECTIVE</small>
                        <p>{ind.outcomes}</p>
                      </div>

                      <div className="ind-action-row">
                        <Link
                          href={`/contact?sector=${encodeURIComponent(ind.title)}`}
                          className="button button-primary"
                        >
                          <span>Consult for {ind.title}</span>
                          <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Don't see your specific sector listed?"
        subtitle="HESAONE advises specialized industrial setups including defense manufacturing, food processing, and port logistics. Contact our team to review your facility's hazard profile."
        primaryBtnText="Speak with an Industry Specialist"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
