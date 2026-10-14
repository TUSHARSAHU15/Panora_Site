import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  Package,
  ShoppingBag,
  Sparkles,
  Users2,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { BackgroundVideo } from "@/components/panora/BackgroundVideo";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { coreValues } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PANORA Pvt. Ltd. — Parent Company & Digital Ecosystem" },
      {
        name: "description",
        content:
          "Learn about PANORA Pvt. Ltd., the parent company building Nepal's integrated digital business ecosystem: Business App, MoveX Parcel App, and Marketplace.",
      },
      { property: "og:title", content: "About PANORA Pvt. Ltd. — Connect. Manage. Trade." },
      {
        property: "og:description",
        content: "Our corporate purpose, founding story, core values, and multi-product strategy for Nepal.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const { lang } = useLanguage();
  const values = coreValues[lang];

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "About PANORA Pvt. Ltd.", "PANORA Pvt. Ltd. बारे")}
        title={tr(
          lang,
          "Building Nepal's Integrated Digital Business Ecosystem",
          "नेपालको एकीकृत डिजिटल व्यवसाय पारिस्थितिकी निर्माण गर्दै"
        )}
        subtitle={tr(
          lang,
          "PANORA Pvt. Ltd. is the parent company orchestrating everyday business software, parcel logistics coordination, and transparent marketplace trade.",
          "PANORA Pvt. Ltd. दैनिक व्यापार सफ्टवेयर, पार्सल ढुवानी समन्वय, र पारदर्शी बजार व्यापार सञ्चालन गर्ने मूल प्रविधि कम्पनी हो।"
        )}
        crumbs={[{ label: tr(lang, "About", "हाम्रो बारेमा") }]}
        video={videos.distributor}
      />

      {/* Corporate Identity & Purpose */}
      <section className="container-page py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider">
              <Building2 className="h-3.5 w-3.5" />
              <span>{tr(lang, "Company Purpose", "कम्पनीको उद्देश्य")}</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-navy leading-tight">
              {tr(
                lang,
                "More Than An App: A Sustainable Commerce Infrastructure",
                "एउटा एप मात्र होइन: दिगो व्यापार पूर्वाधार"
              )}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "PANORA Pvt. Ltd. was incorporated with a clear mandate: solve the real-world friction of trade in Nepal without disrupting the trusted relationships that sustain local commerce.",
                "PANORA Pvt. Ltd. एक स्पष्ट उद्देश्यका साथ स्थापना भएको हो: स्थानीय व्यापारलाई जोगाउँदै नेपालको व्यापारिक शृङ्खलामा रहेका व्यावहारिक झन्झटहरू समाधान गर्ने।"
              )}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "Trade in Nepal relies heavily on personal trust, paper ledgers (khata), unrecorded phone calls, and manual parcel handoffs. While relationships are strong, fragmented record-keeping and unpredictable logistics throttle growth. PANORA bridges this divide through three cohesive products: the PANORA Business App, PANORA MoveX Parcel App, and PANORA Marketplace.",
                "नेपाली व्यापार व्यक्तिगत विश्वास, कापीको खाता, फोन कल र म्यानुअल पार्सल ढुवानीमा चल्छ। सम्बन्ध बलियो भए पनि हिसाबकिताबको अव्यवस्था र ढुवानीको अनिश्चितताले व्यापार विस्तार रोकेको छ। PANORA ले आफ्ना तीन उत्पादनहरू Business App, MoveX, र Marketplace मार्फत यो खाडल पुर्दछ।"
              )}
            </p>

            <div className="mt-8 flex items-center gap-4 text-xs font-bold text-navy">
              <div className="flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 border border-border">
                <MapPin className="h-3.5 w-3.5 text-brand" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 border border-border">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Registered Private Limited</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2.25rem] border border-border shadow-soft bg-navy">
              <div className="aspect-[4/3]">
                <BackgroundVideo source={videos.merchant} />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,transparent_40%,rgba(7,21,47,0.85))]" />
              <div className="glass-card absolute bottom-6 left-6 right-6 rounded-2xl p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  {tr(lang, "Strategic Brand Direction", "रणनीतिक ब्राण्ड दिशा")}
                </p>
                <p className="mt-1 text-xl font-extrabold">Connect. Manage. Trade.</p>
                <p className="mt-1 text-xs text-white/80 leading-relaxed">
                  {tr(
                    lang,
                    "Our ecosystem ensures every partner — from local shopkeepers to delivery riders — enjoys transparent tools and verified settlements.",
                    "हाम्रो पारिस्थितिकीले स्थानीय पसलेदेखि डेलिभरी राइडरसम्म सबैलाई पारदर्शी औजार र प्रामाणिक भुक्तानी सुनिश्चित गर्दछ।"
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision, Mission & Strategic Approach */}
      <section className="bg-surface py-20 border-y border-border">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              {tr(lang, "Guiding Compass", "मार्गदर्शन")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy">
              {tr(lang, "Vision & Mission", "हाम्रो दृष्टि र लक्ष्य")}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            <Reveal delay={80} className="h-full">
              <div className="h-full flex flex-col rounded-3xl border border-border bg-white p-9 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand shrink-0">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-navy">
                  {tr(lang, "Our Vision", "हाम्रो दीर्घकालीन दृष्टि")}
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed flex-1">
                  {tr(
                    lang,
                    "To become Nepal's most trusted and indispensable digital business backbone — seamlessly interconnecting retail merchants, wholesale distributors, logistics fleets, and consumers into a friction-free national commerce grid.",
                    "नेपालको सबैभन्दा भरपर्दो र अपरिहार्य डिजिटल व्यापार ढाँचा बन्ने — जहाँ खुद्रा व्यापारी, थोक वितरक, ढुवानी फ्लीट र उपभोक्ताहरू झन्झटमुक्त राष्ट्रिय व्यापार सञ्जालमा जोडिनेछन्।"
                  )}
                </p>
              </div>
            </Reveal>

            <Reveal delay={160} className="h-full">
              <div className="h-full flex flex-col rounded-3xl border border-border bg-white p-9 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shrink-0">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-navy">
                  {tr(lang, "Our Mission", "हाम्रो लक्ष्य")}
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed flex-1">
                  {tr(
                    lang,
                    "To simplify daily business operations, modernize credit ledgers, democratize access to source pricing, and orchestrate dependable parcel logistics through practical, user-centric technology adapted to local realities.",
                    "दैनिक व्यापार सञ्चालन सरल बनाउने, उधारो खाता आधुनिक पार्ने, स्रोत मूल्यमा सबैको पहुँच पुर्‍याउने, र स्थानीय आवश्यकता अनुसारको व्यावहारिक प्रविधि मार्फत भरपर्दो पार्सल ढुवानी सञ्चालन गर्ने।"
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* On-The-Ground Reality & Technology Strip */}
      <section className="container-page py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal delay={80}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft">
              <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/nepal-market.jpg"
                  alt={tr(lang, "Local trade and commerce in Nepal", "नेपालको स्थानीय व्यापार र बजार")}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  {tr(lang, "Ground Reality", "धरातलीय यथार्थ")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy">
                  {tr(lang, "Rooted in Nepal's Commercial Fabric", "नेपालको व्यापारिक यथार्थमा आधारित")}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {tr(
                    lang,
                    "From busy New Road wholesalers to neighborhood kirana stores in Pokhara and Biratnagar, we build software that respects existing relationships while eliminating operational friction.",
                    "काठमाडौँको न्यूरोडदेखि पोखरा र विराटनगरका गल्ली पसलहरूसम्म, हामी पुराना भरपर्दा सम्बन्धलाई नबिगारी आधुनिक प्रविधि जोड्छौं।"
                  )}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft">
              <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src="/images/team-nepal.jpg"
                  alt={tr(lang, "Technology engineering team in Kathmandu", "काठमाडौँमा प्रविधि निर्माण गर्दै हाम्रो टोली")}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  {tr(lang, "Engineering & Execution", "प्रविधि तथा कार्यान्वयन")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy">
                  {tr(lang, "Crafted by Engineers in Kathmandu", "काठमाडौँका इन्जिनियरहरूद्वारा निर्मित")}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {tr(
                    lang,
                    "Our engineering, logistics, and partner operations teams are on the ground in Bagmati Province, rigorously testing every billing, dispatch, and ledger module with local pilot merchants.",
                    "हाम्रो प्राविधिक तथा सञ्चालन टोली स्थानीय व्यापारीहरूसँग प्रत्यक्ष सहकार्य गर्दै हरेक बिलिङ, डेलिभरी र खाता मोड्युललाई व्यावहारिक रूपमा परीक्षण गरिरहेको छ।"
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The 3 Products Alignment */}
      <section className="container-page py-24 border-t border-border">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {tr(lang, "Product Strategy", "उत्पादन रणनीति")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-navy">
            {tr(lang, "Three Focused Products Under One Ecosystem", "एउटै पारिस्थितिकी अन्तर्गत तीन विशिष्ट उत्पादनहरू")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "Rather than a single monolithic app, PANORA Pvt. Ltd. develops dedicated applications optimized for specific workflows, each with honest lifecycle tracking.",
              "एउटै बोझिलो एप बनाउनुको सट्टा, PANORA ले विशिष्ट कार्यप्रवाहका लागि समर्पित उत्पादनहरू विकास गर्दैछ, प्रत्येकको विकास स्थिति स्पष्ट रूपमा सार्वजनिक गरेर।"
            )}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3 items-stretch">
          <Reveal delay={80} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-border p-7 bg-white shadow-soft">
              <div>
                <div className="flex items-center justify-between">
                  <Smartphone className="h-6 w-6 text-brand" />
                  <StatusBadge status="In Development" size="sm" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">PANORA Business App (B2B & B2C)</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {tr(
                    lang,
                    "Dual B2B & B2C engine for merchants, retailers, and distributors to manage consumer POS billing, digital udhaaro, inventory, and wholesale restock.",
                    "व्यापारी तथा वितरकहरूका लागि B2C काउन्टर बिलिङ, डिजिटल उधारो खाता, स्टक र B2B थोक अर्डर सञ्चालन गर्ने दोहोरो इन्जिन।"
                  )}
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <Link to="/products/business-app" className="inline-block text-xs font-bold text-brand hover:underline">
                  {tr(lang, "Explore Product Specs →", "उत्पादन विवरण हेर्नुहोस् →")}
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-border p-7 bg-white shadow-soft">
              <div>
                <div className="flex items-center justify-between">
                  <Package className="h-6 w-6 text-emerald-600" />
                  <StatusBadge status="In Development" size="sm" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">PANORA MoveX Parcel App</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {tr(
                    lang,
                    "Parcel pickup and delivery coordination connecting eligible businesses, customers, and delivery riders.",
                    "पार्सल पिकअप, डेलिभरी समन्वय, र वास्तविक समयको राइडर ट्र्याकिङ प्रणाली।"
                  )}
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <Link to="/products/movex" className="inline-block text-xs font-bold text-emerald-600 hover:underline">
                  {tr(lang, "Explore Product Specs →", "उत्पादन विवरण हेर्नुहोस् →")}
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-border p-7 bg-white shadow-soft">
              <div>
                <div className="flex items-center justify-between">
                  <ShoppingBag className="h-6 w-6 text-purple-600" />
                  <StatusBadge status="In Development" size="sm" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">PANORA Marketplace</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {tr(
                    lang,
                    "Multi-vendor product discovery and catalogue trade, currently introducing wholesale directories with consumer features planned.",
                    "बहु-विक्रेता उत्पादन खोज तथा क्याटलग व्यापार, हाल थोक निर्देशिका विकासमा।"
                  )}
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <Link to="/products/marketplace" className="inline-block text-xs font-bold text-purple-600 hover:underline">
                  {tr(lang, "Explore Product Specs →", "उत्पादन विवरण हेर्नुहोस् →")}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-navy py-24 text-white">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              {tr(lang, "What We Stand For", "हाम्रो मूल्य र मान्यता")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white">
              {tr(lang, "Our Core Values", "हाम्रा मूल मान्यताहरू")}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="h-full">
                <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-brand-cyan font-bold text-sm shrink-0">
                    {`0${i + 1}`}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white min-h-[1.75rem] flex items-start">{v.title}</h3>
                  <p className="mt-2 text-xs text-white/75 leading-relaxed flex-1">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Future Direction CTA */}
      <section className="container-page py-24">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              {tr(lang, "Future Direction & Opportunities", "भावी दिशा तथा अवसरहरू")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">
              {tr(lang, "Partner With Us Or Join The Team", "हामीसँग साझेदारी गर्नुहोस् वा टोलीमा जोडिनुहोस्")}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {tr(
                lang,
                "We are actively seeking logistics fleet partners, financial institutions, and passionate builders in engineering and operations to scale PANORA Pvt. Ltd.",
                "हामी PANORA Pvt. Ltd. को विस्तारका लागि ढुवानी फ्लीट साझेदार, वित्तीय संस्था, र प्रविधि तथा सञ्चालन क्षेत्रका दक्ष व्यक्तिहरूको खोजीमा छौं।"
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/partners-careers"
                className="rounded-full bg-brand-gradient px-6 py-3.5 text-xs font-bold text-white shadow-brand hover:opacity-95"
              >
                {tr(lang, "Explore Strategic Partnerships →", "रणनीतिक साझेदारी अवसरहरू हेर्नुहोस् →")}
              </Link>
              <Link
                to="/merchant-registration"
                className="rounded-full border border-border bg-white px-6 py-3.5 text-xs font-bold text-navy hover:border-brand"
              >
                {tr(lang, "Pre-book Business App", "Business App प्रि-बुक गर्नुहोस्")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
