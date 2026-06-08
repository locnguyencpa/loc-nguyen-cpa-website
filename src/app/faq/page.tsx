import { PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/site";

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Answers before we get started." description="A few of the practical details clients usually want to know." />
      <section className="section bg-white"><div className="shell max-w-4xl grid gap-4">
        {faqs.map((faq) => <details key={faq.question} className="faq"><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
      </div></section>
    </>
  );
}
