"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, ShieldCheck, FileCheck } from "lucide-react";
import { servicesData, industriesData } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-canopy text-limestone-light border-t border-canopy-border">
      {/* Top Regulatory Standards Ribbon */}
      <div className="border-b border-canopy-border/80 bg-canopy-subtle/50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2 text-limestone-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
            <span className="font-mono uppercase tracking-wider font-semibold text-[11px] text-safety-light">
              Governing Codes &amp; Statutory Alignments:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-limestone-muted text-[11px] font-mono">
            <span>The Factories Act, 1948</span>
            <span className="text-canopy-border">•</span>
            <span>MSIHC Rules, 1989</span>
            <span className="text-canopy-border">•</span>
            <span>ISO 45001:2018</span>
            <span className="text-canopy-border">•</span>
            <span>ISO 14001:2015</span>
            <span className="text-canopy-border">•</span>
            <span>IEC 61511 / SIL</span>
            <span className="text-canopy-border">•</span>
            <span>NBC 2016 Part 4</span>
            <span className="text-canopy-border">•</span>
            <span>NFPA Fire Codes</span>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Corporate Overview (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="HESAONE Home">
              <div className="w-10 h-10 rounded-lg bg-canopy-subtle border border-safety/30 flex items-center justify-center text-safety group-hover:border-safety transition-colors">
                <ShieldCheck size={22} />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white group-hover:text-safety transition-colors">
                  HESAONE
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-safety-light font-semibold">
                  HSE &bull; Process Safety Engineering
                </span>
              </div>
            </Link>

            <p className="text-sm text-limestone-muted leading-relaxed">
              Specialized industrial Health, Safety, and Environmental (HSE) engineering advisory. Conducting rigorous process hazard analyses (HAZOP/LOPA), statutory safety audits, and engineered risk mitigation for high-hazard industry.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-limestone-muted">
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-safety shrink-0" />
                <a href="mailto:hesaonellp@gmail.com" className="hover:text-white transition-colors">
                  hesaonellp@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-safety shrink-0" />
                <span>India-Wide Industrial Field Engagements &amp; Plant Audits</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileCheck size={14} className="text-safety shrink-0" />
                <span>Bilateral Non-Disclosure Agreements (NDA) Standard</span>
              </div>
            </div>
          </div>

          {/* Practice Disciplines (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white border-b border-canopy-border pb-2.5">
              Practice Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-limestone-muted">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{svc.title}</span>
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-safety" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors & Methodologies (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white border-b border-canopy-border pb-2.5">
              Sectors Served
            </h4>
            <ul className="space-y-2.5 text-xs text-limestone-muted">
              {industriesData.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="hover:text-white transition-colors block"
                  >
                    {ind.title.split("&")[0].trim()}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-canopy-border/60">
                <Link href="/approach" className="hover:text-safety transition-colors block font-medium">
                  Engineering Methodology
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-safety transition-colors block font-medium">
                  Representative Scopes
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Technical Desk Card (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white border-b border-canopy-border pb-2.5">
              Engineering Advisory Desk
            </h4>
            <div className="bg-canopy-subtle/80 border border-canopy-border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                  Direct Client Channel
                </span>
              </div>
              <p className="font-mono text-xs text-white font-semibold break-all">
                hesaonellp@gmail.com
              </p>
              <p className="text-[11px] text-limestone-muted leading-relaxed">
                Submit plant layouts, P&amp;IDs, or statutory audit scopes under mutual NDA.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-md bg-safety text-white text-xs font-medium hover:bg-safety-hover transition-colors"
              >
                <span>Initiate Facility Scope</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-canopy-border/80 bg-void py-5 px-4 sm:px-6 lg:px-8 text-xs text-limestone-muted">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px]">
            &copy; {new Date().getFullYear()} HESAONE LLP. All rights reserved. Registered Industrial Health, Safety &amp; Environment Advisory.
          </p>

          <div className="flex items-center gap-2 font-mono text-[11px] text-safety-light">
            <span>People</span>
            <span className="text-canopy-border">&bull;</span>
            <span>Process</span>
            <span className="text-canopy-border">&bull;</span>
            <span>Planet</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/about" className="hover:text-white transition-colors">
              About Practice
            </Link>
            <span>&bull;</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Technical Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
