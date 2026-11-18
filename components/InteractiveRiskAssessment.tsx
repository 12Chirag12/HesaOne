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
  const [primaryHazard, setPrimaryHazard] = useState("Flammable & Toxic Chemical Release");
  const [urgentNeed, setUrgentNeed] = useState("Statutory DISH Safety Audit & Gap Analysis");
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateScore = () => {
    setIsCalculated(true);
  };

  const resetCalculator = () => {
    setFacilityType("Chemical & Pharmaceuticals");
    setPrimaryHazard("Flammable & Toxic Chemical Release");
    setUrgentNeed("Statutory DISH Safety Audit & Gap Analysis");
    setIsCalculated(false);
  };

  const isHighRisk =
    urgentNeed === "Regulatory Inspection Notice / CAPA Remediation" ||
    primaryHazard === "Flammable & Toxic Chemical Release";

  return (
    <div className="crystal-panel rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full crystal-pill text-sky-900 text-xs font-mono font-semibold tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
            <span>INTERACTIVE HSE DIAGNOSTIC CONSOLE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Industrial HSE &amp; Risk Readiness Check
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Evaluate your facility&apos;s baseline in 30 seconds. Receive targeted, engineering-backed compliance guidance based on The Factories Act &amp; DISH standards.
          </p>
        </div>

        {isCalculated && (
          <button
            type="button"
            onClick={resetCalculator}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-mono border border-slate-200 shadow-2xs self-start sm:self-auto transition-colors"
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
            <label className="flex items-center gap-2 text-xs font-mono text-slate-700 uppercase tracking-wider mb-3 font-semibold">
              <span className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-[11px] text-sky-800 font-bold">
                1
              </span>
              <span>Primary Industrial Sector</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {[
                "Chemical & Pharmaceuticals",
                "Automotive & Heavy Engineering",
                "Polymers, Packaging & Synthetics",
                "Infrastructure & Construction",
                "Energy & Industrial Utilities"
              ].map((val) => (
                <button
                  type="button"
                  key={val}
                  onClick={() => setFacilityType(val)}
                  className={`text-left p-3.5 rounded-xl text-xs font-medium border transition-all ${
                    facilityType === val
                      ? "bg-sky-500/10 border-sky-600 text-sky-950 shadow-xs ring-1 ring-sky-600 font-semibold"
                      : "bg-white/80 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Hazard Exposure */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono text-slate-700 uppercase tracking-wider mb-3 font-semibold">
              <span className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-[11px] text-sky-800 font-bold">
                2
              </span>
              <span>Primary Operational Hazard Exposure</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {[
                "Flammable & Toxic Chemical Release",
                "High-Speed Machinery & Pinch Points",
                "Combustible Dust & Fire Loading",
                "Effluent Treatment & Water Discharge",
                "Medium / High-Voltage Electrical Arc Flash"
              ].map((val) => (
                <button
                  type="button"
                  key={val}
                  onClick={() => setPrimaryHazard(val)}
                  className={`text-left p-3.5 rounded-xl text-xs font-medium border transition-all ${
                    primaryHazard === val
                      ? "bg-sky-500/10 border-sky-600 text-sky-950 shadow-xs ring-1 ring-sky-600 font-semibold"
                      : "bg-white/80 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Immediate Milestone */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono text-slate-700 uppercase tracking-wider mb-3 font-semibold">
              <span className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-[11px] text-sky-800 font-bold">
                3
              </span>
              <span>Immediate Compliance Milestone or Objective</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {[
                "Statutory DISH Safety Audit & Gap Analysis",
                "HAZOP / HIRA Study for Plant Expansion",
                "Fire Hydrant Inspection & Onsite Emergency Plan",
                "Regulatory Inspection Notice / CAPA Remediation",
                "Behavior-Based Safety (BBS) Workforce Training"
              ].map((val) => (
                <button
                  type="button"
                  key={val}
                  onClick={() => setUrgentNeed(val)}
                  className={`text-left p-3.5 rounded-xl text-xs font-medium border transition-all ${
                    urgentNeed === val
                      ? "bg-sky-500/10 border-sky-600 text-sky-950 shadow-xs ring-1 ring-sky-600 font-semibold"
                      : "bg-white/80 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-white hover:border-slate-300"
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 text-white text-xs sm:text-sm font-semibold hover:bg-sky-700 transition-all shadow-md shadow-sky-600/20 group"
            >
              <span>Analyze Safety Baseline</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Status Indicator Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border border-slate-200 bg-slate-50 shadow-2xs">
              {isHighRisk ? (
                <ShieldAlert size={30} className="text-sky-600" />
              ) : (
                <ShieldCheck size={30} className="text-emerald-600" />
              )}
            </div>
            <div>
              <span className={`inline-block font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full mb-1.5 ${
                isHighRisk ? "bg-sky-100 text-sky-900 border border-sky-300" : "bg-emerald-100 text-emerald-800 border border-emerald-300"
              }`}>
                {isHighRisk ? "PRIORITY ENGINEERING REVIEW ADVISED" : "CONTINUAL IMPROVEMENT ROADMAP"}
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                {isHighRisk
                  ? "Priority Scope: Critical Hazard & Containment Barriers"
                  : "Structured Scope: Management System & Risk Verification"}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Targeted technical profile for <strong className="text-slate-900">{facilityType}</strong> operating with <strong className="text-slate-900">{primaryHazard}</strong>.
              </p>
            </div>
          </div>

          {/* 2-column Results: Recommendations + Pre-filled Action Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Recommended Steps */}
            <div className="lg:col-span-7 crystal-card rounded-2xl p-6 space-y-4">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span>Recommended Engineering Steps</span>
              </h5>
              <ul className="space-y-3 text-xs text-slate-700">
                {isHighRisk ? (
                  <>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                      <span><strong className="text-slate-900">Statutory Gap Review:</strong> Walkthrough audit against The Factories Act, 1948 and MSIHC Rules by DISH Approved auditor.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                      <span><strong className="text-slate-900">Process Barrier Audit:</strong> Validate independent protection layers, relief valves, and emergency interlocks.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                      <span><strong className="text-slate-900">Actionable CAPA Tracker:</strong> Prioritize corrective actions with plant engineering ownership.</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                      <span><strong className="text-slate-900">Process Hazard Update:</strong> Revalidate HAZOP nodes for recent piping changes or expansions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                      <span><strong className="text-slate-900">Frontline Safety Coaching:</strong> Deploy Behavior-Based Safety observation routines for operators.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                      <span><strong className="text-slate-900">ISO 45001 Readiness:</strong> Internal audit preparation to benchmark safety governance against global criteria.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Right: Discuss Profile Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm">
              <div>
                <h5 className="text-sm font-bold text-slate-900 mb-1">
                  Discuss Your Scoping Profile
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Connect directly with lead safety consultants under bilateral NDA.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] font-mono space-y-1 text-slate-600">
                  <div><span className="text-sky-800 font-semibold">Sector:</span> {facilityType}</div>
                  <div><span className="text-sky-800 font-semibold">Hazard:</span> {primaryHazard}</div>
                  <div><span className="text-sky-800 font-semibold">Focus:</span> {urgentNeed}</div>
                </div>
              </div>

              <Link
                href={`/contact?sector=${encodeURIComponent(
                  facilityType
                )}&hazard=${encodeURIComponent(primaryHazard)}&priority=${encodeURIComponent(
                  urgentNeed
                )}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors shadow-sm"
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
