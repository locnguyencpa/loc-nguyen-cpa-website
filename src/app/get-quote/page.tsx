import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="A few questions, then a clear next step."
        description="Use the secure intake questionnaire to describe your tax situation and receive a tailored quote."
      />
      <section className="section bg-white">
        <div className="shell max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-navy">
            Start the intake questionnaire
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate">
            The questionnaire opens in Tally and helps identify the services,
            complexity, and information needed for an accurate quote.
          </p>
          <a
            href={site.intakeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary mt-8"
          >
            Open secure questionnaire <span>→</span>
          </a>
          <p className="mt-5 text-xs leading-5 text-slate">
            Do not upload tax documents or include Social Security numbers in
            the initial questionnaire. Secure document access is provided after
            an engagement is accepted.
          </p>
        </div>
      </section>
    </>
  );
}
