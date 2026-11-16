import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Flame,
  Leaf,
  ClipboardCheck,
  GraduationCap,
  HardHat,
  Factory,
  Building2,
  FlaskConical,
  Truck,
  CheckCircle2,
  Zap,
  LucideIcon
} from "lucide-react";
import Hero from "@/components/Hero";
import InteractiveRiskAssessment from "@/components/InteractiveRiskAssessment";
import CTASection from "@/components/CTASection";
import { servicesData, industriesData, caseStudiesData } from "@/lib/siteData";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap,
  Factory,
  FlaskConical,
  Building2,
  Truck,
  Zap
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust & Key Stats Strip */}
      <section className="stats-strip">
        <div className="section-wrap stats-strip-grid">
          <div className="stat-card">
            <span className="stat-num">100+</span>
            <span className="stat-label">Industrial Audits &amp; HAZOP Studies</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">Zero</span>
            <span className="stat-label">Harm Philosophy &amp; Vision</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">100%</span>
            <span className="stat-label">Statutory &amp; Global Standards Alignment</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">24h</span>
            <span className="stat-label">Rapid Advisory &amp; Technical Response</span>
          </div>
        </div>
      </section>

      {/* Intro / About HESAONE Section */}
      <section className="intro section-wrap" id="about">
        <div className="intro-kicker">
          ABOUT HESAONE <span />
        </div>
        <div className="intro-grid">
          <h2>
            Safety is not just a requirement. <em>It is a responsibility.</em>
          </h2>
          <div className="intro-copy">
            <p>
              HESAONE LLP works with organizations to strengthen Health, Safety,
              and Environmental practices through practical engineering, technical rigor,
              and hands-on operational leadership.
            </p>
            <Link className="text-link" href="/about">
              Learn our philosophy &rarr;
            </Link>
          </div>
          <div className="intro-note">
            <span className="note-icon">
              <ShieldCheck size={26} />
            </span>
            <div>
              <b>People. Process. Planet.</b>
              <small>One integrated approach to responsible industry.</small>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="services" id="services">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark">
                WHAT WE DO <i>•</i> HSE DISCIPLINES
              </p>
              <h2>
                Expertise that makes<br />
                <em>industry safer and resilient.</em>
              </h2>
            </div>
            <div className="section-heading-right">
              <p className="section-description">
                Explore specialized HSE engineering services designed around the realities of industrial operations.
              </p>
              <Link href="/services" className="text-link-all">
                Browse all services &rarr;
              </Link>
            </div>
          </div>

          <div className="service-grid">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.iconName] || ShieldCheck;
              return (
                <article className="service-card" key={svc.no}>
                  <div className="service-top">
                    <span>{svc.no}</span>
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.shortDesc}</p>

                  <div className="service-standards-pill">
                    {svc.keyStandards[0].split("(")[0].trim()}
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="service-card-link"
                    aria-label={`View scope for ${svc.title}`}
                  >
                    <span>Explore details</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Tool Banner: Self-Assessment */}
      <section className="interactive-tool-section section-wrap">
        <InteractiveRiskAssessment />
      </section>

      {/* Industries Showcase Section */}
      <section className="industries" id="industries">
        <div className="industries-inner section-wrap">
          <div className="industries-left">
            <p className="eyebrow">WHERE WE WORK</p>
            <h2>
              Built around the<br />
              <em>industries we serve.</em>
            </h2>
            <p className="industries-copy">
              Every operation carries unique risk profiles. Our advisory begins by analyzing your specific site layout, chemical inventories, and operational tempo.
            </p>
            <div className="industries-cta-group">
              <Link className="button button-orange" href="/industries">
                Explore Industries <ArrowRight size={16} />
              </Link>
              <Link className="button button-light" href="/contact">
                Discuss Your Facility
              </Link>
            </div>
          </div>
          <div className="industry-list">
            {industriesData.map((ind) => {
              const Icon = iconMap[ind.iconName] || Factory;
              return (
                <Link
                  href={`/industries#${ind.slug}`}
                  key={ind.title}
                  className="industry-row-item"
                >
                  <span className="industry-num">{ind.no}</span>
                  <Icon size={22} className="industry-icon" />
                  <div className="industry-content">
                    <b>{ind.title}</b>
                    <small>{ind.tagline}</small>
                  </div>
                  <ArrowUpRight size={16} className="industry-arrow" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Showcase Section */}
      <section className="approach section-wrap" id="approach">
        <div className="approach-heading">
          <p className="eyebrow dark">THE HESAONE METHODOLOGY</p>
          <h2>
            Practical thinking.<br />
            <em>Measurable progress.</em>
          </h2>
          <p>
            We combine rigorous technical engineering with active collaboration alongside the people who operate your facilities.
          </p>
          <Link className="text-link" href="/approach">
            Explore our 4-stage framework &rarr;
          </Link>
        </div>

        <div className="approach-steps">
          {[
            {
              n: "01",
              title: "Understand",
              desc: "Deep review of P&IDs, facility layout, process chemistry, and operational priorities."
            },
            {
              n: "02",
              title: "Assess",
              desc: "Structured hazard studies (HAZOP / QRA), fire calculations, and compliance audits."
            },
            {
              n: "03",
              title: "Recommend",
              desc: "Prioritized, practical engineering safeguards and actionable reduction roadmaps."
            },
            {
              n: "04",
              title: "Strengthen",
              desc: "Implementation support, workforce training, and continuous safety governance."
            }
          ].map(({ n, title, desc }) => (
            <div className="step" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Spotlight */}
      <section className="case-spotlight section-wrap">
        <div className="case-spotlight-inner">
          <div className="case-spotlight-header">
            <span className="spotlight-kicker">PROVEN FIELD TRACK RECORD</span>
            <h3>{caseStudiesData[0].title}</h3>
            <span className="case-sector-badge">{caseStudiesData[0].clientSector}</span>
          </div>
          <div className="case-spotlight-grid">
            <div className="case-text-col">
              <h4>The Challenge</h4>
              <p>{caseStudiesData[0].challenge}</p>
              <h4>HESAONE Intervention</h4>
              <p>{caseStudiesData[0].solution}</p>
              <Link href="/case-studies" className="button button-dark-outline">
                All Case Studies <ArrowRight size={15} />
              </Link>
            </div>
            <div className="case-metrics-col">
              <h4>Quantified Impact</h4>
              <div className="metrics-box-grid">
                {caseStudiesData[0].metrics.map((m) => (
                  <div key={m.label} className="metric-box">
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
              <ul className="case-bullet-list">
                {caseStudiesData[0].results.map((res) => (
                  <li key={res}>
                    <CheckCircle2 size={15} className="text-orange" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive CTA Banner */}
      <CTASection
        title="Start a conversation with HESAONE's engineering team."
        subtitle="Tell us about your facility, challenges, or audit goals. We provide prompt, confidential technical feedback."
        primaryBtnText="Request a Consultation"
        primaryBtnLink="/contact"
      />
    </>
  );
}
