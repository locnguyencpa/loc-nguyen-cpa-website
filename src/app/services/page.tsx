import { PageHero } from "@/components/page-hero";
import { services, site } from "@/lib/site";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Tax expertise for the moments that need it." description="Preparation, planning, and resolution support grounded in careful analysis and clear communication." />
      <section className="section bg-white">
        <div className="shell grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="card p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="pill">{service.tag}</span>
                <span className="font-mono text-xs text-teal">0{index + 1}</span>
              </div>
              <h2 className="mt-10 font-serif text-3xl text-navy">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate">{service.description}</p>
              {"href" in service && service.href && (
                <Link href={service.href} className="text-link mt-6 inline-flex">
                  Learn how notice response works →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="cta"><div className="shell"><h2>Not sure which service fits?</h2><p>Share a few details and I’ll help identify the right starting point.</p><a href={site.intakeUrl} target="_blank" rel="noopener noreferrer" className="button bg-white text-navy">Request a quote</a></div></section>
    </>
  );
}
