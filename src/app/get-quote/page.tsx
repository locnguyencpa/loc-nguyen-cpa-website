import { PageHero } from "@/components/page-hero";
import { PersonalTaxQuoteButton } from "@/components/personal-tax-quote-button";

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Personal tax quote"
        title="A few questions, then a clear next step."
        description="Use the secure intake questionnaire to describe your personal income tax situation and receive a tailored quote."
      />
      <section className="section bg-white">
        <div className="shell max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-navy">
            Start the intake questionnaire
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate">
            The questionnaire opens in Tally and helps identify the personal
            income tax services, complexity, and information needed for an
            accurate quote.
          </p>
          <PersonalTaxQuoteButton className="button button-primary mt-8">
            Open Personal Tax Questionnaire <span>→</span>
          </PersonalTaxQuoteButton>
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
