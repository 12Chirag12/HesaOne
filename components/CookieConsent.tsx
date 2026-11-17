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
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in slide-in-from-bottom duration-300"
      role="dialog"
      aria-live="polite"
    >
      <div className="bg-canopy/95 backdrop-blur-md border border-canopy-border rounded-xl p-4 sm:p-5 shadow-2xl space-y-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-canopy-subtle border border-safety/30 flex items-center justify-center text-safety shrink-0">
              <Cookie size={18} />
            </div>
            <div>
              <strong className="block text-xs font-semibold text-white">
                Privacy &amp; Essential Cookies
              </strong>
              <span className="block text-[10px] text-limestone-muted">
                Statutory Data Protection
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={decline}
            aria-label="Dismiss banner"
            className="text-limestone-muted hover:text-white p-1 rounded-md transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        <p className="text-xs text-limestone-muted leading-relaxed">
          We use essential cookies to maintain secure sessions, optimize site performance,
          and evaluate corporate visitor interest. We do not sell personal data.
        </p>

        <div className="flex items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={acceptAll}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-safety text-white text-xs font-semibold hover:bg-safety-hover transition-colors"
          >
            <Check size={13} />
            <span>Accept Essential</span>
          </button>
          <button
            type="button"
            onClick={decline}
            className="px-3 py-2 rounded-lg bg-canopy-subtle hover:bg-canopy-border border border-canopy-border text-limestone-light text-xs font-medium transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
