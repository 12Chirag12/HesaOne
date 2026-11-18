import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, Lock, Phone, FileCheck } from "lucide-react";
import { companyInfo } from "@/lib/siteData";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  serviceTag?: string;
}

export default function CTASection({
  title = "Ready to elevate your facility's safety and compliance?",
  subtitle = "Discuss your plant challenges with our certified process safety and EHS engineering consultants. We provide scoped, objective audits and actionable compliance roadmaps.",
  primaryBtnText = "Request Technical Consultation",
  primaryBtnLink = "/contact",
  serviceTag = "HEALTH • SAFETY • ENVIRONMENT ADVISORY"
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-sm relative overflow-hidden">
          {/* Subtle top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                <span>{serviceTag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-extrabold tracking-tight leading-snug">
                {title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href={primaryBtnLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition-colors shadow-sm shadow-sky-600/20 group"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`tel:${companyInfo.phones[0].number.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono transition-colors"
                >
                  <Phone size={14} className="text-sky-600" />
                  <span>{companyInfo.phones[0].number}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Practice Trust Docket */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <strong className="block text-sm text-slate-900 font-bold">
                      HESAONE Practice Standards
                    </strong>
                    <span className="block font-mono text-[11px] text-slate-500">
                      DISH Approved &bull; Mutual NDA Protected
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Lock size={15} className="text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Confidentiality Assured</strong>
                      <span>All process diagrams, P&amp;IDs, and plant drawings remain protected under bilateral NDAs.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FileCheck size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">DISH &amp; Statutory Alignment</strong>
                      <span>All audits conducted in direct compliance with The Factories Act 1948 and state rules.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail size={15} className="text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Advisory Desk</strong>
                      <span>Direct email: <a href={`mailto:${companyInfo.email}`} className="text-sky-600 underline">{companyInfo.email}</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
