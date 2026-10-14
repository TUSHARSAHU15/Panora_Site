import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Sparkles, Target, ShieldCheck, HeartHandshake, ArrowRight, Milestone, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision, Mission & Purpose — PANORA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Explore the vision, mission, and long-term ecosystem purpose of PANORA Pvt. Ltd. — building Nepal's digital commerce and logistics infrastructure.",
      },
      { property: "og:title", content: "Vision, Mission & Purpose — PANORA Pvt. Ltd." },
      {
        property: "og:description",
        content: "Our commitment to sustainable commerce, transparent software development, and economic empowerment across Nepal.",
      },
      { property: "og:url", content: "/vision-mission" },
    ],
    links: [{ rel: "canonical", href: "/vision-mission" }],
  }),
  component: VisionMission,
});

function VisionMission() {
  const { lang } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Guiding Foundations", "हाम्रो जग")}
        title={tr(lang, "Vision, Mission & Purpose", "दृष्टिकोण, लक्ष्य र उद्देश्य")}
        subtitle={tr(
          lang,
          "The guiding principles steering PANORA Pvt. Ltd. toward building an enduring, honest, and transformative commerce infrastructure for Nepal.",
          "PANORA Pvt. Ltd. लाई नेपालका लागि एक दिगो, पारदर्शी र रूपान्तरणकारी व्यापार पूर्वाधार निर्माणतर्फ डोहोर्याउने हाम्रा मार्गदर्शक सिद्धान्तहरू।"
        )}
        crumbs={[
          { label: tr(lang, "About", "हाम्रो बारेमा"), to: "/about" },
          { label: tr(lang, "Vision & Mission", "दृष्टिकोण र लक्ष्य") },
        ]}
        video={videos.merchant}
      />

      {/* Purpose Section */}
      <section className="container-page py-24">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {tr(lang, "Why PANORA Exists", "PANORA को अस्तित्व किन")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-navy leading-tight">
            {tr(
              lang,
              "Our Purpose: Empowering Local Businesses Without Displacing Them",
              "हाम्रो उद्देश्य: स्थानीय व्यवसायलाई नहटाई सशक्त बनाउने"
            )}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "In many developing markets, digitalization has meant predatory disruption — foreign conglomerates attempting to bypass local shopkeepers and replace centuries-old commercial networks. At PANORA Pvt. Ltd., we reject that paradigm.",
              "धेरै विकासशील बजारमा डिजिटलाइजेशनको अर्थ परम्परागत व्यापारीलाई विस्थापित गर्नु बनेको छ। PANORA Pvt. Ltd. मा हामी यो मान्यतालाई अस्वीकार गर्छौं।"
            )}
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "Our company purpose is to equip Nepal's existing network of kirana stores, wholesalers, local distributors, and delivery riders with digital superpowers — giving them the same technological advantages as giant multinationals while preserving their ownership, autonomy, and local ties.",
              "हाम्रो उद्देश्य नेपालका स्थानीय किराना, थोक व्यापारी, वितरक र डेलिभरी राइडरहरूलाई आधुनिक डिजिटल प्रविधि दिएर सशक्त बनाउनु हो — जसले गर्दा उनीहरूको स्थानीय सम्बन्ध र स्वायत्तता सुरक्षित रहँदै व्यापार विस्तार हुन सकोस्।"
            )}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 items-stretch">
          {/* Vision Card */}
          <Reveal delay={80} className="h-full">
            <div className="h-full flex flex-col rounded-[2rem] border border-border bg-surface p-8 sm:p-10 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-brand shrink-0">
                <Compass className="h-6 w-6" />
              </div>
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-brand">
                {tr(lang, "Long-Term Aspiration", "दीर्घकालीन दृष्टि")}
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-navy">
                {tr(lang, "Our Vision", "हाम्रो दृष्टि")}
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed flex-1">
                {tr(
                  lang,
                  "To build a trusted, interconnected commerce and logistics grid that links every town, bazaar, and district in Nepal — making trade transparent, accessible, and radically efficient for generations to come.",
                  "नेपालका हरेक शहर, बजार र जिल्लालाई जोड्ने एक भरपर्दो तथा एकीकृत व्यापार र ढुवानी सञ्जाल निर्माण गर्ने — जसले आउँदा पुस्ताहरूका लागि व्यापारलाई पारदर्शी, सुलभ र अत्यधिक कुशल बनाउनेछ।"
                )}
              </p>
              <ul className="mt-6 space-y-2 text-xs font-semibold text-navy">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                  <span>{tr(lang, "Unified trade infrastructure across all 7 provinces", "सातै प्रदेशमा एकीकृत व्यापार पूर्वाधार")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                  <span>{tr(lang, "Seamless logistics coordination from city to village", "शहरदेखि गाउँसम्म निर्बाध ढुवानी समन्वय")}</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Mission Card */}
          <Reveal delay={160} className="h-full">
            <div className="h-full flex flex-col rounded-[2rem] border border-border bg-surface p-8 sm:p-10 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-brand shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-emerald-600">
                {tr(lang, "Daily Operational Mandate", "दैनिक कार्य लक्ष्य")}
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-navy">
                {tr(lang, "Our Mission", "हाम्रो लक्ष्य")}
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed flex-1">
                {tr(
                  lang,
                  "To develop practical software tailored to the everyday realities of Nepalese trade: replacing messy paper khata with synchronized digital ledgers, coordinating reliable on-demand parcel deliveries, and opening direct supplier discovery for retail businesses.",
                  "नेपाली व्यापारको वास्तविक आवश्यकता अनुकूल व्यावहारिक सफ्टवेयर निर्माण गर्ने: कापीको उधारो खातालाई डिजिटल प्रणालीमा रूपान्तरण गर्ने, भरपर्दो पार्सल डेलिभरी सञ्चालन गर्ने, र खुद्रा व्यापारीहरूलाई सिधै आधिकारिक आपूर्तिकर्ताहरूसँग जोड्ने।"
                )}
              </p>
              <ul className="mt-6 space-y-2 text-xs font-semibold text-navy">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{tr(lang, "Eliminating billing disputes and lost credit", "बिलिङ विवाद र हराएको उधारोको अन्त्य")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{tr(lang, "Transparent COD payouts within committed schedules", "तोकिएको समयमै पारदर्शी क्यास-अन-डेलिभरी भुक्तानी")}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="bg-navy py-24 text-white">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              {tr(lang, "Our Future Direction", "हाम्रो भावी दिशा")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white">
              {tr(lang, "Strategic Ecosystem Roadmap", "रणनीतिक पारिस्थितिकी मार्गचित्र")}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
              {tr(
                lang,
                "We do not make inflated promises. Here is our grounded development path outlining how each phase transitions from planning to production.",
                "हामी काल्पनिक दाबी गर्दैनौं। हाम्रो उत्पादन कसरी योजनाबाट पूर्ण सञ्चालनमा जान्छ भन्ने यथार्थपरक मार्गचित्र यहाँ प्रस्तुत छ।"
              )}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
            {/* Phase 1 */}
            <Reveal delay={80} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-cyan uppercase">Phase 1 (Current)</span>
                  <StatusBadge status="In Development" size="sm" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white min-h-[3.5rem] flex items-start">
                  {tr(lang, "Foundations & Pilot Rollout", "आधारस्तम्भ तथा परीक्षण सुरुआत")}
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-white/75 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                    <span>PANORA Business App core billing & digital khata</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                    <span>MoveX Kathmandu Valley pilot dispatch & rider onboarding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                    <span>Founding merchant pre-booking program</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Phase 2 */}
            <Reveal delay={160} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-cyan uppercase">Phase 2 (Upcoming)</span>
                  <StatusBadge status="Planned" size="sm" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white min-h-[3.5rem] flex items-start">
                  {tr(lang, "Trade Sync & Regional Expansion", "व्यापार समन्वय र प्रादेशिक विस्तार")}
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-white/75 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                    <span>Distributor wholesale catalogue integration on Marketplace</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                    <span>MoveX intercity corridor expansion (Pokhara, Biratnagar, Narayangarh)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                    <span>Accounting software sync (Tally & Swastik connectors)</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Phase 3 */}
            <Reveal delay={240} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-cyan uppercase">Phase 3 (Long-Term)</span>
                  <StatusBadge status="Planned" size="sm" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white min-h-[3.5rem] flex items-start">
                  {tr(lang, "National Grid & Consumer Commerce", "राष्ट्रिय सञ्जाल र उपभोक्ता व्यापार")}
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-white/75 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                    <span>Full B2C consumer marketplace expansion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                    <span>Automated AI route optimization for heavy commercial fleets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                    <span>Cross-border regional export facilitation for Nepali producers</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-navy">
            {tr(lang, "Join Our Mission", "हाम्रो यात्रामा सामेल हुनुहोस्")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            {tr(
              lang,
              "Be a pioneer in transforming commerce across Nepal. Pre-book your business access or join as a delivery partner today.",
              "नेपालको व्यापार रूपान्तरणमा अग्रगामी बन्नुहोस्। आजै आफ्नो व्यवसायका लागि प्रि-बुक गर्नुहोस् वा डेलिभरी साझेदार बन्नुहोस्।"
            )}
          </p>
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
              {tr(lang, "Rider Partner Registration", "राइडर साझेदार दर्ता")}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
