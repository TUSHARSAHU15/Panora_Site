import { Link } from "@tanstack/react-router";
import { useLanguage, tr } from "@/lib/i18n";

export function CtaBand({
  title,
  subtitle,
  primary = { label: "Get Started", to: "/get-started" },
  secondary = { label: "Talk to Us", to: "/contact" },
}: {
  title?: string;
  subtitle?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  const { lang } = useLanguage();
  const resolvedTitle = title ?? tr(lang, "Ready to Build a Smarter Business?", "स्मार्टर व्यवसाय निर्माण गर्न तयार?");
  const resolvedSubtitle = subtitle ?? tr(
    lang,
    "Join PANORA and become part of a connected B2B commerce ecosystem.",
    "PANORA मा सामेल हुनुहोस् र जडित B2B व्यापार पारिस्थितिकीको हिस्सा बन्नुहोस्।",
  );
  return (
    <section className="container-page py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-16 text-center text-white shadow-brand sm:px-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[#6EC30D]/25 blur-2xl" />
        <h2 className="relative text-3xl font-extrabold sm:text-4xl lg:text-5xl">{resolvedTitle}</h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-white/85">{resolvedSubtitle}</p>
        <div className="relative mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to={primary.to}
            className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
          >
            {primary.label}
          </Link>
          <Link
            to={secondary.to}
            className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
