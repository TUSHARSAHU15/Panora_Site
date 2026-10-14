import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Handshake,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  Truck,
  CreditCard,
  Laptop,
  Mail,
  FileText,
  PhoneCall,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/partners-careers")({
  head: () => ({
    meta: [
      { title: "Strategic Partners & Alliances — PANORA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Collaborate with PANORA Pvt. Ltd. as an institutional partner in logistics fleets, banking and fintech, brand wholesale distribution, or retail hardware.",
      },
      { property: "og:title", content: "Strategic Partners & Alliances — PANORA Pvt. Ltd." },
      {
        property: "og:description",
        content: "Powering Nepal's commerce through institutional partnerships in logistics, payments, and trade distribution.",
      },
      { property: "og:url", content: "/partners-careers" },
    ],
    links: [{ rel: "canonical", href: "/partners-careers" }],
  }),
  component: PartnersPage,
});

const partnerTracks = [
  {
    id: "logistics",
    icon: Truck,
    badge: "Logistics & Transport",
    title: {
      en: "Logistics Fleets & Courier Operators",
      ne: "ढुवानी फ्लीट तथा कुरियर सञ्चालक",
    },
    desc: {
      en: "Integrate regional courier fleets, express delivery hubs, and inter-city cargo lines with the MoveX parcel logistics engine. Gain high-density route volume and real-time dispatch technology.",
      ne: "आफ्नो क्षेत्रीय कुरियर फ्लीट, डेलिभरी हब र अन्तर-जिल्ला कार्गो लाइनलाई MoveX पार्सल प्रणालीसँग जोड्नुहोस्। उच्च पार्सल भोल्युम र लाइभ डिस्प्याच प्रविधिको लाभ लिनुहोस्।",
    },
    perks: {
      en: ["Direct rider task assignment", "Automated COD settlement", "Real-time GPS route telemetry"],
      ne: ["प्रत्यक्ष राइडर कार्य विनियोजन", "स्वचालित COD भुक्तानी", "वास्तविक समय GPS मार्ग ट्र्याकिङ"],
    },
    mailSubject: "PANORA Logistics Partnership Application",
  },
  {
    id: "fintech",
    icon: CreditCard,
    badge: "Banking & Fintech",
    title: {
      en: "Banks, Wallets & Financial Institutions",
      ne: "बैंक, वालेट तथा वित्तीय संस्थाहरू",
    },
    desc: {
      en: "Partner with PANORA to underwrite merchant working capital, enable automated digital QR payments (Fonepay/eSewa), and power instant settlement for thousands of retail merchants.",
      ne: "PANORA सँग सहकार्य गरी खुद्रा व्यापारीलाई कार्यशील पूँजी कर्जा, डिजिटल QR भुक्तानी (Fonepay/eSewa), र तत्काल खाता मिलान सेवा विस्तार गर्नुहोस्।",
    },
    perks: {
      en: ["Verified merchant credit histories", "Direct API payment rails", "Automated reconciliation"],
      ne: ["प्रमाणित व्यापारी कर्जा अभिलेख", "प्रत्यक्ष API भुक्तानी गेटवे", "स्वचालित दैनिक हिसाब मिलान"],
    },
    mailSubject: "PANORA Banking & Fintech Partnership Application",
  },
  {
    id: "distributors",
    icon: Building2,
    badge: "Wholesale & FMCG",
    title: {
      en: "Authorized Distributors & Brand Principals",
      ne: "अधिकृत वितरक तथा ब्राण्ड उत्पादकहरू",
    },
    desc: {
      en: "List your verified wholesale catalogue directly into the PANORA Marketplace and Business App. Receive bulk restock purchase orders directly from registered neighborhood retail stores.",
      ne: "आफ्नो आधिकारिक थोक क्याटलग PANORA Marketplace र Business App मा सूचीकृत गर्नुहोस् र प्रमाणित खुद्रा पसलहरूबाट सिधै थोक अर्डर प्राप्त गर्नुहोस्।",
    },
    perks: {
      en: ["Pre-qualified merchant network", "Instant digital purchase orders", "Integrated freight dispatch"],
      ne: ["प्रमाणित खुद्रा पसल सञ्जाल", "तत्काल डिजिटल खरिद अर्डर", "एकीकृत ढुवानी समन्वय"],
    },
    mailSubject: "PANORA Distributor Catalogue Partnership Application",
  },
  {
    id: "hardware",
    icon: Laptop,
    badge: "Retail Tech & Hardware",
    title: {
      en: "Hardware Vendors & ERP Integrators",
      ne: "हार्डवेयर तथा सफ्टवेयर साझेदार",
    },
    desc: {
      en: "Certify your thermal POS receipt printers, Bluetooth barcode scanners, digital weighing scales, and accounting ERP systems (Tally / Swastik) with the PANORA ecosystem.",
      ne: "थर्मल प्रिन्टर, बारकोड स्क्यानर, डिजिटल तराजु र ट्याली/स्वास्तिक जस्ता एकाउन्टिङ सफ्टवेयरलाई PANORA प्रणालीसँग अनुकूलित गरी बजार विस्तार गर्नुहोस्।",
    },
    perks: {
      en: ["Plug-and-play SDK support", "Featured hardware directory", "Joint retail merchant bundles"],
      ne: ["प्लग-एन्ड-प्ले SDK सपोर्ट", "सूचीकृत हार्डवेयर निर्देशिका", "संयुक्त खुद्रा व्यापारी प्याकेज"],
    },
    mailSubject: "PANORA Hardware & Tech Integration Partnership Application",
  },
];

