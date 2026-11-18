import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Phone
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { faqData, companyInfo } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Contact & Consultation | Boisar, Palghar Head Office",
  description:
    "Request an industrial safety consultation, HAZOP study, DISH approved safety audit, or fire protection engineering review with HESAONE LLP. Head office in Boisar (West), Palghar.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: "Contact & Consultation" }]} />

      {/* Page Hero */}
      <section className="bg-white text-slate-900 py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden blueprint-grid-light">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
            <span>DIRECT ADVISORY DESK &bull; BOISAR (WEST), PALGHAR</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let&apos;s engineer a safer,{" "}
              <span className="text-sky-600">more resilient facility together.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us about your facility scope, operational challenges, or upcoming statutory compliance milestone. Our process safety engineers and lead DISH auditors provide confidential, objective technical advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Form Column (Col 1-7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                ONLINE SCOPE SUBMISSION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Request a Facility Scope &amp; Proposal
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Complete the parameters below to compile your technical inquiry. Our engineering team reviews facility scopes under bilateral NDA.
              </p>
            </div>

            <Suspense
              fallback={
                <div className="p-8 text-center text-xs font-mono text-slate-500">
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
            <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="font-mono text-[11px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                  OFFICIAL CONTACT COORDINATES
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Head Office Coordinates
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  For immediate communication, P&amp;ID transmissions, and statutory compliance triage:
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800 text-xs">
                {/* Office Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                      Head Office Address
                    </span>
                    <span className="block text-xs font-medium text-white leading-relaxed">
                      {companyInfo.headOffice.addressLine1}, {companyInfo.headOffice.addressLine2},<br />
                      {companyInfo.headOffice.district}, {companyInfo.headOffice.state} &ndash; {companyInfo.headOffice.pinCode}
                    </span>
                    <small className="block text-[11px] text-slate-400 mt-0.5">
                      Near Boisar MIDC Chemical &amp; Industrial Corridor
                    </small>
                  </div>
                </div>

                {/* Direct Telephones */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                      Direct Advisory Telephones
                    </span>
                    <div className="space-y-0.5 pt-0.5 font-mono text-sm text-white font-semibold">
                      {companyInfo.phones.map((phone) => (
                        <div key={phone.number}>
                          <a href={`tel:${phone.number.replace(/\s+/g, '')}`} className="hover:text-sky-400 transition-colors">
                            {phone.number}
                          </a>
                          <span className="text-[11px] text-slate-400 font-sans font-normal ml-2">({phone.label})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                      Official Technical Email
                    </span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="font-mono text-sm text-white font-semibold hover:text-sky-400 transition-colors break-all"
                    >
                      {companyInfo.email}
                    </a>
                    <small className="block text-[11px] text-slate-400 mt-0.5">
                      Direct channel to certified safety practitioners
                    </small>
                  </div>
                </div>

                {/* Desk Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                      Advisory Desk Hours
                    </span>
                    <span className="block text-xs font-medium text-white">
                      Monday &ndash; Saturday, 09:00 &ndash; 18:00 IST
                    </span>
                    <small className="block text-[11px] text-slate-400 mt-0.5">
                      Expedited triage for regulatory compliance notices
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Triage Alert Card */}
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-sky-800 font-mono text-xs font-bold uppercase tracking-wider">
                <AlertCircle size={15} />
                <span>STATUTORY COMPLIANCE SUPPORT</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                Statutory Audit Observations or CAPA Requirements?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your plant requires technical support for statutory safety audit observations (under The Factories Act, 1948 or MSIHC Rules), indicate your upcoming compliance milestones in the inquiry form.
              </p>
            </div>

            {/* Bilateral NDA Reassurance Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700">
                <ShieldCheck size={18} />
                <h4 className="text-sm font-bold text-slate-900">
                  Bilateral NDA Standard
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We recognize that process flowsheets, operating temperatures, and plant drawings represent sensitive operational intellectual property.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mutual NDA executed prior to drawing transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Access restricted strictly to assigned lead engineers</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Know <span className="text-sky-600">About Engaging HESAONE</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Common questions regarding our auditing methodologies, timelines, consultant qualifications, and project onboarding.
            </p>
          </div>

          <FAQAccordion items={faqData} />
        </div>
      </section>
    </div>
  );
}
