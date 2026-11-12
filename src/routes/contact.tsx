import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Building2, ShieldCheck, HelpCircle } from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { InquiryForm } from "@/components/panora/InquiryForm";
import { site } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support — PANORA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Connect with the PANORA Pvt. Ltd. corporate team in Saptari, Madhesh Province, Nepal for business pre-booking, Rider App fleet inquiries, and institutional partnerships.",
      },
      { property: "og:title", content: "Contact PANORA Pvt. Ltd. — Connect. Manage. Trade." },
      {
        property: "og:description",
        content: "Reach our headquarters in Saptari, Madhesh Province, Nepal for inquiries, support, and partnerships.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { lang } = useLanguage();
  const c = site[lang].contact;
  const corp = c.corporateInfo;
  const details = [
    {
      icon: Mail,
      label: tr(lang, "General & Business Email", "सामान्य तथा व्यापारिक इमेल"),
      value: c.email,
      href: `mailto:${c.email}`,
    },
    {
      icon: HelpCircle,
      label: tr(lang, "Support & Helpdesk", "ग्राहक सहायता"),
      value: c.supportEmail,
      href: `mailto:${c.supportEmail}`,
    },
    {
      icon: Phone,
      label: tr(lang, "Phone / WhatsApp", "फोन / ह्वाट्सएप"),
      value: c.phone,
      href: `tel:${c.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      icon: Clock,
      label: tr(lang, "Operating Hours", "सञ्चालन समय"),
      value: c.hours,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Contact & Support", "सम्पर्क तथा सहायता")}
        title={tr(lang, "Connect With PANORA Pvt. Ltd.", "PANORA Pvt. Ltd. सँग सम्पर्क गर्नुहोस्")}
        subtitle={tr(
          lang,
          "Whether you run a local retail store, manage a distribution warehouse, operate a delivery fleet, or want to explore an institutional partnership, we are here to support you.",
          "तपाईं स्थानीय पसल चलाउनुहोस्, वितरण गोदाम, ढुवानी फ्लीट, वा संस्थागत साझेदारी गर्न चाहनुहोस्, हामी सहयोग गर्न तयार छौं।"
        )}
        crumbs={[{ label: tr(lang, "Contact", "सम्पर्क") }]}
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider mb-4">
            <Building2 className="h-3.5 w-3.5" />
            <span>{tr(lang, "Kathmandu & Saptari, Nepal", "काठमाडौँ र सप्तरी, नेपाल")}</span>
          </div>

          <h2 className="text-2xl font-extrabold sm:text-3xl text-navy">
            {tr(lang, "Official Corporate Channels", "आधिकारिक संस्थागत सम्पर्क")}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "Our dedicated partner operations team responds to all verified commercial and onboarding inquiries within one business day.",
              "हाम्रो समर्पित साझेदार टोलीले सबै व्यापारिक तथा दर्ता सम्बन्धी सोधपुछहरूमा एक कार्यदिनभित्र जवाफ दिनेछ।"
            )}
          </p>

          <ul className="mt-8 space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex gap-4 items-start">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand mt-0.5">
                  <d.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {d.label}
                  </span>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="block text-sm font-semibold text-navy hover:text-brand transition-colors"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <span className="block text-sm font-semibold text-navy">{d.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-surface p-5 sm:p-6 border border-border space-y-5">
            <p className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{tr(lang, "Corporate Information", "संस्थागत विवरण")}</span>
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-brand shrink-0" />
                  <span>{corp.corporateOffice.title}</span>
                </p>
                {corp.corporateOffice.lines.map((line) => (
                  <p key={line} className="text-xs font-semibold text-navy leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              <div className="space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-brand shrink-0" />
                  <span>{corp.registeredOffice.title}</span>
                </p>
                {corp.registeredOffice.lines.map((line) => (
                  <p key={line} className="text-xs font-semibold text-navy leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                {corp.registration.title}
              </p>
              <dl className="space-y-1.5 text-xs">
                <div className="flex flex-wrap gap-x-1.5">
                  <dt className="text-muted-foreground">{corp.registration.registeredWithLabel}:</dt>
                  <dd className="font-semibold text-navy">{corp.registration.registeredWith}</dd>
                </div>
                <div className="flex flex-wrap gap-x-1.5">
                  <dt className="text-muted-foreground">{corp.registration.registrationNoLabel}:</dt>
                  <dd className="font-semibold text-navy">{corp.registration.registrationNo}</dd>
                </div>
                <div className="flex flex-wrap gap-x-1.5">
                  <dt className="text-muted-foreground">{corp.registration.vatNoLabel}:</dt>
                  <dd className="font-semibold text-navy">{corp.registration.vatNo}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2rem] border border-border bg-white p-7 shadow-soft sm:p-9">
            <h3 className="text-lg font-bold text-navy mb-4">
              {tr(lang, "Send Us A Direct Message", "हामीलाई सन्देश पठाउनुहोस्")}
            </h3>
            <InquiryForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
