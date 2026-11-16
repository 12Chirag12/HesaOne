"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  RotateCcw,
  CheckCircle2
} from "lucide-react";

export default function InteractiveRiskAssessment() {
  const [facilityType, setFacilityType] = useState("Chemical & Pharmaceuticals");
  const [primaryHazard, setPrimaryHazard] = useState("Flammable & Toxic Substances");
  const [urgentNeed, setUrgentNeed] = useState("Proactive Safety Audit & Gap Analysis");
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateScore = () => {
    setIsCalculated(true);
  };

  const resetCalculator = () => {
    setFacilityType("Chemical & Pharmaceuticals");
    setPrimaryHazard("Flammable & Toxic Substances");
    setUrgentNeed("Proactive Safety Audit & Gap Analysis");
    setIsCalculated(false);
  };

  const isHighRisk =
    urgentNeed === "Regulatory Show-Cause Notice / Citation" ||
    primaryHazard === "Flammable & Toxic Substances";

  return (
    <div className="risk-calculator-card">
      <div className="risk-calc-header">
        <div className="calc-title-group">
          <span className="badge-tag">INTERACTIVE DIAGNOSTIC</span>
          <h3>Industrial HSE &amp; Risk Readiness Check</h3>
          <p>
            Evaluate your facility&apos;s baseline in 30 seconds. Get targeted, engineering-backed guidance.
          </p>
        </div>
        {isCalculated && (
          <button
            type="button"
            className="calc-reset-btn"
            onClick={resetCalculator}
            title="Reset Assessment"
          >
            <RotateCcw size={13} /> Restart
          </button>
        )}
      </div>

      {!isCalculated ? (
        <div className="calc-steps-body">
          <div className="calc-field-group">
            <label className="calc-label">
              <span className="step-num">1</span> What is your primary facility sector?
            </label>
            <div className="calc-options-grid">
              {[
                "Chemical & Pharmaceuticals",
                "Heavy Manufacturing",
                "Infrastructure & Construction",
                "Logistics & Warehousing",
                "Energy & Utilities"
              ].map((val) => (
                <button
                  type="button"
                  key={val}
                  className={`calc-opt-btn ${facilityType === val ? "selected" : ""}`}
                  onClick={() => setFacilityType(val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div className="calc-field-group">
            <label className="calc-label">
              <span className="step-num">2</span> What represents your primary hazard exposure?
            </label>
            <div className="calc-options-grid">
              {[
                "Flammable & Toxic Substances",
                "Machinery Guarding & LOTO",
                "High-Bay Fire & Life Safety",
                "Work at Height & Structural",
                "Environmental Effluent & Emissions"
              ].map((val) => (
                <button
                  type="button"
                  key={val}
                  className={`calc-opt-btn ${primaryHazard === val ? "selected" : ""}`}
                  onClick={() => setPrimaryHazard(val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div className="calc-field-group">
            <label className="calc-label">
              <span className="step-num">3</span> What is your immediate objective?
            </label>
            <div className="calc-options-grid">
              {[
                "Proactive Safety Audit & Gap Analysis",
                "Plant Expansion / Greenfield Design",
                "Regulatory Show-Cause Notice / Citation",
                "Workforce Safety Culture & Training"
              ].map((val) => (
                <button
                  type="button"
                  key={val}
                  className={`calc-opt-btn ${urgentNeed === val ? "selected" : ""}`}
                  onClick={() => setUrgentNeed(val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div className="calc-submit-row">
            <button
              type="button"
              className="button button-orange"
              onClick={calculateScore}
            >
              Analyze Exposure Profile <ArrowRight size={16} />
            </button>
            <span className="calc-privacy-note">
              Instant diagnostic overview • Confidential &amp; secure.
            </span>
          </div>
        </div>
      ) : (
        <div className="calc-results-body">
          <div className={`result-card-banner ${isHighRisk ? "high-exposure" : "moderate-exposure"}`}>
            <div className="result-status-icon">
              {isHighRisk ? (
                <ShieldAlert size={40} className="text-red" />
              ) : (
                <ShieldCheck size={40} className="text-orange" />
              )}
            </div>
            <div className="result-status-text">
              <div className="exposure-level">
                STATUS: {isHighRisk ? "HIGH COMPLIANCE / SAFETY EXPOSURE" : "PROACTIVE OPTIMIZATION RECOMMENDED"}
              </div>
              <h4>
                {isHighRisk
                  ? "Priority Action Advised: High Regulatory & Process Exposure"
                  : "Good Foundation: Structured Gap Closure Recommended"}
              </h4>
              <p>
                Based on your facility (<strong>{facilityType}</strong>) and hazard profile (
                <strong>{primaryHazard}</strong>), we recommend formalizing preventive engineering barriers.
              </p>
            </div>
          </div>

          <div className="recommended-actions-grid">
            <div className="action-col">
              <h5>
                <CheckCircle2 size={16} className="text-orange" /> Recommended Next Steps
              </h5>
              <ul className="action-points">
                {isHighRisk ? (
                  <>
                    <li>
                      <strong>Statutory Walkthrough:</strong> Conduct an objective gap audit against applicable statutory codes (Factories Act, OSHA, CPCB).
                    </li>
                    <li>
                      <strong>Barrier Verification:</strong> Validate critical safeguards (relief systems, interlocks, gas detection) to prevent loss of containment.
                    </li>
                    <li>
                      <strong>Action Item Governance:</strong> Formalize a Corrective Action Plan (CAPA) with designated plant leadership owners.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <strong>Process Risk Refresh:</strong> Update your HAZOP / FMEA worksheets for recent process modifications and piping bypasses.
                    </li>
                    <li>
                      <strong>Behavior-Based Safety:</strong> Shift focus from mechanical compliance to frontline worker reporting and hazard spotting.
                    </li>
                    <li>
                      <strong>ISO 45001 Readiness:</strong> Benchmark against international OHSMS standards to unlock advantages in enterprise tenders.
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="action-col next-steps-col">
              <h5>Consult with HESAONE</h5>
              <p>
                Our senior safety practitioners can provide an objective, NDA-protected walkthrough or structured proposal.
              </p>

              <div className="selected-summary-box">
                <small>Sector:</small> <span>{facilityType}</span><br />
                <small>Hazard:</small> <span>{primaryHazard}</span><br />
                <small>Goal:</small> <span>{urgentNeed}</span>
              </div>

              <Link
                className="button button-orange w-full"
                href={`/contact?sector=${encodeURIComponent(
                  facilityType
                )}&hazard=${encodeURIComponent(primaryHazard)}&priority=${encodeURIComponent(
                  urgentNeed
                )}`}
              >
                Discuss This Assessment <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
