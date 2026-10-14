import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag,
  Smartphone,
  Package,
  Truck,
  CheckCircle2,
  Wallet,
  ArrowRight,
  ShieldCheck,
  Store,
  Building2,
} from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — The Connected PANORA Ecosystem" },
      {
        name: "description",
        content:
          "Discover how the PANORA Business App, MoveX Parcel App, and Marketplace synchronize everyday operations, logistics, and trade across Nepal.",
      },
      { property: "og:title", content: "How It Works — PANORA Pvt. Ltd." },
      {
        property: "og:description",
        content: "From restock order to warehouse dispatch, MoveX delivery, and digital ledger settlement.",
      },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  const { lang } = useLanguage();

  const steps = [
    {
      num: "01",
      pillar: "PANORA Marketplace",
      badge: "In Development",
      title: tr(lang, "Product Discovery & Wholesale Ordering", "उत्पादन खोज तथा थोक अर्डर"),
      desc: tr(
        lang,
        "A retail merchant browses verified brand catalogues and places wholesale restock orders with clear bulk pricing and transparent payment terms.",
        "खुद्रा व्यापारीले प्रमाणित वितरकको क्याटलग ब्राउज गर्छन् र स्पष्ट थोक मूल्यमा सामान अर्डर गर्छन्।"
      ),
      icon: ShoppingBag,
      tone: "text-purple-600 bg-purple-500/10",
    },
    {
      num: "02",
      pillar: "PANORA Business App",
      badge: "In Development",
      title: tr(lang, "Distributor Acceptance & Warehouse Packing", "वितरकद्वारा स्वीकृति र गोदाम प्याकिङ"),
      desc: tr(
        lang,
        "The distributor receives the digital order immediately on the Business App, validates stock, generates the invoice, and prepares the consignment for dispatch.",
        "वितरकले तत्काल Business App मा अर्डर प्राप्त गर्छन्, स्टक जाँच गर्छन्, बिल बनाउँछन् र सामान प्याक गर्छन्।"
      ),
      icon: Smartphone,
      tone: "text-brand bg-brand/10",
    },
    {
      num: "03",
      pillar: "PANORA MoveX Parcel App",
      badge: "In Development",
      title: tr(lang, "Rider Assignment & Secure Transit", "राइडर तोकिने र सुरक्षित ढुवानी"),
      desc: tr(
        lang,
        "MoveX matches an optimized delivery partner to collect the parcels from the distributor warehouse. Live status milestones keep both sender and recipient updated.",
        "MoveX ले गोदामबाट सामान संकलन गर्न नजिकको राइडर तोक्छ र लाइभ ट्र्याकिङ मार्फत सामान कहाँ पुग्यो देखाउँछ।"
      ),
      icon: Package,
      tone: "text-emerald-600 bg-emerald-500/10",
    },
    {
      num: "04",
      pillar: "Ecosystem Settlement",
      badge: "In Development",
      title: tr(lang, "OTP Delivery & Khata Reconciliation", "OTP हस्तान्तरण र डिजिटल हिसाब मिलान"),
      desc: tr(
        lang,
        "Upon physical handover, the merchant confirms receipt via secure OTP. Cash-on-Delivery (COD) or credit ledger (khata) balances update automatically across both accounts.",
        "सामान बुझ्दा व्यापारीले OTP मार्फत पुष्टि गर्छन्। नगद वा उधारो हिसाब तुरुन्तै दुवै पक्षको खातामा स्वतः अपडेट हुन्छ।"
      ),
      icon: Wallet,
      tone: "text-brand-deep bg-brand-deep/10",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Ecosystem Integration", "पारिस्थितिकी सञ्चालन")}
        title={tr(lang, "How The PANORA Ecosystem Operates", "PANORA प्रणाली कसरी काम गर्छ")}
        subtitle={tr(
          lang,
          "Connecting the shop counter, the distribution warehouse, and the delivery rider into one transparent commercial lifecycle.",
          "पसलको काउन्टर, वितरण गोदाम, र डेलिभरी राइडरलाई एउटै पारदर्शी व्यापारिक चक्रमा जोड्दै।"
        )}
        crumbs={[{ label: tr(lang, "How It Works", "कार्यप्रणाली") }]}
        video={videos.merchant}
      />

      {/* Narrative Section */}
      <section className="container-page py-24">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {tr(lang, "The End-to-End Cycle", "पूर्ण व्यापार चक्र")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy">
            {tr(lang, "From Restock Order To Doorstep & Digital Khata", "अर्डरदेखि ढोकासम्म र डिजिटल खाता मिलान")}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "Instead of dealing with three different phone calls and messy paper slips, PANORA synchronizes every stage between the PANORA Business App, MoveX Parcel App, and PANORA Marketplace.",
              "तीनवटा अलग-अलग फोन कल र हराउने कागजका बिलहरूको झन्झट अन्त्य गर्दै, PANORA ले Business App, MoveX, र Marketplace बीच हरेक चरण स्वतः मिलाउँछ।"
            )}
          </p>
        </Reveal>

        {/* Process Flow Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {steps.map((st, i) => (
            <Reveal key={st.num} delay={i * 80} className="h-full">
              <div className="h-full rounded-3xl border border-border bg-white p-7 shadow-soft flex flex-col justify-between hover:border-brand/40 transition-colors">
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-navy font-mono">{st.num}</span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${st.tone}`}>
                      <st.icon className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      {st.pillar}
                    </span>
                    <StatusBadge status="In Development" size="sm" showIcon={false} />
                  </div>

                  <h3 className="mt-2 text-base font-bold text-navy min-h-[2.5rem] flex items-start">{st.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{st.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dual Persona Perspective */}
      <section className="bg-surface py-20 border-y border-border">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-navy">
              {tr(lang, "Two Sides of One Unified Network", "एउटै सञ्जालका दुई परिप्रेक्ष्य")}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            <Reveal delay={80} className="h-full">
              <div className="h-full flex flex-col rounded-3xl border border-border bg-white p-8 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand shrink-0">
                    <Store className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{tr(lang, "For The Retailer & Merchant (B2C & B2B)", "खुद्रा व्यापारीका लागि (B2C र B2B)")}</h3>
                    <p className="text-xs text-muted-foreground">{tr(lang, "Simplicity at the store counter & wholesale restock", "पसलको काउन्टर र थोक खरिदमा सहजता")}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{tr(lang, "Fast B2C counter billing, QR codes, and WhatsApp receipts for retail consumers.", "खुद्रा ग्राहकका लागि द्रुत B2C काउन्टर बिलिङ, क्युआर र व्हाट्सएप रसिद।")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{tr(lang, "Compare B2B wholesale prices and place restock orders directly inside the app.", "थोक मूल्य तुलना गरी सिधै एपबाट B2B रिस्टक अर्डर गर्नुहोस्।")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{tr(lang, "Track incoming wholesale cartons and dispatch B2C consumer home deliveries via MoveX.", "थोक सामानको ढुवानी र ग्राहकको घरमै डेलिभरी दुवै MoveX बाट गर्नुहोस्।")}</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160} className="h-full">
              <div className="h-full flex flex-col rounded-3xl border border-border bg-white p-8 shadow-soft space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{tr(lang, "For The Distributor & Fleet", "वितरक तथा ढुवानी साझेदारका लागि")}</h3>
                    <p className="text-xs text-muted-foreground">{tr(lang, "Clarity in the warehouse & on the road", "गोदाम र सडकमा स्पष्टता")}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{tr(lang, "Orders arrive digitally formatted with exact SKU quantities.", "अर्डरहरू स्पष्ट परिमाणसहित डिजिटल रूपमा आउँछन्।")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{tr(lang, "MoveX riders automatically dispatched upon packing completion.", "सामान प्याक हुनासाथ MoveX राइडर स्वतः तोकिन्छ।")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{tr(lang, "Cash collections and credit limits reconcile without dispute.", "संकलित नगद र उधारो सीमा बिना विवाद मिलान हुन्छ।")}</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container-page py-20 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-navy">
            {tr(lang, "Ready To Modernize Your Workflow?", "आफ्नो व्यापार आधुनिक बनाउन तयार हुनुहुन्छ?")}
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/merchant-registration"
              className="rounded-full bg-brand-gradient px-7 py-3.5 text-xs font-bold text-white shadow-brand hover:opacity-95"
            >
              {tr(lang, "Pre-book Business App", "Business App प्रि-बुक गर्नुहोस्")}
            </Link>
            <Link
              to="/rider-registration"
              className="rounded-full border border-border px-7 py-3.5 text-xs font-bold text-navy hover:border-brand"
            >
              {tr(lang, "Join as MoveX Rider", "MoveX राइडर बन्नुहोस्")}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
