import Link from "next/link";
import { ExpensePricingCalculator } from "@/components/expense-pricing-calculator";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export default function BookkeepingPricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Bookkeeping pricing"
        title="Choose a schedule and estimate your fee."
        description="Select monthly, quarterly, or annual bookkeeping, then use your estimated annual expenses to find the matching pricing tier."
      />
      <section className="section bg-white">
        <div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <div className="eyebrow">Flexible frequency</div>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-navy">
              Bookkeeping that matches your reporting needs.
            </h2>
            <p className="mt-6 leading-8 text-slate">
              Choose how often the books should be updated. The calculator uses
              annual expenses and automatically converts them to the applicable
              monthly or quarterly pricing tier.
            </p>
            <ul className="mt-8 grid gap-4">
              {[
                "Monthly bookkeeping for ongoing visibility",
                "Quarterly bookkeeping for periodic reporting",
                "Annual bookkeeping for year-end readiness",
                "Pricing confirmed before work begins",
              ].map((item) => (
                <li key={item} className="check font-semibold text-navy">
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="text-link mt-7 inline-block">
              ← Back to all pricing
            </Link>
          </div>
          <ExpensePricingCalculator kind="bookkeeping" />
        </div>
      </section>
      <section className="cta">
        <div className="shell">
          <h2>Need bookkeeping support?</h2>
          <p>Complete the intake form for a confirmed scope and quote.</p>
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
