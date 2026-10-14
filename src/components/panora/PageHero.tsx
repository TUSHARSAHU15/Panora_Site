import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { BackgroundVideo } from "./BackgroundVideo";
import type { VideoSource } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

export type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  video,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  video?: VideoSource;
  children?: ReactNode;
}) {
  const { lang } = useLanguage();
  return (
    <section className="relative isolate overflow-hidden bg-night-gradient pb-20 pt-36 text-white sm:pt-44">
      {video ? (
        <div className="absolute inset-0 -z-10">
          <BackgroundVideo source={video} eager />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,21,47,0.92),rgba(1,86,232,0.72))]" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(60%_60%_at_20%_0%,#0188FD_0%,transparent_60%)]" />
      )}

      <div className="container-page">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs font-semibold text-white/60">
            <Link to="/" className="hover:text-white">
              {tr(lang, "Home", "गृह")}
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
