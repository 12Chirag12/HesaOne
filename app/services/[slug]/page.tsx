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
  Lock,
  Scale,
  LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { servicesData, companyInfo } from "@/lib/siteData";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Flame,
  Leaf,
  HardHat,
  GraduationCap
};

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug
  }));
}

export async function generateMetadata({
  params
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found"
    };
  }

  return {
    title: `${service.title} | Technical Scope & Capabilities`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | HESAONE LLP`,
      description: service.shortDesc,
      url: `https://www.hesaonellp.com/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || ShieldCheck;
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-white text-slate-900 py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden blueprint-grid-light">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold tracking-wider">
                <span>SERVICE {service.no}</span>
                <span className="text-slate-300">/</span>
                <span>INDUSTRIAL SAFETY ENGINEERING</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                {service.heroHeadline}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 text-white text-xs sm:text-sm font-semibold hover:bg-sky-700 transition-colors shadow-sm group"
                >
                  <span>Request Scoped Proposal</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-mono transition-colors"
                >
                  <span>Direct Technical Desk</span>
                </a>
              </div>
            </div>

            {/* Right Hero Badge Card */}
            <div className="lg:col-span-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>
                <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
                  <ShieldCheck size={15} />
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
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block">
                EXECUTIVE OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                The Operational Challenge &amp; Engineering Approach
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Key Deliverables & Reports */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  SCOPE &amp; OUTPUTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Key Deliverables &amp; Technical Reports
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  When you engage HESAONE, your engineering leadership receives verified, rigorously documented outputs ready for management presentation and regulatory submission:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={item}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5"
                  >
                    <span className="font-mono text-xs font-bold text-sky-600 shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <strong className="text-xs text-slate-900 font-semibold leading-relaxed">
                      {item}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Methodology */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  STRUCTURED EXECUTION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Our 4-Stage Methodology for {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  We follow a repeatable, structured progression to ensure complete technical coverage with minimal disruption to your daily operations:
                </p>
              </div>

              <div className="space-y-4">
                {service.methodology.map((m, idx) => (
                  <div
                    key={m.step}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-1 rounded bg-white border border-slate-200 self-start shrink-0">
                      STAGE 0{idx + 1}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-900">{m.step}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Benefits */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  RETURN ON SAFETY INVESTMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Quantifiable Business &amp; Operational Value
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.businessBenefits.map((b) => (
                  <div
                    key={b}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-sky-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-800 font-medium leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards & Typical Use Cases */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  STATUTORY &amp; TECHNICAL BASIS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Governing Codes &amp; Typical Client Scenarios
                </h2>
              </div>

              <div className="space-y-3">
                <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                  International &amp; National Codes Applied:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.keyStandards.map((std) => (
                    <span
                      key={std}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800"
                    >
                      <Scale size={13} className="text-sky-600" />
                      <span>{std}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-200">
                <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Typical Industrial Scenarios:
                </h4>
                <div className="space-y-2">
                  {service.sampleUseCases.map((uc) => (
                    <div
                      key={uc}
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2"
                    >
                      <span className="text-sky-600 font-bold">&rsaquo;</span>
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
              <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
                <span className="font-mono text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                  ENGAGE OUR TEAM
                </span>
                <h3 className="text-xl font-bold text-white">
                  Need assistance with {service.title}?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Speak directly with a certified safety practitioner. We review your P&amp;IDs and outline a scope proposal within 24 hours.
                </p>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700 transition-colors shadow-sm"
                >
                  <span>Request Consultation</span>
                  <ArrowUpRight size={14} />
                </Link>
                <div className="pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800">
                  <span className="block text-slate-400">Direct Email Desk:</span>
                  <a href={`mailto:${companyInfo.email}`} className="text-sky-400 hover:underline">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Other Disciplines List */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
                <h4 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
                  Other HSE Disciplines
                </h4>
                <div className="space-y-2">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/services/${other.slug}`}
                      className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors text-xs text-slate-800"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] font-bold text-sky-600">
                          {other.no}
                        </span>
                        <span className="font-medium group-hover:text-sky-600 transition-colors">
                          {other.title}
                        </span>
                      </div>
                      <ArrowRight size={12} className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bilateral NDA Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Lock size={16} />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    100% NDA Protected
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
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
