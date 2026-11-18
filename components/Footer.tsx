"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, ShieldCheck, FileCheck, Phone } from "lucide-react";
import { servicesData, industriesData, companyInfo } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Regulatory Standards Ribbon */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono uppercase tracking-wider font-semibold text-[11px] text-emerald-400">
              Statutory Regulatory Codes &amp; Accreditations:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400 text-[11px] font-mono">
            <span className="text-emerald-300 font-semibold">DISH Approved Safety Auditor</span>
            <span className="text-slate-700">•</span>
            <span>The Factories Act, 1948</span>
            <span className="text-slate-700">•</span>
            <span>MSIHC Rules, 1989</span>
            <span className="text-slate-700">•</span>
            <span>ISO 45001:2018</span>
            <span className="text-slate-700">•</span>
            <span>ISO 14001:2015</span>
            <span className="text-slate-700">•</span>
            <span>IEC 61511 / SIL</span>
            <span className="text-slate-700">•</span>
            <span>NBC 2016 (Part 4)</span>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Corporate Overview (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="HESAONE Home">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:border-sky-500 transition-colors">
                <ShieldCheck size={22} />
              </div>
              <div>
                <span className="block font-sans text-xl font-extrabold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  {companyInfo.name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-sky-400 font-semibold">
                  {companyInfo.sanskritMotto} &bull; Est. {companyInfo.foundedYear}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Specialized industrial Health, Safety, and Environmental (HSE) engineering advisory. Conducting DISH approved safety audits, HAZOP/LOPA process hazard analyses, fire hydrant inspections, ETP troubleshooting, and over 20,000 man-hours of certified workforce training.
            </p>

            {/* Official Office Coordinates from PDF */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {companyInfo.headOffice.addressLine1}, {companyInfo.headOffice.addressLine2}, {companyInfo.headOffice.district}, {companyInfo.headOffice.state} &ndash; {companyInfo.headOffice.pinCode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-sky-400 shrink-0" />
                <span>{companyInfo.phones[0].number} / {companyInfo.phones[1].number}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-sky-400 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FileCheck size={14} className="text-emerald-400 shrink-0" />
                <span>Bilateral Non-Disclosure Agreements (NDA) Standard</span>
              </div>
            </div>
          </div>

          {/* Practice Disciplines (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white border-b border-slate-800 pb-2.5">
              Practice Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{svc.title}</span>
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors & CSR (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white border-b border-slate-800 pb-2.5">
              Sectors &amp; CSR
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
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
              <li className="pt-2 border-t border-slate-800">
                <Link href="/approach" className="hover:text-sky-400 transition-colors block font-medium">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-sky-400 transition-colors block font-medium">
                  Representative Scopes
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-sky-400/90 font-mono">
                <span className="block font-bold">CSR: Anal Foundation</span>
                <span className="text-slate-500 text-[10px]">Free Domestic &amp; Road Safety Seminars</span>
              </li>
            </ul>
          </div>

          {/* Direct Technical Desk Card (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white border-b border-slate-800 pb-2.5">
              Engineering Advisory Desk
            </h4>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                  Direct Plant Scope Channel
                </span>
              </div>
              <p className="font-mono text-xs text-white font-semibold">
                {companyInfo.phones[0].number}
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Connect with our certified safety practitioners for statutory audits, P&amp;ID reviews, or plant training scopes.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-md bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors"
              >
                <span>Initiate Facility Scope</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-5 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px]">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved. Registered Industrial HSE Advisory &bull; Boisar (West), Palghar, Maharashtra.
          </p>

          <div className="flex items-center gap-2 font-mono text-[11px] text-sky-400">
            <span>People</span>
            <span className="text-slate-700">&bull;</span>
            <span>Process</span>
            <span className="text-slate-700">&bull;</span>
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
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
