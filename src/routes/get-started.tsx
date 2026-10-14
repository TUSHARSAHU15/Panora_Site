import { createFileRoute, Link } from "@tanstack/react-router";
import { Store, Warehouse, Bike, ArrowRight, Sparkles, Building2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Get Started — Choose Your Path in the PANORA Ecosystem" },
      {
        name: "description",
        content:
          "Join PANORA Pvt. Ltd. as a retail merchant, wholesale distributor, or MoveX delivery rider across Nepal.",
      },
      { property: "og:title", content: "Get Started — PANORA Pvt. Ltd." },
      { property: "og:description", content: "Choose your role in Nepal's digital commerce and logistics ecosystem." },
      { property: "og:url", content: "/get-started" },
    ],
    links: [{ rel: "canonical", href: "/get-started" }],
  }),
  component: GetStarted,
});

function GetStarted() {
  const { lang } = useLanguage();

  const options = [
    {
      title: tr(lang, "Merchant & Retailer", "व्यापारी तथा खुद्रा बिक्रेता"),
      badge: "In Development",
      badgeStatus: "In Development" as const,
      icon: Store,
      blurb: tr(
        lang,
        "Pre-book the PANORA Business App for your retail store. Enjoy free beta access to digital billing, udhaaro khata, and one-tap restock orders.",
        "आफ्नो खुद्रा पसलका लागि PANORA Business App प्रि-बुक गर्नुहोस्। बिलिङ, डिजिटल खाता र थोक अर्डरमा निःशुल्क बेटा पहुँच पाउनुहोस्।"
      ),
      cta: tr(lang, "Pre-book Business App", "Business App प्रि-बुक गर्नुहोस्"),
      to: "/merchant-registration",
      popular: true,
    },
    {
      title: tr(lang, "Delivery Rider / Fleet", "डेलिभरी राइडर / फ्लीट"),
      badge: "Available Now",
      badgeStatus: "Available" as const,
      icon: Bike,
      blurb: tr(
        lang,
        "Apply to join the MoveX parcel logistics network with your motorcycle, scooter, or delivery van. Earn steady pay with weekly bank transfers.",
        "आफ्नो बाइक, स्कुटर वा भ्यानसहित MoveX पार्सल सञ्जालमा जोडिनुहोस्। नियमित काम र साप्ताहिक बैंक भुक्तानी पाउनुहोस्।"
      ),
      cta: tr(lang, "Register as MoveX Rider", "MoveX राइडर दर्ता गर्नुहोस्"),
      to: "/rider-registration",
      popular: false,
    },
    {
      title: tr(lang, "Wholesaler / Distributor", "थोक बिक्रेता / वितरक"),
      badge: "In Development",
      badgeStatus: "In Development" as const,
      icon: Warehouse,
      blurb: tr(
        lang,
        "List your official wholesale catalogue on PANORA Marketplace, streamline warehouse packing, and coordinate local parcel dispatch.",
        "PANORA बजारमा आफ्नो थोक क्याटलग सूचीकृत गर्नुहोस्, गोदाम अर्डर व्यवस्थापन गर्नुहोस् र MoveX बाट ढुवानी गर्नुहोस्।"
      ),
      cta: tr(lang, "Distributor Pre-Booking", "वितरक प्रि-बुकिङ गर्नुहोस्"),
      to: "/merchant-registration",
      popular: false,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Get Started", "सुरु गर्नुहोस्")}
        title={tr(lang, "Join Nepal's Digital Commerce Ecosystem", "नेपालको डिजिटल व्यापार पारिस्थितिकीमा सामेल हुनुहोस्")}
        subtitle={tr(
          lang,
          "Select your role below to reserve early beta access or register as an operational partner with PANORA Pvt. Ltd.",
          "प्रारम्भिक बेटा पहुँच सुरक्षित गर्न वा PANORA Pvt. Ltd. को साझेदारका रूपमा दर्ता हुन आफ्नो भूमिका छान्नुहोस्।"
        )}
        crumbs={[{ label: tr(lang, "Get Started", "सुरु गर्नुहोस्") }]}
        video={videos.merchant}
      />

      <section className="container-page py-20">
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {options.map((o, i) => (
            <Reveal key={o.to} delay={i * 90} className="h-full">
              <div
                className={`flex flex-col h-full rounded-[2rem] border p-8 transition-all hover:-translate-y-1 ${
                  o.popular
                    ? "border-brand bg-white shadow-brand ring-2 ring-brand/20"
                    : "border-border bg-white shadow-soft hover:border-brand/40"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <o.icon className="h-6 w-6" />
                  </span>
                  <StatusBadge status={o.badgeStatus} size="sm" />
                </div>

                <h2 className="mt-6 text-xl font-extrabold text-navy min-h-[3rem] flex items-center">{o.title}</h2>
                <p className="mt-3 flex-1 text-xs text-muted-foreground leading-relaxed">{o.blurb}</p>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    to={o.to}
                    className={`flex items-center justify-center gap-2 w-full rounded-full py-3.5 text-center text-xs font-bold transition-all ${
                      o.popular
                        ? "bg-brand-gradient text-white shadow-brand hover:opacity-95"
                        : "border border-border text-navy hover:border-brand hover:text-brand"
                    }`}
                  >
                    {o.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
