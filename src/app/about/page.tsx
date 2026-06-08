import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Loc" title="Technical depth. Practical advice. Personal service." description="A tax professional who understands both the rules and the real decisions behind the return." />
      <section className="section bg-white">
        <div className="shell grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <aside className="rounded-[2rem] bg-navy p-8 text-white sm:p-10">
            <div className="grid size-24 place-items-center rounded-full bg-mint font-serif text-3xl text-navy">LN</div>
            <h2 className="mt-8 font-serif text-3xl">Loc Nguyen, CPA</h2>
            <p className="mt-3 text-white/60">Tax Manager · Former IRS Revenue Agent · Advisor</p>
            <div className="mt-8 border-t border-white/10 pt-7 text-sm leading-7 text-white/65">
              California CPA License #142634. Special focus on individual taxation,
              equity compensation, C corporations, startup R&D credits, and select
              penalty matters.
            </div>
          </aside>
          <div className="prose-copy">
            <div className="eyebrow">My approach</div>
            <h2>Tax advice should leave you more confident, not more confused.</h2>
            <p>I’m a CPA and Tax Manager with experience preparing and advising on individual and corporate tax matters. From August 2024 through February 2025, I served as an Internal Revenue Agent with the IRS, examining individual and business tax issues.</p>
            <p>That combination gives me a useful perspective: I understand how returns are prepared, how tax positions are documented, and how an issue may be viewed by a taxing authority.</p>
            <p>My experience includes more than 460 returns and 70 tax-planning sessions in a single year, plus tax planning for engineers, founders, and business owners with RSUs, ISOs, NSOs, cryptocurrency, and complex investment income.</p>
            <p>I have helped clients abate more than $140,000 in penalties across matters involving late-filed partnership returns, Forms 5471 and 5472, and state filings. Past outcomes do not guarantee future results, but they reflect the level of care I bring to a case.</p>
            <p>My practice is designed to be responsive, secure, and straightforward. I aim to acknowledge messages within one business day, and you’ll know what I need, what the work costs, and where things stand.</p>
            <a href={site.intakeUrl} target="_blank" rel="noopener noreferrer" className="button button-primary mt-5">Work with me</a>
          </div>
        </div>
      </section>
    </>
  );
}
