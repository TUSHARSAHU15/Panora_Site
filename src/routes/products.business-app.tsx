import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Smartphone,
  CheckCircle2,
  Receipt,
  BookOpen,
  Boxes,
  Truck,
  Users,
  Building,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Store,
} from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { productsDetail } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/products/business-app")({
  head: () => ({
    meta: [
      { title: "PANORA Business App — Unified Commerce & Operations for Nepal" },
      {
        name: "description",
        content:
          "The PANORA Business App is a unified application being developed for merchants, retailers, wholesalers, and distributors across Nepal to simplify billing, khata, inventory, and B2B trade.",
      },
      { property: "og:title", content: "PANORA Business App — Connect. Manage. Trade." },
      {
        property: "og:description",
        content: "Modernize your retail counter or wholesale business with digital billing, udhaaro khata, and direct supplier ordering.",
      },
      { property: "og:url", content: "/products/business-app" },
    ],
    links: [{ rel: "canonical", href: "/products/business-app" }],
  }),
  component: BusinessAppPage,
});

function BusinessAppPage() {
  const { lang } = useLanguage();
  const prod = productsDetail[lang].businessApp;

  return (
    <>
      <PageHero
        eyebrow="PANORA Product Suite"
        title={prod.name}
        subtitle={prod.tagline}
        crumbs={[
          { label: tr(lang, "Products", "उत्पादनहरू"), to: "/products" },
          { label: "Business App" },
        ]}
        video={videos.merchant}
      />

      {/* Honest Status Callout */}
      <section className="border-b border-border bg-surface py-6">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <StatusBadge status={prod.status} size="md" />
            <span className="text-xs text-navy">
              <strong>{tr(lang, "Development Phase:", "विकास चरण:")}</strong> {prod.readinessSummary}
            </span>
          </div>
          <Link
            to="/merchant-registration"
            className="rounded-full bg-brand-gradient px-5 py-2 text-xs font-bold text-white shadow-brand hover:opacity-95 shrink-0"
          >
            {tr(lang, "Pre-book Beta Access", "बेटा प्रि-बुक गर्नुहोस्")}
          </Link>
        </div>
      </section>

      {/* Purpose & Core Philosophy */}
      <section className="container-page py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              {tr(lang, "Dual B2B & B2C Engine", "दोहोरो B2B र B2C इन्जिन")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy leading-tight">
              {tr(
                lang,
                "One Unified App For B2B Wholesale Restock & B2C Retail Sales",
                "B2B थोक खरिद र B2C खुद्रा बिक्री दुवैका लागि एउटै एकीकृत एप"
              )}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {prod.overview}
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "Whether you operate a neighborhood retail store serving walk-in consumers (B2C) or run a high-volume distribution warehouse supplying regional merchants (B2B), PANORA Business App eliminates the chaos of juggling separate POS tools, WhatsApp messages, notebook ledgers, and delivery riders. Every transaction synchronizes into one live inventory and credit ledger.",
                "तपाईं टोलका ग्राहकलाई सामान बेच्ने खुद्रा पसल चलाउनुहोस् (B2C) वा धेरै पसलहरूलाई सामान पुर्याउने थोक गोदाम (B2B), अलग-अलग बिलिङ, व्हाट्सएप अर्डर, कापीको खाता र डेलिभरीका लागि भौंतारिनु पर्दैन। PANORA Business App ले यी सबै कारोबारलाई एउटै डिजिटल प्रणालीमा जोड्छ।"
              )}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/merchant-registration"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-xs font-bold text-white shadow-brand hover:opacity-95"
              >
                {tr(lang, "Pre-book As Founding Merchant", "संस्थापक व्यापारीका रूपमा प्रि-बुक गर्नुहोस्")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/solutions/merchants"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-xs font-bold text-navy hover:border-brand"
              >
                {tr(lang, "How It Helps Retailers", "खुद्रा व्यापारीलाई कसरी मद्दत गर्छ")}
              </Link>
            </div>
          </Reveal>

          {/* Problems Solved Cards */}
          <Reveal delay={120}>
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {tr(lang, "Key Pain Points Solved:", "समाधान गरिने मुख्य समस्याहरू:")}
              </h3>
              {prod.problemsSolved.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                  <div className="flex items-center gap-2 text-xs font-bold text-destructive">
                    <span className="h-2 w-2 rounded-full bg-destructive" />
                    <span>{item.problem}</span>
                  </div>
                  <div className="mt-2.5 flex items-start gap-2 text-xs text-navy font-medium leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dual B2B & B2C Operational Architecture Showcase */}
      <section className="bg-gradient-to-b from-white to-surface py-20 border-t border-border">
        <div className="container-page">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold text-brand uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>{tr(lang, "Dual-Engine Architecture", "दोहोरो B2B र B2C इन्जिन")}</span>
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-navy">
              {tr(lang, "Engineered For Both B2B Trade & B2C Consumer Retail", "B2B थोक व्यापार र B2C खुद्रा ग्राहक दुवैका लागि निर्मित")}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "Most business software forces shopkeepers to pick between a retail counter billing app and a wholesale supply tool. PANORA Business App unifies both worlds into a single platform.",
                "धेरैजसो सफ्टवेयरले पसलेलाई खुद्रा काउन्टर एप वा थोक अर्डर एपमध्ये एउटा मात्र छान्नुपर्ने बाध्यता सिर्जना गर्छन्। PANORA Business App ले दुवैलाई एउटै प्रणालीमा जोड्छ।"
              )}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 items-stretch">
            {/* B2C Consumer & Retail Side */}
            <Reveal delay={60} className="h-full">
              <div className="h-full rounded-3xl border border-brand/20 bg-white p-7 sm:p-9 shadow-soft flex flex-col justify-between hover:shadow-brand transition-all">
                <div>
                  <div className="relative overflow-hidden rounded-2xl h-56 w-full mb-6 bg-slate-100">
                    <img
                      src="/images/b2c-counter.jpg"
                      alt={tr(lang, "B2C Retail Counter POS Checkout", "B2C खुद्रा काउन्टर बिलिङ")}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-navy/90 backdrop-blur px-3 py-1 text-[11px] font-bold text-white border border-white/20">
                      {tr(lang, "B2C Consumer Suite", "B2C खुद्रा तथा उपभोक्ता मोड्युल")}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      {tr(lang, "Consumer Sales & Counter Checkout", "खुद्रा बिक्री तथा काउन्टर चेकआउट")}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy">
                    {tr(lang, "B2C Retail Counter, Instant QR & WhatsApp Invoicing", "B2C काउन्टर बिलिङ, तत्काल QR र व्हाट्सएप रसिद")}
                  </h3>

                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                    {tr(
                      lang,
                      "Serve walk-in shoppers with lightning-fast barcode or tap-to-add billing. Accept digital payments via Fonepay, eSewa, and Khalti QR, send paperless WhatsApp e-receipts, and extend credit via consumer udhaaro khata with automated SMS updates.",
                      "पसलमा आउने ग्राहकलाई द्रुत बारकोड वा ट्याप बिलिङद्वारा छिटो सेवा दिनुहोस्। फोनपे, ईसेवा र खल्ती क्युआरबाट भुक्तानी लिनुहोस्, व्हाट्सएप रसिद पठाउनुहोस् र ग्राहकको उधारो हिसाब राख्नुहोस्।"
                    )}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs text-navy font-medium border-t border-border/60 pt-4">
                    {[
                      tr(lang, "Fast POS Billing with barcode scanner & item search", "बारकोड स्क्यानरसहित द्रुत काउन्टर POS बिलिङ"),
                      tr(lang, "Dynamic Fonepay, eSewa & Khalti QR code payment display", "फोनपे, ईसेवा र खल्ती क्युआर कोडबाट सिधै भुक्तानी"),
                      tr(lang, "Instant paperless WhatsApp & SMS digital customer receipts", "कागजविहीन व्हाट्सएप र एसएमएस डिजिटल ग्राहक रसिद"),
                      tr(lang, "B2C Customer Khata (Udhaaro) with automated SMS reminders", "स्वचालित एसएमएस रिमाइन्डरसहित ग्राहक उधारो खाता"),
                      tr(lang, "B2C Digital Storefront link for neighborhood online orders", "टोलका ग्राहकका लागि अनलाइन अर्डर डिजिटल स्टोर लिङ्क"),
                      tr(lang, "One-tap MoveX dispatch for consumer doorstep deliveries", "ग्राहकको घरमै डेलिभरी गर्न MoveX राइडर प्रेषण"),
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* B2B Wholesale & Supplier Side */}
            <Reveal delay={120} className="h-full">
              <div className="h-full rounded-3xl border border-brand/20 bg-white p-7 sm:p-9 shadow-soft flex flex-col justify-between hover:shadow-brand transition-all">
                <div>
                  <div className="relative overflow-hidden rounded-2xl h-56 w-full mb-6 bg-slate-100">
                    <img
                      src="/images/b2b-wholesale.jpg"
                      alt={tr(lang, "B2B Wholesale Sourcing & Warehouse", "B2B थोक खरिद तथा गोदाम")}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-navy/90 backdrop-blur px-3 py-1 text-[11px] font-bold text-white border border-white/20">
                      {tr(lang, "B2B Wholesale Suite", "B2B थोक तथा वितरक मोड्युल")}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">
                      {tr(lang, "Supplier Procurement & Bulk Trade", "वितरक खरिद तथा थोक व्यापार")}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy">
                    {tr(lang, "B2B Wholesale Restock, Brand Catalogues & Supplier Khata", "B2B थोक खरिद, वितरक क्याटलग र सप्लायर खाता")}
                  </h3>

                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                    {tr(
                      lang,
                      "Connect directly with authorized national distributors and brand principals. Browse wholesale volume discount tiers, issue formal purchase orders, track inbound restock shipments, and maintain transparent supplier payables ledgers.",
                      "आधिकारिक ब्राण्ड वितरकहरूसँग प्रत्यक्ष जोडिनुहोस्। थोक मूल्यका क्याटलग हेरी सिधै अर्डर गर्नुहोस्, सामान ढुवानी ट्र्याक गर्नुहोस् र वितरकको भुक्तानी हिसाब पारदर्शी राख्नुहोस्।"
                    )}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs text-navy font-medium border-t border-border/60 pt-4">
                    {[
                      tr(lang, "Browse verified brand catalogues & wholesale price tiers", "प्रमाणित ब्राण्ड क्याटलग र थोक मूल्य सूची हेर्नुहोस्"),
                      tr(lang, "Direct B2B purchase orders with automated low-stock triggers", "स्टक सकिन लाग्दा स्वचालित B2B खरिद अर्डर"),
                      tr(lang, "B2B Supplier Khata with mutual credit reconciliation", "पारस्परिक पुष्टि हुने वितरक उधारो खाता"),
                      tr(lang, "Warehouse batch, lot number & expiry date management", "ब्याच नम्बर र म्याद गुज्रने मिति व्यवस्थापन"),
                      tr(lang, "Multi-location warehouse and branch inventory sync", "बहु-शाखा तथा गोदाम मौज्दात सिङ्क्रोनाइजेसन"),
                      tr(lang, "Export to Tally, Swastik & Nepalese IRD VAT formats", "ट्याली, स्वास्तिक र भ्याट ढाँचामा प्रत्यक्ष निर्यात"),
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Feature Matrix with exact Status Badges */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              {tr(lang, "Feature Roadmap", "सुविधा मार्गचित्र")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy">
              {tr(lang, "Capabilities & Development Status", "क्षमता तथा विकास स्थिति")}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "Every feature is transparently categorized so you know what to expect upon beta launch versus upcoming updates.",
                "प्रत्येक सुविधा पारदर्शी रूपमा वर्गीकरण गरिएको छ ताकि बेटा सुरुआतमा के पाइन्छ र आगामी अपडेटमा के आउँछ स्पष्ट होस्।"
              )}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {prod.features.map((f, i) => (
              <Reveal key={f.name} delay={i * 60} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-muted-foreground">0{i + 1}</span>
                      <StatusBadge status={f.status} size="sm" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-navy">{f.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="container-page py-24">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {tr(lang, "Who Is It For?", "यो कसका लागि हो?")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy">
            {tr(lang, "Engineered For Diverse Commercial Businesses", "विविध व्यावसायिक क्षेत्रका लागि अनुकूल")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {[
            {
              badge: "B2C Retail",
              title: tr(lang, "Kirana & Grocery Stores", "किराना तथा ग्रोसरी पसल"),
              desc: tr(lang, "High-speed barcode scanning, dynamic Fonepay/eSewa QR codes, customer udhaaro khata, and one-tap restock.", "द्रुत बारकोड बिलिङ, फोनपे/ईसेवा क्युआर भुक्तानी, ग्राहक उधारो खाता र एक ट्यापमा रिस्टक।"),
            },
            {
              badge: "B2C Consumer",
              title: tr(lang, "Fashion, Fancy & Lifestyle", "कपडा, फेन्सी तथा लाइफस्टाइल"),
              desc: tr(lang, "Size and variant inventory, WhatsApp paperless receipts, and shareable B2C social store link for online orders.", "साइज र भेरिएन्ट स्टक, ग्राहकका लागि व्हाट्सएप डिजिटल बिल र अनलाइन अर्डर स्टोर लिङ्क।"),
            },
            {
              badge: "B2B Wholesale",
              title: tr(lang, "Wholesale Stockists & Distributors", "थोक बिक्रेता तथा वितरकहरू"),
              desc: tr(lang, "Multi-shop order dispatch, volume discount tiers, distributor catalogues, and MoveX parcel logistics.", "हजारौं पसलका अर्डर व्यवस्थापन, थोक मूल्य क्याटलग, उधारो नियन्त्रण र MoveX ढुवानी।"),
            },
            {
              badge: "B2B & B2C",
              title: tr(lang, "Hardware & Commercial Suppliers", "हार्डवेयर तथा व्यावसायिक आपूर्तिकर्ता"),
              desc: tr(lang, "Bulk order management, contractor credit ledgers, VAT invoicing, and direct MoveX parcel dispatch.", "थोक अर्डर, ठेकेदार उधारो खाता, भ्याट बिलिङ र MoveX पार्सल ढुवानी।"),
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="h-full">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft h-full flex flex-col justify-between hover:border-brand/40 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Store className="h-6 w-6 text-brand shrink-0" />
                    <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-bold text-brand uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy min-h-[3rem] flex items-start">{item.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pre-Booking CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-night-gradient p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              {tr(lang, "Exclusive Beta Access", "विशेष बेटा पहुँच")}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              {tr(lang, "Pre-Book The PANORA Business App Today", "PANORA Business App आजै प्रि-बुक गर्नुहोस्")}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
              {tr(
                lang,
                "Early adopter businesses receive free onboarding support, zero pilot fees, and direct access to our product engineering team.",
                "प्रि-बुक गर्ने व्यवसायहरूले निःशुल्क अनबोर्डिङ सहयोग, परीक्षण शुल्क छुट, र प्राविधिक टोलीसँग प्रत्यक्ष पहुँच पाउनेछन्।"
              )}
            </p>
          </div>
          <Link
            to="/merchant-registration"
            className="shrink-0 rounded-full bg-white px-8 py-3.5 text-xs font-bold text-navy shadow-brand hover:bg-white/95"
          >
            {tr(lang, "Fill Pre-booking Form", "प्रि-बुकिङ फारम भर्नुहोस्")}
          </Link>
        </div>
      </section>
    </>
  );
}
