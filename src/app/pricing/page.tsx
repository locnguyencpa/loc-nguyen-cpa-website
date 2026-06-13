import { PageHero } from "@/components/page-hero";
import { pricing, site } from "@/lib/site";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Transparent starting points" title="Clear fees before the work begins." description="Every tax situation is different. These starting prices help set expectations; your written quote confirms the final scope and fee." />
      <section className="section bg-white">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricing.map((tier) => (
            <article key={tier.name} className={`pricing-card ${tier.featured ? "featured" : ""}`}>
              {tier.featured && <div className="featured-label">Most popular</div>}
              <h2>{tier.name}</h2>
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate">{tier.description}</p>
              <div className="mt-8">
                <span className="text-sm text-slate">
                  {tier.name === "Specialty Advisory" ? "Hourly rate" : "Starting at"}
                </span>
                <div className="font-serif text-5xl text-navy">{tier.price}</div>
              </div>
              <ul className="mt-8 grid gap-4">
                {tier.features.map((feature) => <li key={feature} className="check text-sm text-navy">{feature}</li>)}
              </ul>
              {tier.name === "Specialty Advisory" ? (
                <Link href="/irs-notice-help" className="button button-secondary mt-9 justify-center">
                  See IRS notice help
                </Link>
              ) : (
                <a href={site.intakeUrl} target="_blank" rel="noopener noreferrer" className={`button mt-9 justify-center ${tier.featured ? "button-primary" : "button-secondary"}`}>Get a custom quote</a>
              )}
            </article>
          ))}
        </div>
        <div className="shell mt-10 rounded-2xl bg-sage p-7 text-sm leading-7 text-slate">
          <strong className="text-navy">Pricing note:</strong> These are draft starting
          prices and can be adjusted before launch. Additional states, rental properties,
          K-1s, foreign reporting, amended returns, bookkeeping cleanup, and expedited
          work are quoted separately. IRS notice response is billed at $250 per
          hour with an estimate before work begins. R&D credit and other specialty
          work is billed hourly or by fixed scope, never as a percentage of the tax benefit.
        </div>
      </section>
    </>
  );
}
