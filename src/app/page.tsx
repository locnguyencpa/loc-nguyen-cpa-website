import Link from "next/link";
import { faqs, services, site, testimonials } from "@/lib/site";

const people = [
  ["01", "Professionals with Equity", "RSUs, ISOs, NSOs, ESPPs, and concentrated stock positions."],
  ["02", "Startup Founders", "Early-stage decisions, business returns, and owner tax coordination."],
  ["03", "Small Business Owners", "Practical compliance and planning without unnecessary complexity."],
];

export default function Home() {
  return (
    <>
      <section className="hero overflow-hidden">
        <div className="shell grid min-h-[720px] items-center gap-16 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative z-10">
            <div className="eyebrow">Clarity for complex tax situations</div>
            <h1 className="mt-6 max-w-3xl font-serif text-6xl leading-[.98] tracking-[-.045em] text-navy sm:text-7xl">
              Never Worry About Taxes Again
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate">
              Thoughtful tax preparation and proactive guidance for equity-compensated
              professionals, startup founders, and small business owners, with
              communication that keeps you informed.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={site.intakeUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">Request a quote <span>→</span></a>
              <Link href="/services" className="button button-secondary">Explore services</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-navy/70">
              <span className="check">CPA-led service</span>
              <span className="check">One-business-day response goal</span>
              <span className="check">Secure document exchange</span>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-lg lg:block">
            <div className="absolute -inset-8 rounded-full bg-teal/8 blur-2xl" />
            <div className="relative rounded-[2rem] border border-navy/10 bg-white p-5 shadow-[0_30px_80px_rgba(20,48,58,.14)]">
              <div className="rounded-[1.4rem] bg-navy p-8 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[.2em] text-mint">Tax snapshot</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Prepared with care</span>
                </div>
                <div className="mt-14 font-serif text-4xl">Complexity, organized.</div>
                <div className="mt-3 text-sm leading-6 text-white/60">
                  A clear process from first questions to final filing.
                </div>
                <div className="mt-10 grid grid-cols-3 gap-3">
                  {["Plan", "Prepare", "File"].map((word, i) => (
                    <div key={word} className="rounded-xl bg-white/[.07] p-4">
                      <div className="text-xs text-white/40">0{i + 1}</div>
                      <div className="mt-4 font-semibold">{word}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-4 pb-2 pt-5">
                <div className="rounded-xl bg-sage p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal">Experience</div>
                  <div className="mt-2 font-serif text-2xl text-navy">CPA Practice + IRS</div>
                </div>
                <div className="rounded-xl border border-navy/10 p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate">Focus</div>
                  <div className="mt-2 font-serif text-2xl text-navy">People & Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell">
          <div className="section-heading">
            <div className="eyebrow">Who I help</div>
            <h2>Tax support built around real financial lives.</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 lg:grid-cols-3">
            {people.map(([number, title, text]) => (
              <div key={title} className="bg-white p-8 sm:p-10">
                <div className="font-mono text-xs font-bold text-teal">{number}</div>
                <h3 className="mt-12 font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-4 leading-7 text-slate">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sage">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="section-heading">
              <div className="eyebrow">Services</div>
              <h2>Expertise where the details matter.</h2>
            </div>
            <Link href="/services" className="text-link">View all services →</Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="service-card">
                <span className="pill">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {"href" in service && service.href && (
                  <Link href={service.href} className="text-link mt-5 inline-flex">
                    See notice response service →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="shell grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow text-mint before:bg-mint">A straightforward process</div>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Know what happens next, every step of the way.
            </h2>
          </div>
          <div className="grid gap-8">
            {[
              ["01", "Tell me about your needs", "Complete a short, confidential intake so I can understand the scope."],
              ["02", "Review your quote", "Receive clear pricing and an engagement letter before work begins."],
              ["03", "Upload securely", "Share tax documents through a secure client portal, never ordinary email."],
              ["04", "Review and file", "Walk through the completed work, ask questions, and approve electronic filing."],
            ].map(([number, title, text]) => (
              <div key={number} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-white/10 pb-8">
                <span className="font-mono text-sm text-mint">{number}</span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-white/60">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-5">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-[1.5rem] bg-sand p-7 sm:p-9">
                <div className="font-serif text-5xl leading-none text-teal">“</div>
                <blockquote className="mt-1 font-serif text-xl leading-relaxed text-navy">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm font-bold text-navy">
                  {testimonial.name}
                  <span className="font-normal text-slate"> · {testimonial.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div>
            <div className="eyebrow">Why work with me</div>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-navy sm:text-5xl">
              You should not have to chase your CPA.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate">
              I bring experience from public accounting, tax management, and
              tax auditing at the IRS. I pair that technical background with
              plain-English answers and a goal of responding within one business day.
            </p>
            <div className="mt-8 grid gap-4">
              {["Direct access to your CPA", "More than $200,000 in penalties abated across matters", "Clear updates without the communication vacuum"].map((item) => (
                <div key={item} className="check font-semibold text-navy">{item}</div>
              ))}
            </div>
            <Link href="/about" className="button button-secondary mt-9">More about Loc</Link>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell max-w-4xl">
          <div className="section-heading text-center">
            <div className="eyebrow justify-center">Common questions</div>
            <h2>Good tax work starts with clear expectations.</h2>
          </div>
          <div className="mt-12 grid gap-4">
            {faqs.slice(0, 3).map((faq) => (
              <details key={faq.question} className="faq">
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center"><Link href="/faq" className="text-link">See all frequently asked questions →</Link></div>
        </div>
      </section>

      <section className="bg-teal py-20 text-white">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-mint">Ready for a clearer next step?</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Let’s talk about your taxes.</h2>
          </div>
          <a href={site.intakeUrl} target="_blank" rel="noopener noreferrer" className="button bg-white text-navy hover:bg-mint">Request a quote <span>→</span></a>
        </div>
      </section>
    </>
  );
}
