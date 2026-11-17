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
    serviceCategory: "Process Safety & Risk Studies",
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
        recipient: data.recipient || "hesaonellp@gmail.com",
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
      serviceCategory: "Process Safety & Risk Studies",
      facilitySector: "Chemical & Pharmaceuticals",
      message: ""
    });
  };

  if (submissionResult) {
    return (
      <div className="bg-canopy border border-safety/40 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <CheckCircle2 size={26} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {submissionResult.mode === "dispatched"
                ? "Technical Scope Transmitted"
                : "Technical Scope Formatted & Ready"}
            </h3>
            <p className="text-xs text-limestone-muted">
              Direct Communication Channel with HESAONE Lead Consultants
            </p>
          </div>
        </div>

        <p className="text-sm text-limestone-light leading-relaxed">
          Thank you, <strong className="text-white">{formData.fullName}</strong>. Your technical inquiry regarding{" "}
          <strong className="text-safety-light">{formData.serviceCategory}</strong> for{" "}
          <strong className="text-white">{formData.companyName || "your organization"}</strong> is prepared for engineering review at{" "}
          <a href="mailto:hesaonellp@gmail.com" className="text-safety underline hover:text-safety-hover">
            hesaonellp@gmail.com
          </a>.
        </p>

        <div className="bg-void border border-canopy-border rounded-lg p-4 space-y-2 text-xs font-mono">
          <div className="flex justify-between py-1 border-b border-canopy-border/60">
            <span className="text-limestone-muted">Organization:</span>
            <strong className="text-white">{formData.companyName || "Not specified"}</strong>
          </div>
          <div className="flex justify-between py-1 border-b border-canopy-border/60">
            <span className="text-limestone-muted">Practice Area:</span>
            <span className="text-safety-light">{formData.serviceCategory}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-canopy-border/60">
            <span className="text-limestone-muted">Industrial Sector:</span>
            <span className="text-white">{formData.facilitySector}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-limestone-muted">Contact Info:</span>
            <span className="text-white">{formData.workEmail} &bull; {formData.phoneNumber}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {submissionResult.mailtoUrl && (
            <a
              href={submissionResult.mailtoUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-safety text-white text-xs font-semibold hover:bg-safety-hover transition-colors"
            >
              <span>Dispatch via Email Client</span>
              <ArrowRight size={14} />
            </a>
          )}
          <button
            type="button"
            onClick={handleCopyScope}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-canopy-subtle hover:bg-canopy-border border border-canopy-border text-white text-xs font-medium transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? "Copied to Clipboard" : "Copy Formatted Scope"}</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-limestone-muted hover:text-white text-xs transition-colors"
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
        <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-300" role="alert">
          <AlertCircle size={16} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Full Name & Work Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-graphite mb-1.5">
            Full Name <span className="text-safety">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-graphite-muted">
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
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-limestone-border text-graphite text-xs sm:text-sm placeholder:text-graphite-muted focus:outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="workEmail" className="block text-xs font-semibold text-graphite mb-1.5">
            Corporate Email <span className="text-safety">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-graphite-muted">
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
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-limestone-border text-graphite text-xs sm:text-sm placeholder:text-graphite-muted focus:outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-semibold text-graphite mb-1.5">
            Contact Number <span className="text-safety">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-graphite-muted">
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
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-limestone-border text-graphite text-xs sm:text-sm placeholder:text-graphite-muted focus:outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-semibold text-graphite mb-1.5">
            Organization / Plant Name <span className="text-safety">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-graphite-muted">
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
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-limestone-border text-graphite text-xs sm:text-sm placeholder:text-graphite-muted focus:outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Service Category & Sector Select */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="serviceCategory" className="block text-xs font-semibold text-graphite mb-1.5">
            Practice Area / Discipline <span className="text-safety">*</span>
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            className="w-full px-3 py-2.5 rounded-lg bg-white border border-limestone-border text-graphite text-xs sm:text-sm focus:outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-colors"
          >
            <option value="Process Safety & Risk Studies">Process Safety &amp; Risk Studies (HAZOP / QRA)</option>
            <option value="Safety Management Systems & Compliance">Safety Management Systems (ISO 45001 / Factories Act)</option>
            <option value="Fire & Emergency Safety Engineering">Industrial Fire &amp; Emergency Safety (NFPA / NBC)</option>
            <option value="Environment & Sustainability Solutions">Environmental &amp; SPCB Consent Compliance</option>
            <option value="Technical Safety & Operational Engineering">Technical Safety &amp; Machine Guarding (ISO 12100)</option>
            <option value="Workforce Training & Safety Culture">HSE Training &amp; Workforce Competency</option>
          </select>
        </div>

        <div>
          <label htmlFor="facilitySector" className="block text-xs font-semibold text-graphite mb-1.5">
            Industry Sector <span className="text-safety">*</span>
          </label>
          <select
            id="facilitySector"
            name="facilitySector"
            value={formData.facilitySector}
            onChange={handleChange}
            className="w-full px-3 py-2.5 rounded-lg bg-white border border-limestone-border text-graphite text-xs sm:text-sm focus:outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-colors"
          >
            <option value="Chemical & Pharmaceuticals">Chemical &amp; Pharmaceuticals</option>
            <option value="Manufacturing & Heavy Engineering">Manufacturing &amp; Heavy Engineering</option>
            <option value="Infrastructure & Construction">Infrastructure &amp; Construction</option>
            <option value="Logistics & Industrial Warehousing">Logistics &amp; Industrial Warehousing</option>
            <option value="Energy & Power Utilities">Energy &amp; Power Utilities</option>
            <option value="Other Industrial Facility">Other Industrial Facility</option>
          </select>
        </div>
      </div>

      {/* Message / Scope Textarea */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-graphite mb-1.5">
          Technical Scope &amp; Facility Context <span className="text-safety">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Briefly describe your site, plant units, chemical inventory, P&amp;ID availability, or audit deadlines..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white border border-limestone-border text-graphite text-xs sm:text-sm placeholder:text-graphite-muted focus:outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-colors leading-relaxed"
        />
      </div>

      {/* Footer: NDA Assurance & Submit Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2 text-xs text-graphite-muted">
          <Lock size={13} className="text-safety shrink-0" />
          <span>Disclosures handled under bilateral Non-Disclosure Agreement (NDA).</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-safety text-white text-xs sm:text-sm font-semibold hover:bg-safety-hover disabled:opacity-60 transition-all shadow-md shadow-safety/15 group"
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
