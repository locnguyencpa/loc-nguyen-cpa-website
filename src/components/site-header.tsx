import Image from "next/image";
import Link from "next/link";
import { PersonalTaxQuoteButton } from "@/components/personal-tax-quote-button";

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
        <Link href="/" className="brand-link flex items-center gap-3" aria-label="Loc Nguyen CPA home">
          <span className="brand-mark relative size-12 flex-none overflow-hidden rounded-full">
            <Image
              src="/loc-nguyen-portrait-transparent.png"
              alt=""
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="brand-copy">
            <span className="brand-name block font-serif text-lg font-semibold leading-none text-navy">
              Loc Nguyen
            </span>
            <span className="brand-subtitle mt-1 block text-[10px] font-bold uppercase tracking-[0.24em] text-teal">
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
          <PersonalTaxQuoteButton className="button button-primary px-4 py-3 text-sm sm:px-5">
            <span className="sm:hidden">Tax Quote</span>
            <span className="hidden sm:inline">Personal Tax Quote</span>
          </PersonalTaxQuoteButton>
        </div>
      </div>
    </header>
  );
}
