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
    urgentNeed === "Statutory Notice / CAPA Remediation" ||
    primaryHazard === "Flammable & Toxic Substances";

  return (
    <div className="bg-canopy border border-canopy-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-canopy-border pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canopy-subtle border border-safety/30 text-safety-light text-xs font-mono font-semibold tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-safety animate-pulse" />
            <span>INTERACTIVE DIAGNOSTIC CONSOLE</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Industrial HSE &amp; Risk Readiness Check
          </h3>
          <p className="text-xs sm:text-sm text-limestone-muted mt-1">
            Evaluate your facility&apos;s baseline in 30 seconds. Receive targeted, engineering-backed compliance guidance.
          </p>
        </div>

        {isCalculated && (
          <button
            type="button"
            onClick={resetCalculator}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canopy-subtle hover:bg-canopy-border text-limestone-light text-xs font-mono border border-canopy-border self-start sm:self-auto transition-colors"
          >
            <RotateCcw size={12} />
            <span>Restart Check</span>
          </button>
        )}
      </div>

      {!isCalculated ? (
        <div className="space-y-7">
          {/* Step 1: Sector */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono text-safety-light uppercase tracking-wider mb-3 font-semibold">
              <span className="w-5 h-5 rounded-full bg-safety/20 border border-safety/40 flex items-center justify-center text-[11px] text-white">
                1
              </span>
              <span>Primary Industrial Sector</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
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
                  onClick={() => setFacilityType(val)}
                  className={`text-left p-3 rounded-lg text-xs font-medium border transition-all ${
                    facilityType === val
                      ? "bg-safety/15 border-safety text-white shadow-sm ring-1 ring-safety"
                      : "bg-canopy-subtle/60 border-canopy-border text-limestone-muted hover:text-white hover:border-canopy-border/90"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Hazard Exposure */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono text-safety-light uppercase tracking-wider mb-3 font-semibold">
              <span className="w-5 h-5 rounded-full bg-safety/20 border border-safety/40 flex items-center justify-center text-[11px] text-white">
                2
              </span>
              <span>Primary Operational Hazard Exposure</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
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
                  onClick={() => setPrimaryHazard(val)}
                  className={`text-left p-3 rounded-lg text-xs font-medium border transition-all ${
                    primaryHazard === val
                      ? "bg-safety/15 border-safety text-white shadow-sm ring-1 ring-safety"
                      : "bg-canopy-subtle/60 border-canopy-border text-limestone-muted hover:text-white hover:border-canopy-border/90"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Immediate Milestone */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono text-safety-light uppercase tracking-wider mb-3 font-semibold">
              <span className="w-5 h-5 rounded-full bg-safety/20 border border-safety/40 flex items-center justify-center text-[11px] text-white">
                3
              </span>
              <span>Immediate Compliance Milestone or Objective</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
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
                  onClick={() => setUrgentNeed(val)}
                  className={`text-left p-3 rounded-lg text-xs font-medium border transition-all ${
                    urgentNeed === val
                      ? "bg-safety/15 border-safety text-white shadow-sm ring-1 ring-safety"
                      : "bg-canopy-subtle/60 border-canopy-border text-limestone-muted hover:text-white hover:border-canopy-border/90"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={calculateScore}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-safety text-white text-xs sm:text-sm font-semibold hover:bg-safety-hover transition-all shadow-lg shadow-safety/20 group"
            >
              <span>Analyze Safety Baseline</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Status Indicator Card */}
          <div className="p-5 rounded-xl bg-canopy-subtle border border-canopy-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border bg-void">
              {isHighRisk ? (
                <ShieldAlert size={32} className="text-amber-500" />
              ) : (
                <ShieldCheck size={32} className="text-emerald-400" />
              )}
            </div>
            <div>
              <span className={`inline-block font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full mb-1.5 ${
                isHighRisk ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              }`}>
                {isHighRisk ? "PRIORITY ENGINEERING REVIEW ADVISED" : "CONTINUAL IMPROVEMENT ROADMAP"}
              </span>
              <h4 className="text-lg font-bold text-white">
                {isHighRisk
                  ? "Priority Scope: Critical Hazard & Containment Barriers"
                  : "Structured Scope: Management System & Risk Verification"}
              </h4>
              <p className="text-xs text-limestone-muted mt-0.5">
                Targeted technical profile for <strong className="text-white">{facilityType}</strong> operating with <strong className="text-white">{primaryHazard}</strong>.
              </p>
            </div>
          </div>

          {/* 2-column Results: Recommendations + Pre-filled Action Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Recommended Steps */}
            <div className="lg:col-span-7 bg-canopy-subtle/70 border border-canopy-border rounded-xl p-5 space-y-4">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-safety-light flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span>Recommended Engineering Steps</span>
              </h5>
              <ul className="space-y-3 text-xs text-limestone-light">
                {isHighRisk ? (
                  <>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety shrink-0 mt-1.5" />
                      <span><strong className="text-white">Statutory Gap Review:</strong> Walkthrough audit against The Factories Act, 1948 and MSIHC Rules.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety shrink-0 mt-1.5" />
                      <span><strong className="text-white">Process Barrier Audit:</strong> Validate independent protection layers, relief valves, and emergency interlocks.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety shrink-0 mt-1.5" />
                      <span><strong className="text-white">Actionable CAPA Tracker:</strong> Prioritize corrective actions with plant engineering ownership.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety shrink-0 mt-1.5" />
                      <span><strong className="text-white">Process Hazard Update:</strong> Revalidate HAZOP nodes for recent piping changes or expansions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety shrink-0 mt-1.5" />
                      <span><strong className="text-white">Frontline Safety Coaching:</strong> Deploy Behavior-Based Safety observation routines for operators.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-safety shrink-0 mt-1.5" />
                      <span><strong className="text-white">ISO 45001 Readiness:</strong> Internal audit preparation to benchmark safety governance against global criteria.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Right: Discuss Profile Card */}
            <div className="lg:col-span-5 bg-void border border-canopy-border rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <h5 className="text-sm font-bold text-white mb-1">
                  Discuss Your Scoping Profile
                </h5>
                <p className="text-xs text-limestone-muted leading-relaxed mb-3">
                  Connect directly with lead safety consultants under bilateral NDA.
                </p>
                <div className="bg-canopy-subtle/80 border border-canopy-border rounded-lg p-3 text-[11px] font-mono space-y-1 text-limestone-muted">
                  <div><span className="text-safety-light">Sector:</span> {facilityType}</div>
                  <div><span className="text-safety-light">Hazard:</span> {primaryHazard}</div>
                  <div><span className="text-safety-light">Focus:</span> {urgentNeed}</div>
                </div>
              </div>

              <Link
                href={`/contact?sector=${encodeURIComponent(
                  facilityType
                )}&hazard=${encodeURIComponent(primaryHazard)}&priority=${encodeURIComponent(
                  urgentNeed
                )}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-safety text-white text-xs font-semibold hover:bg-safety-hover transition-colors"
              >
                <span>Request Scoped Proposal</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
