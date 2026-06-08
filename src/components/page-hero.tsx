export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="shell relative z-10 max-w-4xl text-center">
        <div className="eyebrow justify-center">{eyebrow}</div>
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-navy sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate">
          {description}
        </p>
      </div>
    </section>
  );
}
