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
              <span className="step-num">1</span> Primary Industrial Sector
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
              <span className="step-num">2</span> Primary Operational Hazard Exposure
            </label>
            <div className="calc-options-grid">
              {[
                "Flammable & Toxic Substances",
                "Mechanical Machinery & Rotating Equipment",
                "High-Bay Storage & Fire Load",
                "Work at Height & Structural Risks",
                "High-Voltage Electrical Arc Flash"
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
              <span className="step-num">3</span> Immediate Compliance Milestone or Objective
            </label>
            <div className="calc-options-grid">
              {[
                "Proactive Safety Audit & Gap Analysis",
                "HAZOP / LOPA Study for Plant Expansion",
                "ISO 45001 / ISO 14001 Certification Readiness",
                "Statutory Notice / CAPA Remediation",
                "Behavior-Based Safety & Workforce Training"
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

          <button
            type="button"
            className="button button-primary calc-submit-btn"
            onClick={calculateScore}
          >
            <span>Analyze Safety Baseline</span>
            <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div className="calc-result-panel">
          <div className="result-badge-row">
            <div className="result-status-icon">
              {isHighRisk ? (
                <ShieldAlert size={36} color="#D97706" />
              ) : (
                <ShieldCheck size={36} color="#10B981" />
              )}
            </div>
            <div className="result-status-text">
              <div className="badge-tag">
                {isHighRisk ? "PRIORITY ENGINEERING REVIEW ADVISED" : "CONTINUAL IMPROVEMENT ROADMAP"}
              </div>
              <h4>
                {isHighRisk
                  ? "Priority Scope: Critical Hazard & Containment Barriers"
                  : "Structured Scope: Management System & Risk Verification"}
              </h4>
              <p>
                Targeted review for <strong>{facilityType}</strong> operating with <strong>{primaryHazard}</strong>.
              </p>
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: "24px" }}>
            <div className="ind-subcard">
              <h5 style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle2 size={16} color="#10B981" /> Recommended Engineering Steps
              </h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                {isHighRisk ? (
                  <>
                    <li><strong>Statutory Gap Review:</strong> Walkthrough audit against the Factories Act 1948 and MSIHC Rules.</li>
                    <li><strong>Process Barrier Audit:</strong> Validate independent protection layers, relief valves, and emergency shutdown interlocks.</li>
                    <li><strong>Actionable CAPA Tracker:</strong> Prioritize corrective actions with plant engineering ownership.</li>
                  </>
                ) : (
                  <>
                    <li><strong>Process Hazard Update:</strong> Revalidate HAZOP nodes for recent piping changes or expansions.</li>
                    <li><strong>Frontline Safety Coaching:</strong> Deploy Behavior-Based Safety observation routines for operators.</li>
                    <li><strong>ISO 45001 Readiness:</strong> Internal audit preparation to benchmark safety governance against global criteria.</li>
                  </>
                )}
              </ul>
            </div>

            <div className="ind-subcard" style={{ background: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h5 style={{ marginBottom: "8px" }}>Discuss Your Scoping Profile</h5>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "16px" }}>
                  Connect directly with our lead safety consultants under bilateral NDA.
                </p>
                <div style={{ background: "var(--limestone)", padding: "12px", borderRadius: "var(--radius-xs)", fontSize: "12px", marginBottom: "16px" }}>
                  <div><strong>Sector:</strong> {facilityType}</div>
                  <div><strong>Hazard:</strong> {primaryHazard}</div>
                  <div><strong>Focus:</strong> {urgentNeed}</div>
                </div>
              </div>
              <Link
                className="button button-primary"
                style={{ width: "100%", justifyContent: "center" }}
                href={`/contact?sector=${encodeURIComponent(
                  facilityType
                )}&hazard=${encodeURIComponent(primaryHazard)}&priority=${encodeURIComponent(
                  urgentNeed
                )}`}
              >
                <span>Request Scoped Proposal</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
