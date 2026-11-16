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
    "Request an industrial safety consultation, HAZOP study, ISO 45001 audit, or emergency safety review with HESAONE LLP. Confidential, NDA-protected technical advisory."
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Breadcrumb items={[{ label: "Contact & Consultation" }]} />

      {/* Page Hero */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            START A CONVERSATION <i>•</i> TECHNICAL ADVISORY DESK
          </p>
          <h1>
            Let&apos;s engineer a safer,<br />
            <em>more resilient facility together.</em>
          </h1>
          <p className="page-hero-desc">
            Tell us about your plant layout, operational challenges, or upcoming statutory
            milestone. Our senior process safety engineers and lead EHS auditors provide
            confidential, objective technical reviews.
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
                <span className="badge-tag">ONLINE CONSULTATION REQUEST</span>
                <h2>Request a Facility Scope &amp; Proposal</h2>
                <p>
                  Fill out the parameters below. We typically respond within 24 business
                  hours with an initial technical assessment and NDA framework.
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
              <h3>Direct Channels</h3>
              <p className="info-card-sub">
                For prompt communication or preliminary technical queries:
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
                    <small className="info-note">Monitored directly by lead consultants</small>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="info-label">Response Commitment</span>
                    <span className="info-val-text">Under 24 Business Hours</span>
                    <small className="info-note">Same-day triage for regulatory notices</small>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="info-label">Advisory Coverage</span>
                    <span className="info-val-text">Pan-National &amp; Global Industrial Hubs</span>
                    <small className="info-note">
                      Specialized on-site audits across key chemical, manufacturing, and port belts
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Urgent Triage Card */}
            <div className="info-card urgent-triage-card">
              <div className="urgent-badge">
                <AlertCircle size={18} />
                <span>URGENT STATUTORY MATTERS</span>
              </div>
              <h4>Facing a Regulatory Notice or Post-Incident Audit?</h4>
              <p>
                If your plant has received an inspection citation, show-cause notice, or
                experienced an unexpected loss of containment, mark your inquiry as
                <strong> &quot;Immediate&quot;</strong> in the form or email us directly
                with &quot;URGENT TRIAGE&quot; in the subject line.
              </p>
            </div>

            {/* Confidentiality & Security Card */}
            <div className="info-card nda-card">
              <div className="nda-badge">
                <ShieldCheck size={22} className="nda-shield-icon" />
                <h4>Strict Confidentiality Guaranteed</h4>
              </div>
              <p>
                We understand the sensitivity of proprietary formulations, process
                temperatures, and operational incidents.
              </p>
              <ul className="nda-points">
                <li>
                  <CheckCircle2 size={14} /> Mutual Non-Disclosure Agreement (NDA) executed prior
                  to data transfer
                </li>
                <li>
                  <CheckCircle2 size={14} /> Encrypted, access-restricted project folders
                </li>
                <li>
                  <CheckCircle2 size={14} /> Zero public disclosure without explicit written consent
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
              Common questions regarding our auditing methodologies, timelines, consultant
              certifications, and project onboarding.
            </p>
          </div>

          <FAQAccordion items={faqData} />
        </div>
      </section>
    </div>
  );
}
