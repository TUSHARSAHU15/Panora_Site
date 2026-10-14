import { PageHero } from "./PageHero";

export type LegalSection = { id: string; title: string; body: string[] };

export function LegalPage({
  title,
  subtitle,
  crumbLabel,
  updated,
  sections,
}: {
  title: string;
  subtitle: string;
  crumbLabel: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={subtitle} crumbs={[{ label: crumbLabel }]} />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[240px_1fr]">
        <nav aria-label="Sections" className="hidden lg:block">
          <div className="sticky top-28 space-y-1">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">On this page</p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-brand"
              >
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
          {sections.map((s) => (
            <article key={s.id} id={s.id} className="mt-10 scroll-mt-28">
              <h2 className="text-2xl font-extrabold">{s.title}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
