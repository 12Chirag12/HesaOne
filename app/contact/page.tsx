import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { faqData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Contact & Consultation | Industrial HSE Advisory",
  description:
    "Request an industrial safety consultation, HAZOP study, Factories Act audit, or fire protection engineering review with HESAONE LLP. Confidential technical advisory."
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Breadcrumb items={[{ label: "Contact & Consultation" }]} />

      {/* Page Hero */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            DIRECT COMMUNICATION <i>•</i> TECHNICAL ADVISORY DESK
          </p>
          <h1>
            Let&apos;s engineer a safer,<br />
            <em>more resilient facility together.</em>
          </h1>
          <p className="page-hero-desc">
            Tell us about your facility scope, operational challenges, or upcoming statutory milestone. Our process safety engineers and lead HSE auditors provide confidential, objective technical advisory.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Grid */}
      <section className="contact-main-section section-wrap">
        <div className="contact-layout-grid">
          {/* Form Column */}
          <div className="contact-form-column">
            <div className="form-card-wrapper">
              <div className="form-header-box">
                <span className="badge-tag">ONLINE SCOPE SUBMISSION</span>
                <h2>Request a Facility Scope &amp; Proposal</h2>
                <p>
                  Complete the parameters below to compile your technical inquiry. Our engineering team reviews facility scopes under bilateral NDA.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="p-8 text-center text-muted">Loading consultation form...</div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>

          {/* Coordinates & Credentials Sidebar */}
          <aside className="contact-info-column">
            {/* Direct Coordinates Card */}
            <div className="info-card">
              <h3>Direct Advisory Desk</h3>
              <p className="info-card-sub">
                For prompt communication and technical scope inquiries:
              </p>

              <div className="info-items-stack">
                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="info-label">Official Inquiries &amp; P&amp;ID Submissions</span>
                    <a href="mailto:hesaonellp@gmail.com" className="info-val-link">
                      hesaonellp@gmail.com
                    </a>
                    <small className="info-note">Direct communication with lead consultants</small>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="info-label">Desk Hours</span>
                    <span className="info-val-text">Monday &ndash; Saturday, 09:00 &ndash; 18:00 IST</span>
                    <small className="info-note">Expedited triage for regulatory compliance notices</small>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="info-label">Field Engineering Reach</span>
                    <span className="info-val-text">India Industrial Corridors</span>
                    <small className="info-note">
                      On-site plant audits and HAZOP facilitation across key manufacturing and chemical belts
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Triage Card */}
            <div className="info-card urgent-triage-card">
              <div className="urgent-badge" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "var(--amber)", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: "700" }}>
                <AlertCircle size={16} />
                <span>STATUTORY COMPLIANCE SUPPORT</span>
              </div>
              <h4 style={{ fontSize: "16px", color: "var(--graphite)", marginBottom: "8px" }}>
                Statutory Audit Observations or CAPA Requirements?
              </h4>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.55" }}>
                If your plant requires technical support for statutory safety audit observations (under The Factories Act, 1948 or MSIHC Rules), indicate your upcoming compliance milestones in the inquiry form.
              </p>
            </div>

            {/* Confidentiality & NDA Card */}
            <div className="info-card nda-card">
              <div className="nda-badge" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <ShieldCheck size={20} color="#10B981" />
                <h4 style={{ fontSize: "16px", color: "var(--graphite)", margin: 0 }}>
                  Bilateral NDA Standard
                </h4>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.55", marginBottom: "12px" }}>
                We recognize that process flowsheets, operating temperatures, and plant drawings represent sensitive operational intellectual property.
              </p>
              <ul className="nda-points" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "var(--text-secondary)" }}>
                  <CheckCircle2 size={14} color="#10B981" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span>Mutual Non-Disclosure Agreement (NDA) executed prior to drawing transfers</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "var(--text-secondary)" }}>
                  <CheckCircle2 size={14} color="#10B981" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span>Access restricted strictly to assigned lead safety engineers</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="faq-section">
        <div className="section-wrap">
          <div className="section-center-heading">
            <p className="eyebrow dark">FREQUENTLY ASKED QUESTIONS</p>
            <h2>
              Everything You Need to Know <em>About Engaging HESAONE</em>
            </h2>
            <p>
              Common questions regarding our auditing methodologies, timelines, consultant qualifications, and project onboarding.
            </p>
          </div>

          <FAQAccordion items={faqData} />
        </div>
      </section>
    </div>
  );
}
