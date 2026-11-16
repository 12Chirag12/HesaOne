"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
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
  { label: "Case Studies", href: "/case-studies" },
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="header-container section-wrap">
          <Link className="brand" href="/" aria-label="HESAONE Home">
            <span className="brand-mark">H</span>
            <span className="brand-copy">
              <strong>HESAONE</strong>
              <small>HSE SOLUTIONS</small>
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
                      {item.label} <ChevronDown size={14} className="dropdown-arrow" />
                    </Link>

                    {servicesDropdownOpen && (
                      <div className="dropdown-panel">
                        <div className="dropdown-header">
                          <span>CORE HSE DISCIPLINES</span>
                          <Link href="/services" className="dropdown-view-all">
                            View all &rarr;
                          </Link>
                        </div>
                        <div className="dropdown-grid">
                          {servicesData.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              className="dropdown-card"
                            >
                              <span className="dropdown-card-no">{svc.no}</span>
                              <div>
                                <strong>{svc.title}</strong>
                                <p>{svc.shortDesc}</p>
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
            <Link className="button button-orange header-cta" href="/contact">
              Get in Touch <ArrowUpRight size={15} />
            </Link>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <div className="mobile-drawer-top">
              <Link className="brand" href="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="brand-mark">H</span>
                <span className="brand-copy">
                  <strong>HESAONE</strong>
                  <small>HSE SOLUTIONS</small>
                </span>
              </Link>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-drawer-nav">
              <Link
                href="/"
                className={pathname === "/" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={pathname.startsWith("/services") ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <div className="mobile-sublinks">
                {servicesData.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{svc.no}</span> {svc.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/industries"
                className={pathname === "/industries" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/approach"
                className={pathname === "/approach" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Approach
              </Link>
              <Link
                href="/case-studies"
                className={pathname === "/case-studies" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="mobile-drawer-bottom">
              <Link
                className="button button-orange w-full"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
