import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Approach & Methodology | 4-Stage Safety Engineering Process",
  description:
    "Discover HESAONE's proven 4-stage safety engineering lifecycle: Preliminary Discovery & Baseline Review, On-Site Technical Investigation, Quantitative Analysis & Report Formulation, and Implementation Support & Frontline Training.",
};

export default function ApproachPage() {
  const stages = [
    {
      num: "01",
      title: "Preliminary Discovery & Baseline Review",
      tagline: "Understanding plant context before touching the plant floor.",
      details: [
        "Review of available Process Flow Diagrams (PFDs), P&IDs, plant layouts, and equipment datasheets under mutual NDA.",
        "Examination of chemical inventory, hazardous area classification documents, and past regulatory audit reports.",
        "Definition of study boundaries, nodes, and interdisciplinary workshop schedules with plant management.",
        "Alignment with relevant statutory frameworks (Factories Act, MSIHC, DISH, OISD, NBC 2016)."
      ],
      output: "Comprehensive Scoping Document & Preliminary Gap Register"
    },
    {
      num: "02",
      title: "On-Site Technical Investigation & Field Verification",
      tagline: "Verifying physical reality against engineering documentation.",
      details: [
        "Walkthrough physical audits of process units, storage tank farms, loading gantries, and utility manifolds.",
        "Field inspection of relief valve installations, flame arrestors, blast walls, and secondary containment dykes.",
        "Assessment of fire hydrant coverage, pump house pressures, foam proportioning systems, and fire alarm loops.",
        "Interviews with operating technicians, maintenance supervisors, and frontline contract workers."
      ],
      output: "Field Evidence Docket with Photographic Records & As-Built Verification"
    },
    {
      num: "03",
      title: "Rigorous Quantitative Analysis & Report Formulation",
      tagline: "Applying engineering first-principles to risk evaluation.",
      details: [
        "Node-by-node HAZOP / HAZID sessions led by certified facilitators using standard guide words.",
        "Consequence modeling for flammable vapour cloud explosions, toxic plume dispersion, and pool fire radiation.",
        "Layer of Protection Analysis (LOPA) to verify Safety Instrumented Function (SIF) SIL compliance.",
        "Formulation of prioritized Corrective and Preventive Action (CAPA) matrices with engineering ownership."
      ],
      output: "DISH-Compliant Statutory Audit / HAZOP Study Report & Action Tracker"
    },
    {
      num: "04",
      title: "Implementation Support & Behavioral Competency Rollout",
      tagline: "Closing the loop with frontline coaching and cultural reinforcement.",
      details: [
        "Hands-on technical assistance for CAPA closure, piping revisions, and layout approvals with DISH authorities.",
        "Delivery of customized training modules across shop-floor teams in Hindi, Marathi, and English.",
        "Rollout of Behavior-Based Safety (BBS) observation routines to address overconfidence and procedural shortcuts.",
        "Annual maintenance auditing and periodic revalidation of fire safety and emergency preparedness."
      ],
      output: "Certified Safety Culture & Long-Term Governance Dashboard"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: "Our Approach" }]} />

      {/* Hero Header */}
      <section className="bg-white text-slate-900 py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden blueprint-grid-light">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
            <span>THE HESAONE METHODOLOGY &bull; HOW WE DELIVER</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Practical engineering thinking.{" "}
              <span className="text-sky-600">Measurable safety progress.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We believe world-class industrial safety is created when robust technical engineering meets genuine collaboration with the people on the plant floor. Our 4-stage lifecycle ensures every recommendation is actionable, compliant, and enduring.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Stages Detailed */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {stages.map((st) => (
          <div
            key={st.num}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row gap-6 md:gap-10 hover:border-sky-400 transition-colors"
          >
            {/* Stage Number Badge */}
            <div className="flex md:flex-col items-center justify-between md:justify-start gap-2 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-8 shrink-0">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-sky-600">
                {st.num}
              </span>
              <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                STAGE
              </span>
            </div>

            {/* Stage Content */}
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {st.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{st.tagline}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Activities List */}
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
                    Key Engineering Activities:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {st.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stage Deliverable Box */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-700 block">
                    STAGE DELIVERABLE:
                  </span>
                  <strong className="block text-sm font-bold text-slate-900 leading-snug">
                    {st.output}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Documented, audit-ready technical collateral signed off by our lead process safety practitioners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Safety Maturity Matrix Section */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">
              ORGANIZATIONAL PROGRESSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              The Industrial Safety <span className="text-sky-600">Maturity Curve</span>
            </h2>
            <p className="text-sm text-slate-600">
              Where does your facility currently sit, and where do you aspire to be?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Level 01 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
              <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                LEVEL 01
              </span>
              <h3 className="text-xl font-bold text-slate-900">Reactive</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Safety actions occur only after serious accidents or regulatory notices. High reliance on luck and minimal compliance paperwork.
              </p>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 space-y-0.5">
                <span className="text-sky-700 block font-semibold">TYPICAL SYMPTOM:</span>
                <span>Frequent near-misses ignored; zero frontline reporting.</span>
              </div>
            </div>

            {/* Level 02 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
              <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                LEVEL 02
              </span>
              <h3 className="text-xl font-bold text-slate-900">Compliant</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adhering to basic statutory mandates. Safety is viewed as an administrative overhead rather than an operational asset.
              </p>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 space-y-0.5">
                <span className="text-sky-700 block font-semibold">TYPICAL SYMPTOM:</span>
                <span>Audits passed on paper, but field procedures bypassed under rush.</span>
              </div>
            </div>

            {/* Level 03 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">
              <span className="font-mono text-[11px] font-bold text-sky-700 uppercase tracking-wider block">
                LEVEL 03
              </span>
              <h3 className="text-xl font-bold text-slate-900">Proactive</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Systematic risk assessments (HAZOP, LOPA), active hazard reporting, and management leadership driven by ISO 45001.
              </p>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 space-y-0.5">
                <span className="text-sky-700 block font-semibold">TYPICAL SYMPTOM:</span>
                <span>Near-miss tracking, robust LOTO, and continuous hazard reduction.</span>
              </div>
            </div>

            {/* Level 04: Benchmark */}
            <div className="bg-white border-2 border-sky-500 rounded-xl p-6 space-y-4 shadow-md relative">
              <div className="absolute top-4 right-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse block" />
              </div>
              <span className="font-mono text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                LEVEL 04 &bull; BENCHMARK
              </span>
              <h3 className="text-xl font-bold text-slate-900">Resilient</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-Harm culture where safety is inseparable from operational excellence. Frontline operators actively lead safety innovations.
              </p>
              <div className="pt-3 border-t border-sky-100 text-[11px] font-mono text-slate-600 space-y-0.5">
                <span className="text-emerald-700 block font-semibold">TYPICAL SYMPTOM:</span>
                <span>High psychological safety, predictive risk models, zero LTIs.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Advance your facility up the safety maturity curve."
        subtitle="Schedule an initial gap analysis or discovery workshop with our certified consultants."
        primaryBtnText="Initiate Safety Gap Assessment"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
