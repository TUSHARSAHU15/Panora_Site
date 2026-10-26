import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { CtaBand } from "@/components/panora/CtaBand";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { faqCategories } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ & Support — PANORA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Frequently asked questions about PANORA Pvt. Ltd., the Business App, MoveX Parcel App, Marketplace, and feature availability.",
      },
      { property: "og:title", content: "FAQ & Support — PANORA Pvt. Ltd." },
      { property: "og:description", content: "Answers about PANORA ecosystem, pre-booking, development status, and partnerships." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqCategories.en.flatMap((c) =>
            c.items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  const { lang } = useLanguage();
  const cats = faqCategories[lang];
  const [active, setActive] = useState(cats[0]!.category);
  const current = cats.find((c) => c.category === active) || cats[0]!;

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "FAQ & Help Center", "प्रश्नोत्तर तथा सहायता")}
        title={tr(lang, "Frequently Asked Questions", "बारम्बार सोधिने प्रश्नहरू")}
        subtitle={tr(
          lang,
          "Transparent answers about PANORA Pvt. Ltd., our three core products, feature availability, and partner onboarding.",
          "PANORA Pvt. Ltd., हाम्रा तीन मुख्य उत्पादनहरू, विकास स्थिति, र दर्ता प्रक्रिया बारे स्पष्ट जवाफहरू।"
        )}
        crumbs={[{ label: tr(lang, "FAQ", "प्रश्नोत्तर") }]}
      />

      <section className="container-page py-20">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c.category}
              onClick={() => setActive(c.category)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                active === c.category
                  ? "bg-brand-gradient text-white shadow-brand"
                  : "border border-border bg-white text-navy hover:border-brand hover:text-brand"
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        <Reveal key={active} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {current.items.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-white px-6 transition-colors hover:border-brand/40"
              >
                <AccordionTrigger className="text-left text-sm font-bold text-navy hover:no-underline py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      <CtaBand
        title={tr(lang, "Still Have Questions?", "अझै केही सोध्न बाँकी छ?")}
        subtitle={tr(
          lang,
          "Our corporate team in Saptari, Madhesh Province is ready to assist your business or fleet onboarding.",
          "सप्तरी, मधेश प्रदेशस्थित हाम्रो टोली तपाईंको व्यापार वा फ्लीट दर्तामा सहयोग गर्न तयार छ।"
        )}
        primary={{ label: tr(lang, "Contact Us Directly", "हामीलाई सम्पर्क गर्नुहोस्"), to: "/contact" }}
        secondary={{ label: tr(lang, "Pre-book Business App", "Business App प्रि-बुक गर्नुहोस्"), to: "/merchant-registration" }}
      />
    </>
  );
}
