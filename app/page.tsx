import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Flame,
  Leaf,
  ClipboardCheck,
  GraduationCap,
  HardHat,
  Factory,
  Building2,
  FlaskConical,
  Truck,
  CheckCircle2,
  Zap,
  BookOpen,
  HeartHandshake,
  Lock,
  Scale,
  Award,
  Sparkles,
  LucideIcon
} from "lucide-react";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import CTASection from "@/components/CTASection";
import InteractiveRiskAssessment from "@/components/InteractiveRiskAssessment";
import { servicesData, leadershipData, companyInfo } from "@/lib/siteData";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap,
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap
};

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Split-Stage White Clean Hero with Crystal Badges */}
      <Hero />

      {/* 2. Client Trust Roster (Real Companies from PDF) */}
      <ClientLogos />

      {/* 3. Leadership & Real Engineering Heritage (Crystal Cards) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600 block">
                SENIOR CONSULTING LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Led by Plant-Experienced Safety Authorities
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                HESAONE was formed in {companyInfo.foundedYear} by senior safety directors with over two decades of on-floor leadership at leading corporations including Aarti Industries, Ajanta Pharma, and Polygenta Technologies.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 font-mono transition-colors self-start md:self-auto"
            >
              <span>Read Full Leadership Dossier</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipData.map((leader) => (
              <div
                key={leader.name}
                className="crystal-card rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                    <span className="font-mono text-xs font-semibold text-sky-700 block mt-0.5">
                      {leader.role}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full crystal-pill text-slate-700 font-mono text-[11px] font-semibold shrink-0">
                    {leader.experience}
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-600">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    CREDENTIALS &amp; QUALIFICATIONS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {leader.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {leader.summary}
                </p>

                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200/80">
                  {leader.highlights.slice(0, 3).map((hl) => (
                    <li key={hl} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-sky-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEDICATED CRYSTAL INTEGRITY SECTION: The Crystal Standard of Safety */}
      <section className="py-20 lg:py-24 crystal-section-bg border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full crystal-pill text-sky-900 text-xs font-mono font-semibold tracking-wider">
              <Sparkles size={13} className="text-sky-600" />
              <span>THE CRYSTAL STANDARD &bull; TOTAL TECHNICAL INTEGRITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Clarity, Precision &amp; Statutory Rigor
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              In high-consequence industries, ambiguity is the enemy of safety. Every audit, HAZOP review, and training engagement adheres to four unwavering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Crystal Card 1 */}
            <div className="crystal-card rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-600 shadow-2xs">
                <Award size={24} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-sky-700 uppercase tracking-widest block">
                  STATUTORY RECOGNITION
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  DISH Approved Auditor
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Officially approved by the Directorate of Industrial Safety &amp; Health (Maharashtra). All audit reports are structured directly for statutory Factories Act compliance.
              </p>
            </div>

            {/* Crystal Card 2 */}
            <div className="crystal-card rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-600 shadow-2xs">
                <Lock size={24} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-sky-700 uppercase tracking-widest block">
                  IP CONFIDENTIALITY
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Bilateral NDA Fortress
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proprietary chemical flowsheets, reactor kinetics, P&amp;IDs, and plant layouts remain strictly quarantined under legally binding mutual non-disclosure agreements.
              </p>
            </div>

            {/* Crystal Card 3 */}
            <div className="crystal-card rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-600 shadow-2xs">
                <Scale size={24} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-sky-700 uppercase tracking-widest block">
                  FIRST-PRINCIPLES RIGOR
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Zero Guesswork Engineering
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quantitative consequence modeling, SIL safety instrumented loop allocation (IEC 61511), and hydraulic fire simulations grounded in established engineering physics.
              </p>
            </div>

            {/* Crystal Card 4 */}
            <div className="crystal-card rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-600 shadow-2xs">
                <ShieldCheck size={24} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-sky-700 uppercase tracking-widest block">
                  THE 90% HUMAN FACTOR
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  20,000+ Training M/Hrs
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Targeting frontline overconfidence and procedure shortcuts through multilingual, practical shop-floor Behavior-Based Safety (BBS) training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Six Core Practice Disciplines */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600">
              PRACTICE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Single-Source Total Safety Solutions
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              From early plant layout approvals and HAZOP process studies to fire hydrant AMC, ETP troubleshooting, and frontline behavior training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.iconName] || ShieldCheck;
              return (
                <div
                  key={svc.slug}
                  className="crystal-card rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {svc.no}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {svc.shortDesc}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                        KEY SCOPE &amp; DELIVERABLES:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {svc.deliverables.slice(0, 3).map((d) => (
                          <li key={d} className="flex items-start gap-1.5">
                            <span className="text-sky-600 font-bold">&rsaquo;</span>
                            <span className="line-clamp-1">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      <span>Explore Technical Scope</span>
                      <ArrowRight size={13} className="text-sky-600" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. The HESAONE Training Philosophy (The 90% Factor) with Crystal Highlight */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="crystal-panel rounded-3xl p-8 sm:p-12 lg:p-14 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Thesis Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full crystal-pill text-sky-900 text-xs font-mono font-semibold tracking-wide">
                  <BookOpen size={13} className="text-sky-600" />
                  <span>CORE TRAINING PHILOSOPHY</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  &ldquo;Almost 90% of industrial accidents belong to lack of awareness &amp; overconfidence of working people.&rdquo;
                </h2>

                <p className="text-base text-slate-600 leading-relaxed">
                  Engineering safeguards alone cannot prevent mishaps if operating personnel bypass procedures or fail to recognize dynamic risks. This is why practical, competency-driven safety training is the central pillar of HESAONE’s advisory methodology.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="font-mono text-xl font-bold text-sky-600">20,000+ M/Hrs</span>
                    <p className="text-xs text-slate-600">Delivered across chemical, pharma, automotive, and polymer industries.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="font-mono text-xl font-bold text-slate-900">Multilingual</span>
                    <p className="text-xs text-slate-600">Conducted in Hindi, Marathi, and English for direct frontline resonance.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/services/training-awareness"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    <span>View Specialized Training Modules</span>
                    <ArrowRight size={14} className="text-sky-400" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Training Focus Areas */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <span className="font-mono text-xs font-bold text-sky-700 uppercase tracking-wider block border-b border-slate-100 pb-2.5">
                  SPECIALIZED TRAINING TOPICS (PDF SPECIFIED)
                </span>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Behavior-Based Safety (BBS):</strong> Shift observation routines, positive reinforcement, and eliminating unsafe acts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Fire Safety &amp; Drills:</strong> Hydrant operations, emergency evacuation simulations, and live extinguisher discharge.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Chemical Hazards &amp; MSDS/SDS:</strong> Toxic vapor handling, chemical incompatibility, and spill containment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Permit-to-Work (PTW):</strong> Confined space entry, hot work, height authorization, and Lockout/Tagout (LOTO).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Electrical Safety:</strong> High-voltage substation precautions, arc flash avoidance, and grounding verification.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Risk Readiness Assessment (Crystal Section) */}
      <section className="py-16 sm:py-24 crystal-section-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600">
              SELF-ASSESSMENT TOOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Evaluate Your Plant Risk Profile
            </h2>
            <p className="text-sm text-slate-600">
              Select your sector and immediate compliance target to receive tailored engineering recommendations.
            </p>
          </div>

          <InteractiveRiskAssessment />
        </div>
      </section>

      {/* 8. Corporate Social Responsibility (Anal Foundation) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <HeartHandshake size={24} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-sky-800 uppercase tracking-wider">
                  COMMUNITY GIVING &bull; ANAL FOUNDATION
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Free Community Seminars &amp; Workplace HSE Orientation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  Under the &ldquo;Anal Foundation&rdquo; CSR banner, HESAONE provides free community seminars for Domestic Safety, Home Electrical Protection, and Road Safety, alongside free workplace orientation to help small and medium units establish basic safety consciousness.
                </p>
              </div>
            </div>
            <Link
              href="/contact?priority=Anal%20Foundation%20CSR%20Inquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors shrink-0 shadow-xs"
            >
              <span>Learn About CSR Programs</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Technical Consultation CTA */}
      <CTASection
        title="Schedule a preliminary plant audit or technical scoping discussion."
        subtitle="Connect with our DISH Approved safety auditors and process safety consultants. Inquiries reviewed under mutual NDA."
        primaryBtnText="Initiate Facility Scope"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
