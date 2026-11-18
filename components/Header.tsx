"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { companyInfo } from "@/lib/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Methodology", href: "/approach" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Precision Utility Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 font-mono">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DISH Approved Safety Auditor</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="text-slate-400 hidden sm:inline font-sans text-xs italic">
              {companyInfo.sanskritMotto} &mdash; {companyInfo.mottoEnglish}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${companyInfo.phones[0].number.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Phone size={11} className="text-sky-400 group-hover:scale-110 transition-transform" />
              <span>{companyInfo.phones[0].number}</span>
            </a>
            <span className="text-slate-700">&bull;</span>
            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Mail size={11} className="text-sky-400 group-hover:scale-110 transition-transform" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Crystal Frosted Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] border-b border-slate-200/80 py-3"
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <Link href="/" className="inline-flex items-center gap-3 group shrink-0" aria-label="HESAONE Home">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-sky-400 shadow-sm group-hover:border-sky-500/80 group-hover:shadow-[0_0_15px_-3px_rgba(2,132,199,0.3)] transition-all">
              <ShieldCheck size={22} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                  HESAONE
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-sky-50 text-sky-700 border border-sky-200/80">
                  LLP
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono font-medium tracking-wider text-slate-500">
                Total Safety Solutions
              </span>
            </div>
          </Link>

          {/* Neat & Clean Desktop Navigation Menubar */}
          <nav className="hidden lg:flex items-center bg-slate-100/70 p-1 rounded-full border border-slate-200/70 shadow-2xs backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    active
                      ? "bg-white text-slate-900 font-semibold shadow-xs border border-slate-200/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Callout */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-sm shadow-sky-600/20 hover:shadow-md hover:shadow-sky-600/30 transition-all group"
            >
              <span>Consultation Desk</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-white/95 backdrop-blur-xl border-t border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "text-sky-700 bg-sky-50 font-semibold border border-sky-200/60"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors shadow-sm"
              >
                <span>Request Facility Scope</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
