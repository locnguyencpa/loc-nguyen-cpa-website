import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="font-serif text-2xl font-semibold">{site.name}</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Thoughtful tax preparation and advisory services for professionals,
            founders, and small business owners.
          </p>
          <p className="mt-3 text-xs text-white/45">
            California CPA License #142634
          </p>
        </div>
        <div>
          <div className="footer-title">Explore</div>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
        <div>
          <div className="footer-title">Start here</div>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <a href={site.intakeUrl} target="_blank" rel="noopener noreferrer">Request a quote</a>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of use</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Tax information on this site is general and is not tax advice.</span>
        </div>
      </div>
    </footer>
  );
}
