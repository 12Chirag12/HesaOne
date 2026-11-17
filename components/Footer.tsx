"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, ShieldCheck, FileCheck } from "lucide-react";
import { servicesData, industriesData } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-strip">
        <div className="section-wrap footer-strip-inner">
          <span className="strip-title">REGULATORY CODES &amp; STATUTORY ALIGNMENTS:</span>
          <div className="standards-list">
            <span>The Factories Act, 1948</span>
            <span className="strip-dot">&bull;</span>
            <span>MSIHC Rules, 1989</span>
            <span className="strip-dot">&bull;</span>
            <span>ISO 45001:2018</span>
            <span className="strip-dot">&bull;</span>
            <span>ISO 14001:2015</span>
            <span className="strip-dot">&bull;</span>
            <span>IEC 61511 / SIL</span>
            <span className="strip-dot">&bull;</span>
            <span>NBC 2016 (Part 4)</span>
            <span className="strip-dot">&bull;</span>
            <span>NFPA Fire Codes</span>
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
            Specialized industrial Health, Safety, and Environmental (HSE) engineering advisory. Conducting rigorous process hazard analyses (HAZOP/LOPA), statutory safety audits, and engineered risk mitigation for high-hazard industry.
          </p>

          <div className="footer-contact-details">
            <div className="contact-row">
              <Mail size={15} className="contact-icon" />
              <a href="mailto:hesaonellp@gmail.com">hesaonellp@gmail.com</a>
            </div>
            <div className="contact-row">
              <MapPin size={15} className="contact-icon" />
              <span>India-Wide Industrial Field Engagements &amp; Plant Audits</span>
            </div>
            <div className="contact-row">
              <FileCheck size={15} className="contact-icon" />
              <span>Bilateral Non-Disclosure Agreements (NDA) Standard</span>
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
            <li><Link href="/case-studies">Representative Scopes</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-col-briefing">
          <h4 className="footer-col-title">Engineering Advisory Desk</h4>
          <p className="footer-desk-desc">
            Direct technical communication with certified safety practitioners and process safety leads.
          </p>
          <div className="footer-desk-card">
            <div className="desk-card-header">
              <span className="desk-status-dot" />
              <span>Direct Client Channel</span>
            </div>
            <p className="desk-email-link">hesaonellp@gmail.com</p>
            <p className="desk-note">
              Share P&amp;IDs, plant layouts, or audit scopes under mutual NDA.
            </p>
            <Link href="/contact" className="desk-cta-button">
              <span>Initiate Facility Scope</span>
              <ArrowRight size={14} />
            </Link>
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
            <Link href="/contact">Technical Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
