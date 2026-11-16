"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, CheckCircle2, ShieldCheck, Lock } from "lucide-react";
import { servicesData, industriesData } from "@/lib/siteData";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-strip">
        <div className="section-wrap footer-strip-inner">
          <span className="strip-title">REGULATORY COMPLIANCE FRAMEWORKS:</span>
          <div className="standards-list">
            <span>ISO 45001:2018</span>
            <span className="strip-dot">&bull;</span>
            <span>ISO 14001:2015</span>
            <span className="strip-dot">&bull;</span>
            <span>OSHA 1910.119 PSM</span>
            <span className="strip-dot">&bull;</span>
            <span>NFPA Fire Codes</span>
            <span className="strip-dot">&bull;</span>
            <span>IEC 61511 / SIL</span>
            <span className="strip-dot">&bull;</span>
            <span>CCPS Guidelines</span>
          </div>
        </div>
      </div>

      <div className="footer-body section-wrap">
        <div className="footer-col footer-col-brand">
          <Link className="brand footer-brand" href="/" aria-label="HESAONE Home">
            <span className="brand-mark">
              <ShieldCheck size={20} className="brand-icon" />
            </span>
            <span className="brand-copy">
              <strong>HESAONE</strong>
              <small>HSE &bull; PROCESS SAFETY</small>
            </span>
          </Link>
          <p className="footer-lead">
            Integrated Health, Safety, and Environmental advisory. Providing rigorous engineering risk studies, statutory audits, and zero-harm leadership for high-hazard industry.
          </p>

          <div className="footer-contact-details">
            <div className="contact-row">
              <Mail size={15} className="contact-icon" />
              <a href="mailto:hesaonellp@gmail.com">hesaonellp@gmail.com</a>
            </div>
            <div className="contact-row">
              <MapPin size={15} className="contact-icon" />
              <span>Pan-Regional Industrial Audits &amp; Field Engineering</span>
            </div>
            <div className="contact-row">
              <Lock size={15} className="contact-icon" />
              <span>Mutual Non-Disclosure Agreement (NDA) Protected</span>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Practice Disciplines</h4>
          <ul className="footer-links-list">
            {servicesData.map((svc) => (
              <li key={svc.slug}>
                <Link href={`/services/${svc.slug}`}>{svc.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Sectors Served</h4>
          <ul className="footer-links-list">
            {industriesData.map((ind) => (
              <li key={ind.slug}>
                <Link href={`/industries#${ind.slug}`}>{ind.title}</Link>
              </li>
            ))}
            <li><Link href="/approach">Engineering Methodology</Link></li>
            <li><Link href="/case-studies">Practice Profiles</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-col-briefing">
          <h4 className="footer-col-title">Technical Briefings</h4>
          <p className="newsletter-desc">
            Periodic technical briefings on process safety statutory changes, HAZOP methods, and risk engineering.
          </p>
          {subscribed ? (
            <div className="newsletter-success">
              <CheckCircle2 size={16} /> Subscribed to technical briefings.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter corporate email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                aria-label="Corporate email"
              />
              <button type="submit" aria-label="Subscribe to technical briefing">
                <ArrowRight size={15} />
              </button>
            </form>
          )}
          <div className="confidentiality-notice">
            <small>Zero spam. We do not share corporate email addresses.</small>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="section-wrap footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} HESAONE LLP. All rights reserved.</p>
          <div className="footer-pillars">
            <span>People</span>
            <i>&bull;</i>
            <span>Process</span>
            <i>&bull;</i>
            <span>Planet</span>
          </div>
          <div className="footer-bottom-links">
            <Link href="/about">About Practice</Link>
            <span>&bull;</span>
            <Link href="/contact">Confidential Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
