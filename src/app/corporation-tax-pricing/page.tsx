import Link from "next/link";
import { ExpensePricingCalculator } from "@/components/expense-pricing-calculator";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export default function CorporationTaxPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporation tax pricing"
        title="Estimate your C corporation return fee."
        description="Move the slider to your estimated annual business expenses to see the applicable first-year and ongoing pricing tier."
      />
      <section className="section bg-white">
        <div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <div className="eyebrow">What is included</div>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-navy">
              Core corporation filing support.
            </h2>
            <ul className="mt-8 grid gap-4">
              {[
                "Federal Form 1120 corporate tax return",
                "One state corporate tax return",
                "Delaware franchise tax filing support",
                "Electronic filing where available",
              ].map((item) => (
                <li key={item} className="check font-semibold text-navy">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-7 text-slate">
              Additional states, foreign reporting, amended returns, bookkeeping
              cleanup, and unusually complex transactions are quoted separately.
            </p>
            <Link href="/pricing" className="text-link mt-7 inline-block">
              ← Back to all pricing
            </Link>
          </div>
          <ExpensePricingCalculator kind="corporation" />
        </div>
      </section>
      <section className="cta">
        <div className="shell">
          <h2>Ready for a written quote?</h2>
          <p>Tell me about the company and receive a confirmed scope before work begins.</p>
          <a
            href={site.intakeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button bg-white text-navy hover:bg-mint"
          >
            Request a quote
          </a>
        </div>
      </section>
    </>
  );
}
