import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Mail } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  serviceTag?: string;
}

export default function CTASection({
  title = "Ready to elevate your facility's safety and compliance?",
  subtitle = "Discuss your site challenges with our certified process safety and EHS engineers. We provide scoped, objective audits and actionable roadmaps.",
  primaryBtnText = "Request an Industrial Consultation",
  primaryBtnLink = "/contact",
  serviceTag = "HEALTH • SAFETY • ENVIRONMENT"
}: CTASectionProps) {
  return (
    <section className="cta-banner-section">
      <div className="section-wrap cta-banner-inner">
        <div className="cta-banner-content">
          <div className="eyebrow orange-tag">
            <span /> {serviceTag}
          </div>
          <h2>{title}</h2>
          <p>{subtitle}</p>

          <div className="cta-banner-actions">
            <Link className="button button-orange" href={primaryBtnLink}>
              {primaryBtnText} <ArrowUpRight size={17} />
            </Link>
            <a className="button button-outline-light" href="mailto:hesaonellp@gmail.com">
              <Mail size={16} /> Direct Email Inquiry
            </a>
          </div>
        </div>

        <div className="cta-banner-side">
          <div className="cta-trust-badge">
            <div className="badge-icon">
              <ShieldCheck size={32} />
            </div>
            <div className="badge-details">
              <strong>HESAONE Commitment</strong>
              <p>Zero-Harm Philosophy • Confirmed NDA Protection • Practical Field Solutions</p>
            </div>
          </div>
          <div className="cta-stats-row">
            <div>
              <b>100%</b>
              <span>Audit Confidentiality</span>
            </div>
            <div>
              <b>24h</b>
              <span>Initial Technical Response</span>
            </div>
            <div>
              <b>ISO / OSHA</b>
              <span>Aligned Frameworks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
