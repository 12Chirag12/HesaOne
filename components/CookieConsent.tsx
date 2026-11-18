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
      <div className="bg-slate-900/95 backdrop-blur-md text-white border border-slate-800 rounded-xl p-4 sm:p-5 shadow-2xl space-y-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0">
              <Cookie size={18} />
            </div>
            <div>
              <strong className="block text-xs font-semibold text-white">
                Privacy &amp; Essential Cookies
              </strong>
              <span className="block text-[10px] text-slate-400 font-mono">
                Statutory Data Protection
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={decline}
            aria-label="Dismiss banner"
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          We use essential cookies to maintain secure sessions, optimize site performance,
          and evaluate corporate visitor interest. We do not sell personal data.
        </p>

        <div className="flex items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={acceptAll}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors"
          >
            <Check size={13} />
            <span>Accept Essential</span>
          </button>
          <button
            type="button"
            onClick={decline}
            className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-medium transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
