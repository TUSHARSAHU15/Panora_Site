import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { pricingPlans } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Plans — PANORA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Transparent pricing for PANORA Business App and MoveX Parcel services. 100% free pilot access for founding merchants during beta rollout.",
      },
      { property: "og:title", content: "Pricing & Plans — PANORA Pvt. Ltd." },
      {
        property: "og:description",
        content: "Transparent tiers designed for Nepalese retailers, wholesalers, and enterprise distribution networks.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { lang } = useLanguage();
  const plans = pricingPlans[lang];

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Transparent Value", "पारदर्शी मूल्य")}
        title={tr(lang, "Simple, Honest Pricing For Nepal", "नेपालका लागि सरल र इमानदार मूल्य")}
        subtitle={tr(
          lang,
          "No hidden fees or lock-in contracts. Our founding beta is completely free for early merchants, with transparent commercial tiers clearly scheduled.",
          "कुनै लुकेको शुल्क वा बाध्यकारी सम्झौता छैन। प्रारम्भिक व्यापारीहरूका लागि हाम्रो बेटा पूर्णतया निःशुल्क छ, र भविष्यका योजनाहरू पारदर्शी छन्।"
        )}
        crumbs={[{ label: tr(lang, "Pricing", "मूल्य निर्धारण") }]}
        video={videos.merchant}
      />

      {/* Development Status Notice */}
      <section className="border-b border-border bg-surface py-5">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-navy font-medium">
            <ShieldCheck className="h-4 w-4 text-brand" />
            <span>
              <strong>{tr(lang, "Pilot Transparency Notice:", "परीक्षण पारदर्शिता सूचना:")}</strong>{" "}
              {tr(
                lang,
                "During our founding rollout, PANORA Business App core features are 100% free for all registered early adopters.",
                "सुरुआती परीक्षण अवधिभर दर्ता भएका सबै अग्रगामी व्यापारीहरूका लागि PANORA Business App का मुख्य सुविधाहरू १००% निःशुल्क छन्।"
              )}
            </span>
          </div>
          <StatusBadge status="Available" size="sm" />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container-page py-24">
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80} className="h-full">
              <div
                className={`relative flex flex-col h-full rounded-[2rem] border p-8 transition-all ${
                  plan.popular
                    ? "border-brand bg-white shadow-brand ring-2 ring-brand/20 -translate-y-1"
                    : "border-border bg-white shadow-soft"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-brand">
                    {plan.badge}
                  </span>
                )}

                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-extrabold text-navy">{plan.name}</h3>
                  <StatusBadge status={plan.status} size="sm" />
                </div>

                <p className="mt-3 text-xs text-muted-foreground min-h-[36px] leading-relaxed">
                  {plan.description}
                </p>

                <div className="mt-6 pb-6 border-b border-border">
                  <span className="text-4xl font-extrabold text-navy">{plan.price}</span>
                  <span className="ml-2 text-xs text-muted-foreground font-medium">/ {plan.period}</span>
                </div>

                <div className="mt-6 flex-1 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {tr(lang, "Included Capabilities:", "समावेश सुविधाहरू:")}
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            feat.included ? "text-emerald-600" : "text-muted-foreground/30"
                          }`}
                        />
                        <span className={feat.included ? "text-navy" : "text-muted-foreground/50 line-through"}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    to={plan.ctaTo}
                    className={`block w-full rounded-full py-3.5 text-center text-xs font-bold transition-all ${
                      plan.popular
                        ? "bg-brand-gradient text-white shadow-brand hover:opacity-95"
                        : "border border-border text-navy hover:border-brand hover:text-brand"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="bg-surface py-20 border-t border-border">
        <div className="container-page max-w-3xl">
          <Reveal className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              {tr(lang, "Clarity & Trust", "स्पष्टता र विश्वास")}
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy">
              {tr(lang, "Frequently Asked Questions About Pricing", "मूल्य सम्बन्धी सोधिने प्रश्नहरू")}
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              {
                q: tr(lang, "Is the Early Adopter Beta genuinely free?", "के प्रारम्भिक बेटा साँच्चै निःशुल्क हो?"),
                a: tr(
                  lang,
                  "Yes. All founding merchants and distributors who pre-book receive 100% free access to billing, inventory tracking, and digital udhaaro ledgers during our initial pilot phase with no credit card or payment commitment required.",
                  "हो। प्रि-बुकिङ गर्ने सबै संस्थापक व्यापारी र वितरकहरूले सुरुआती बेटा अवधिभर बिलिङ, स्टक र उधारो खाता १००% निःशुल्क चलाउन पाउँछन्।"
                ),
              },
              {
                q: tr(lang, "How are MoveX delivery rates calculated?", "MoveX पार्सल दर कसरी निर्धारण हुन्छ?"),
                a: tr(
                  lang,
                  "Parcel rates are calculated based on transparent weight/dimension brackets and pickup/drop distances. There are no surprise surge pricing markups for commercial business accounts.",
                  "पार्सलको तौल, आकार र दुरीका आधारमा पारदर्शी दर तय हुन्छ। व्यावसायिक खाताहरूका लागि कुनै अप्रत्याशित मूल्य वृद्धि हुँदैन।"
                ),
              },
              {
                q: tr(lang, "Will I be charged unexpectedly later?", "के पछि अचानक शुल्क लाग्नेछ?"),
                a: tr(
                  lang,
                  "Never. We uphold radical transparency. When commercial paid tiers launch in the future, early adopters will receive clear advance notice and lifetime discounted grandfathered benefits.",
                  "कहिल्यै हुँदैन। भविष्यमा सशुल्क योजना लागू गर्दा पनि संस्थापक सदस्यहरूलाई पहिले नै सूचित गरिनेछ र आजीवन विशेष छुट दिइनेछ।"
                ),
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="text-sm font-bold text-navy">{item.q}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
