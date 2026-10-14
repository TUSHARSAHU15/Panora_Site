import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Package,
  Truck,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  Navigation,
  Wallet,
  Coins,
} from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { productsDetail } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/products/movex")({
  head: () => ({
    meta: [
      { title: "PANORA MoveX Parcel App — Reliable Parcel Delivery & Rider Network" },
      {
        name: "description",
        content:
          "PANORA MoveX is a parcel pickup and delivery coordination product connecting eligible businesses, riders, and customers across Nepal with transparent tracking and COD reconciliation.",
      },
      { property: "og:title", content: "PANORA MoveX Parcel App — Connect. Manage. Trade." },
      {
        property: "og:description",
        content: "Smart parcel dispatch, verified rider coordination, and guaranteed Cash-on-Delivery settlement for Nepal.",
      },
      { property: "og:url", content: "/products/movex" },
    ],
    links: [{ rel: "canonical", href: "/products/movex" }],
  }),
  component: MoveXPage,
});

function MoveXPage() {
  const { lang } = useLanguage();
  const prod = productsDetail[lang].movex;

  return (
    <>
      <PageHero
        eyebrow="PANORA Product Suite"
        title={prod.name}
        subtitle={prod.tagline}
        crumbs={[
          { label: tr(lang, "Products", "उत्पादनहरू"), to: "/products" },
          { label: "MoveX Parcel App" },
        ]}
        video={videos.delivery}
      />

      {/* Development Status Bar */}
      <section className="border-b border-border bg-surface py-6">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <StatusBadge status={prod.status} size="md" />
            <span className="text-xs text-navy">
              <strong>{tr(lang, "Rollout Status:", "सञ्चालन स्थिति:")}</strong> {prod.readinessSummary}
            </span>
          </div>
          <Link
            to="/rider-registration"
            className="rounded-full bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-brand hover:bg-emerald-700 shrink-0"
          >
            {tr(lang, "Join Rider Partner Network", "राइडर साझेदार बन्नुहोस्")}
          </Link>
        </div>
      </section>

      {/* Purpose & Overview */}
      <section className="container-page py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              {tr(lang, "Logistics Coordination Product", "ढुवानी समन्वय उत्पादन")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy leading-tight">
              {tr(
                lang,
                "Connecting Businesses, Couriers, and Delivery Riders",
                "व्यवसाय, कुरियर र डेलिभरी राइडरहरूलाई जोड्दै"
              )}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {prod.overview}
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "In Nepal, last-mile parcel logistics suffers from opaque tracking, missing packages, and delayed Cash-on-Delivery (COD) settlements that strangle merchant cash flow. MoveX coordinates the entire loop — from merchant booking to rider assignment, live map tracking, secure OTP handovers, and automated digital ledger updates.",
                "नेपालमा पार्सल ढुवानीमा ट्र्याकिङ नहुने, सामान हराउने र क्यास-अन-डेलिभरी (COD) रकम महिनौंसम्म रोकिने ठूलो समस्या छ। MoveX ले पार्सल बुकिङ, राइडर तोक्ने, लाइभ ट्र्याकिङ, सुरक्षित OTP र बैंक खातामा निश्चित समयमै रकम भुक्तानी गरी यो समस्या समाधान गर्दछ।"
              )}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/rider-registration"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-bold text-white shadow-brand hover:bg-emerald-700"
              >
                {tr(lang, "Register As Rider / Courier", "राइडर / कुरियर दर्ता गर्नुहोस्")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/solutions/delivery-partners"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-xs font-bold text-navy hover:border-emerald-600"
              >
                {tr(lang, "Delivery Partner Solutions", "डेलिभरी साझेदार समाधान")}
              </Link>
            </div>
          </Reveal>

          {/* Pain Points Addressed */}
          <Reveal delay={120}>
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {tr(lang, "Logistics Bottlenecks Solved By MoveX:", "MoveX ले हटाउने मुख्य समस्याहरू:")}
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

      {/* Feature Matrix with status badges */}
      <section className="bg-surface py-24 border-y border-border">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              {tr(lang, "System Capabilities", "प्रणालीका क्षमताहरू")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy">
              {tr(lang, "MoveX Features & Rollout Status", "MoveX सुविधाहरू र विकास स्थिति")}
            </h2>
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

      {/* Real-World Logistics Spotlight with Realistic Image */}
      <section className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-12 items-center rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-soft">
          <div className="lg:col-span-6 relative overflow-hidden rounded-2xl aspect-[3/2] w-full bg-slate-50 border border-border/80 shadow-sm group">
            <img
              src="/images/movex-parcel.jpg"
              alt={tr(lang, "MoveX parcel dispatch and doorstep delivery network across Nepal", "नेपालभर MoveX पार्सल डिस्प्याच र घरदैलो डेलिभरी सञ्जाल")}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 rounded-full bg-emerald-950/90 backdrop-blur px-3 py-1 text-xs font-bold text-white border border-emerald-500/30 shadow-sm flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{tr(lang, "Real-Time Tracking & OTP Handover", "लाइभ ट्र्याकिङ र सुरक्षित OTP")}</span>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              {tr(lang, "Doorstep Certainty", "निश्चित घरदैलो डेलिभरी")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
              {tr(lang, "Eliminating Missed Drops, Disputes & Courier Delays", "हराउने पार्सल, हिसाब विवाद र डेलिभरी ढिलाइको अन्त्य")}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "MoveX pairs scheduled courier routes with instant point-to-point dispatch. Shopkeepers dispatch B2C customer orders and receive B2B wholesale cartons with exact arrival countdowns and digital proof of delivery.",
                "MoveX ले नियमित कुरियर रूट र तत्काल डेलिभरीलाई जोड्छ। पसलेले ग्राहकका B2C अर्डर घरमै पठाउन सक्छन् र B2B थोक सामान ढुवानीलाई प्रत्यक्ष ट्र्याक गर्न सक्छन्।"
              )}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/rider-registration"
                className="rounded-full bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-brand hover:bg-emerald-700"
              >
                {tr(lang, "Join Rider Network", "राइडर सञ्जालमा जोडिनुहोस्")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How MoveX Works for Riders & Merchants */}
      <section className="container-page py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            {tr(lang, "Operational Workflow", "कार्यप्रणाली")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy">
            {tr(lang, "The MoveX Parcel Flow", "MoveX पार्सल प्रवाह")}
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {[
            { step: "01", title: "Book & Label", desc: "Merchant enters parcel details & recipient contact in the app." },
            { step: "02", title: "Rider Match", desc: "Nearby vetted rider receives assignment and heads to pickup." },
            { step: "03", title: "Secure Transit", desc: "Live GPS tracking with real-time status updates to sender and buyer." },
            { step: "04", title: "OTP Handover & COD", desc: "Recipient validates delivery via OTP. Cash is digitally credited." },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 70} className="h-full">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft h-full flex flex-col">
                <span className="text-sm font-extrabold text-emerald-600 shrink-0">{item.step}</span>
                <h3 className="mt-3 text-base font-bold text-navy min-h-[1.75rem] flex items-start">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Rider Onboarding CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-emerald-950 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-800">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {tr(lang, "For Delivery Riders & Courier Fleets", "डेलिभरी राइडर र कुरियरहरूका लागि")}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              {tr(lang, "Earn Dependable Income With MoveX", "MoveX सँग भरपर्दो आम्दानी गर्नुहोस्")}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
              {tr(
                lang,
                "Got a valid license and a two-wheeler? Join our early rider network. Enjoy flexible hours, steady commercial parcel jobs, and transparent weekly payouts.",
                "लाइसेन्स र मोटरसाइकल/स्कुटर छ? हाम्रो सुरुआती राइडर सञ्जालमा जोडिनुहोस्। लचिलो समय, नियमित पार्सल काम, र पारदर्शी साप्ताहिक भुक्तानी।"
              )}
            </p>
          </div>
          <Link
            to="/rider-registration"
            className="shrink-0 rounded-full bg-emerald-500 px-8 py-3.5 text-xs font-bold text-white shadow-brand hover:bg-emerald-400"
          >
            {tr(lang, "Register As Rider Partner", "राइडर साझेदार दर्ता गर्नुहोस्")}
          </Link>
        </div>
      </section>
    </>
  );
}
