"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/lib/siteData";

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
      {/* Standards & Accreditation Strip */}
      <div className="footer-strip">
        <div className="section-wrap footer-strip-inner">
          <span className="strip-title">FRAMEWORKS:</span>
          <div className="standards-list">
            <span>ISO 45001</span>
            <span className="strip-dot">•</span>
            <span>ISO 14001</span>
            <span className="strip-dot">•</span>
            <span>OSHA PSM</span>
            <span className="strip-dot">•</span>
            <span>NFPA Codes</span>
            <span className="strip-dot">•</span>
            <span>IEC 61511 / SIL</span>
            <span className="strip-dot">•</span>
            <span>CCPS</span>
          </div>
        </div>
      </div>

      <div className="footer-body section-wrap">
        <div className="footer-col footer-col-brand">
          <Link className="brand footer-brand" href="/" aria-label="HESAONE Home">
            <span className="brand-mark">H</span>
            <span className="brand-copy">
              <strong>HESAONE</strong>
              <small>HSE SOLUTIONS</small>
            </span>
          </Link>
          <p className="footer-tagline">
            Building safer industries.<br />
            Protecting every tomorrow.
          </p>
          <p className="footer-desc">
            Health, Safety &amp; Environment consulting, process risk engineering, and compliance management for high-hazard industrial facilities.
          </p>

          <div className="footer-contact-info">
            <div className="contact-row">
              <Mail size={15} className="text-orange" />
              <a href="mailto:hesaonellp@gmail.com">hesaonellp@gmail.com</a>
            </div>
            <div className="contact-row">
              <MapPin size={15} className="text-orange" />
              <span>Pan-National Advisory Services &amp; Field Audits</span>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/approach">Our Approach</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">HSE Services</h4>
          <ul className="footer-links-list">
            {servicesData.map((svc) => (
              <li key={svc.slug}>
                <Link href={`/services/${svc.slug}`}>{svc.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">HSE Briefings</h4>
          <p className="newsletter-desc">
            Periodic regulatory updates, safety case studies, and compliance insights.
          </p>
          {subscribed ? (
            <div className="newsletter-success">
              <CheckCircle2 size={16} /> Subscribed to technical briefings!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter work email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe to briefing">
                <ArrowUpRight size={15} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="section-wrap footer-bottom-inner">
          <p>© {new Date().getFullYear()} HESAONE LLP. All rights reserved.</p>
          <div className="footer-pillars">
            <span>People</span>
            <i>•</i>
            <span>Process</span>
            <i>•</i>
            <span>Planet</span>
          </div>
          <div className="footer-bottom-links">
            <Link href="/contact">Privacy &amp; Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
