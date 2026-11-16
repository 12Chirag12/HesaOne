import type { Metadata } from "next";
import {
  CheckCircle2
} from "lucide-react";
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
    <div className="approach-page">
      <Breadcrumb items={[{ label: "Our Approach" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            THE HESAONE METHODOLOGY <i>•</i> HOW WE DELIVER
          </p>
          <h1>
            Practical thinking.<br />
            <em>Measurable progress.</em>
          </h1>
          <p className="page-hero-desc">
            We believe world-class industrial safety is created when robust technical
            engineering meets genuine collaboration with the people on the plant floor.
            Our 4-stage lifecycle ensures every recommendation is actionable, compliant,
            and enduring.
          </p>
        </div>
      </section>

      {/* 4 Stages Detailed */}
      <section className="approach-stages-section section-wrap">
        <div className="stages-container">
          {stages.map((st) => (
            <div key={st.num} className="stage-card">
              <div className="stage-card-sidebar">
                <span className="stage-card-num">{st.num}</span>
                <span className="stage-card-label">STAGE</span>
              </div>

              <div className="stage-card-content">
                <div className="stage-card-header">
                  <h2>{st.title}</h2>
                  <p className="stage-tagline">{st.tagline}</p>
                </div>

                <div className="stage-breakdown-grid">
                  <div className="stage-activities">
                    <h4>Key Engineering Activities:</h4>
                    <ul>
                      {st.details.map((d) => (
                        <li key={d}>
                          <CheckCircle2 size={16} className="text-orange" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="stage-output-box">
                    <span className="output-kicker">STAGE DELIVERABLE:</span>
                    <strong>{st.output}</strong>
                    <p>
                      Documented, audit-ready technical collateral signed off by our lead
                      process safety practitioners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Maturity Matrix Section */}
      <section className="maturity-section">
        <div className="section-wrap">
          <div className="section-center-heading">
            <p className="eyebrow dark">ORGANIZATIONAL PROGRESSION</p>
            <h2>
              The Industrial Safety <em>Maturity Curve</em>
            </h2>
            <p>
              Where does your facility currently sit, and where do you aspire to be?
            </p>
          </div>

          <div className="maturity-grid">
            <div className="maturity-card level-1">
              <span className="level-badge">LEVEL 01</span>
              <h3>Reactive</h3>
              <p className="level-desc">
                Safety actions occur only after serious accidents or regulatory notices.
                High reliance on luck and minimal paperwork.
              </p>
              <div className="level-focus">
                <small>TYPICAL SYMPTOM:</small>
                <span>Frequent near-misses ignored; zero frontline reporting.</span>
              </div>
            </div>

            <div className="maturity-card level-2">
              <span className="level-badge">LEVEL 02</span>
              <h3>Compliant</h3>
              <p className="level-desc">
                Adhering to basic statutory mandates. Safety is viewed as an administrative
                burden rather than an operational asset.
              </p>
              <div className="level-focus">
                <small>TYPICAL SYMPTOM:</small>
                <span>Audits passed on paper, but field procedures frequently bypassed.</span>
              </div>
            </div>

            <div className="maturity-card level-3">
              <span className="level-badge">LEVEL 03</span>
              <h3>Proactive</h3>
              <p className="level-desc">
                Systematic risk assessments (HAZOP, LOPA), active hazard reporting, and
                leadership accountability driven by ISO 45001.
              </p>
              <div className="level-focus">
                <small>TYPICAL SYMPTOM:</small>
                <span>Near-miss tracking, robust LOTO, and continuous hazard reduction.</span>
              </div>
            </div>

            <div className="maturity-card level-4 featured">
              <span className="level-badge">LEVEL 04</span>
              <h3>Resilient &amp; World-Class</h3>
              <p className="level-desc">
                Zero-Harm culture where safety is inseparable from operational excellence.
                Frontline operators actively lead safety innovations.
              </p>
              <div className="level-focus">
                <small>TYPICAL SYMPTOM:</small>
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
