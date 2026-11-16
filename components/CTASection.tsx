import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, Lock, FileCheck } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  serviceTag?: string;
}

export default function CTASection({
  title = "Ready to elevate your facility's safety and compliance?",
  subtitle = "Discuss your plant challenges with our certified process safety and EHS engineering team. We provide scoped, objective audits and actionable compliance roadmaps.",
  primaryBtnText = "Request Technical Consultation",
  primaryBtnLink = "/contact",
  serviceTag = "HEALTH • SAFETY • ENVIRONMENT ADVISORY"
}: CTASectionProps) {
  return (
    <section className="cta-banner-section">
      <div className="section-wrap cta-banner-inner">
        <div className="cta-banner-content">
          <div className="cta-kicker">
            <span className="cta-dot" />
            <span>{serviceTag}</span>
          </div>
          <h2>{title}</h2>
          <p>{subtitle}</p>

          <div className="cta-banner-actions">
            <Link className="button button-primary" href={primaryBtnLink}>
              <span>{primaryBtnText}</span>
              <ArrowRight size={16} />
            </Link>
            <a className="button button-ghost" href="mailto:hesaonellp@gmail.com">
              <Mail size={15} />
              <span>Direct Email: hesaonellp@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="cta-banner-side">
          <div className="cta-trust-card">
            <div className="trust-card-header">
              <ShieldCheck size={28} className="trust-icon" />
              <div>
                <strong>HESAONE Practice Standards</strong>
                <span>Engineering Integrity &bull; Code Compliance</span>
              </div>
            </div>
            <div className="trust-commitments">
              <div className="commitment-item">
                <Lock size={15} className="commitment-icon" />
                <div>
                  <b>Mutual NDA Protection</b>
                  <p>All drawings, P&amp;IDs, and operational data remain strictly confidential.</p>
                </div>
              </div>
              <div className="commitment-item">
                <FileCheck size={15} className="commitment-icon" />
                <div>
                  <b>Accredited Lead Auditors</b>
                  <p>ISO 45001, ISO 14001, and Certified Functional Safety Practitioners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
