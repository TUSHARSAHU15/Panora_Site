import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Smartphone, Package, ShoppingBag, ShieldCheck } from "lucide-react";
import { BackgroundVideo } from "./BackgroundVideo";
import { StatusBadge } from "./StatusBadge";
import { heroSequence } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const { lang } = useLanguage();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSequence[lang].length), 7000);
    return () => clearInterval(id);
  }, [lang]);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-night-gradient pb-20 pt-36 text-white">
      {/* Background Videos */}
      <div className="absolute inset-0 -z-20">
        {heroSequence[lang].map((clip, i) => (
          <div
            key={clip.video.id}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <BackgroundVideo source={clip.video} eager={i === 0} active={i === index} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(7,21,47,0.92)_0%,rgba(1,86,232,0.72)_55%,rgba(1,136,253,0.50)_100%)]" />

      <div className="container-page relative z-10">
        {/* Company & Tagline Pill */}
        <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur sm:gap-3">
          <span className="flex items-center gap-1.5 text-brand-cyan">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PANORA Pvt. Ltd.</span>
          </span>
          <span className="text-white/40">|</span>
          <span className="uppercase tracking-[0.2em] text-white">
            {tr(lang, "Connect. Manage. Trade.", "Connect. Manage. Trade.")}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-6 max-w-4xl text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
          {tr(
            lang,
            "Building Nepal's Integrated Digital Business Ecosystem",
            "नेपालको एकीकृत डिजिटल व्यवसाय र ढुवानी पारिस्थितिकी"
          )}
        </h1>

        {/* Subhead with realistic framing */}
        <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl leading-relaxed">
          {tr(
            lang,
            "Unifying business workflows, on-demand parcel logistics, and transparent trade under one cohesive technology framework. Built for the reality of Nepalese commerce.",
            "व्यावसायिक कार्यप्रवाह, अन-डिमान्ड पार्सल ढुवानी, र पारदर्शी बजारलाई एउटै प्रविधि संरचनामा जोड्दै। नेपाली व्यापारको वास्तविक धरातलका लागि निर्मित।"
          )}
        </p>

        {/* Primary CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          <Link
            to="/merchant-registration"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy shadow-brand transition-all hover:-translate-y-0.5 hover:bg-white/95"
          >
            {tr(lang, "Pre-book Business App", "Business App प्रि-बुक गर्नुहोस्")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/rider-registration"
            className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20"
          >
            {tr(lang, "Join MoveX Rider Network", "MoveX राइडर बन्नुहोस्")}
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-semibold text-white/80 hover:text-white transition-colors"
          >
            {tr(lang, "Explore Products & Roadmap →", "उत्पादन र मार्गचित्र हेर्नुहोस् →")}
          </Link>
        </div>

        {/* The 3 Core Pillars Preview Bar */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 max-w-4xl items-stretch">
          {/* Pillar 1 */}
          <Link
            to="/products/business-app"
            className="group flex flex-col h-full rounded-2xl border border-white/20 bg-white/10 p-4.5 backdrop-blur-md transition-all hover:border-amber-400/50 hover:bg-white/15"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-deep/80 text-white shrink-0">
                  <Smartphone className="h-4 w-4" />
                </div>
                <h2 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                  PANORA Business App
                </h2>
              </div>
              <StatusBadge status="In Development" size="sm" theme="dark" highlighted />
            </div>
            <p className="mt-2 text-xs text-white/75 leading-relaxed flex-1">
              {tr(
                lang,
                "B2B wholesale restock + B2C counter billing, QR payments & digital udhaaro khata.",
                "B2B थोक सामान अर्डर + B2C काउन्टर बिलिङ, QR भुक्तानी र डिजिटल उधारो खाता।"
              )}
            </p>
          </Link>

          {/* Pillar 2 */}
          <Link
            to="/products/movex"
            className="group flex flex-col h-full rounded-2xl border border-white/20 bg-white/10 p-4.5 backdrop-blur-md transition-all hover:border-amber-400/50 hover:bg-white/15"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/80 text-white shrink-0">
                  <Package className="h-4 w-4" />
                </div>
                <h2 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                  MoveX Parcel App
                </h2>
              </div>
              <StatusBadge status="In Development" size="sm" theme="dark" highlighted />
            </div>
            <p className="mt-2 text-xs text-white/75 leading-relaxed flex-1">
              {tr(
                lang,
                "Parcel pickup, delivery coordination, live GPS tracking, and COD settlement.",
                "पार्सल पिकअप, डेलिभरी समन्वय, लाइभ ट्र्याकिङ, र COD हिसाब।"
              )}
            </p>
          </Link>

          {/* Pillar 3 */}
          <Link
            to="/products/marketplace"
            className="group flex flex-col h-full rounded-2xl border border-white/20 bg-white/10 p-4.5 backdrop-blur-md transition-all hover:border-amber-400/50 hover:bg-white/15"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/80 text-white shrink-0">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <h2 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">
                  PANORA Marketplace
                </h2>
              </div>
              <StatusBadge status="In Development" size="sm" theme="dark" highlighted />
            </div>
            <p className="mt-2 text-xs text-white/75 leading-relaxed flex-1">
              {tr(
                lang,
                "Verified distributor catalogues, wholesale price discovery, and multi-tier trade.",
                "प्रमाणित वितरक क्याटलग, थोक मूल्य खोज, र बहु-तह व्यापार।"
              )}
            </p>
          </Link>
        </div>

        {/* Video Reel Ticker */}
        <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span>
            {tr(lang, "Active Showcase:", "प्रस्तुति:")} {heroSequence[lang][index]?.caption}
          </span>
        </div>
      </div>
    </section>
  );
}
