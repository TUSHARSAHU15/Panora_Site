import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag,
  Store,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Boxes,
  Truck,
  Globe2,
} from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { productsDetail } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/products/marketplace")({
  head: () => ({
    meta: [
      { title: "PANORA Marketplace — Transparent Product Discovery & Multi-Tier Trade" },
      {
        name: "description",
        content:
          "PANORA Marketplace connects verified distributors and manufacturers with retail shops and buyers across Nepal for transparent price discovery and wholesale trade.",
      },
      { property: "og:title", content: "PANORA Marketplace — Connect. Manage. Trade." },
      {
        property: "og:description",
        content: "Discover verified suppliers, access wholesale pricing, and trade without opaque middlemen across Nepal.",
      },
      { property: "og:url", content: "/products/marketplace" },
    ],
    links: [{ rel: "canonical", href: "/products/marketplace" }],
  }),
  component: MarketplacePage,
});

function MarketplacePage() {
  const { lang } = useLanguage();
  const prod = productsDetail[lang].marketplace;

  return (
    <>
      <PageHero
        eyebrow="PANORA Product Suite"
        title={prod.name}
        subtitle={prod.tagline}
        crumbs={[
          { label: tr(lang, "Products", "उत्पादनहरू"), to: "/products" },
          { label: "Marketplace" },
        ]}
        video={videos.merchant}
      />

      {/* Development Status Bar */}
      <section className="border-b border-border bg-surface py-6">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <StatusBadge status={prod.status} size="md" />
            <span className="text-xs text-navy">
              <strong>{tr(lang, "Current Status:", "हालको अवस्था:")}</strong> {prod.readinessSummary}
            </span>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-purple-600 px-5 py-2 text-xs font-bold text-white shadow-brand hover:bg-purple-700 shrink-0"
          >
            {tr(lang, "List As Verified Supplier", "प्रमाणित आपूर्तिकर्ताका रूपमा जोडिनुहोस्")}
          </Link>
        </div>
      </section>

      {/* Purpose & Value Proposition */}
      <section className="container-page py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
              {tr(lang, "Product Discovery & Trade", "उत्पादन खोज तथा व्यापार")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy leading-tight">
              {tr(
                lang,
                "Fair Trade & Transparent Wholesale Discovery",
                "निष्पक्ष व्यापार र पारदर्शी थोक मूल्य खोज"
              )}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {prod.overview}
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "Retail shopkeepers in semi-urban and rural areas of Nepal have historically been cut off from direct brand distribution, forcing them to pay multiple layers of middlemen markups. PANORA Marketplace democratizes access — putting verified brand catalogues, authentic source pricing, and transparent bulk minimum order quantities (MOQs) at every merchant's fingertips.",
                "काठमाडौँ बाहिरका खुद्रा व्यापारीहरूले आधिकारिक ब्राण्ड वितरकबाट प्रत्यक्ष सामान पाउन नसक्दा धेरै तहका बिचौलियालाई अतिरिक्त कमिसन तिर्नुपर्ने बाध्यता छ। PANORA Marketplace ले यो असमानता हटाउँछ — हरेक व्यापारीलाई प्रमाणित वितरकको क्याटलग, वास्तविक थोक मूल्य, र पारदर्शी अर्डर सुविधा प्रदान गरेर।"
              )}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/merchant-registration"
                className="group inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-xs font-bold text-white shadow-brand hover:bg-purple-700"
              >
                {tr(lang, "Access Wholesale Catalogues", "थोक क्याटलगहरूमा पहुँच पाउनुहोस्")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-xs font-bold text-navy hover:border-purple-600"
              >
                {tr(lang, "Distributor Onboarding Inquiry", "वितरक सूचीकरण सोधपुछ")}
              </Link>
            </div>
          </Reveal>

          {/* Core Problems Solved */}
          <Reveal delay={120}>
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {tr(lang, "Trade Challenges Solved by Marketplace:", "बजारले समाधान गर्ने व्यापारिक चुनौतीहरू:")}
              </h3>
              {prod.problemsSolved.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                  <div className="flex items-center gap-2 text-xs font-bold text-destructive">
                    <span className="h-2 w-2 rounded-full bg-destructive" />
                    <span>{item.problem}</span>
                  </div>
                  <div className="mt-2.5 flex items-start gap-2 text-xs text-navy font-medium leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature Matrix with status badges */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
              {tr(lang, "Marketplace Features", "बजारका सुविधाहरू")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy">
              {tr(lang, "Current Status & Planned Evolution", "हालको स्थिति तथा भावी विकास")}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "We are initially deploying wholesale discovery for verified businesses, with consumer B2C marketplace capabilities scheduled in later rollout phases.",
                "हामी सुरुमा प्रमाणित व्यवसायहरूका लागि थोक खोज सुरु गर्दैछौं, र सर्वसाधारण उपभोक्ताका लागि B2C सुविधा आगामी चरणमा थपिनेछ।"
              )}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {prod.features.map((f, i) => (
              <Reveal key={f.name} delay={i * 60} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft flex flex-col justify-between">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-muted-foreground">0{i + 1}</span>
                      <StatusBadge status={f.status} size="sm" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-navy min-h-[2.75rem] flex items-center">{f.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{f.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Trade Spotlight with Content-Matching Image */}
      <section className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-12 items-center rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-soft">
          <div className="lg:col-span-6 relative overflow-hidden rounded-2xl h-80 w-full bg-slate-100">
            <img
              src="/images/marketplace-trade.jpg"
              alt={tr(lang, "Wholesale product discovery and brand distribution in Nepal", "नेपालमा थोक उत्पादन खोज र ब्राण्ड वितरण")}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 rounded-full bg-purple-950/90 backdrop-blur px-3 py-1 text-xs font-bold text-white border border-purple-500/30">
              {tr(lang, "Direct Source Wholesale Pricing", "सिधै थोक स्रोत मूल्य")}
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
              {tr(lang, "Fair & Transparent Trade", "निष्पक्ष र पारदर्शी व्यापार")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
              {tr(lang, "Direct Brand Access For Nepal's Retailers", "नेपालका खुद्रा व्यापारीका लागि प्रत्यक्ष ब्राण्ड पहुँच")}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "PANORA Marketplace connects retail store owners directly with verified authorized importers and brand distributors across Nepal. Compare tiered bulk prices, check official minimum order quantities (MOQs), and secure genuine products without middleman markups.",
                "PANORA Marketplace ले खुद्रा पसल सञ्चालकहरूलाई नेपालभरका आधिकारिक आयातकर्ता र ब्राण्ड वितरकहरूसँग सिधै जोड्छ। थोक मूल्य तुलना गर्नुहोस्, न्यूनतम अर्डर परिमाण हेर्नुहोस्, र बिचौलियाको अतिरिक्त कमिसन बिना वास्तविक सामान पाउनुहोस्।"
              )}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/merchant-registration"
                className="rounded-full bg-purple-600 px-6 py-3 text-xs font-bold text-white shadow-brand hover:bg-purple-700"
              >
                {tr(lang, "Access Wholesale Catalogues", "थोक क्याटलग हेर्नुहोस्")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier & Merchant Call to Action */}
      <section className="container-page py-24">
        <div className="rounded-3xl bg-purple-950 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-purple-800">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              {tr(lang, "For Brand Principals & Importers", "ब्राण्ड उत्पादक तथा आयातकर्ताहरूका लागि")}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              {tr(lang, "Expand Your Merchant Distribution Reach", "आफ्नो व्यापारिक वितरण विस्तार गर्नुहोस्")}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
              {tr(
                lang,
                "Showcase your official catalogue to thousands of pre-vetted retail merchants across Nepal with transparent pricing and integrated MoveX logistics.",
                "नेपालभरका हजारौं प्रमाणित खुद्रा व्यापारीहरूलाई आफ्नो आधिकारिक क्याटलग देखाउनुहोस्, पारदर्शी मूल्य र MoveX ढुवानी सुविधाका साथ।"
              )}
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-purple-500 px-8 py-3.5 text-xs font-bold text-white shadow-brand hover:bg-purple-400"
          >
            {tr(lang, "Apply For Supplier Listing", "आपूर्तिकर्ता सूचीकरण आवेदन")}
          </Link>
        </div>
      </section>
    </>
  );
}
