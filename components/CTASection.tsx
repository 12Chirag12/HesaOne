import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, Lock, FileCheck } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  serviceTag?: string;
}

export default function CTASection({
  title = "Ready to elevate your facility's safety and compliance?",
  subtitle = "Discuss your plant challenges with our certified process safety and EHS engineering team. We provide scoped, objective audits and actionable compliance roadmaps.",
  primaryBtnText = "Request Technical Consultation",
  primaryBtnLink = "/contact",
  serviceTag = "HEALTH • SAFETY • ENVIRONMENT ADVISORY"
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-void border-t border-canopy-border relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-canopy border border-canopy-border rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Accent top stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-safety via-safety-hover to-amber-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Main Copy & Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canopy-subtle border border-safety/30 text-safety-light text-xs font-mono tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
                <span>{serviceTag}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight leading-tight">
                {title}
              </h2>

              <p className="text-sm sm:text-base text-limestone-muted leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href={primaryBtnLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-safety text-white text-sm font-semibold hover:bg-safety-hover transition-all duration-200 shadow-lg shadow-safety/20 group"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="mailto:hesaonellp@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-canopy-subtle hover:bg-canopy-border/50 border border-canopy-border text-limestone-light text-xs font-mono transition-colors"
                >
                  <Mail size={14} className="text-safety" />
                  <span>hesaonellp@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right: Practice Trust Docket */}
            <div className="lg:col-span-5">
              <div className="bg-canopy-subtle/70 border border-canopy-border rounded-xl p-6 space-y-5">
                <div className="flex items-center gap-3.5 border-b border-canopy-border pb-4">
                  <div className="w-10 h-10 rounded-lg bg-safety/15 border border-safety/30 flex items-center justify-center text-safety shrink-0">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <strong className="block text-sm text-white font-semibold">
                      HESAONE Practice Standards
                    </strong>
                    <span className="block font-mono text-[11px] text-safety-light">
                      Engineering Integrity &bull; Statutory Code Compliance
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-canopy border border-canopy-border flex items-center justify-center text-safety shrink-0 mt-0.5">
                      <Lock size={13} />
                    </div>
                    <div>
                      <strong className="block text-xs text-white font-semibold">
                        Mutual NDA Protection Standard
                      </strong>
                      <p className="text-[11px] text-limestone-muted leading-relaxed mt-0.5">
                        All drawings, P&amp;IDs, process chemistries, and operational data remain strictly protected.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-canopy border border-canopy-border flex items-center justify-center text-safety shrink-0 mt-0.5">
                      <FileCheck size={13} />
                    </div>
                    <div>
                      <strong className="block text-xs text-white font-semibold">
                        Accredited Lead Auditors
                      </strong>
                      <p className="text-[11px] text-limestone-muted leading-relaxed mt-0.5">
                        ISO 45001, ISO 14001, and Certified Functional Safety Practitioners.
                      </p>
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
