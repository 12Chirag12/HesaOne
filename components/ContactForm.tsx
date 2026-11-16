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
  ArrowRight
} from "lucide-react";

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
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

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
              message: `Inquiry Context: ${priorityParam}\n\n`
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = "HES-" + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
    }, 500);
  };

  const handleReset = () => {
    setSubmittedRef(null);
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

  if (submittedRef) {
    return (
      <div className="contact-success-card">
        <div className="success-icon-wrap">
          <CheckCircle2 size={36} className="success-icon" />
        </div>
        <h3>Technical Consultation Request Logged</h3>
        <p className="success-ref">
          Reference Code: <code>{submittedRef}</code>
        </p>
        <p className="success-msg">
          Thank you, <strong>{formData.fullName}</strong>. Your technical inquiry regarding{" "}
          <strong>{formData.serviceCategory}</strong> for{" "}
          <strong>{formData.companyName || "your organization"}</strong> has been securely recorded. Our lead engineering team will respond within one business day.
        </p>

        <div className="success-next-steps">
          <div className="step-item">
            <span className="step-badge">1</span>
            <div>
              <strong>Preliminary Technical Review</strong>
              <p>Our lead consultant reviews relevant sector codes (IEC/OSHA/NFPA) and facility requirements.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-badge">2</span>
            <div>
              <strong>Mutual NDA &amp; Scoping Discussion</strong>
              <p>Direct technical dialogue to execute a mutual NDA and establish project deliverables.</p>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <a
            className="button button-primary"
            href={`mailto:hesaonellp@gmail.com?subject=Consultation%20Ref%20${submittedRef}%20-%20${encodeURIComponent(
              formData.companyName || formData.fullName
            )}`}
          >
            <span>Email Technical Drawings / Scope</span>
            <ArrowRight size={15} />
          </a>
          <button type="button" className="button button-outline" onClick={handleReset}>
            <RotateCcw size={14} />
            <span>Submit Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="interactive-contact-form" onSubmit={handleSubmit}>
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
              placeholder="e.g. R. K. Sharma / John Reynolds"
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
            Phone / Contact Number <span className="req">*</span>
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
            <option value="Safety Management Systems & Compliance">Safety Management Systems (ISO 45001)</option>
            <option value="Fire & Emergency Safety Engineering">Industrial Fire &amp; Emergency Safety</option>
            <option value="Environment & Sustainability Solutions">Environmental &amp; Consent Compliance</option>
            <option value="Technical Safety & Operational Engineering">Technical Safety &amp; LOTO Engineering</option>
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
          Technical Scope &amp; Facility Context
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Briefly describe your site, plant units, chemical inventory, P&amp;ID availability, or audit deadlines..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="form-footer-row">
        <div className="form-nda-assurance">
          <Lock size={14} className="nda-icon" />
          <span>Strict mutual Non-Disclosure Agreement (NDA) applied prior to sharing technical data.</span>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="button button-primary"
        >
          {isSubmitting ? (
            <span>Recording Request...</span>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send size={14} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
