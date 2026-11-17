"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Menu, X, ArrowUpRight, Mail } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Approach", href: "/approach" },
    { label: "Scopes", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#101C24]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3.5"
        : "bg-[#101C24]/85 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-safety-bright group-hover:border-safety/50 transition-all">
            <ShieldCheck size={22} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-white flex items-center gap-1.5 font-sans leading-none">
              HESAONE
              <span className="w-1.5 h-1.5 rounded-full bg-safety-amber inline-block" />
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-slate-400 mt-1">
              PROCESS SAFETY &bull; HSE ADVISORY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-md text-[13.5px] font-medium transition-all ${isActive
                  ? "text-white bg-white/10 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Direct CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-safety hover:bg-safety-amber text-white text-[13px] font-bold tracking-wide transition-all shadow-lg shadow-safety/20 hover:shadow-safety/40"
          >
            <span>Consult Advisory Desk</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D171E] border-b border-white/10 px-6 py-6 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${isActive ? "text-safety-bright bg-white/5 font-semibold" : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-md bg-safety hover:bg-safety-amber text-white text-center text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowUpRight size={15} />
            </Link>
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-safety" /> hesaonellp@gmail.com
              </span>
              <span className="font-mono text-[10px] text-emerald-400">● Pan-India Active</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
