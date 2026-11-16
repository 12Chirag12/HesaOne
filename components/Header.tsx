"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
import { servicesData } from "@/lib/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
  },
  { label: "Industries", href: "/industries" },
  { label: "Our Approach", href: "/approach" },
  { label: "Practice Profiles", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="header-container section-wrap">
          <Link className="brand" href="/" aria-label="HESAONE Home">
            <span className="brand-mark">
              <ShieldCheck size={20} className="brand-icon" />
            </span>
            <span className="brand-copy">
              <strong>HESAONE</strong>
              <small>HSE &bull; PROCESS SAFETY</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className="nav-item-dropdown"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`nav-link ${isActive ? "active" : ""}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="dropdown-arrow" />
                    </Link>

                    {servicesDropdownOpen && (
                      <div className="dropdown-panel">
                        <div className="dropdown-header">
                          <span>CORE PRACTICE DISCIPLINES</span>
                          <Link href="/services" className="dropdown-view-all">
                            <span>All Capabilities</span>
                            <ArrowUpRight size={13} />
                          </Link>
                        </div>
                        <div className="dropdown-grid">
                          {servicesData.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="dropdown-card"
                            >
                              <span className="dropdown-card-no">{s.no}</span>
                              <div>
                                <strong>{s.title}</strong>
                                <p>{s.shortDesc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <Link className="button button-header" href="/contact">
              Consultation
            </Link>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <span className="brand-copy">
                <strong>HESAONE</strong>
                <small>HSE &bull; PROCESS SAFETY</small>
              </span>
              <button
                type="button"
                className="drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div key={item.href} className="mobile-nav-group">
                    <Link
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                    </Link>

                    {item.hasDropdown && (
                      <div className="mobile-subnav">
                        {servicesData.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="mobile-subnav-link"
                          >
                            <span>{s.no}.</span> {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="drawer-footer">
              <Link className="button button-primary w-full" href="/contact">
                Request Technical Consultation
              </Link>
              <div className="drawer-contact-info">
                <span>Direct Inquiries:</span>
                <a href="mailto:hesaonellp@gmail.com">hesaonellp@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
