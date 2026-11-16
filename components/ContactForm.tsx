"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
  Mail,
  User,
  Phone,
  RotateCcw
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
              message: `Priority Focus: ${priorityParam}\n\n`
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
    }, 600);
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
          <CheckCircle2 size={44} className="text-orange" />
        </div>
        <h3>Consultation Request Submitted</h3>
        <p className="success-ref">
          Reference: <strong>{submittedRef}</strong>
        </p>
        <p className="success-msg">
          Thank you, <strong>{formData.fullName}</strong>. Your inquiry regarding{" "}
          <strong>{formData.serviceCategory}</strong> for{" "}
          <strong>{formData.companyName || "your facility"}</strong> has been received. Our senior safety consultant will contact you within 24 business hours.
        </p>

        <div className="success-next-steps">
          <div className="step-item">
            <span className="step-badge">1</span>
            <div>
              <strong>Technical Review</strong>
              <p>Preliminary desk review of your sector&apos;s statutory requirements.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-badge">2</span>
            <div>
              <strong>Confidential Scope Discussion</strong>
              <p>Direct follow-up to agree on NDA and technical walkthrough deliverables.</p>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <a
            className="button button-orange"
            href={`mailto:hesaonellp@gmail.com?subject=Inquiry%20Ref%20${submittedRef}%20-%20${encodeURIComponent(
              formData.companyName || formData.fullName
            )}`}
          >
            Email Project P&amp;ID / Files
          </a>
          <button type="button" className="button button-outline" onClick={handleReset}>
            <RotateCcw size={14} /> New Request
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
            Full Name <i>*</i>
          </label>
          <div className="input-with-icon">
            <User size={15} />
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Sarah Jenkins / Dr. R. Kumar"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="workEmail">
            Work Email <i>*</i>
          </label>
          <div className="input-with-icon">
            <Mail size={15} />
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
            Phone Number <i>*</i>
          </label>
          <div className="input-with-icon">
            <Phone size={15} />
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
            Company / Facility Name <i>*</i>
          </label>
          <div className="input-with-icon">
            <Building size={15} />
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="e.g. Apex Industries Ltd."
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="serviceCategory">
            Required Service <i>*</i>
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
          >
            <option value="Process Safety & Risk Studies">Process Safety &amp; Risk Studies (HAZOP / QRA)</option>
            <option value="Safety Management Systems & Compliance">Safety Management Systems (ISO 45001)</option>
            <option value="Fire & Emergency Safety Engineering">Fire &amp; Emergency Safety Engineering</option>
            <option value="Environment & Sustainability Solutions">Environment &amp; Sustainability Solutions</option>
            <option value="Technical Safety & Operational Engineering">Technical Safety &amp; LOTO Engineering</option>
            <option value="Workforce Training & Safety Culture">Workforce Training &amp; Safety Culture</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="facilitySector">
            Industry Sector <i>*</i>
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
            <option value="Other High-Hazard Sector">Other High-Hazard Sector</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">
          Scope / Specific Challenges
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Briefly describe your site, plant units, chemical inventory, or current audit priorities..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="form-footer-row">
        <div className="form-nda-assurance">
          <ShieldCheck size={16} className="text-orange" />
          <span>Strict Non-Disclosure Agreement (NDA) guaranteed for all discussions.</span>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="button button-orange"
        >
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              Submit Request <Send size={15} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
