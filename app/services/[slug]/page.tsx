import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Scale,
  LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { servicesData } from "@/lib/siteData";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap
};

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found"
    };
  }

  return {
    title: `${service.title} | Technical HSE Services`,
    description: service.shortDesc
  };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || ShieldCheck;
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="service-detail-page">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title }
        ]}
      />

      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="section-wrap service-hero-inner">
          <div className="service-hero-main">
            <div className="service-hero-kicker">
              <span className="hero-no-tag">SERVICE {service.no}</span>
              <span className="kicker-sep">/</span>
              <span className="kicker-category">INDUSTRIAL ENGINEERING</span>
            </div>
            <h1>{service.title}</h1>
            <p className="service-hero-headline">{service.heroHeadline}</p>
            <div className="service-hero-actions">
              <Link
                className="button button-primary"
                href={`/contact?service=${encodeURIComponent(service.title)}`}
              >
                <span>Request Scoped Proposal</span>
                <ArrowUpRight size={15} />
              </Link>
              <a
                className="button button-outline"
                href="mailto:hesaonellp@gmail.com"
              >
                <span>Direct Technical Desk</span>
              </a>
            </div>
          </div>

          <div className="service-hero-visual-card">
            <div className="visual-card-top">
              <Icon size={36} className="visual-card-icon" />
              <span className="visual-card-title">{service.title}</span>
            </div>
            <div className="visual-card-body">
              <p>{service.shortDesc}</p>
              <div className="visual-badge">
                <ShieldCheck size={16} /> Certified Methodology Aligned
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="section-wrap service-detail-layout">
        <div className="service-main-content">
          {/* Executive Overview */}
          <div className="content-block">
            <div className="block-eyebrow">
              <span className="dot" /> EXECUTIVE OVERVIEW
            </div>
            <h2>The Challenge &amp; Our Engineering Approach</h2>
            <p className="lead-paragraph">{service.fullDesc}</p>
          </div>

          {/* Deliverables & Outputs */}
          <div className="content-block">
            <div className="block-eyebrow">
              <span className="dot" /> SCOPE &amp; OUTPUTS
            </div>
            <h2>Key Deliverables &amp; Technical Reports</h2>
            <p>
              When you engage HESAONE, your engineering leadership receives verified,
              rigorously documented outputs ready for management presentation and
              regulatory submission:
            </p>

            <div className="deliverables-grid">
              {service.deliverables.map((item, idx) => (
                <div key={item} className="deliverable-item">
                  <div className="deliv-num">0{idx + 1}</div>
                  <div className="deliv-text">
                    <strong>{item}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Methodology */}
          <div className="content-block">
            <div className="block-eyebrow">
              <span className="dot" /> STRUCTURED EXECUTION
            </div>
            <h2>Our 4-Stage Methodology for {service.title}</h2>
            <p>
              We follow a repeatable, structured progression to ensure complete
              technical coverage with minimal disruption to your daily operations:
            </p>

            <div className="methodology-steps-list">
              {service.methodology.map((m, idx) => (
                <div key={m.step} className="method-step-card">
                  <div className="method-step-badge">STAGE 0{idx + 1}</div>
                  <div className="method-step-content">
                    <h3>{m.step}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          <div className="content-block">
            <div className="block-eyebrow">
              <span className="dot" /> RETURN ON SAFETY INVESTMENT
            </div>
            <h2>Quantifiable Business &amp; Operational Value</h2>
            <div className="benefits-cards-grid">
              {service.businessBenefits.map((b) => (
                <div key={b} className="benefit-card">
                  <CheckCircle2 size={18} className="bullet-check" />
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Standards & Typical Use Cases */}
          <div className="content-block">
            <div className="block-eyebrow">
              <span className="dot" /> STATUTORY &amp; TECHNICAL BASIS
            </div>
            <h2>Governing International Codes &amp; Standards</h2>
            <ul className="standards-bullet-list">
              {service.keyStandards.map((std) => (
                <li key={std}>
                  <Scale size={18} className="standards-icon" />
                  <span>{std}</span>
                </li>
              ))}
            </ul>

            <h3 className="subhead-margin">Typical Client Scenarios</h3>
            <div className="use-cases-box">
              {service.sampleUseCases.map((uc) => (
                <div key={uc} className="use-case-item">
                  <span className="bullet-point">▸</span>
                  <span>{uc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="service-sidebar">
          {/* Quick Enquire Card */}
          <div className="sidebar-card sidebar-enquire-card">
            <span className="sidebar-kicker">ENGAGE OUR TEAM</span>
            <h3>Need assistance with {service.title}?</h3>
            <p>
              Speak directly with an accredited safety specialist. We review your P&amp;IDs
              and provide a transparent scope outline within 24 hours.
            </p>
            <Link
              className="button button-primary w-full"
              href={`/contact?service=${encodeURIComponent(service.title)}`}
            >
              <span>Request Consultation</span>
              <ArrowUpRight size={15} />
            </Link>
            <div className="sidebar-contact-direct">
              <small>Direct Email Inquiry:</small>
              <a href="mailto:hesaonellp@gmail.com">hesaonellp@gmail.com</a>
            </div>
          </div>

          {/* Other Core Services Navigation */}
          <div className="sidebar-card">
            <h4>Other HSE Disciplines</h4>
            <div className="sidebar-other-links">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="other-service-row"
                >
                  <span className="other-num">{other.no}</span>
                  <span className="other-name">{other.title}</span>
                  <ArrowRight size={14} className="other-arrow" />
                </Link>
              ))}
            </div>
          </div>

          {/* Guarantee / NDA Note */}
          <div className="sidebar-card sidebar-badge-card">
            <ShieldCheck size={28} className="shield-badge-icon" />
            <h5>100% NDA Protected</h5>
            <p>
              All facility drawings, process chemistries, and operational data remain
              confidential under strict legal non-disclosure agreements.
            </p>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to deploy ${service.title} at your site?`}
        subtitle="Contact HESAONE today for a preliminary discovery discussion or tender quote."
        primaryBtnText="Initiate Facility Scope"
        primaryBtnLink={`/contact?service=${encodeURIComponent(service.title)}`}
      />
    </div>
  );
}
