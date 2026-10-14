import { Link } from "@tanstack/react-router";
import { PageHero, type Crumb } from "./PageHero";
import { BackgroundVideo } from "./BackgroundVideo";
import { Reveal } from "./Reveal";
import { CtaBand } from "./CtaBand";
import type { VideoSource } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

type B<T> = { en: T; ne: T };

export function SolutionPage({
  eyebrow,
  title,
  subtitle,
  crumbs,
  video,
  intro,
  benefits,
  cta,
  ctaTo = "/get-started",
}: {
  eyebrow: B<string>;
  title: B<string>;
  subtitle: B<string>;
  crumbs: { label: B<string>; to?: string }[];
  video: VideoSource;
  intro: B<{ heading: string; body: string[] }>;
  benefits: B<{ title: string; body: string }[]>;
  cta: B<string>;
  ctaTo?: string;
}) {
  const { lang } = useLanguage();
  function L<T>(v: B<T>): T {
    return v[lang];
  }

  return (
    <>
      <PageHero
        eyebrow={L(eyebrow)}
        title={L(title)}
        subtitle={L(subtitle)}
        crumbs={crumbs.map((c) => (c.to ? { label: L(c.label), to: c.to } : { label: L(c.label) }))}
        video={video}
      >
        <Link
          to={ctaTo}
          className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy shadow-brand transition-transform hover:-translate-y-0.5"
        >
          {L(cta)}
        </Link>
      </PageHero>

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl text-navy">{L(intro).heading}</h2>
          {L(intro).body.map((p) => (
            <p key={p} className="mt-4 text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-soft">
            <div className="aspect-[4/3]">
              <BackgroundVideo source={video} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,transparent_50%,rgba(7,21,47,0.55))]" />
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-page">
          <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl text-navy">
            {tr(lang, "What this means for your business", "यसले तपाईंको व्यवसायका लागि के अर्थ राख्छ")}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {L(benefits).map((b, i) => (
              <Reveal key={b.title} delay={i * 70} className="h-full">
                <article className="h-full rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand flex flex-col">
                  <span className="inline-flex h-9 w-fit items-center rounded-full bg-accent-gradient px-3 text-xs font-bold text-white shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy min-h-[3.25rem] flex items-center">{b.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{b.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={L(cta)}
        subtitle={tr(
          lang,
          "Tell us about your business and our team will guide you through onboarding.",
          "आफ्नो व्यवसायको बारेमा बताउनुहोस् र हाम्रो टोलीले अनबोर्डिङमा मार्गदर्शन गर्नेछ।",
        )}
        primary={{ label: L(cta), to: ctaTo }}
      />
    </>
  );
}
