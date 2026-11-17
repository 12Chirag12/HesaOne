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
  Check
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
      <div className="contact-success-card">
        <div className="success-icon-wrap">
          <CheckCircle2 size={36} className="success-icon" />
        </div>

        {submissionResult.mode === "dispatched" ? (
          <>
            <h3>Technical Consultation Request Dispatched</h3>
            <p className="success-msg">
              Thank you, <strong>{formData.fullName}</strong>. Your technical inquiry regarding{" "}
              <strong>{formData.serviceCategory}</strong> for{" "}
              <strong>{formData.companyName || "your organization"}</strong> has been transmitted to our engineering desk. A lead consultant will review your facility scope.
            </p>
          </>
        ) : (
          <>
            <h3>Technical Inquiry Formatted &amp; Ready</h3>
            <p className="success-msg">
              Thank you, <strong>{formData.fullName}</strong>. To ensure direct, unmediated communication with our senior safety engineering team, your technical brief has been compiled for direct delivery to{" "}
              <a href="mailto:hesaonellp@gmail.com" className="email-link">
                hesaonellp@gmail.com
              </a>.
            </p>
          </>
        )}

        <div className="inquiry-summary-box">
          <div className="summary-row">
            <span className="summary-lbl">Organization:</span>
            <strong>{formData.companyName || "Not specified"}</strong>
          </div>
          <div className="summary-row">
            <span className="summary-lbl">Discipline:</span>
            <span>{formData.serviceCategory}</span>
          </div>
          <div className="summary-row">
            <span className="summary-lbl">Direct Contact:</span>
            <span>{formData.workEmail} &bull; {formData.phoneNumber}</span>
          </div>
        </div>

        <div className="success-actions">
          {submissionResult.mailtoUrl && (
            <a
              className="button button-primary"
              href={submissionResult.mailtoUrl}
            >
              <span>Dispatch via Email Client</span>
              <ArrowRight size={15} />
            </a>
          )}
          <button
            type="button"
            className="button button-outline"
            onClick={handleCopyScope}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? "Copied to Clipboard" : "Copy Formatted Scope"}</span>
          </button>
          <button type="button" className="button button-ghost" onClick={handleReset}>
            <RotateCcw size={14} />
            <span>Submit Another Scope</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="interactive-contact-form" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="form-error-banner" role="alert">
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="fullName">
            Full Name <span className="req">*</span>
          </label>
          <div className="input-with-icon">
            <User size={15} className="input-icon" />
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. R. K. Sharma / Lead Engineer"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="workEmail">
            Corporate Email <span className="req">*</span>
          </label>
          <div className="input-with-icon">
            <Mail size={15} className="input-icon" />
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              required
              placeholder="name@company.com"
              value={formData.workEmail}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="phoneNumber">
            Contact Number <span className="req">*</span>
          </label>
          <div className="input-with-icon">
            <Phone size={15} className="input-icon" />
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="companyName">
            Organization / Plant Name <span className="req">*</span>
          </label>
          <div className="input-with-icon">
            <Building size={15} className="input-icon" />
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="e.g. Apex Petrochemicals Ltd."
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="serviceCategory">
            Practice Area / Discipline <span className="req">*</span>
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
          >
            <option value="Process Safety & Risk Studies">Process Safety &amp; Risk Studies (HAZOP / QRA)</option>
            <option value="Safety Management Systems & Compliance">Safety Management Systems (ISO 45001 / Factories Act)</option>
            <option value="Fire & Emergency Safety Engineering">Industrial Fire &amp; Emergency Safety (NFPA / NBC)</option>
            <option value="Environment & Sustainability Solutions">Environmental &amp; SPCB Consent Compliance</option>
            <option value="Technical Safety & Operational Engineering">Technical Safety &amp; Machine Guarding (ISO 12100)</option>
            <option value="Workforce Training & Safety Culture">HSE Training &amp; Workforce Competency</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="facilitySector">
            Industry Sector <span className="req">*</span>
          </label>
          <select
            id="facilitySector"
            name="facilitySector"
            value={formData.facilitySector}
            onChange={handleChange}
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

      <div className="form-field">
        <label htmlFor="message">
          Technical Scope &amp; Facility Context <span className="req">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          placeholder="Briefly describe your site, plant units, chemical inventory, P&amp;ID availability, or audit deadlines..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="form-footer-row">
        <div className="form-nda-assurance">
          <Lock size={14} className="nda-icon" />
          <span>Technical disclosures handled under bilateral Non-Disclosure Agreement (NDA).</span>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="button button-primary"
        >
          {isSubmitting ? (
            <span>Preparing Scope...</span>
          ) : (
            <>
              <span>Format &amp; Submit Inquiry</span>
              <Send size={14} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
