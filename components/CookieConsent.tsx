"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Check } from "lucide-react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hesaone_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("hesaone_cookie_consent", "accepted");
    setShowConsent(false);
  };

  const decline = () => {
    localStorage.setItem("hesaone_cookie_consent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <div className="cookie-banner-inner">
        <div className="cookie-icon">
          <Cookie size={22} className="cookie-icon-svg" />
        </div>
        <div className="cookie-copy">
          <strong>Privacy &amp; Site Cookies</strong>
          <p>
            We use essential cookies to maintain secure sessions, optimize site performance,
            and understand corporate visitor interest. We do not sell personal data.
          </p>
        </div>
        <div className="cookie-actions">
          <button type="button" className="button button-primary cookie-btn" onClick={acceptAll}>
            <Check size={14} /> Accept Essential
          </button>
          <button type="button" className="button button-outline cookie-btn" onClick={decline}>
            Decline
          </button>
          <button
            type="button"
            className="cookie-close"
            onClick={decline}
            aria-label="Dismiss banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
