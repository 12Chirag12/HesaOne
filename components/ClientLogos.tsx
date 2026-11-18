import { clientRoster } from "@/lib/siteData";

export default function ClientLogos() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
              PROVEN INDUSTRIAL FOOTPRINT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Trusted by Leading Industrial Enterprises Across India
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 self-start sm:self-auto">
            Automotive &bull; Chemical &bull; Pharma &bull; Polymers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {clientRoster.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3"
            >
              <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block border-b border-slate-100 pb-2">
                {group.category}
              </span>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                {group.clients.map((client) => (
                  <li key={client} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