function PartnersPage() {
  const { lang } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Ecosystem Alliances", "रणनीतिक साझेदारी")}
        title={tr(lang, "Strategic Partners & Alliances", "रणनीतिक साझेदार तथा सहकार्य")}
        subtitle={tr(
          lang,
          "Collaborate with PANORA Pvt. Ltd. to power Nepal's digital commerce infrastructure across logistics fleets, merchant banking, wholesale supply chains, and retail technology.",
          "ढुवानी फ्लीट, बैंकिङ तथा फिनटेक, थोक आपूर्ति र खुद्रा प्रविधिमा PANORA Pvt. Ltd. सँग सहकार्य गरी नेपालको व्यापारलाई आधुनिक बनाउनुहोस्।"
        )}
        crumbs={[{ label: tr(lang, "Strategic Partners", "रणनीतिक साझेदार") }]}
        video={{
          id: "partner-alliance-hero",
          label: "Strategic Partnerships at PANORA",
          mp4: "/videos/hero-distributor.mp4",
          webm: "/videos/hero-distributor.webm",
          poster: "/images/partner-alliance.jpg",
        }}
      />

      {/* Featured Strategic Alliance Banner with Unique Imagery */}
      <section className="border-b border-border bg-white py-14">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-soft grid lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px]">
                <img
                  src="/images/partner-alliance.jpg"
                  alt="PANORA Strategic Commercial Partnerships"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-6 lg:hidden">
                  <span className="text-sm font-bold text-white">
                    {tr(lang, "Institutional Bridges Across Nepal", "नेपालभर संस्थागत सहकार्य")}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                  <Handshake className="h-3.5 w-3.5" />
                  <span>{tr(lang, "Why Partner With PANORA?", "PANORA सँग साझेदारी किन?")}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  {tr(
                    lang,
                    "An Open Ecosystem Built for Sustainable Mutual Growth",
                    "पारस्परिक दिगो वृद्धिका लागि निर्मित खुला पारिस्थितिकी"
                  )}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tr(
                    lang,
                    "PANORA does not operate in isolation. We build the unifying digital rails that connect financial gateways, transport infrastructure, wholesale stockists, and neighborhood shops into one synchronized commerce loop.",
                    "PANORA एक्लो प्लेटफर्म होइन। हामी वित्तीय गेटवे, ढुवानी पूर्वाधार, थोक वितरक र स्थानीय पसलहरूलाई जोड्ने साझा डिजिटल प्रविधि निर्माण गर्दछौं।"
                  )}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl border border-border bg-white p-3.5">
                    <p className="text-xl font-extrabold text-brand">100%</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {tr(lang, "Verified KYC & Business Transparency", "प्रमाणित व्यवसाय तथा पारदर्शिता")}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-3.5">
                    <p className="text-xl font-extrabold text-emerald-600">Unified</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {tr(lang, "Real-Time API & Webhook Integrations", "वास्तविक समय API र डेटा मिलान")}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:partners@panora.com.np?subject=PANORA Strategic Partnership Inquiry"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-brand hover:opacity-95"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{tr(lang, "Apply via Email (partners@panora.com.np)", "इमेलबाट आवेदन दिनुहोस् (partners@panora.com.np)")}</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 Dedicated Partner Tracks with "Apply via Mail" */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {tr(lang, "Partnership Tracks", "साझेदारी विधाहरू")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-navy">
            {tr(lang, "Explore Partnership Opportunities", "सहकार्यका अवसरहरू")}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "Choose your institutional sector below. Review collaboration benefits and submit your proposal directly via email to our corporate alliances team.",
              "आफ्नो संस्थागत क्षेत्र छान्नुहोस् र सहकार्य प्रस्ताव सिधै इमेलमार्फत हाम्रो साझेदारी टोलीलाई पठाउनुहोस्।"
            )}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 items-stretch">
          {partnerTracks.map((track, idx) => {
            const Icon = track.icon;
            const mailtoUrl = `mailto:partners@panora.com.np?subject=${encodeURIComponent(
              track.mailSubject
            )}&body=${encodeURIComponent(
              `Dear PANORA Alliances Team,\n\nWe are interested in partnering under the "${track.title.en}" track.\n\nOrganization Name:\nContact Person & Designation:\nPhone Number:\nOperating Locations / Coverage:\nBrief Proposal / Collaboration Summary:\n\nThank you.`
            )}`;

            return (
              <Reveal key={track.id} delay={idx * 60} className="h-full">
                <div className="flex flex-col h-full rounded-2xl border border-border bg-white p-7 shadow-soft hover:border-brand/40 transition-all hover:-translate-y-0.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-surface border border-border px-3 py-1 text-xs font-bold text-navy">
                      {track.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-navy">
                    {track.title[lang]}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {track.desc[lang]}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border flex-1">
                    <p className="text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      {tr(lang, "Key Collaboration Benefits:", "मुख्य फाइदाहरू:")}
                    </p>
                    <ul className="space-y-1.5">
                      {track.perks[lang].map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-xs font-bold text-white shadow-brand hover:opacity-95 text-center transition-all"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>{tr(lang, "Apply via Mail", "इमेलबाट आवेदन दिनुहोस्")}</span>
                    </a>
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-navy hover:text-brand transition-colors"
                    >
                      {tr(lang, "Contact Desk →", "सम्पर्क डेस्क →")}
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Prominent "Apply via Mail" Full Module */}
      <section className="bg-surface py-20 border-t border-border">
        <div className="container-page">
          <Reveal className="max-w-4xl mx-auto rounded-3xl border border-border bg-white p-8 sm:p-12 shadow-soft space-y-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                <Mail className="h-3.5 w-3.5" />
                <span>{tr(lang, "Direct Email Onboarding", "प्रत्यक्ष इमेल आवेदन")}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                {tr(lang, "How to Apply for Partnership via Mail", "साझेदारीका लागि इमेलमार्फत कसरी आवेदन दिने")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {tr(
                  lang,
                  "Submit your institutional collaboration brief directly to our corporate desk. Please include the following details in your email for fast processing.",
                  "आफ्नो संस्थागत सहकार्य प्रस्ताव सिधै हाम्रो कार्यालयमा पठाउनुहोस्। द्रुत प्रक्रियाका लागि इमेलमा निम्न विवरण समावेश गर्नुहोस्।"
                )}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: tr(lang, "Organization Profile", "संस्थाको विवरण"),
                  desc: tr(lang, "Company name, PAN/VAT registration, and operating headquarters.", "कम्पनीको नाम, पान/भ्याट दर्ता नम्बर र प्रधान कार्यालय।"),
                },
                {
                  step: "02",
                  title: tr(lang, "Partnership Track", "साझेदारी विधा"),
                  desc: tr(lang, "Logistics fleet, banking/fintech, distributor catalogue, or hardware.", "ढुवानी, बैंकिङ/फिनटेक, थोक क्याटलग वा हार्डवेयर।"),
                },
                {
                  step: "03",
                  title: tr(lang, "Operating Territory", "सञ्चालन क्षेत्र"),
                  desc: tr(lang, "Target cities, coverage districts, and estimated operational volume.", "लक्षित शहर, जिल्ला र अनुमानित व्यापारिक भोल्युम।"),
                },
                {
                  step: "04",
                  title: tr(lang, "Key Contact Person", "सम्पर्क व्यक्ति"),
                  desc: tr(lang, "Designated officer's direct email, mobile number, and designation.", "जिम्मेवार अधिकृतको इमेल, फोन नम्बर र पद।"),
                },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl border border-border bg-surface p-5 space-y-2">
                  <span className="text-xs font-extrabold text-brand uppercase">{s.step}</span>
                  <h4 className="text-sm font-bold text-navy">{s.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-navy p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  {tr(lang, "Corporate Alliances Mailbox", "संस्थागत साझेदारी इमेल")}
                </span>
                <p className="text-xl sm:text-2xl font-extrabold text-white">partners@panora.com.np</p>
                <p className="text-xs text-white/70">
                  {tr(
                    lang,
                    "Dedicated partnership team responds within 24–48 business hours.",
                    "हाम्रो साझेदारी टोलीले २४ देखि ४८ कार्यघण्टाभित्र जवाफ दिनेछ।"
                  )}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:partners@panora.com.np?subject=PANORA%20Strategic%20Partnership%20Application&body=Organization%20Name:%0D%0AContact%20Person%20%26%20Designation:%0D%0APhone%20Number:%0D%0APartner%20Track:%0D%0AOperating%20Territory:%0D%0ABrief%20Proposal%20Summary:"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold text-navy shadow-brand hover:bg-white/90 transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>{tr(lang, "Open Mail Client to Apply", "इमेलबाट सिधै आवेदन दिनुहोस्")}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
