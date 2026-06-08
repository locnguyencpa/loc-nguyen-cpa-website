import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur-xl">
      <div className="shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Loc Nguyen CPA home">
          <span className="grid size-10 place-items-center rounded-full bg-navy text-sm font-bold tracking-wide text-white">
            LN
          </span>
          <span>
            <span className="block font-serif text-lg font-semibold leading-none text-navy">
              Loc Nguyen
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.24em] text-teal">
              Certified Public Accountant
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <details className="mobile-nav lg:hidden">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              {nav.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </nav>
          </details>
          <a
            href={site.intakeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary px-4 py-3 text-sm sm:px-5"
          >
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}
