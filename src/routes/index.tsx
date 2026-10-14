import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Layers,
  LineChart,
  Package,
  ShieldCheck,
  Smartphone,
  ShoppingBag,
  Store,
  Truck,
  Users,
  Workflow,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { HomeHero } from "@/components/panora/HomeHero";
import { BackgroundVideo } from "@/components/panora/BackgroundVideo";
import { Reveal } from "@/components/panora/Reveal";
import { Counter } from "@/components/panora/Counter";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { stats, whyPanora, productsDetail } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PANORA Pvt. Ltd. — Connect. Manage. Trade. | Nepal's Digital Business Ecosystem" },
      {
        name: "description",
        content:
          "PANORA Pvt. Ltd. is building an integrated digital business ecosystem for Nepal: the PANORA Business App, PANORA MoveX Parcel App, and PANORA Marketplace.",
      },
      { property: "og:title", content: "PANORA Pvt. Ltd. — Connect. Manage. Trade." },
      {
        property: "og:description",
        content: "Powering Nepal's commerce through integrated business tools, parcel logistics, and transparent trade.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { lang } = useLanguage();
  const products = productsDetail[lang];

  return (
    <>
      {/* Hero Section */}
      <HomeHero />

      {/* Honest Ecosystem Status Bar */}
      <section className="border-b border-border bg-surface py-5">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-navy font-medium">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span>
              <strong>{tr(lang, "Transparent Development:", "पारदर्शी विकास:")}</strong>{" "}
              {tr(
                lang,
                "PANORA Pvt. Ltd. transparently labels all product capabilities based on operational readiness.",
                "PANORA Pvt. Ltd. ले आफ्ना सम्पूर्ण सुविधाहरूलाई वास्तविक तयारी अनुसार स्पष्ट रूपमा वर्गीकरण गर्छ।"
              )}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <StatusBadge status="Available" size="sm" />
            <StatusBadge status="In Development" size="sm" />
            <StatusBadge status="Planned" size="sm" />
          </div>
        </div>
      </section>

      {/* Corporate Identity & Ecosystem Purpose */}
      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider">
            <Building2 className="h-3.5 w-3.5" />
            <span>{tr(lang, "The Parent Company", "मूल कम्पनी")}</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-navy leading-tight">
            {tr(
              lang,
              "Not Just An App. A Complete Digital Business Ecosystem.",
              "केवल एउटा एप मात्र होइन। पूर्ण डिजिटल व्यापार पारिस्थितिकी।"
            )}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "PANORA Pvt. Ltd. is building infrastructure that bridges the gap between traditional Nepalese shops, modern wholesale distributors, delivery riders, and end customers.",
              "PANORA Pvt. Ltd. ले परम्परागत नेपाली पसल, आधुनिक थोक वितरक, डेलिभरी राइडर र ग्राहकहरूबीचको दूरी मेटाउने प्रविधि पूर्वाधार निर्माण गरिरहेको छ।"
            )}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "Instead of separate uncoordinated tools, we are developing three unified product pillars designed to work in synergy: the PANORA Business App, PANORA MoveX Parcel App, and PANORA Marketplace.",
              "अलग-अलग र छरिएका सफ्टवेयरको सट्टा, हामी एकआपसमा जोडिएर काम गर्ने तीनवटा मुख्य उत्पादनहरू विकास गर्दैछौं: Business App, MoveX पार्सल एप, र PANORA बजार।"
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
            >
              {tr(lang, "Learn About PANORA Pvt. Ltd.", "PANORA Pvt. Ltd. बारे थप जान्नुहोस्")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/vision-mission"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-bold text-navy hover:border-brand hover:text-brand transition-colors"
            >
              {tr(lang, "Vision & Purpose", "दृष्टिकोण र उद्देश्य")}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-border shadow-soft bg-navy group">
            <div className="aspect-[3/2] overflow-hidden bg-slate-950/20">
              <img
                src="/images/corporate-ecosystem.jpg"
                alt="PANORA Connected Digital Business Ecosystem — Local Shops, Wholesalers, MoveX Riders, Consumers"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
            <div className="glass-card absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
                  {tr(lang, "Brand Direction", "ब्राण्डको मूल मर्म")}
                </span>
                <span className="text-xs text-white/70 font-semibold">Nepal</span>
              </div>
              <p className="mt-1 text-base sm:text-lg font-extrabold text-white">Connect. Manage. Trade.</p>
              <p className="mt-0.5 text-xs text-white/80 leading-relaxed">
                {tr(
                  lang,
                  "Transforming daily operations from pen-and-paper friction to synchronized digital flow.",
                  "कापी र कलमको झन्झटबाट मुक्त गरी दैनिक व्यापारलाई डिजिटल लयमा ढाल्दै।"
                )}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The 3 Core Product Pillars Section */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="container-page">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              {tr(lang, "Product Architecture", "उत्पादन संरचना")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-navy">
              {tr(lang, "Our Three Core Products", "हाम्रा तीन मुख्य उत्पादनहरू")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "Each product addresses a critical pillar of Nepal's commercial supply chain, with transparent disclosures on current development progress.",
                "प्रत्येक उत्पादनले नेपालको व्यापारिक शृङ्खलाको महत्वपूर्ण पक्षलाई सम्बोधन गर्दछ, हालको विकास स्थितिको पूर्ण पारदर्शितासहित।"
              )}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
            {/* Product 1: PANORA Business App */}
            <Reveal delay={80} className="h-full">
              <div className="flex flex-col h-full rounded-[2rem] border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-brand">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <StatusBadge status={products.businessApp.status} size="sm" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-navy">
                  {products.businessApp.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-brand">
                  {tr(lang, "Dual B2B & B2C: Wholesale Restock + Consumer POS", "B2B र B2C: थोक खरिद + खुद्रा काउन्टर बिलिङ")}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {products.businessApp.overview}
                </p>

                <div className="mt-6 pt-5 border-t border-border flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    {tr(lang, "Key Capabilities & Status:", "मुख्य क्षमता तथा स्थिति:")}
                  </p>
                  <ul className="space-y-2.5">
                    {products.businessApp.features.slice(0, 4).map((f) => (
                      <li key={f.name} className="flex items-start justify-between gap-2 text-xs">
                        <span className="text-navy font-medium">{f.name}</span>
                        <StatusBadge status={f.status} size="sm" showIcon={false} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between gap-3">
                  <Link
                    to="/products/business-app"
                    className="text-xs font-bold text-navy hover:text-brand transition-colors"
                  >
                    {tr(lang, "Detailed Specs →", "विस्तृत विवरण →")}
                  </Link>
                  <Link
                    to="/merchant-registration"
                    className="rounded-full bg-brand-gradient px-4 py-2 text-xs font-bold text-white shadow-brand hover:opacity-95"
                  >
                    {tr(lang, "Pre-book Beta", "बेटा प्रि-बुक गर्नुहोस्")}
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Product 2: MoveX Parcel App */}
            <Reveal delay={160} className="h-full">
              <div className="flex flex-col h-full rounded-[2rem] border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-brand">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                    <Package className="h-6 w-6" />
                  </div>
                  <StatusBadge status={products.movex.status} size="sm" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-navy">
                  {products.movex.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-emerald-600">
                  {tr(lang, "For Parcel Logistics, Riders & Businesses", "पार्सल ढुवानी, राइडर र व्यवसायका लागि")}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {products.movex.overview}
                </p>

                <div className="mt-6 pt-5 border-t border-border flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    {tr(lang, "Key Capabilities & Status:", "मुख्य क्षमता तथा स्थिति:")}
                  </p>
                  <ul className="space-y-2.5">
                    {products.movex.features.slice(0, 4).map((f) => (
                      <li key={f.name} className="flex items-start justify-between gap-2 text-xs">
                        <span className="text-navy font-medium">{f.name}</span>
                        <StatusBadge status={f.status} size="sm" showIcon={false} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between gap-3">
                  <Link
                    to="/products/movex"
                    className="text-xs font-bold text-navy hover:text-brand transition-colors"
                  >
                    {tr(lang, "Detailed Specs →", "विस्तृत विवरण →")}
                  </Link>
                  <Link
                    to="/rider-registration"
                    className="rounded-full border border-emerald-600 text-emerald-600 px-4 py-2 text-xs font-bold hover:bg-emerald-50"
                  >
                    {tr(lang, "Join as Rider", "राइडर बन्नुहोस्")}
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Product 3: PANORA Marketplace */}
            <Reveal delay={240} className="h-full">
              <div className="flex flex-col h-full rounded-[2rem] border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-brand">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <StatusBadge status={products.marketplace.status} size="sm" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-navy">
                  {products.marketplace.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-purple-600">
                  {tr(lang, "For Wholesale Discovery & B2B/B2C Trade", "थोक सामान खोज र B2B/B2C व्यापारका लागि")}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {products.marketplace.overview}
                </p>

                <div className="mt-6 pt-5 border-t border-border flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    {tr(lang, "Key Capabilities & Status:", "मुख्य क्षमता तथा स्थिति:")}
                  </p>
                  <ul className="space-y-2.5">
                    {products.marketplace.features.slice(0, 4).map((f) => (
                      <li key={f.name} className="flex items-start justify-between gap-2 text-xs">
                        <span className="text-navy font-medium">{f.name}</span>
                        <StatusBadge status={f.status} size="sm" showIcon={false} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between gap-3">
                  <Link
                    to="/products/marketplace"
                    className="text-xs font-bold text-navy hover:text-brand transition-colors"
                  >
                    {tr(lang, "Detailed Specs →", "विस्तृत विवरण →")}
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-full border border-purple-600 text-purple-600 px-4 py-2 text-xs font-bold hover:bg-purple-50"
                  >
                    {tr(lang, "Supplier Listing", "आपूर्तिकर्ता सूचीकरण")}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Target Audiences / Solutions by Business Type */}
      <section className="container-page py-24">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {tr(lang, "Target Users & Stakeholders", "लक्षित प्रयोगकर्ता तथा साझेदार")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-navy">
            {tr(
              lang,
              "Tailored Solutions for Every Business Role",
              "प्रत्येक व्यावसायिक भूमिकाका लागि उपयुक्त समाधान"
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "Whether you run a single retail counter, a multi-warehouse distributorship, or a commercial delivery fleet, PANORA provides dedicated tools for your workflows.",
              "तपाईं एउटा खुद्रा काउन्टर चलाउनुहोस् वा बहु-गोदाम वितरण व्यवसाय, PANORA ले तपाईंको कार्यप्रवाह अनुसार समर्पित औजार प्रदान गर्दछ।"
            )}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3 items-stretch">
          {/* Merchants & Retailers */}
          <Reveal delay={80} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-border p-7 hover:border-brand/50 transition-all bg-white shadow-soft">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Store className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">
                  {tr(lang, "Retailers & Merchants (B2C & B2B)", "खुद्रे व्यापारीहरू (B2C र B2B)")}
                </h3>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                  Kirana, Hardware, Fancy, Electronics & Pharmacies
                </p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span>{tr(lang, "Fast B2C counter billing, QR codes & WhatsApp receipts", "द्रुत B2C काउन्टर बिलिङ, क्युआर र व्हाट्सएप रसिद")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span>{tr(lang, "Dual Digital Udhaaro Khata (Consumer & Supplier)", "दोहोरो डिजिटल उधारो खाता (ग्राहक र वितरक)")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span>{tr(lang, "One-tap B2B restock from verified distributors", "प्रमाणित वितरकबाट एक ट्यापमा B2B रिस्टक")}</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-auto">
                <Link
                  to="/solutions/merchants"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
                >
                  {tr(lang, "Explore Merchant Solutions →", "व्यापारी समाधान हेर्नुहोस् →")}
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Wholesalers & Distributors */}
          <Reveal delay={160} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-border p-7 hover:border-brand/50 transition-all bg-white shadow-soft">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-deep/10 text-brand-deep">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">
                  {tr(lang, "Wholesalers & Distributors", "थोक बिक्रेता तथा वितरकहरू")}
                </h3>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                  FMCG Brands, Regional Stockists & Importers
                </p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-deep shrink-0" />
                    <span>{tr(lang, "Real-time warehouse order queue management", "गोदाम अर्डर लामको प्रत्यक्ष व्यवस्थापन")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-deep shrink-0" />
                    <span>{tr(lang, "Merchant credit limits & ledger reconciliation", "व्यापारी क्रेडिट सीमा र खाता मिलान")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-deep shrink-0" />
                    <span>{tr(lang, "Multi-location dispatch synchronization", "बहु-स्थान प्रेषण समन्वय")}</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-auto">
                <Link
                  to="/solutions/distributors"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-deep hover:underline"
                >
                  {tr(lang, "Explore Distributor Solutions →", "वितरक समाधान हेर्नुहोस् →")}
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Delivery Partners & Fleets */}
          <Reveal delay={240} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-border p-7 hover:border-brand/50 transition-all bg-white shadow-soft">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">
                  {tr(lang, "Delivery Partners & Riders", "डेलिभरी साझेदार तथा राइडर")}
                </h3>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                  Two-Wheeler Couriers, Van Fleets & Logistics Operators
                </p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{tr(lang, "Steady business parcel pickup assignments", "नियमित पार्सल पिकअप तथा डेलिभरी काम")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{tr(lang, "Automated COD collection & transparent payouts", "स्वचालित COD संकलन र समयमै पारदर्शी भुक्तानी")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{tr(lang, "Route optimization reducing empty trips", "रूट अनुकूलन जसले खाली यात्रा घटाउँछ")}</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-auto">
                <Link
                  to="/solutions/delivery-partners"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
                >
                  {tr(lang, "Explore Logistics Solutions →", "ढुवानी समाधान हेर्नुहोस् →")}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problems We Aim to Solve */}
      <section className="bg-navy py-24 text-white">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              {tr(lang, "The Challenge In Nepal", "नेपालको व्यापारिक चुनौती")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              {tr(lang, "Core Problems We Are Solving", "हामी समाधान गर्दै गरेका मुख्य समस्याहरू")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed">
              {tr(
                lang,
                "Commerce in Nepal is resilient, but held back by fragmented communications and paper-bound bottlenecks. Here is how PANORA Pvt. Ltd. creates lasting value.",
                "नेपाली व्यापार साहसी छ, तर छरिएका फोन कल र कापीको हिसाबले यसलाई सीमित बनाएको छ। PANORA ले कसरी दिगो परिवर्तन ल्याउँछ हेर्नुहोस्।"
              )}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            <Reveal delay={60} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="text-xs font-extrabold text-brand-cyan">01 / Friction</span>
                <h3 className="mt-3 text-lg font-bold text-white min-h-[3.25rem] sm:min-h-[3.5rem] flex items-start">
                  {tr(lang, "Paper Ledgers & Lost Udhaaro", "कापीको हिसाब र हराएको उधारो")}
                </h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed flex-1">
                  {tr(
                    lang,
                    "Lost pages and disputed balances cause distrust. Our digital ledger creates mutual confirmation between buyers and sellers.",
                    "कापी हराउँदा वा हिसाब नमिलेर हुने विवाद हटाउन दुवै पक्षको आपसी सहमतिमा आधारित डिजिटल खाता।"
                  )}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="text-xs font-extrabold text-brand-cyan">02 / Logistics</span>
                <h3 className="mt-3 text-lg font-bold text-white min-h-[3.25rem] sm:min-h-[3.5rem] flex items-start">
                  {tr(lang, "Opaque Parcel Delivery", "अस्पष्ट पार्सल डेलिभरी")}
                </h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed flex-1">
                  {tr(
                    lang,
                    "Calling riders repeatedly to check parcel locations wastes hours. MoveX introduces status checkpoints and OTP handovers.",
                    "सामान कहाँ पुग्यो भनी पटक-पटक फोन गर्नुपर्ने झन्झट अन्त्य गर्न MoveX लाइभ ट्र्याकिङ र सुरक्षित OTP।"
                  )}
                </p>
              </div>
            </Reveal>

            <Reveal delay={180} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="text-xs font-extrabold text-brand-cyan">03 / Supply</span>
                <h3 className="mt-3 text-lg font-bold text-white min-h-[3.25rem] sm:min-h-[3.5rem] flex items-start">
                  {tr(lang, "Middlemen Price Inflation", "बिचौलियाको उच्च कमिसन")}
                </h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed flex-1">
                  {tr(
                    lang,
                    "Shops outside central hubs pay steep markups. PANORA Marketplace unlocks direct verified wholesale supplier catalogues.",
                    "गाउँ तथा मोफसलका पसलहरूले बढी मूल्य तिर्नु नपरोस् भनी सिधै आधिकारिक वितरकको क्याटलगमा पहुँच।"
                  )}
                </p>
              </div>
            </Reveal>

            <Reveal delay={240} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="text-xs font-extrabold text-brand-cyan">04 / Cash Flow</span>
                <h3 className="mt-3 text-lg font-bold text-white min-h-[3.25rem] sm:min-h-[3.5rem] flex items-start">
                  {tr(lang, "Delayed COD Remittances", "रोकिएको क्यास-अन-डेलिभरी रकम")}
                </h3>
                <p className="mt-2 text-xs text-white/70 leading-relaxed flex-1">
                  {tr(
                    lang,
                    "Merchants often wait weeks for courier COD payouts. MoveX guarantees scheduled, transparent digital settlement.",
                    "कुरियरले नगद भुक्तानी हप्तौंसम्म रोक्ने समस्या समाधान गर्न डिजिटल हिसाब र निश्चित समयमा बैंक भुक्तानी।"
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand Values: Connect. Manage. Trade. */}
      <section className="container-page py-24">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {tr(lang, "Our Guiding Philosophy", "हाम्रो मार्गदर्शक सिद्धान्त")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-navy">
            Connect. Manage. Trade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "Three interconnected actions defining how PANORA Pvt. Ltd. approaches digital transformation for Nepal's trade.",
              "यी तीन अन्तरसम्बन्धित कार्यहरू जसले नेपालको व्यापारलाई डिजिटल युगमा रूपान्तरण गर्न PANORA को दृष्टिकोण परिभाषित गर्दछ।"
            )}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {whyPanora[lang].map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft hover:border-brand/40 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand font-extrabold text-sm shrink-0">
                  {`0${i + 1}`}
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy min-h-[3rem] flex items-start">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust & Commitment Indicators */}
      <section className="border-y border-border bg-surface py-16">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats[lang].map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center lg:text-left">
              <p className="text-4xl font-extrabold text-brand-gradient sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dual Registration Call to Action Band */}
      <section className="container-page py-24">
        <div className="rounded-[2.5rem] bg-night-gradient p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-cyan">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{tr(lang, "Be Part of the Founding Rollout", "संस्थापक चरणमा सामेल हुनुहोस्")}</span>
            </span>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white leading-tight">
              {tr(
                lang,
                "Ready to Modernize Your Business or Delivery Operations?",
                "आफ्नो व्यापार वा डेलिभरी कार्यप्रवाह आधुनिक बनाउन तयार हुनुहुन्छ?"
              )}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              {tr(
                lang,
                "Pre-book the PANORA Business App for early beta access, or register as an early delivery rider with MoveX. We are onboarding founding partners across Nepal.",
                "बेटा संस्करणमा प्राथमिकता पाउन Business App प्रि-बुक गर्नुहोस्, वा MoveX सँग अग्रगामी राइडरका रूपमा दर्ता हुनुहोस्। हामी नेपालभर संस्थापक साझेदारहरू जोड्दैछौं।"
              )}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/merchant-registration"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy shadow-brand transition-transform hover:-translate-y-0.5"
              >
                {tr(lang, "Merchant Pre-Booking", "व्यापारी प्रि-बुकिङ")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/rider-registration"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur hover:bg-white/20 transition-colors"
              >
                {tr(lang, "Rider / Fleet Registration", "राइडर / फ्लीट दर्ता")}
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-semibold text-white/80 hover:text-white"
              >
                {tr(lang, "View Pricing Plans →", "मूल्य विवरण हेर्नुहोस् →")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
