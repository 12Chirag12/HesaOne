import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-photo" />
      <div className="hero-wash" />
      <div className="hero-content">
        <p className="eyebrow">
          <span /> HEALTH <i>•</i> SAFETY <i>•</i> ENVIRONMENT
        </p>
        <h1 id="hero-title">
          Building safer<br />
          industries.<br />
          <em>
            Protecting every<br className="desktop-break" /> tomorrow.
          </em>
        </h1>
        <p className="hero-intro">
          Integrated Health, Safety &amp; Environment advisory and process risk engineering.
          Partnering with industry to safeguard lives, ensure asset resilience, and achieve compliance.
        </p>
        <div className="hero-actions">
          <Link className="button button-orange" href="/services">
            Explore Services <ArrowRight size={16} />
          </Link>
          <Link className="story-link" href="/about">
            <span className="play-icon">
              <Play size={12} fill="currentColor" />
            </span>
            Discover HESAONE
          </Link>
        </div>

        <div className="hero-badges-row">
          <span className="hero-mini-badge">
            <ShieldCheck size={14} className="text-orange" /> ISO 45001 &amp; ISO 14001
          </span>
          <span className="hero-mini-badge">
            <CheckCircle2 size={14} className="text-orange" /> HAZOP &amp; Process Safety
          </span>
          <span className="hero-mini-badge">
            <CheckCircle2 size={14} className="text-orange" /> Zero Harm Vision
          </span>
        </div>
      </div>

      <div className="hero-caption">
        <span>HSE ENGINEERING &amp; ADVISORY</span>
        <span className="caption-line" />
        <span>SAFER OPERATIONS. STRONGER FUTURES.</span>
      </div>

      <div className="hero-bottom">
        <div>
          <b>01</b>
          <span>Process Safety &amp; HAZOP</span>
        </div>
        <div>
          <b>02</b>
          <span>Safety Management Systems</span>
        </div>
        <div>
          <b>03</b>
          <span>Fire &amp; Environment</span>
        </div>
        <Link href="/contact" className="hero-bottom-cta">
          Initiate Facility Scope <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}
