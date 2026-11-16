import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { servicesData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Services & Solutions | Process Safety, EHS Audits & Engineering",
  description:
    "Explore HESAONE LLP's comprehensive industrial HSE services: HAZOP studies, ISO 45001 audits, fire engineering, environmental assessments, and safety training."
};

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Breadcrumb items={[{ label: "Services & Solutions" }]} />

      {/* Hero Header */}
      <section className="page-hero section-wrap">
        <div className="page-hero-header">
          <p className="eyebrow dark">
            OUR CAPABILITIES <i>•</i> 6 CORE HSE DISCIPLINES
          </p>
          <h1>
            Engineering expertise for<br />
            <em>high-consequence industrial safety.</em>
          </h1>
          <p className="page-hero-desc">
            We provide deep-domain advisory across the full lifecycle of industrial
            operations—from early process design and statutory risk quantification to
            frontline workforce safety leadership.
          </p>
        </div>
      </section>

      {/* Services Grid with Detailed Deliverables */}
      <section className="services-catalog-section section-wrap">
        <div className="catalog-grid">
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.iconName] || ShieldCheck;
            return (
              <div key={svc.slug} className="catalog-card" id={svc.slug}>
                <div className="catalog-card-header">
                  <div className="catalog-no-badge">{svc.no}</div>
                  <div className="catalog-icon-wrap">
                    <Icon size={28} />
                  </div>
                </div>

                <div className="catalog-card-body">
                  <h3>{svc.title}</h3>
                  <p className="catalog-tagline">{svc.shortDesc}</p>

                  <div className="catalog-deliverables">
                    <h4>Key Scope &amp; Deliverables:</h4>
                    <ul>
                      {svc.deliverables.slice(0, 4).map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={15} className="text-orange" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="catalog-standards">
                    <span className="standards-label">Relevant Standards:</span>
                    <div className="standards-tags">
                      {svc.keyStandards.slice(0, 2).map((std) => (
                        <span key={std} className="std-pill">
                          {std.split("(")[0].trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="catalog-card-footer">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="button button-orange w-full"
                  >
                    View Complete Methodology &amp; Details <ArrowRight size={16} />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(svc.title)}`}
                    className="catalog-quick-enquire"
                  >
                    Enquire for this service <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Selection Decision Matrix */}
      <section className="service-matrix-section">
        <div className="section-wrap">
          <div className="section-center-heading">
            <p className="eyebrow dark">DECISION MATRIX</p>
            <h2>
              Which Service Fits Your <em>Current Site Challenge?</em>
            </h2>
            <p>
              Match your plant&apos;s immediate operational milestone with our specialized
              service intervention.
            </p>
          </div>

          <div className="matrix-table-wrap">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Operational Scenario / Trigger</th>
                  <th>Core Challenge</th>
                  <th>Recommended HESAONE Service</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Greenfield / Plant Modification</strong>
                  </td>
                  <td>New chemicals, high pressures, altered flowsheets</td>
                  <td>
                    <span className="matrix-service-badge">
                      Process Safety &amp; HAZOP Studies
                    </span>
                  </td>
                  <td>
                    <Link href="/services/process-safety-risk-studies">Details &rarr;</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Statutory / Customer EHS Audit</strong>
                  </td>
                  <td>ISO 45001 readiness, legal non-conformances</td>
                  <td>
                    <span className="matrix-service-badge">
                      Safety Management Systems
                    </span>
                  </td>
                  <td>
                    <Link href="/services/safety-management-systems">Details &rarr;</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Warehouse / High-Bay Storage</strong>
                  </td>
                  <td>Sprinkler density, fire load, life safety egress</td>
                  <td>
                    <span className="matrix-service-badge">
                      Fire &amp; Emergency Safety
                    </span>
                  </td>
                  <td>
                    <Link href="/services/fire-emergency-safety">Details &rarr;</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Effluent / PCB Compliance</strong>
                  </td>
                  <td>ETP efficiency, consent to operate, waste rules</td>
                  <td>
                    <span className="matrix-service-badge">
                      Environment &amp; Sustainability
                    </span>
                  </td>
                  <td>
                    <Link href="/services/environment-sustainability">Details &rarr;</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Machinery &amp; Electrical Hazards</strong>
                  </td>
                  <td>Unguarded equipment, LOTO energy isolation, ATEX</td>
                  <td>
                    <span className="matrix-service-badge">
                      Technical Safety Services
                    </span>
                  </td>
                  <td>
                    <Link href="/services/technical-safety-services">Details &rarr;</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Frontline Complacency / Near-Misses</strong>
                  </td>
                  <td>Low hazard reporting, unsafe worker acts</td>
                  <td>
                    <span className="matrix-service-badge">
                      Workforce Training &amp; BBS
                    </span>
                  </td>
                  <td>
                    <Link href="/services/training-awareness">Details &rarr;</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Customized multi-disciplinary safety packages available."
        subtitle="Many enterprise facilities benefit from an integrated assessment combining Process Safety, Fire Systems, and ISO 45001 readiness. Let us design a phased roadmap."
        primaryBtnText="Request a Comprehensive Proposal"
        primaryBtnLink="/contact"
      />
    </div>
  );
}
