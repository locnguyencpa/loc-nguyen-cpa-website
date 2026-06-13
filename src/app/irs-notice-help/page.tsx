import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IRS Notice Response Help",
  description:
    "Get help reviewing, preparing, submitting, and following up on an IRS or state tax notice.",
};

const audiences = [
  {
    number: "01",
    title: "Individuals",
    text: "IRS or state notices involving balances, missing returns, adjustments, penalties, or confusing account activity.",
  },
  {
    number: "02",
    title: "Business owners",
    text: "Information-return, entity, deposit, filing, and administrative notices that need a clear response.",
  },
  {
    number: "03",
    title: "Startup founders",
    text: "Tax correspondence arriving during provider changes, fundraising, shutdowns, or fast-moving compliance work.",
  },
];

const stages = [
  {
    number: "01",
    title: "Review and explain the notice",
    text: "Identify what the agency is asking for, the response deadline, and the records needed.",
  },
  {
    number: "02",
    title: "Gather evidence and respond",
    text: "Gather the needed evidence, obtain authorization, submit the response on your behalf, and provide proof of fax, mailing, or upload.",
  },
  {
    number: "03",
    title: "Follow up with the IRS",
    text: "When authorized, follow up regarding the submitted response or reply to a response received from the IRS.",
  },
];

const faqs = [
  {
    question: "Will the response be prepared and submitted for me?",
    answer:
      "Yes. After the notice is reviewed, signed authorization is obtained before the response is prepared and submitted on your behalf.",
  },
  {
    question: "Can you contact the IRS for me?",
    answer:
      "Yes. After authorization is signed, IRS contact can be handled by phone, fax, or mail. This may be a status follow-up or a reply to an IRS response.",
  },
  {
    question: "Can you guarantee that a penalty will be removed?",
    answer:
      "No. Outcomes depend on the facts, supporting records, applicable rules, agency procedures, and the agency's decision.",
  },
  {
    question: "What if the response deadline is close?",
    answer:
      "Include the exact deadline in the initial request. Matters with fewer than seven calendar days may require urgent handling or a referral.",
  },
];

export default function IRSNoticeHelpPage() {
  return (
    <>
      <section className="hero overflow-hidden">
        <div className="shell grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="eyebrow">IRS and state notice response</div>
            <h1 className="mt-6 max-w-3xl font-serif text-6xl leading-[.98] tracking-[-.045em] text-navy sm:text-7xl">
              Got a tax notice? Get help responding.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate">
              Send the notice for review. The needed evidence, authorization,
              response, submission, and IRS contact can all be handled in one place.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.intakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Request a notice review <span>→</span>
              </a>
              <a href="#pricing" className="button button-secondary">
                See pricing
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-navy/70">
              <span className="check">CPA and former IRS revenue agent</span>
              <span className="check">Secure document exchange</span>
              <span className="check">Clear estimate before work begins</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy/10 bg-white p-5 shadow-[0_30px_80px_rgba(20,48,58,.14)]">
            <div className="rounded-[1.4rem] bg-navy p-8 text-white">
              <span className="text-xs font-bold uppercase tracking-[.2em] text-mint">
                Notice response
              </span>
              <div className="mt-14 font-serif text-4xl">Handled from review to follow-up.</div>
              <div className="mt-3 text-sm leading-6 text-white/60">
                Start with the notice. Additional records are requested only as needed.
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {["Review", "Respond", "Follow up"].map((word, index) => (
                  <div key={word} className="rounded-xl bg-white/[.07] p-4">
                    <div className="text-xs text-white/40">0{index + 1}</div>
                    <div className="mt-4 font-semibold">{word}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell">
          <div className="section-heading">
            <div className="eyebrow">Who this is for</div>
            <h2>For people who want the notice handled, not another project to manage.</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 lg:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.title} className="bg-white p-8 sm:p-10">
                <div className="font-mono text-xs font-bold text-teal">{audience.number}</div>
                <h3 className="mt-12 font-serif text-2xl text-navy">{audience.title}</h3>
                <p className="mt-4 leading-7 text-slate">{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="shell grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow text-mint before:bg-mint">How it works</div>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              A straightforward response process.
            </h2>
          </div>
          <div className="grid gap-8">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="grid grid-cols-[3rem_1fr] gap-5 border-b border-white/10 pb-8"
              >
                <span className="font-mono text-sm text-mint">{stage.number}</span>
                <div>
                  <h3 className="text-lg font-semibold">{stage.title}</h3>
                  <p className="mt-2 leading-7 text-white/60">{stage.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section bg-sage">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_.72fr] lg:items-center">
          <div>
            <div className="eyebrow">Pricing</div>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
              $250 per hour, with a clear estimate before work begins.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
              For a straightforward matter, each stage is expected to take about one hour:
            </p>
            <ol className="mt-7 grid gap-4">
              {stages.map((stage) => (
                <li key={stage.number} className="flex gap-4 text-navy">
                  <span className="grid size-8 flex-none place-items-center rounded-full bg-mint font-mono text-xs font-bold">
                    {stage.number}
                  </span>
                  <span className="pt-1 font-semibold">{stage.title}</span>
                </li>
              ))}
            </ol>
            <p className="mt-7 max-w-2xl leading-7 text-slate">
              A typical three-stage matter is estimated at about $750. Actual time
              depends on complexity, document volume, research, and IRS hold time.
              Approval is requested before materially exceeding the estimate.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-navy/10 bg-white p-9 shadow-[0_20px_60px_rgba(23,52,61,.08)]">
            <div className="text-sm font-bold uppercase tracking-[.16em] text-teal">
              Hourly rate
            </div>
            <div className="mt-4 font-serif text-6xl text-navy">$250</div>
            <div className="mt-2 text-slate">per hour</div>
            <a
              href={site.intakeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary mt-9 justify-center"
            >
              Request a notice review
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell max-w-4xl">
          <div className="section-heading text-center">
            <div className="eyebrow justify-center">Common questions</div>
            <h2>Clear expectations before work begins.</h2>
          </div>
          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq">
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <h2>Start with the notice.</h2>
          <p>
            Share the notice number, tax period, amount, and response deadline.
            Do not send sensitive tax documents through ordinary email.
          </p>
          <a
            href={site.intakeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button bg-white text-navy"
          >
            Request a notice review
          </a>
          <div className="mt-6">
            <Link href="/services" className="text-sm font-semibold text-white/75 underline">
              View all CPA services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
