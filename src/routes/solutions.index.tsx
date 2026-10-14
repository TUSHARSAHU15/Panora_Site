import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Store, Building2, Truck, Smartphone, Package, ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { BackgroundVideo } from "@/components/panora/BackgroundVideo";
import { Reveal } from "@/components/panora/Reveal";
import { CtaBand } from "@/components/panora/CtaBand";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions by Business Type — PANORA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Tailored solutions for retail merchants, wholesale distributors, and delivery fleets across Nepal. Connect. Manage. Trade with PANORA.",
      },
      { property: "og:title", content: "Solutions by Business Type — PANORA Pvt. Ltd." },
      { property: "og:description", content: "Dedicated operational tools for merchants, distributors, and delivery partners." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: Solutions,
});

function Solutions() {
  const { lang } = useLanguage();

  const blocks = [
    {
      title: tr(lang, "For Merchants & Retailers", "व्यापारी तथा खुद्रा बिक्रेता"),
      subtitle: tr(lang, "Powered by PANORA Business App", "PANORA Business App द्वारा सञ्चालित"),
      body: tr(
        lang,
        "Modernize your store counter with fast digital billing, transparent udhaaro khata, stock management, and one-tap restock orders from verified distributors.",
        "द्रुत डिजिटल बिलिङ, पारदर्शी उधारो खाता, स्टक व्यवस्थापन, र आधिकारिक वितरकबाट सिधै सामान अर्डर गरी आफ्नो पसल आधुनिक बनाउनुहोस्।"
      ),
      cta: tr(lang, "Explore Merchant Solutions", "व्यापारी समाधान हेर्नुहोस्"),
      to: "/solutions/merchants",
      video: videos.merchant,
      accent: "#016BFC",
      icon: Store,
    },
    {
      title: tr(lang, "For Wholesalers & Distributors", "थोक बिक्रेता तथा वितरकहरू"),
      subtitle: tr(lang, "Powered by Marketplace & Business App", "Marketplace र Business App द्वारा सञ्चालित"),
      body: tr(
        lang,
        "List your brand catalogue in front of verified retail shops, organize warehouse order picking, enforce merchant credit limits, and coordinate MoveX parcel dispatches.",
        "हजारौं पसलहरूको अगाडि आफ्नो क्याटलग देखाउनुहोस्, गोदाम अर्डर लाम मिलाउनुहोस्, उधारो सीमा नियन्त्रण गर्नुहोस्, र MoveX बाट पार्सल पठाउनुहोस्।"
      ),
      cta: tr(lang, "Explore Distributor Solutions", "वितरक समाधान हेर्नुहोस्"),
      to: "/solutions/distributors",
      video: videos.distributor,
      accent: "#0188FD",
      icon: Building2,
    },
    {
      title: tr(lang, "For Delivery Partners & Fleets", "डेलिभरी साझेदार तथा राइडरहरू"),
      subtitle: tr(lang, "Powered by PANORA MoveX Parcel App", "PANORA MoveX Parcel App द्वारा सञ्चालित"),
      body: tr(
        lang,
        "Receive regular commercial parcel deliveries, follow optimized routes, verify handovers with secure OTP, and enjoy guaranteed weekly bank payouts.",
        "नियमित व्यावसायिक पार्सल ढुवानी पाउनुहोस्, इन्धन बचाउने रूट पछ्याउनुहोस्, OTP मार्फत डेलिभरी पुष्टि गर्नुहोस् र निश्चित साप्ताहिक बैंक भुक्तानी पाउनुहोस्।"
      ),
      cta: tr(lang, "Explore Logistics Solutions", "ढुवानी समाधान हेर्नुहोस्"),
      to: "/solutions/delivery-partners",
      video: videos.delivery,
      accent: "#6EC30D",
      icon: Truck,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Solutions By Business Type", "व्यावसायिक भूमिका अनुसार समाधान")}
        title={tr(lang, "Tailored Tools For Your Everyday Operations", "तपाईंको दैनिक सञ्चालनका लागि अनुकूलित प्रविधि")}
        subtitle={tr(
          lang,
          "Whether you run a single retail counter, manage a provincial wholesale warehouse, or coordinate a fleet of delivery riders, PANORA aligns with your workflows.",
          "तपाईं एउटा खुद्रा पसल चलाउनुहोस्, प्रादेशिक थोक गोदाम, वा डेलिभरी फ्लीट, PANORA ले तपाईंको आवश्यकता अनुसार औजार प्रदान गर्दछ।"
        )}
        crumbs={[{ label: tr(lang, "Solutions", "समाधानहरू") }]}
      />

      <div className="py-8">
        {blocks.map((b, i) => (
          <section key={b.to} className={i % 2 === 1 ? "bg-surface" : ""}>
            <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block h-1.5 w-12 rounded-full" style={{ background: b.accent }} />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{b.subtitle}</span>
                </div>
                <h2 className="text-3xl font-extrabold sm:text-4xl text-navy">{b.title}</h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{b.body}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to={b.to}
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-xs font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
                  >
                    {b.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={120} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-soft bg-navy">
                  <div className="aspect-[4/3]">
                    <BackgroundVideo source={b.video} />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,transparent_50%,rgba(7,21,47,0.65))]" />
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CtaBand
        title={tr(lang, "Connect. Manage. Trade.", "Connect. Manage. Trade.")}
        subtitle={tr(
          lang,
          "Be a founding partner in Nepal's integrated commerce and logistics ecosystem.",
          "नेपालको एकीकृत व्यापार तथा ढुवानी पारिस्थितिकीमा संस्थापक साझेदार बन्नुहोस्।"
        )}
        primary={{ label: tr(lang, "Merchant Pre-Booking", "व्यापारी प्रि-बुकिङ"), to: "/merchant-registration" }}
        secondary={{ label: tr(lang, "Rider Registration", "राइडर दर्ता"), to: "/rider-registration" }}
      />
    </>
  );
}
