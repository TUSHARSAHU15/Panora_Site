import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Smartphone, Package, ShoppingBag, Sparkles, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { productsDetail } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Our Products — PANORA Business App, MoveX & Marketplace" },
      {
        name: "description",
        content:
          "Discover PANORA's 3 core products: PANORA Business App, PANORA MoveX Parcel App, and PANORA Marketplace. Learn about features, target users, and current development status.",
      },
      { property: "og:title", content: "Our Products — PANORA Pvt. Ltd." },
      {
        property: "og:description",
        content: "Transparent product suite powering commerce, operations, and logistics across Nepal.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const { lang } = useLanguage();
  const products = productsDetail[lang];

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Product Architecture", "उत्पादन संरचना")}
        title={tr(lang, "Our Integrated Product Suite", "हाम्रो एकीकृत उत्पादन शृङ्खला")}
        subtitle={tr(
          lang,
          "Three synchronized products developed by PANORA Pvt. Ltd. to streamline operations, coordinate parcel logistics, and empower transparent trade across Nepal.",
          "PANORA Pvt. Ltd. द्वारा नेपालको व्यापार, ढुवानी र सञ्चालनलाई सरल तथा पारदर्शी बनाउन विकास गरिएका तीन अन्तरसम्बन्धित उत्पादनहरू।"
        )}
        crumbs={[{ label: tr(lang, "Products", "उत्पादनहरू") }]}
        video={videos.merchant}
      />

      {/* Honest Status Banner */}
      <section className="border-b border-border bg-surface py-6">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-navy">
            <ShieldCheck className="h-4 w-4 text-brand" />
            <span>
              <strong>{tr(lang, "Product Lifecycle Transparency:", "उत्पादन जीवनचक्र पारदर्शिता:")}</strong>{" "}
              {tr(
                lang,
                "We distinguish between features that are Available for onboarding, In Development (internal/pilot phase), and Planned for future milestones.",
                "हामी दर्ताका लागि उपलब्ध, सक्रिय विकास र परीक्षणमा रहेका, र आगामी योजनामा रहेका सुविधाहरूलाई स्पष्ट छुट्याउँछौं।"
              )}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <StatusBadge status="Available" size="sm" />
            <StatusBadge status="In Development" size="sm" />
            <StatusBadge status="Planned" size="sm" />
          </div>
        </div>
      </section>

      {/* The 3 Products In Depth */}
      <section className="container-page py-24 space-y-24">
        {/* Product 1: PANORA Business App */}
        <Reveal>
          <div className="rounded-[2.5rem] border border-border bg-white p-8 sm:p-12 shadow-soft grid gap-10 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  {products.businessApp.name}
                </h2>
                <StatusBadge status={products.businessApp.status} size="md" />
              </div>
              <p className="text-sm font-semibold text-brand">
                {products.businessApp.tagline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {products.businessApp.overview}
              </p>

              <div className="rounded-2xl bg-surface p-4 border border-border text-xs text-muted-foreground">
                <strong className="text-navy block mb-1">
                  {tr(lang, "Current Readiness:", "हालको अवस्था:")}
                </strong>
                {products.businessApp.readinessSummary}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  {tr(lang, "Target Users:", "लक्षित प्रयोगकर्ता:")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {products.businessApp.targetUsers.map((u) => (
                    <span key={u} className="rounded-lg bg-surface border border-border px-3 py-1 text-xs text-navy">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand"></span>
                  {tr(lang, "B2C Consumer POS & Instant QR Billing", "B2C उपभोक्ता POS र तत्काल QR बिलिङ")}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 text-indigo-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                  {tr(lang, "B2B Wholesale Restock & Supplier Ledgers", "B2B थोक खरिद र आपूर्तिकर्ता खाता")}
                </span>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  to="/products/business-app"
                  className="rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-brand hover:opacity-95"
                >
                  {tr(lang, "View Business App Details →", "Business App विस्तृत विवरण →")}
                </Link>
                <Link
                  to="/merchant-registration"
                  className="rounded-full border border-border px-6 py-3 text-xs font-bold text-navy hover:border-brand"
                >
                  {tr(lang, "Pre-book Beta Access", "बेटा प्रि-बुक गर्नुहोस्")}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-surface border border-border p-6 space-y-4 flex flex-col justify-start">
              <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden border border-border/80 shadow-sm group">
                <img
                  src="/images/fintech-pos.jpg"
                  alt="PANORA Business App Smart POS and Dual Billing"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent flex items-end p-3">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-brand-cyan px-2 py-0.5 text-[10px] font-bold text-navy shadow-sm">
                      B2C Retail POS
                    </span>
                    <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-navy shadow-sm">
                      B2B Restock
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {tr(lang, "Key Features Breakdown", "मुख्य सुविधाहरू")}
              </h3>
              <ul className="space-y-3">
                {products.businessApp.features.map((f) => (
                  <li key={f.name} className="border-b border-border/60 pb-2.5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-navy">{f.name}</span>
                      <StatusBadge status={f.status} size="sm" showIcon={false} />
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{f.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Product 2: MoveX Parcel App */}
        <Reveal>
          <div className="rounded-[2.5rem] border border-border bg-white p-8 sm:p-12 shadow-soft grid gap-10 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Package className="h-5 w-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  {products.movex.name}
                </h2>
                <StatusBadge status={products.movex.status} size="md" />
              </div>
              <p className="text-sm font-semibold text-emerald-600">
                {products.movex.tagline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {products.movex.overview}
              </p>

              <div className="rounded-2xl bg-surface p-4 border border-border text-xs text-muted-foreground">
                <strong className="text-navy block mb-1">
                  {tr(lang, "Current Readiness:", "हालको अवस्था:")}
                </strong>
                {products.movex.readinessSummary}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  {tr(lang, "Target Users:", "लक्षित प्रयोगकर्ता:")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {products.movex.targetUsers.map((u) => (
                    <span key={u} className="rounded-lg bg-surface border border-border px-3 py-1 text-xs text-navy">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  to="/products/movex"
                  className="rounded-full bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-brand hover:opacity-95"
                >
                  {tr(lang, "View MoveX Details →", "MoveX विस्तृत विवरण →")}
                </Link>
                <Link
                  to="/rider-registration"
                  className="rounded-full border border-border px-6 py-3 text-xs font-bold text-navy hover:border-emerald-600"
                >
                  {tr(lang, "Register as Delivery Rider", "डेलिभरी राइडर दर्ता")}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-surface border border-border p-6 space-y-4 flex flex-col justify-start">
              <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden border border-border/80 shadow-sm group">
                <img
                  src="/images/rider-dispatch.jpg"
                  alt="PANORA MoveX On-Demand Courier Parcel Dispatch"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent flex items-end p-3">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                      Express B2B/B2C Parcels
                    </span>
                    <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-navy shadow-sm">
                      OTP Security
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {tr(lang, "Key Features Breakdown", "मुख्य सुविधाहरू")}
              </h3>
              <ul className="space-y-3">
                {products.movex.features.map((f) => (
                  <li key={f.name} className="border-b border-border/60 pb-2.5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-navy">{f.name}</span>
                      <StatusBadge status={f.status} size="sm" showIcon={false} />
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{f.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Product 3: PANORA Marketplace */}
        <Reveal>
          <div className="rounded-[2.5rem] border border-border bg-white p-8 sm:p-12 shadow-soft grid gap-10 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  {products.marketplace.name}
                </h2>
                <StatusBadge status={products.marketplace.status} size="md" />
              </div>
              <p className="text-sm font-semibold text-purple-600">
                {products.marketplace.tagline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {products.marketplace.overview}
              </p>

              <div className="rounded-2xl bg-surface p-4 border border-border text-xs text-muted-foreground">
                <strong className="text-navy block mb-1">
                  {tr(lang, "Current Readiness:", "हालको अवस्था:")}
                </strong>
                {products.marketplace.readinessSummary}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  {tr(lang, "Target Users:", "लक्षित प्रयोगकर्ता:")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {products.marketplace.targetUsers.map((u) => (
                    <span key={u} className="rounded-lg bg-surface border border-border px-3 py-1 text-xs text-navy">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  to="/products/marketplace"
                  className="rounded-full bg-purple-600 px-6 py-3 text-xs font-bold text-white shadow-brand hover:opacity-95"
                >
                  {tr(lang, "View Marketplace Details →", "Marketplace विस्तृत विवरण →")}
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-border px-6 py-3 text-xs font-bold text-navy hover:border-purple-600"
                >
                  {tr(lang, "Distributor Catalogue Inquiry", "वितरक क्याटलग सोधपुछ")}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-surface border border-border p-6 space-y-4 flex flex-col justify-start">
              <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden border border-border/80 shadow-sm group">
                <img
                  src="/images/marketplace-b2b.jpg"
                  alt="PANORA Wholesale Marketplace Logistics and Bulk Trade"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent flex items-end p-3">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-purple-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                      Verified Wholesalers
                    </span>
                    <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-navy shadow-sm">
                      Direct Pricing
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {tr(lang, "Key Features Breakdown", "मुख्य सुविधाहरू")}
              </h3>
              <ul className="space-y-3">
                {products.marketplace.features.map((f) => (
                  <li key={f.name} className="border-b border-border/60 pb-2.5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-navy">{f.name}</span>
                      <StatusBadge status={f.status} size="sm" showIcon={false} />
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{f.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Cross-Product Integration Flow */}
      <section className="bg-navy py-20 text-white">
        <div className="container-page text-center">
          <Reveal className="max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              {tr(lang, "Connected Flow", "एकीकृत कार्यप्रवाह")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white">
              {tr(lang, "How The 3 Products Work Together", "यी तीन उत्पादनहरू कसरी सँगै काम गर्छन्")}
            </h2>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              {tr(
                lang,
                "A retailer rings up B2C consumer counter sales with instant QR billing → tracks inventory & restocks from B2B suppliers on Marketplace → MoveX delivers the parcel with OTP verification → dues reconcile seamlessly into digital khata.",
                "खुद्रा बिक्रेताले B2C उपभोक्ता काउन्टर बिक्री र QR बिलिङ गर्छन् → मौज्दात हेरी Marketplace बाट B2B थोक अर्डर गर्छन् → MoveX ले OTP प्रमाणीकरणसहित सामान पुर्याउँछ → हिसाब डिजिटल खातामा स्वतः मिलान हुन्छ।"
              )}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold text-navy shadow-brand hover:bg-white/90"
              >
                {tr(lang, "Explore End-to-End Workflow →", "पूर्ण कार्यप्रवाह हेर्नुहोस् →")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
