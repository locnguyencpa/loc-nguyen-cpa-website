import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start with a conversation." description="Have a general question or need help deciding what to do next? Send a note below." />
      <section className="section bg-white"><div className="shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div><h2 className="font-serif text-3xl text-navy">Get in touch</h2><p className="mt-5 leading-7 text-slate">I aim to acknowledge messages within one business day. Sending a message does not create a CPA-client relationship.</p><div className="mt-8 rounded-2xl bg-sage p-6"><div className="text-xs font-bold uppercase tracking-wider text-teal">Email</div><a className="mt-2 block font-semibold text-navy" href={`mailto:${site.email}`}>{site.email}</a></div></div>
        <ContactForm />
      </div></section>
    </>
  );
}
