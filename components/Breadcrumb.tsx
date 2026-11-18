import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-slate-50/80 border-b border-slate-200 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Home size={13} className="text-sky-600" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.label} className="inline-flex items-center gap-1.5">
                <ChevronRight size={12} className="text-slate-400" />
                {isLast || !item.href ? (
                  <span className="font-semibold text-slate-900" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-slate-900 transition-colors text-slate-600"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
