import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Target,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Award,
  HeartHandshake,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import ClientLogos from "@/components/ClientLogos";
import { companyInfo, leadershipData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "About Practice | Leadership, Accreditations & Philosophy",
  description:
    "Learn about HESAONE LLP: founded in 2018 by seasoned safety leaders Mr. V. Raghunath and Mr. Jitendra Thakur. DISH Approved Safety Auditor, 20,000+ training man-hours, and trusted by Mahindra, Bosch, Aarti Industries, and Lupin.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: "About Practice" }]} />

      {/* Hero Header */}
      <section className="bg-white text-slate-900 py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden blueprint-grid-light">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>ESTABLISHED 2018 &bull; BOISAR, MAHARASHTRA &bull; DISH APPROVED</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Protecting lives, assets, and the environment with{" "}
              <span className="text-sky-600">uncompromising engineering rigor.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded in 2018 under the Sanskrit guidance <em className="font-semibold text-slate-800">“{companyInfo.sanskritMotto}”</em> ({companyInfo.mottoEnglish}), HESAONE LLP was established to bridge the critical gap between regulatory theory and frontline plant floor reality.
            </p>
          </div>

          {/* Quick Metrics Bar (Crystal Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
            <div className="p-4 rounded-2xl crystal-card">
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-slate-900">20+ Yrs</span>
              <span className="text-xs text-slate-600 font-medium">Principal Leadership Experience</span>
            </div>
            <div className="p-4 rounded-2xl crystal-card">
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-sky-600">20,000+</span>
              <span className="text-xs text-slate-600 font-medium">Training Man-Hours Imparted</span>
            </div>
            <div className="p-4 rounded-2xl crystal-card">
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-emerald-600">DISH</span>
              <span className="text-xs text-slate-600 font-medium">Approved Safety Auditor (Govt. of MH)</span>
            </div>
            <div className="p-4 rounded-2xl crystal-card">
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-sky-600">100%</span>
              <span className="text-xs text-slate-600 font-medium">Bilateral NDA &amp; Compliance Integrity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Purpose */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Mission & Vision Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
                <div className="inline-flex items-center gap-2 text-sky-600 font-mono text-xs font-bold tracking-wider uppercase">
                  <Target size={16} />
                  <span>OUR MISSION (FROM CHARTER)</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Increasing Life Expectancy of Human, Environment &amp; Asset
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{companyInfo.mission}&rdquo;
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                  Every audit report, HAZOP session, and training workshop conducted by HESAONE is engineered to deliver zero fatal incidents, zero loss of primary containment, and sustainable compliance.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
                <div className="inline-flex items-center gap-2 text-sky-600 font-mono text-xs font-bold tracking-wider uppercase">
                  <ShieldCheck size={16} />
                  <span>OUR CORE THESIS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  90% of Accidents Stem from Awareness Gaps &amp; Overconfidence
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Industrial plant data consistently demonstrates that equipment guards and standard operating manuals alone do not eliminate incidents. Overconfidence and inadequate frontline behavioral conditioning account for the vast majority of workplace mishaps. That is why practical, shop-floor behavioral training is at the heart of our service delivery.
                </p>
              </div>
            </div>

            {/* Right: Framed Authentic Plant Photo */}
            <div className="lg:col-span-5">
              <div className="relative h-96 lg:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/images/hse-inspection.jpg"
                  alt="HESAONE Safety Engineers Conducting Industrial Inspection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck size={16} className="text-sky-400" />
                    <span className="font-mono text-[11px] font-bold text-sky-300 tracking-wider uppercase">
                      ON-FLOOR ENGINEERING RIGOR
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    We formulate corrective actions on the plant floor alongside operating technicians, not in remote boardrooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile: Real Bios from PDF */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold tracking-wider">
              <Users size={14} />
              <span>DIRECTORATE &amp; SENIOR CONSULTANTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Led by Accredited Safety Practitioners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our principal consultants have spent decades inside chemical synthesis plants, high-hazard manufacturing units, and regulatory safety bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {leadershipData.map((leader) => (
              <div
                key={leader.name}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 hover:border-sky-400 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{leader.name}</h3>
                    <p className="text-sm font-semibold text-sky-600">{leader.role}</p>
                    <p className="font-mono text-xs text-slate-500 mt-1">{leader.experience}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                    <GraduationCap size={24} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Academic &amp; Professional Credentials:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Professional Background:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {leader.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-sky-700 block mb-2 flex items-center gap-1.5">
                      <Award size={14} className="text-sky-600" />
                      <span>Career Highlights &amp; Statutory Roles:</span>
                    </span>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {leader.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-sky-600 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold text-sky-600 tracking-wider uppercase">
              OUR CORE METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              The Three Pillars: <span className="text-sky-600">People. Process. Planet.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              True industrial safety excellence occurs at the intersection of human care, engineering precision, and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 01: People */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm hover:border-sky-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                <Users size={26} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-sky-600 tracking-widest uppercase block">
                  PILLAR 01
                </span>
                <h3 className="text-2xl font-bold text-slate-900">People</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Protecting life and health through behavioral safety, certified workforce training, and personal responsibility.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>20,000+ Man-Hours of hands-on workforce training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Behavior-Based Safety (BBS) cultural rollouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Unconditional Stop-Work Authority implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Certified Ergonomics &amp; Industrial Hygiene reviews</span>
                </li>
              </ul>
            </div>

            {/* Pillar 02: Process */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm hover:border-sky-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                <Layers size={26} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-sky-600 tracking-widest uppercase block">
                  PILLAR 02
                </span>
                <h3 className="text-2xl font-bold text-slate-900">Process</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Defensive engineering barriers that prevent loss of primary containment and catastrophic mechanical failure.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>HAZOP, HAZID &amp; What-If risk analysis workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Layer of Protection Analysis (LOPA) &amp; SIL determination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Factories Act Sections 41B &amp; 41C statutory audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Machine Safeguarding &amp; Zero-Energy LOTO protocols</span>
                </li>
              </ul>
            </div>

            {/* Pillar 03: Planet */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm hover:border-sky-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                <Target size={26} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-sky-600 tracking-widest uppercase block">
                  PILLAR 03
                </span>
                <h3 className="text-2xl font-bold text-slate-900">Planet</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Preserving environmental integrity, water bodies, and air sheds through compliant effluent and emission management.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Effluent Treatment Plant (ETP) operation &amp; troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Consent to Establish (CTE) &amp; Operate (CTO) filing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>Stack emission audits &amp; VOC containment reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>ISO 14001:2015 Environmental System auditing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Client Portfolio */}
      <ClientLogos />

      {/* CSR: Anal Foundation */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold">
                <HeartHandshake size={14} className="text-sky-600" />
                <span>CORPORATE SOCIAL RESPONSIBILITY</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Community Safety Initiatives with Anal Foundation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                As part of HESAONE&apos;s commitment to safety beyond factory perimeters, our team conducts regular, complimentary public safety workshops in partnership with <strong className="text-slate-800">Anal Foundation</strong>. We train families, students, and local communities on LPG cylinder handling, home electrical fire prevention, defensive road safety, and primary emergency response.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors shadow-sm"
              >
                <span>Partner for CSR Programs</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Alignment Frameworks */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
              REGULATORY COMPLIANCE RIGOR
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Statutory Governance &amp; Code Alignment
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Our engineering audits align directly with Indian statutory enactments and global technical safety codes:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-slate-900">The Factories Act, 1948</strong>
              <span className="text-xs text-slate-600">Sections 41B, 41C &amp; State Factory Rules Compliance</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-slate-900">MSIHC Rules, 1989</strong>
              <span className="text-xs text-slate-600">Hazardous Chemical Storage &amp; Safety Audit Reports</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-slate-900">DISH Approved Safety Auditor</strong>
              <span className="text-xs text-slate-600">Directorate of Industrial Safety &amp; Health, Maharashtra</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-slate-900">ISO 45001:2018 &amp; ISO 14001:2015</strong>
              <span className="text-xs text-slate-600">Occupational Health, Safety &amp; Environmental Management</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-slate-900">IEC 61508 / 61511</strong>
              <span className="text-xs text-slate-600">Functional Safety, Safety Instrumented Systems &amp; SIL</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-1">
              <strong className="block text-sm font-bold text-slate-900">NBC 2016 &bull; NFPA Codes</strong>
              <span className="text-xs text-slate-600">Fire Hydrant Hydraulics, Sprinklers &amp; Life Safety Egress</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Partner with HESAONE for your next plant safety milestone."
        subtitle="Whether preparing for statutory DISH safety audits, HAZOP reviews, or plant workforce training, our certified consultants are ready."
        primaryBtnText="Schedule an Advisory Call"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
