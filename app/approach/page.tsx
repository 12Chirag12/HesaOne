import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Approach & Methodology | 4-Stage HSE Framework",
  description:
    "Discover the HESAONE 4-stage HSE framework: Understand, Assess, Engineer, and Strengthen. Moving industry from reactive compliance to proactive resilience."
};

export default function ApproachPage() {
  const stages = [
    {
      num: "01",
      title: "Understand & Scope",
      tagline: "Grounding our analysis in your physical reality.",
      details: [
        "Review of PFDs, P&IDs, chemical inventory, and plot layouts",
        "Examination of past incident logs, near-miss records, and audit history",
        "Structured stakeholder interviews with plant management and shift operators",
        "Statutory compliance review (Factories Act, PCB consents, OSHA, NFPA)"
      ],
      output: "Comprehensive Engagement Scope & Hazard Baseline Blueprint"
    },
    {
      num: "02",
      title: "Assess & Quantify",
      tagline: "Methodical identification of failure modes and risk points.",
      details: [
        "Facilitation of formal HAZOP, HAZID, and What-If multidisciplinary workshops",
        "Consequence modeling for flammable clouds, toxic plumes, and overpressures",
        "Fire load calculations and hydraulic verification of active suppression networks",
        "On-floor physical inspection of machine guarding, electrical systems, and LOTO"
      ],
      output: "Quantitative Risk Register & Layer of Protection Analysis (LOPA)"
    },
    {
      num: "03",
      title: "Engineer & Recommend",
      tagline: "Translating audit findings into prioritized, practical engineering.",
      details: [
        "Applying the Hierarchy of Controls (Elimination, Substitution, Engineering, Admin, PPE)",
        "Formulation of actionable Safety Integrity Level (SIL) allocation requirements",
        "Development of practical Standard Operating Procedures (SOPs) and EHS manuals",
        "Cost-effective technical retrofits to eliminate single-point failure modes"
      ],
      output: "Prioritized Corrective Action Plan (CAPA) with Engineering Specifications"
    },
    {
      num: "04",
      title: "Strengthen & Sustain",
      tagline: "Embedding lasting safety behaviors and continual improvement.",
      details: [
        "Hands-on workforce training in Behavior-Based Safety and Stop-Work Authority",
        "Internal auditor mentoring and supervisor hazard coaching",
        "Establishment of leading KPI dashboards (near-miss closure rates, drill efficacy)",
        "Periodic surveillance audits to ensure systems remain active and resilient"
      ],
      output: "Certified Safety Culture & Long-Term Governance Dashboard"
    }
  ];

  return (
    <div className="bg-limestone-warm min-h-screen">
      <Breadcrumb items={[{ label: "Our Approach" }]} />

      {/* Hero Header */}
      <section className="bg-canopy text-white py-16 lg:py-20 border-b border-canopy-border relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canopy-subtle border border-safety/30 text-safety-light text-xs font-mono font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
            <span>THE HESAONE METHODOLOGY &bull; HOW WE DELIVER</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Practical thinking.<br />
            <span className="italic text-safety-light font-normal">Measurable progress.</span>
          </h1>

          <p className="text-base sm:text-lg text-limestone-muted max-w-3xl leading-relaxed">
            We believe world-class industrial safety is created when robust technical engineering meets genuine collaboration with the people on the plant floor. Our 4-stage lifecycle ensures every recommendation is actionable, compliant, and enduring.
          </p>
        </div>
      </section>

      {/* 4 Stages Detailed */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {stages.map((st) => (
          <div
            key={st.num}
            className="bg-white border border-limestone-border rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row gap-6 md:gap-10 hover:border-graphite-muted/40 transition-colors"
          >
            {/* Stage Number Badge */}
            <div className="flex md:flex-col items-center justify-between md:justify-start gap-2 border-b md:border-b-0 md:border-r border-limestone-border pb-4 md:pb-0 md:pr-8 shrink-0">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-safety">
                {st.num}
              </span>
              <span className="font-mono text-[10px] uppercase font-bold text-graphite-muted tracking-widest">
                STAGE
              </span>
            </div>

            {/* Stage Content */}
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                  {st.title}
                </h2>
                <p className="text-xs sm:text-sm text-graphite-muted mt-0.5">{st.tagline}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Activities List */}
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-graphite">
                    Key Engineering Activities:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-graphite-secondary">
                    {st.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-safety shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stage Deliverable Box */}
                <div className="lg:col-span-5 bg-limestone-tint border border-limestone-border rounded-xl p-5 space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-safety block">
                    STAGE DELIVERABLE:
                  </span>
                  <strong className="block text-sm font-bold text-graphite leading-snug">
                    {st.output}
                  </strong>
                  <p className="text-xs text-graphite-secondary leading-relaxed">
                    Documented, audit-ready technical collateral signed off by our lead process safety practitioners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Safety Maturity Matrix Section */}
      <section className="py-16 lg:py-24 bg-void text-white relative overflow-hidden border-t border-canopy-border">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold text-safety-light uppercase tracking-wider">
              ORGANIZATIONAL PROGRESSION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Industrial Safety <span className="italic font-normal text-safety-light">Maturity Curve</span>
            </h2>
            <p className="text-sm text-limestone-muted">
              Where does your facility currently sit, and where do you aspire to be?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Level 01 */}
            <div className="bg-canopy border border-canopy-border rounded-xl p-6 space-y-4">
              <span className="font-mono text-[11px] font-bold text-limestone-muted uppercase tracking-wider block">
                LEVEL 01
              </span>
              <h3 className="font-serif text-xl font-bold text-white">Reactive</h3>
              <p className="text-xs text-limestone-muted leading-relaxed">
                Safety actions occur only after serious accidents or regulatory notices. High reliance on luck and minimal paperwork.
              </p>
              <div className="pt-3 border-t border-canopy-border text-[11px] font-mono text-limestone-muted space-y-0.5">
                <span className="text-safety-light block font-semibold">TYPICAL SYMPTOM:</span>
                <span>Frequent near-misses ignored; zero frontline reporting.</span>
              </div>
            </div>

            {/* Level 02 */}
            <div className="bg-canopy border border-canopy-border rounded-xl p-6 space-y-4">
              <span className="font-mono text-[11px] font-bold text-limestone-muted uppercase tracking-wider block">
                LEVEL 02
              </span>
              <h3 className="font-serif text-xl font-bold text-white">Compliant</h3>
              <p className="text-xs text-limestone-muted leading-relaxed">
                Adhering to basic statutory mandates. Safety is viewed as an administrative burden rather than an operational asset.
              </p>
              <div className="pt-3 border-t border-canopy-border text-[11px] font-mono text-limestone-muted space-y-0.5">
                <span className="text-safety-light block font-semibold">TYPICAL SYMPTOM:</span>
                <span>Audits passed on paper, but field procedures frequently bypassed.</span>
              </div>
            </div>

            {/* Level 03 */}
            <div className="bg-canopy border border-canopy-border rounded-xl p-6 space-y-4">
              <span className="font-mono text-[11px] font-bold text-safety-light uppercase tracking-wider block">
                LEVEL 03
              </span>
              <h3 className="font-serif text-xl font-bold text-white">Proactive</h3>
              <p className="text-xs text-limestone-muted leading-relaxed">
                Systematic risk assessments (HAZOP, LOPA), active hazard reporting, and leadership accountability driven by ISO 45001.
              </p>
              <div className="pt-3 border-t border-canopy-border text-[11px] font-mono text-limestone-muted space-y-0.5">
                <span className="text-safety-light block font-semibold">TYPICAL SYMPTOM:</span>
                <span>Near-miss tracking, robust LOTO, and continuous hazard reduction.</span>
              </div>
            </div>

            {/* Level 04: Featured */}
            <div className="bg-canopy border-2 border-safety rounded-xl p-6 space-y-4 shadow-xl relative">
              <div className="absolute top-3 right-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse block" />
              </div>
              <span className="font-mono text-[11px] font-bold text-safety uppercase tracking-wider block">
                LEVEL 04 &bull; BENCHMARK
              </span>
              <h3 className="font-serif text-xl font-bold text-white">Resilient</h3>
              <p className="text-xs text-limestone-light leading-relaxed">
                Zero-Harm culture where safety is inseparable from operational excellence. Frontline operators actively lead safety innovations.
              </p>
              <div className="pt-3 border-t border-canopy-border text-[11px] font-mono text-limestone-muted space-y-0.5">
                <span className="text-emerald-400 block font-semibold">TYPICAL SYMPTOM:</span>
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
