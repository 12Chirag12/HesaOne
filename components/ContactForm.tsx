"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  Building,
  Mail,
  User,
  Phone,
  RotateCcw,
  Lock,
  ArrowRight,
  Copy,
  Check,
  AlertCircle
} from "lucide-react";
import { companyInfo } from "@/lib/siteData";

interface SubmissionResult {
  mode: "dispatched" | "prepared";
  mailtoUrl?: string;
  recipient?: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    serviceCategory: "Process Safety Studies & Risk Assessment",
    facilitySector: "Chemical & Pharmaceuticals",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const sectorParam = searchParams.get("sector");
    const priorityParam = searchParams.get("priority");

    if (serviceParam || sectorParam || priorityParam) {
      setFormData((prev) => ({
        ...prev,
        ...(serviceParam ? { serviceCategory: serviceParam } : {}),
        ...(sectorParam ? { facilitySector: sectorParam } : {}),
        ...(priorityParam
          ? {
              message: `Inquiry Focus: ${priorityParam}\n\n`
            }
          : {})
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to process inquiry.");
      }

      setSubmissionResult({
        mode: data.mode,
        mailtoUrl: data.mailtoUrl,
        recipient: data.recipient || companyInfo.email,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyScope = () => {
    const text =
      `HESAONE TECHNICAL ADVISORY INQUIRY\n` +
      `-----------------------------------\n` +
      `Contact Name: ${formData.fullName}\n` +
      `Organization: ${formData.companyName}\n` +
      `Corporate Email: ${formData.workEmail}\n` +
      `Phone: ${formData.phoneNumber}\n` +
      `Discipline: ${formData.serviceCategory}\n` +
      `Sector: ${formData.facilitySector}\n` +
      `Facility Scope / Message:\n${formData.message}\n`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setErrorMessage(null);
    setFormData({
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      companyName: "",
      serviceCategory: "Process Safety Studies & Risk Assessment",
      facilitySector: "Chemical & Pharmaceuticals",
      message: ""
    });
  };

  if (submissionResult) {
    return (
      <div className="bg-slate-50 border border-sky-300 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
            <CheckCircle2 size={26} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {submissionResult.mode === "dispatched"
                ? "Technical Scope Transmitted"
                : "Technical Scope Formatted & Ready"}
            </h3>
            <p className="text-xs text-slate-500">
              Direct Communication Channel with HESAONE Lead Consultants
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">
          Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your technical inquiry regarding{" "}
          <strong className="text-sky-700">{formData.serviceCategory}</strong> for{" "}
          <strong className="text-slate-900">{formData.companyName || "your facility"}</strong> has been prepared for engineering review at{" "}
          <a href={`mailto:${companyInfo.email}`} className="text-sky-600 underline font-medium">
            {companyInfo.email}
          </a>.
        </p>

        <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-2 text-xs font-mono">
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500">Organization:</span>
            <strong className="text-slate-900">{formData.companyName || "Not specified"}</strong>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500">Practice Area:</span>
            <span className="text-sky-700 font-semibold">{formData.serviceCategory}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500">Industrial Sector:</span>
            <span className="text-slate-900">{formData.facilitySector}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500">Contact Info:</span>
            <span className="text-slate-900">{formData.workEmail} &bull; {formData.phoneNumber}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {submissionResult.mailtoUrl && (
            <a
              href={submissionResult.mailtoUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors shadow-sm"
            >
              <span>Dispatch via Email Client</span>
              <ArrowRight size={14} />
            </a>
          )}
          <button
            type="button"
            onClick={handleCopyScope}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-medium transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            <span>{copied ? "Copied to Clipboard" : "Copy Formatted Scope"}</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-500 hover:text-slate-800 text-xs transition-colors"
          >
            <RotateCcw size={13} />
            <span>Submit Another Scope</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {errorMessage && (
        <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 flex items-center gap-2.5 text-xs text-rose-800" role="alert">
          <AlertCircle size={16} className="shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Full Name & Work Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-sky-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User size={15} />
            </div>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Rajesh Sharma / Plant Lead"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="workEmail" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Corporate Email <span className="text-sky-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail size={15} />
            </div>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              required
              placeholder="name@company.com"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Contact Number <span className="text-sky-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Phone size={15} />
            </div>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Organization / Plant Name <span className="text-sky-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Building size={15} />
            </div>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="e.g. Apex Petrochemicals Ltd."
              value={formData.companyName}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Service Category & Sector Select */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="serviceCategory" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Practice Area / Discipline <span className="text-sky-600">*</span>
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            className="w-full px-3 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
          >
            <option value="Process Safety Studies & Risk Assessment">Process Safety Studies (HAZOP / HIRA / PSSR / LOPA)</option>
            <option value="Safety System Implementation & Compliance">Safety System Implementation (PTW / BBS / CAPA / PPE)</option>
            <option value="Industrial Fire & Emergency Safety">Industrial Fire Safety (Hydrant AMC / Extinguisher / OEP)</option>
            <option value="Environmental & Pollution Control Solutions">Environmental &amp; ETP Troubleshooting / Water Auditing</option>
            <option value="Engineering Services & Factory Licensing Support">Factory Layout Approval &amp; Electrical Safety Audits</option>
            <option value="HSE Training & Workforce Competency">HSE Workforce &amp; Behavioral Safety Training</option>
          </select>
        </div>

        <div>
          <label htmlFor="facilitySector" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Industry Sector <span className="text-sky-600">*</span>
          </label>
          <select
            id="facilitySector"
            name="facilitySector"
            value={formData.facilitySector}
            onChange={handleChange}
            className="w-full px-3 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
          >
            <option value="Chemical & Pharmaceuticals">Chemical &amp; Pharmaceuticals</option>
            <option value="Automotive & Heavy Engineering">Automotive &amp; Heavy Engineering</option>
            <option value="Polymers, Packaging & Synthetics">Polymers, Packaging &amp; Synthetics</option>
            <option value="Infrastructure & Industrial Construction">Infrastructure &amp; Industrial Construction</option>
            <option value="Energy & Industrial Utilities">Energy &amp; Industrial Utilities</option>
            <option value="Other Industrial Facility">Other Industrial Facility</option>
          </select>
        </div>
      </div>

      {/* Message / Scope Textarea */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Technical Scope &amp; Facility Context <span className="text-sky-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Briefly describe your site, plant units, chemical inventory, P&amp;ID availability, or audit deadlines..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors leading-relaxed"
        />
      </div>

      {/* Footer: NDA Assurance & Submit Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Lock size={13} className="text-sky-600 shrink-0" />
          <span>Disclosures handled under bilateral Non-Disclosure Agreement (NDA).</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky-600 text-white text-xs sm:text-sm font-semibold hover:bg-sky-700 disabled:opacity-60 transition-all shadow-sm group"
        >
          {isSubmitting ? (
            <span>Processing Scope...</span>
          ) : (
            <>
              <span>Format &amp; Submit Inquiry</span>
              <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
