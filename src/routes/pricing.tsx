import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck, Store, Warehouse, ArrowRight, Sparkles, Clock, RefreshCw } from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { pricingPlans, AudienceType } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Subscription Plans & Features — PANORA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Explore Basic, Advance, and Premium subscription plans for PANORA Business App and Distributor Network. Start with a 15-day risk-free trial.",
      },
      { property: "og:title", content: "Subscription Plans & Features — PANORA Pvt. Ltd." },
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
  const [audience, setAudience] = useState<AudienceType>("merchants");
  const plans = pricingPlans[audience][lang];

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Transparent Value", "पारदर्शी मूल्य तथा योजना")}
        title={tr(lang, "Simple, Transparent Plans For Nepal", "नेपालका लागि सरल र पारदर्शी योजनाहरू")}
        subtitle={tr(
          lang,
          "Select your business role to explore our Basic, Advance, and Premium tiers. Start risk-free with our 15-day trial — no upfront fees or binding contracts.",
          "आफ्नो व्यवसाय अनुसार बेसिक, एडभान्स र प्रिमियम योजनाहरू हेर्नुहोस्। १५ दिने निःशुल्क परीक्षणबाट सुरु गर्नुहोस् — कुनै अग्रिम शुल्क वा बाध्यकारी सम्झौता छैन।"
        )}
        crumbs={[{ label: tr(lang, "Pricing", "मूल्य निर्धारण") }]}
        video={videos.merchant}
      />

      {/* Trial Transparency Notice */}
      <section className="border-b border-border bg-surface py-5">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-navy font-medium">
            <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
            <span>
              <strong>{tr(lang, "15-Day Free Trial Notice:", "१५ दिने निःशुल्क परीक्षण सूचना:")}</strong>{" "}
              {tr(
                lang,
                "All registered merchants and distributors start with a 15-day full trial on the Basic plan. Flexible 3-month and 1-year subscription options with special discounts are available.",
                "सबै दर्ता भएका व्यापारी र वितरकहरूले बेसिक योजनामा १५ दिने निःशुल्क परीक्षण पाउँछन्। विशेष छुटसहित ३ महिने र १ वर्षे लचिलो सदस्यता विकल्पहरू उपलब्ध छन्।"
              )}
            </span>
          </div>
          <StatusBadge status="Available" size="sm" />
        </div>
      </section>

      {/* Audience Toggle & Pricing Cards */}
      <section className="container-page py-20">
        {/* Role Switcher */}
        <div className="flex flex-col items-center justify-center mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand mb-3">
            {tr(lang, "Select Your Role", "आफ्नो व्यवसाय भूमिका छान्नुहोस्")}
          </span>
          <div className="inline-flex rounded-full border border-border bg-surface p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setAudience("merchants")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${
                audience === "merchants"
                  ? "bg-brand text-white shadow-brand"
                  : "text-navy hover:text-brand"
              }`}
            >
              <Store className="h-4 w-4" />
              {tr(lang, "For Merchants & Retailers", "व्यापारी तथा खुद्रा बिक्रेता")}
            </button>
            <button
              type="button"
              onClick={() => setAudience("distributors")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${
                audience === "distributors"
                  ? "bg-brand text-white shadow-brand"
                  : "text-navy hover:text-brand"
              }`}
            >
              <Warehouse className="h-4 w-4" />
              {tr(lang, "For Wholesalers & Distributors", "थोक बिक्रेता तथा वितरक")}
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {audience === "merchants"
              ? tr(
                  lang,
                  "Plans tailored for retail shops, grocery stores, and consumer merchants.",
                  "खुद्रा पसल, किराना स्टोर र दैनिक बिक्रेताहरूका लागि तयार पारिएका योजनाहरू।"
                )
              : tr(
                  lang,
                  "Plans engineered for single and multi-depot wholesale distributors.",
                  "एकल तथा बहु-गोदाम थोक वितरकहरूका लागि तयार पारिएका योजनाहरू।"
                )}
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={`${audience}-${plan.name}`} delay={i * 80} className="h-full">
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
                  <div>
                    <h3 className="text-xl font-extrabold text-navy">{plan.name}</h3>
                    <p className="text-[11px] font-semibold text-brand mt-0.5">{plan.tierSubtitle}</p>
                  </div>
                  <StatusBadge status={plan.status} size="sm" />
                </div>

                <p className="mt-3 text-xs text-muted-foreground min-h-[38px] leading-relaxed">
                  {plan.description}
                </p>

                {/* Pricing / Plan Term Header */}
                <div className="mt-6 pb-6 border-b border-border">
                  <div className="text-2xl font-black text-navy tracking-tight">{plan.price}</div>
                  <div className="mt-1 text-xs text-muted-foreground font-medium">{plan.period}</div>
                </div>

                <div className="mt-6 flex-1 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {tr(lang, "Plan Overview:", "योजना विवरण:")}
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                        <span className="text-navy font-medium leading-relaxed">
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    to={plan.ctaTo}
                    className={`flex items-center justify-center gap-2 w-full rounded-full py-3.5 text-center text-xs font-bold transition-all ${
                      plan.popular
                        ? "bg-brand-gradient text-white shadow-brand hover:opacity-95"
                        : "border border-border text-navy hover:border-brand hover:text-brand"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Key Plan Highlights Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Clock,
              title: tr(lang, "15-Day Free Trial", "१५ दिने निःशुल्क परीक्षण"),
              desc: tr(
                lang,
                "Explore all Basic features with zero payment commitment or upfront deposit.",
                "कुनै पनि अग्रिम भुक्तानी वा शुल्क बिना सबै आधारभूत सुविधाहरू प्रयोग गर्नुहोस्।"
              ),
            },
            {
              icon: RefreshCw,
              title: tr(lang, "3-Month & 1-Year Options", "३ महिने र १ वर्षे विकल्प"),
              desc: tr(
                lang,
                "Flexible commercial durations with special long-term discount incentives.",
                "विशेष दीर्घकालीन छुट र सहुलियतसहितका लचिलो व्यावसायिक अवधिहरू।"
              ),
            },
            {
              icon: Sparkles,
              title: tr(lang, "Seamless Upgrades", "सजिलो स्तरवृद्धि"),
              desc: tr(
                lang,
                "Upgrade from Basic to Advance or Premium anytime without losing any business data.",
                "कुनै पनि डाटा नगुमाई जुनसुकै बेला बेसिकबाट एडभान्स वा प्रिमियममा अपग्रेड गर्नुहोस्।"
              ),
            },
            {
              icon: ShieldCheck,
              title: tr(lang, "Nepal Tax & VAT Ready", "नेपाल कर तथा भ्याट अनुकूलित"),
              desc: tr(
                lang,
                "Compliant with local IRD Annex 5/10 requirements and 13% VAT reconciliation.",
                "आन्तरिक राजस्व विभाग (IRD) का अनुसूची ५/१० र १३% भ्याट हिसाब मिलान अनुकूलित।"
              ),
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-surface p-5">
              <item.icon className="h-5 w-5 text-brand mb-2" />
              <h4 className="text-xs font-bold text-navy">{item.title}</h4>
              <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
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
              {tr(lang, "Frequently Asked Questions About Plans", "योजना तथा सदस्यता सम्बन्धी प्रश्नहरू")}
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              {
                q: tr(lang, "How does the 15-day Free Trial work?", "१५ दिने निःशुल्क परीक्षण कसरी काम गर्छ?"),
                a: tr(
                  lang,
                  "When you register on the PANORA Business App or Distributor portal, your 15-day Free Trial activates automatically on the Basic plan. You can record sales, manage inventory, track Udhaaro, and place restock orders with no payment details required.",
                  "PANORA Business App वा वितरक पोर्टलमा दर्ता हुँदा तपाईंको १५ दिने निःशुल्क परीक्षण स्वतः सुरु हुन्छ। कुनै भुक्तानी विवरण बिना नै बिलिङ, स्टक र उधारो खाता चलाउन सकिन्छ।"
                ),
              },
              {
                q: tr(
                  lang,
                  "What subscription durations are available?",
                  "कुन-कुन अवधिका सदस्यता योजनाहरू उपलब्ध छन्?"
                ),
                a: tr(
                  lang,
                  "Commercial subscriptions are available in 3-month and 1-year plans. Long-term subscriptions come with special discounts of up to 30% off standard rates.",
                  "व्यावसायिक योजनाहरू ३ महिने र १ वर्षे अवधिमा उपलब्ध छन्। दीर्घकालीन सदस्यता लिँदा ३०% सम्मको विशेष छुट प्राप्त हुन्छ।"
                ),
              },
              {
                q: tr(
                  lang,
                  "Can I upgrade from Basic to Advance or Premium later?",
                  "के म पछि बेसिकबाट एडभान्स वा प्रिमियममा अपग्रेड गर्न सक्छु?"
                ),
                a: tr(
                  lang,
                  "Yes. You can upgrade directly inside the PANORA application at any time. All your products, customer records, supplier bills, and historical transaction data are 100% preserved.",
                  "अवश्य। तपाईंले एप भित्रबाटै जुनसुकै बेला अपग्रेड गर्न सक्नुहुन्छ। तपाईंको सबै उत्पादन, ग्राहक रेकर्ड, बिलहरू र कारोबार विवरण सुरक्षित रहन्छ।"
                ),
              },
              {
                q: tr(
                  lang,
                  "What is the key difference between Basic, Advance, and Premium?",
                  "बेसिक, एडभान्स र प्रिमियम बीचको मुख्य भिन्नता के हो?"
                ),
                a: tr(
                  lang,
                  "Basic provides core everyday operations (single shop/depot, POS billing, stock, and credit). Advance adds thermal receipt printing, delivery fleet management, aging credit tracking, and Nepal IRD/VAT compliance. Premium is engineered for multi-depot enterprises with centralized inventory, multi-device security, and dedicated account support.",
                  "बेसिकले दैनिक मुख्य सञ्चालन (काउन्टर बिलिङ, स्टक र खाता) प्रदान गर्दछ। एडभान्समा थर्मल प्रिन्टर, डेलिभरी फ्लीट, समयसीमा अनुसार उधारो र IRD/भ्याट कर विवरण थपिन्छन्। प्रिमियमले बहु-गोदाम केन्द्रीकृत व्यवस्थापन, बहु-उपकरण सुरक्षा र संस्थागत सहयोग उपलब्ध गराउँछ।"
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
