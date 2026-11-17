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
    <nav className="bg-canopy-subtle/50 border-b border-canopy-border/60 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-limestone-muted">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-limestone-muted hover:text-white transition-colors"
            >
              <Home size={13} className="text-safety" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.label} className="inline-flex items-center gap-1.5">
                <ChevronRight size={12} className="text-canopy-border" />
                {isLast || !item.href ? (
                  <span className="font-medium text-white" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors text-limestone-muted"
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
