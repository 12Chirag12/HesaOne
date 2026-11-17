import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  Scale,
  Lock,
  LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { servicesData } from "@/lib/siteData";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap
};

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found"
    };
  }

  return {
    title: `${service.title} | Technical HSE Services`,
    description: service.shortDesc
  };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || ShieldCheck;
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-limestone-warm min-h-screen">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-canopy text-white py-16 lg:py-20 border-b border-canopy-border relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canopy-subtle border border-safety/30 text-safety-light text-xs font-mono font-semibold tracking-wider">
                <span>SERVICE {service.no}</span>
                <span className="text-canopy-border">/</span>
                <span>INDUSTRIAL ENGINEERING</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-limestone-muted leading-relaxed max-w-3xl">
                {service.heroHeadline}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-safety text-white text-xs sm:text-sm font-semibold hover:bg-safety-hover transition-colors shadow-lg shadow-safety/15 group"
                >
                  <span>Request Scoped Proposal</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href="mailto:hesaonellp@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-canopy-subtle hover:bg-canopy-border border border-canopy-border text-limestone-light text-xs font-mono transition-colors"
                >
                  <span>Direct Technical Desk</span>
                </a>
              </div>
            </div>

            {/* Right Hero Badge Card */}
            <div className="lg:col-span-4">
              <div className="bg-canopy-subtle/80 border border-canopy-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="w-14 h-14 rounded-xl bg-void border border-safety/30 flex items-center justify-center text-safety">
                  <Icon size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-limestone-muted leading-relaxed">
                  {service.shortDesc}
                </p>
                <div className="pt-3 border-t border-canopy-border flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <ShieldCheck size={14} />
                  <span>Certified Statutory Methodology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Main Content Column (Col 1-8) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Executive Overview */}
            <div className="bg-white border border-limestone-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block">
                EXECUTIVE OVERVIEW
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                The Challenge &amp; Our Engineering Approach
              </h2>
              <p className="text-sm sm:text-base text-graphite-secondary leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Key Deliverables & Reports */}
            <div className="bg-white border border-limestone-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block mb-1">
                  SCOPE &amp; OUTPUTS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                  Key Deliverables &amp; Technical Reports
                </h2>
                <p className="text-xs sm:text-sm text-graphite-secondary mt-1">
                  When you engage HESAONE, your engineering leadership receives verified, rigorously documented outputs ready for management presentation and regulatory submission:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={item}
                    className="p-4 rounded-xl bg-limestone-tint border border-limestone-border flex items-start gap-3.5"
                  >
                    <span className="font-mono text-xs font-bold text-safety shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <strong className="text-xs text-graphite font-semibold leading-relaxed">
                      {item}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Methodology */}
            <div className="bg-white border border-limestone-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block mb-1">
                  STRUCTURED EXECUTION
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                  Our 4-Stage Methodology for {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-graphite-secondary mt-1">
                  We follow a repeatable, structured progression to ensure complete technical coverage with minimal disruption to your daily operations:
                </p>
              </div>

              <div className="space-y-4">
                {service.methodology.map((m, idx) => (
                  <div
                    key={m.step}
                    className="p-5 rounded-xl bg-limestone-tint border border-limestone-border flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <span className="font-mono text-xs font-bold text-safety px-2.5 py-1 rounded bg-white border border-limestone-border self-start shrink-0">
                      STAGE 0{idx + 1}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-graphite">{m.step}</h3>
                      <p className="text-xs text-graphite-secondary leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Benefits */}
            <div className="bg-white border border-limestone-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block mb-1">
                  RETURN ON SAFETY INVESTMENT
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                  Quantifiable Business &amp; Operational Value
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.businessBenefits.map((b) => (
                  <div
                    key={b}
                    className="p-4 rounded-xl bg-limestone-tint border border-limestone-border flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-safety shrink-0 mt-0.5" />
                    <p className="text-xs text-graphite font-medium leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards & Typical Use Cases */}
            <div className="bg-white border border-limestone-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block mb-1">
                  STATUTORY &amp; TECHNICAL BASIS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-graphite">
                  Governing Codes &amp; Typical Client Scenarios
                </h2>
              </div>

              <div className="space-y-3">
                <h4 className="font-mono text-xs font-bold text-graphite uppercase tracking-wider">
                  International &amp; National Codes Applied:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.keyStandards.map((std) => (
                    <span
                      key={std}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-limestone-tint border border-limestone-border text-xs font-mono text-graphite"
                    >
                      <Scale size={13} className="text-safety" />
                      <span>{std}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-limestone-border">
                <h4 className="font-mono text-xs font-bold text-graphite uppercase tracking-wider">
                  Typical Industrial Scenarios:
                </h4>
                <div className="space-y-2">
                  {service.sampleUseCases.map((uc) => (
                    <div
                      key={uc}
                      className="p-3 rounded-lg bg-limestone-tint border border-limestone-border text-xs text-graphite-secondary flex items-start gap-2"
                    >
                      <span className="text-safety font-bold">&rsaquo;</span>
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar (Col 9-12) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Quick Inquiry Card */}
              <div className="bg-canopy text-white border border-canopy-border rounded-2xl p-6 space-y-4 shadow-xl">
                <span className="font-mono text-[11px] font-bold text-safety-light uppercase tracking-wider block">
                  ENGAGE OUR TEAM
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Need assistance with {service.title}?
                </h3>
                <p className="text-xs text-limestone-muted leading-relaxed">
                  Speak directly with an accredited safety specialist. We review your P&amp;IDs and provide a transparent scope outline within 24 hours.
                </p>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-safety text-white text-xs font-semibold hover:bg-safety-hover transition-colors shadow-md"
                >
                  <span>Request Consultation</span>
                  <ArrowUpRight size={14} />
                </Link>
                <div className="pt-2 text-[11px] font-mono text-limestone-muted">
                  <span className="block text-limestone-muted/70">Direct Email Desk:</span>
                  <a href="mailto:hesaonellp@gmail.com" className="text-safety hover:underline">
                    hesaonellp@gmail.com
                  </a>
                </div>
              </div>

              {/* Other Disciplines List */}
              <div className="bg-white border border-limestone-border rounded-2xl p-6 space-y-4 shadow-sm">
                <h4 className="font-mono text-xs font-bold text-graphite uppercase tracking-wider border-b border-limestone-border pb-3">
                  Other HSE Disciplines
                </h4>
                <div className="space-y-2">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/services/${other.slug}`}
                      className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-limestone-tint transition-colors text-xs text-graphite"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] font-bold text-safety">
                          {other.no}
                        </span>
                        <span className="font-medium group-hover:text-safety transition-colors">
                          {other.title}
                        </span>
                      </div>
                      <ArrowRight size={12} className="text-graphite-muted group-hover:text-safety group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bilateral NDA Card */}
              <div className="bg-white border border-limestone-border rounded-2xl p-5 space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Lock size={16} />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    100% NDA Protected
                  </span>
                </div>
                <p className="text-xs text-graphite-secondary leading-relaxed">
                  All facility drawings, process chemistries, and operational data remain strictly confidential under mutual non-disclosure agreements.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to deploy ${service.title} at your site?`}
        subtitle="Contact HESAONE today for a preliminary discovery discussion or tender quote."
        primaryBtnText="Initiate Facility Scope"
        primaryBtnLink={`/contact?service=${encodeURIComponent(service.title)}`}
      />
    </div>
  );
}
