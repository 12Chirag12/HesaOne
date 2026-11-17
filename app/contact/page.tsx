import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { faqData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Contact & Consultation | Industrial HSE Advisory",
  description:
    "Request an industrial safety consultation, HAZOP study, Factories Act audit, or fire protection engineering review with HESAONE LLP. Confidential technical advisory."
};

export default function ContactPage() {
  return (
    <div className="bg-limestone-warm min-h-screen">
      <Breadcrumb items={[{ label: "Contact & Consultation" }]} />

      {/* Page Hero */}
      <section className="bg-canopy text-white py-16 lg:py-20 border-b border-canopy-border relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canopy-subtle border border-safety/30 text-safety-light text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
            <span>DIRECT COMMUNICATION &bull; TECHNICAL ADVISORY DESK</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Let&apos;s engineer a safer,<br />
            <span className="italic text-safety-light font-normal">more resilient facility together.</span>
          </h1>

          <p className="text-base sm:text-lg text-limestone-muted max-w-3xl leading-relaxed">
            Tell us about your facility scope, operational challenges, or upcoming statutory milestone. Our process safety engineers and lead HSE auditors provide confidential, objective technical advisory.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Form Column (Col 1-7) */}
          <div className="lg:col-span-7 bg-white border border-limestone-border rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block mb-1">
                ONLINE SCOPE SUBMISSION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                Request a Facility Scope &amp; Proposal
              </h2>
              <p className="text-xs sm:text-sm text-graphite-secondary mt-1">
                Complete the parameters below to compile your technical inquiry. Our engineering team reviews facility scopes under bilateral NDA.
              </p>
            </div>

            <Suspense
              fallback={
                <div className="p-8 text-center text-xs font-mono text-graphite-muted">
                  Loading consultation form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Coordinates & Credentials Sidebar (Col 8-12) */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Direct Coordinates Card */}
            <div className="bg-canopy text-white border border-canopy-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="font-mono text-[11px] font-bold text-safety-light uppercase tracking-wider block mb-1">
                  OFFICIAL CONTACT COORDINATES
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Direct Advisory Desk
                </h3>
                <p className="text-xs text-limestone-muted mt-1 leading-relaxed">
                  For prompt communication, P&amp;ID transmissions, and urgent compliance triage:
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-canopy-border">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-canopy-subtle border border-safety/30 flex items-center justify-center text-safety shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-limestone-muted uppercase tracking-wider">
                      Official Inquiries &amp; Drawings
                    </span>
                    <a
                      href="mailto:hesaonellp@gmail.com"
                      className="font-mono text-sm text-white font-semibold hover:text-safety transition-colors break-all"
                    >
                      hesaonellp@gmail.com
                    </a>
                    <small className="block text-[11px] text-limestone-muted/80 mt-0.5">
                      Direct channel to certified safety practitioners
                    </small>
                  </div>
                </div>

                {/* Desk Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-canopy-subtle border border-safety/30 flex items-center justify-center text-safety shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-limestone-muted uppercase tracking-wider">
                      Advisory Desk Hours
                    </span>
                    <span className="block text-xs font-medium text-white">
                      Monday &ndash; Saturday, 09:00 &ndash; 18:00 IST
                    </span>
                    <small className="block text-[11px] text-limestone-muted/80 mt-0.5">
                      Expedited triage for regulatory compliance notices
                    </small>
                  </div>
                </div>

                {/* Reach */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-canopy-subtle border border-safety/30 flex items-center justify-center text-safety shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-limestone-muted uppercase tracking-wider">
                      Field Engineering Reach
                    </span>
                    <span className="block text-xs font-medium text-white">
                      Pan-India Industrial Corridors
                    </span>
                    <small className="block text-[11px] text-limestone-muted/80 mt-0.5">
                      On-site plant audits and HAZOP facilitation across key manufacturing and chemical belts
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Triage Alert Card */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-mono text-xs font-bold uppercase tracking-wider">
                <AlertCircle size={15} />
                <span>STATUTORY COMPLIANCE SUPPORT</span>
              </div>
              <h4 className="text-sm font-bold text-graphite">
                Statutory Audit Observations or CAPA Requirements?
              </h4>
              <p className="text-xs text-graphite-secondary leading-relaxed">
                If your plant requires technical support for statutory safety audit observations (under The Factories Act, 1948 or MSIHC Rules), indicate your upcoming compliance milestones in the inquiry form.
              </p>
            </div>

            {/* Bilateral NDA Reassurance Card */}
            <div className="bg-white border border-limestone-border rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-600">
                <ShieldCheck size={18} />
                <h4 className="font-serif text-sm font-bold text-graphite">
                  Bilateral NDA Standard
                </h4>
              </div>
              <p className="text-xs text-graphite-secondary leading-relaxed">
                We recognize that process flowsheets, operating temperatures, and plant drawings represent sensitive operational intellectual property.
              </p>
              <ul className="space-y-2 text-xs text-graphite-secondary pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Mutual NDA executed prior to drawing transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Access restricted strictly to assigned lead engineers</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 lg:py-24 bg-limestone-tint border-t border-limestone-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-graphite tracking-tight">
              Everything You Need to Know <span className="italic font-normal">About Engaging HESAONE</span>
            </h2>
            <p className="text-sm text-graphite-secondary max-w-xl mx-auto">
              Common questions regarding our auditing methodologies, timelines, consultant qualifications, and project onboarding.
            </p>
          </div>

          <FAQAccordion items={faqData} />
        </div>
      </section>
    </div>
  );
}
