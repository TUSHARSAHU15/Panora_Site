import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  Coins,
  Mail,
  MapPin,
  Megaphone,
  Send,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { site } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Marketing Partner Program — PANORA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Explore career opportunities at PANORA Pvt. Ltd. or become a Marketing Partner & Earn across Nepal by onboarding shops, distributors, and delivery riders.",
      },
      { property: "og:title", content: "Careers & Marketing Partner Program — PANORA Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "Join PANORA Pvt. Ltd. in building Nepal's digital commerce ecosystem, or become a Marketing Partner and earn performance rewards.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const careerTracks = [
  {
    id: "growth-onboarding",
    badge: { en: "Full-Time / Field", ne: "पूर्णकालीन / फिल्ड" },
    location: { en: "Kathmandu, Saptari & Major Cities", ne: "काठमाडौँ, सप्तरी र प्रमुख शहरहरू" },
    title: {
      en: "Field Growth & Merchant Onboarding Executive",
      ne: "फिल्ड ग्रोथ तथा व्यापारी अनबोर्डिङ कार्यकारी",
    },
    desc: {
      en: "Introduce retail shopkeepers and local wholesalers to the PANORA Business App, guide beta onboarding, and build strong merchant relationships on the ground.",
      ne: "खुद्रा पसल तथा थोक बिक्रेतालाई PANORA Business App सँग परिचित गराउनुहोस्, बेटा दर्तामा सहयोग गर्नुहोस् र स्थानीय स्तरमा बलियो सम्बन्ध निर्माण गर्नुहोस्।",
    },
    skills: {
      en: ["Strong communication in Nepali & local languages", "Field sales or retail outreach experience", "Self-driven & territory-focused"],
      ne: ["नेपाली र स्थानीय भाषामा प्रभावकारी संवाद", "फिल्ड सेल्स वा व्यापारी सम्पर्क अनुभव", "जिम्मेवार र लक्ष्य-केन्द्रित कार्यशैली"],
    },
  },
  {
    id: "logistics-ops",
    badge: { en: "Full-Time", ne: "पूर्णकालीन" },
    location: { en: "Kathmandu Valley & Regional Hubs", ne: "काठमाडौँ उपत्यका र क्षेत्रीय हब" },
    title: {
      en: "Rider App Fleet & Logistics Operations Coordinator",
      ne: "Rider App फ्लीट तथा ढुवानी सञ्चालन संयोजक",
    },
    desc: {
      en: "Coordinate rider onboarding, zone dispatch workflows, COD reconciliation quality, and daily parcel turnaround performance across active delivery corridors.",
      ne: "राइडर दर्ता, क्षेत्रगत डिस्प्याच प्रक्रिया, COD हिसाब मिलान र दैनिक पार्सल डेलिभरी गुणस्तर समन्वय गर्नुहोस्।",
    },
    skills: {
      en: ["Last-mile courier or fleet operations knowledge", "Spreadsheet & route tracking proficiency", "Structured problem-solving mindset"],
      ne: ["कुरियर वा फ्लीट सञ्चालनको अनुभव", "रूट ट्र्याकिङ र डाटा व्यवस्थापन सीप", "समस्या समाधान गर्ने क्षमता"],
    },
  },
  {
    id: "engineering",
    badge: { en: "Full-Time / Hybrid", ne: "पूर्णकालीन / हाइब्रिड" },
    location: { en: "Kathmandu (Koteshwor) / Hybrid", ne: "काठमाडौँ (कोटेश्वर) / हाइब्रिड" },
    title: {
      en: "Full-Stack & Mobile Application Engineer",
      ne: "फुल-स्ट्याक तथा मोबाइल एप इन्जिनियर",
    },
    desc: {
      en: "Build reliable, low-bandwidth-friendly commerce, digital khata, POS, and parcel dispatch experiences using TypeScript, React, and modern mobile/cloud stacks.",
      ne: "TypeScript, React र आधुनिक मोबाइल/क्लाउड प्रविधिबाट कम इन्टरनेटमा पनि छिटो चल्ने डिजिटल खाता, POS र पार्सल प्रणाली विकास गर्नुहोस्।",
    },
    skills: {
      en: ["TypeScript, React, or React Native / Flutter", "API design & relational database modeling", "Passion for practical Nepal-first UX"],
      ne: ["TypeScript, React वा React Native / Flutter", "API डिजाइन र डाटाबेस संरचना", "नेपाली प्रयोगकर्तामैत्री UX निर्माणमा रुचि"],
    },
  },
  {
    id: "digital-marketing",
    badge: { en: "Full-Time / Contract", ne: "पूर्णकालीन / करार" },
    location: { en: "Kathmandu / Remote-Friendly", ne: "काठमाडौँ / रिमोट-मैत्री" },
    title: {
      en: "Growth Marketing & Community Lead",
      ne: "ग्रोथ मार्केटिङ तथा कम्युनिटी लिड",
    },
    desc: {
      en: "Lead merchant education campaigns, social content, regional partner playbooks, and Marketing Partner enablement across all 7 provinces.",
      ne: "७ वटै प्रदेशमा व्यापारी सचेतना अभियान, सामाजिक सञ्जाल सामग्री, र मार्केटिङ साझेदार सहजीकरण कार्यक्रम नेतृत्व गर्नुहोस्।",
    },
    skills: {
      en: ["B2B/B2C digital & field campaign execution", "Bilingual Nepali/English content creation", "Analytics & funnel conversion tracking"],
      ne: ["B2B/B2C डिजिटल तथा फिल्ड अभियान सञ्चालन", "नेपाली र अंग्रेजी सामग्री निर्माण", "अभियान विश्लेषण र रूपान्तरण ट्र्याकिङ"],
    },
  },
];

const marketingPartnerSteps = [
  {
    step: "01",
    title: { en: "Join With Zero Investment", ne: "शून्य लगानीमा दर्ता हुनुहोस्" },
    desc: {
      en: "Apply below in 1 minute. Get approved as an official PANORA Marketing Partner with onboarding guides and promotional materials.",
      ne: "तलको फारम १ मिनेटमै भर्नुहोस्। स्वीकृतिपछि आधिकारिक मार्केटिङ साझेदार गाइड र प्रचार सामग्री प्राप्त गर्नुहोस्।",
    },
  },
  {
    step: "02",
    title: { en: "Refer Merchants & Riders", ne: "व्यापारी र राइडर जोड्नुहोस्" },
    desc: {
      en: "Introduce local kirana shops, wholesalers, distributors, and delivery riders in your network to PANORA Business App & Rider App.",
      ne: "आफ्नो चिनजानका किराना पसल, थोक बिक्रेता, वितरक र डेलिभरी राइडरहरूलाई PANORA सँग जोड्नुहोस्।",
    },
  },
  {
    step: "03",
    title: { en: "Earn Commission & Bonuses", ne: "कमिसन र बोनस कमाउनुहोस्" },
    desc: {
      en: "Earn transparent per-onboarding rewards once your referred merchant or rider is verified, plus milestone bonuses as your network grows.",
      ne: "तपाईंले जोडेको व्यापारी वा राइडर प्रमाणित भएपछि प्रत्येक दर्तामा पारदर्शी कमिसन र मासिक लक्ष्य बोनस कमाउनुहोस्।",
    },
  },
];

const provinces = [
  "Koshi Province",
  "Madhesh Province",
  "Bagmati Province",
  "Gandaki Province",
  "Lumbini Province",
  "Karnali Province",
  "Sudurpashchim Province",
];

type FormErrors = Partial<Record<"fullName" | "phone" | "email" | "city" | "experience", string>>;

function CareersPage() {
  const { lang } = useLanguage();
  const contactEmail = site[lang].contact.email;
  const careersEmail = site[lang].contact.careersEmail;

  const [profile, setProfile] = useState("Freelancer / Independent Marketer");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const profiles = [
    { en: "Freelancer / Independent Marketer", ne: "फ्रिल्यान्सर / स्वतन्त्र मार्केटर" },
    { en: "Student / Campus Ambassador", ne: "विद्यार्थी / क्याम्पस प्रतिनिधि" },
    { en: "Field Sales Representative", ne: "फिल्ड सेल्स प्रतिनिधि" },
    { en: "Digital Creator / Agency", ne: "डिजिटल क्रिएटर / एजेन्सी" },
    { en: "Local Business Connector", ne: "स्थानीय व्यापारिक संयोजक" },
  ];

  function handlePartnerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fullName = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const experience = String(data.get("experience") ?? "").trim();

    const next: FormErrors = {};
    if (fullName.length < 2) {
      next.fullName = tr(lang, "Please enter your full name.", "कृपया आफ्नो पूरा नाम लेख्नुहोस्।");
    }
    if (phone.replace(/\D/g, "").length < 7) {
      next.phone = tr(lang, "Please enter a valid phone / WhatsApp number.", "कृपया वैध फोन / ह्वाट्सएप नम्बर लेख्नुहोस्।");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = tr(lang, "Please enter a valid email address.", "कृपया वैध इमेल ठेगाना लेख्नुहोस्।");
    }
    if (city.length < 2) {
      next.city = tr(lang, "Please enter your city or district.", "कृपया आफ्नो शहर वा जिल्ला लेख्नुहोस्।");
    }
    if (experience.length < 10) {
      next.experience = tr(
        lang,
        "Please briefly share how you plan to reach businesses or riders (10+ characters).",
        "कृपया व्यापारी वा राइडरसम्म कसरी पुग्नुहुन्छ छोटकरीमा लेख्नुहोस् (१०+ अक्षर)।"
      );
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    e.currentTarget.reset();
    setSubmitted(true);
    toast.success(tr(lang, "Marketing Partner application submitted!", "मार्केटिङ साझेदार आवेदन दर्ता भयो!"), {
      description: tr(
        lang,
        "Thank you — our growth team will reach out with your onboarding details.",
        "धन्यवाद — हाम्रो ग्रोथ टोलीले छिट्टै तपाईंलाई अनबोर्डिङ विवरणसहित सम्पर्क गर्नेछ।"
      ),
    });
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";
  const label = "text-xs font-bold uppercase tracking-wider text-muted-foreground";

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Careers & Earning Opportunities", "करियर तथा आम्दानीको अवसर")}
        title={tr(lang, "Careers at PANORA Pvt. Ltd.", "PANORA Pvt. Ltd. मा करियर")}
        subtitle={tr(
          lang,
          "Join our core engineering, operations, and growth team — or become an independent PANORA Marketing Partner & Earn across Nepal on your own schedule.",
          "हाम्रो मुख्य इन्जिनियरिङ, सञ्चालन र ग्रोथ टोलीमा सामेल हुनुहोस् — वा नेपालभर स्वतन्त्र PANORA मार्केटिङ साझेदार बनेर आफ्नै समयमा आम्दानी गर्नुहोस्।"
        )}
        crumbs={[{ label: tr(lang, "Careers", "करियर") }]}
      />

      {/* Quick Anchor Choice Bar */}
      <section className="border-b border-border bg-surface py-5">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold text-navy">
            {tr(
              lang,
              "Choose how you want to grow with PANORA:",
              "PANORA सँग अगाडि बढ्ने तरिका छान्नुहोस्:"
            )}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#open-roles"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold text-navy hover:border-brand hover:text-brand transition-colors"
            >
              <Briefcase className="h-3.5 w-3.5 text-brand" />
              <span>{tr(lang, "Open Career Roles", "खुला करियर पदहरू")}</span>
            </a>
            <a
              href="#marketing-partner"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-xs font-bold text-white shadow-brand hover:opacity-95 transition-opacity"
            >
              <Megaphone className="h-3.5 w-3.5" />
              <span>{tr(lang, "Become a Marketing Partner & Earn", "मार्केटिङ साझेदार बन्नुहोस् र कमाउनुहोस्")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Open Career Roles Section */}
      <section id="open-roles" className="container-page py-20">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-wider mb-4">
            <Briefcase className="h-3.5 w-3.5" />
            <span>{tr(lang, "Join Our Core Team", "हाम्रो मुख्य टोलीमा सामेल हुनुहोस्")}</span>
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl text-navy">
            {tr(lang, "Career Tracks & Open Roles", "करियर क्षेत्र र खुला अवसरहरू")}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "We welcome builders, field operators, and problem-solvers passionate about digitizing everyday commerce in Nepal. Send your CV or portfolio to our team to be considered.",
              "नेपालको दैनिक व्यापारलाई डिजिटल बनाउने अभियानमा जोशिला निर्माता, फिल्ड अपरेटर र समस्या समाधानकर्ताहरूलाई हामी स्वागत गर्दछौं।"
            )}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 items-stretch">
          {careerTracks.map((role, idx) => {
            const mailtoUrl = `mailto:${careersEmail}?subject=${encodeURIComponent(
              `Career Application: ${role.title.en}`
            )}&body=${encodeURIComponent(
              `Dear PANORA Hiring Team,\n\nI would like to apply for "${role.title.en}".\n\nFull Name:\nPhone Number:\nCurrent City / Province:\nRelevant Experience / Portfolio Link:\n\n(Please attach your CV/Resume)\n\nThank you.`
            )}`;

            return (
              <Reveal key={role.id} delay={idx * 60} className="h-full">
                <div className="flex flex-col h-full rounded-2xl border border-border bg-white p-7 shadow-soft hover:border-brand/40 transition-all hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                      <Clock className="h-3.5 w-3.5" />
                      {role.badge[lang]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-brand" />
                      {role.location[lang]}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-navy">{role.title[lang]}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {role.desc[lang]}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      {tr(lang, "What We Look For:", "आवश्यक योग्यता र सीप:")}
                    </p>
                    <ul className="space-y-1.5">
                      {role.skills[lang].map((skill) => (
                        <li key={skill} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-xs font-bold text-white shadow-brand hover:opacity-95 transition-opacity"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>{tr(lang, "Apply with CV", "CV सहित आवेदन दिनुहोस्")}</span>
                    </a>
                    <span className="text-[11px] font-semibold text-muted-foreground">{careersEmail}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Become a Marketing Partner & Earn Section (Inside Careers) */}
      <section id="marketing-partner" className="border-t border-border bg-surface py-20">
        <div className="container-page space-y-14">
          {/* Featured Banner */}
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-night-gradient p-8 sm:p-12 text-white shadow-xl">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-cyan">
                    <Coins className="h-3.5 w-3.5" />
                    <span>{tr(lang, "Flexible Earn-With-Us Program", "लचिलो आम्दानी कार्यक्रम")}</span>
                  </div>

                  <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white leading-tight">
                    {tr(lang, "Become a Marketing Partner & Earn", "मार्केटिङ साझेदार बन्नुहोस् र कमाउनुहोस्")}
                  </h2>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                    {tr(
                      lang,
                      "Turn your network, field outreach, or digital influence into steady income. Refer shops, wholesalers, and Rider App partners across Nepal to the PANORA ecosystem and earn transparent rewards for every verified onboarding.",
                      "आफ्नो सम्पर्क सञ्जाल, फिल्ड पहुँच वा डिजिटल प्रभावलाई नियमित आम्दानीमा बदल्नुहोस्। नेपालभरका पसल, थोक बिक्रेता र Rider App राइडरलाई PANORA मा जोड्नुहोस् र प्रत्येक प्रमाणित दर्तामा कमिसन कमाउनुहोस्।"
                    )}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <a
                      href="#marketing-partner-apply"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-navy shadow-brand hover:bg-white/90 transition-all"
                    >
                      <span>{tr(lang, "Apply as Marketing Partner", "मार्केटिङ साझेदारको लागि आवेदन दिनुहोस्")}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                        "PANORA Marketing Partner & Earn Application"
                      )}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>{tr(lang, `Email ${contactEmail}`, `इमेल ${contactEmail}`)}</span>
                    </a>
                  </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  {[
                    {
                      icon: Coins,
                      title: tr(lang, "Per-Activation Payouts", "प्रति दर्ता आम्दानी"),
                      desc: tr(
                        lang,
                        "Earn for every verified merchant, distributor, or rider you onboard.",
                        "तपाईंले जोडेको प्रत्येक प्रमाणित व्यापारी वा राइडरमा कमिसन।"
                      ),
                    },
                    {
                      icon: TrendingUp,
                      title: tr(lang, "Milestone Bonuses", "लक्ष्य बोनस"),
                      desc: tr(
                        lang,
                        "Unlock higher reward tiers as your monthly referrals grow.",
                        "मासिक लक्ष्य पूरा गर्दा थप बोनस तथा प्रोत्साहन।"
                      ),
                    },
                    {
                      icon: Sparkles,
                      title: tr(lang, "Zero Capital Needed", "शून्य लगानी"),
                      desc: tr(
                        lang,
                        "Free to join with ready-to-use digital pitch decks and demo support.",
                        "निःशुल्क दर्ता र प्रचार सामग्रीको पूर्ण सहयोग।"
                      ),
                    },
                    {
                      icon: Users,
                      title: tr(lang, "All 7 Provinces", "७ वटै प्रदेश"),
                      desc: tr(
                        lang,
                        "Work flexibly from your city, campus, or district anywhere in Nepal.",
                        "नेपालको जुनसुकै शहर वा जिल्लाबाट लचिलो समयमा काम।"
                      ),
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur space-y-1.5"
                    >
                      <item.icon className="h-5 w-5 text-brand-cyan" />
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-white/75 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3 Steps How to Earn */}
          <div className="grid gap-6 md:grid-cols-3">
            {marketingPartnerSteps.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 70}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft space-y-2.5">
                  <span className="inline-flex h-8 w-12 items-center justify-center rounded-full bg-brand/10 text-xs font-extrabold text-brand">
                    {s.step}
                  </span>
                  <h3 className="text-lg font-bold text-navy">{s.title[lang]}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {s.desc[lang]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Application Form + Who Can Apply */}
          <div id="marketing-partner-apply" className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start">
            <Reveal>
              <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-soft space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  <Award className="h-3.5 w-3.5" />
                  <span>{tr(lang, "Who Can Become a Partner?", "को-को बन्न सक्छन्?")}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-navy">
                  {tr(lang, "Built for Connectors Across Nepal", "नेपालभरका सक्रिय व्यक्तिहरूका लागि")}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                  {[
                    tr(
                      lang,
                      "College students & campus ambassadors looking for flexible side income",
                      "लचिलो अतिरिक्त आम्दानी खोज्ने कलेज विद्यार्थी र क्याम्पस प्रतिनिधि"
                    ),
                    tr(
                      lang,
                      "Freelancers, social media creators, and digital marketers",
                      "फ्रिल्यान्सर, सामाजिक सञ्जाल क्रिएटर र डिजिटल मार्केटर"
                    ),
                    tr(
                      lang,
                      "Field sales agents, FMCG reps, and software/POS consultants",
                      "फिल्ड सेल्स प्रतिनिधि, FMCG एजेन्ट र POS सल्लाहकार"
                    ),
                    tr(
                      lang,
                      "Local community leaders connected with kirana shops & riders",
                      "स्थानीय किराना पसल र राइडरसँग जोडिएका समुदायका अगुवा"
                    ),
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-surface border border-border p-4 space-y-1.5">
                  <p className="text-xs font-bold text-navy">
                    {tr(lang, "Direct Partner Desk", "प्रत्यक्ष साझेदार सम्पर्क")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {tr(lang, "Questions about payouts or territories? Write to ", "कमिसन वा क्षेत्र सम्बन्धी प्रश्नको लागि इमेल गर्नुहोस्: ")}
                    <a href={`mailto:${contactEmail}`} className="font-bold text-brand hover:underline">
                      {contactEmail}
                    </a>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <Link to="/partners-careers" className="font-semibold text-navy hover:text-brand">
                      {tr(lang, "Looking for institutional/corporate alliances? →", "संस्थागत सहकार्य खोज्दै हुनुहुन्छ? →")}
                    </Link>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-border bg-white p-7 sm:p-9 shadow-soft">
                <h3 className="text-xl font-extrabold text-navy mb-2">
                  {tr(lang, "Marketing Partner & Earn Registration", "मार्केटिङ साझेदार दर्ता फारम")}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                  {tr(
                    lang,
                    "Fill in your details below to join our Marketing Partner & Earn program.",
                    "मार्केटिङ साझेदार भई आम्दानी सुरु गर्न तलको विवरण भर्नुहोस्।"
                  )}
                </p>

                {submitted ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 space-y-3 text-center">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-navy">
                      {tr(lang, "Application Received!", "आवेदन प्राप्त भयो!")}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                      {tr(
                        lang,
                        "Our partner onboarding team will contact you shortly. You can also send a direct confirmation email to info@panora.com.np.",
                        "हाम्रो टोलीले छिट्टै सम्पर्क गर्नेछ। तपाईं सिधै info@panora.com.np मा पनि इमेल पठाउन सक्नुहुन्छ।"
                      )}
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="rounded-full border border-border bg-white px-5 py-2.5 text-xs font-bold text-navy hover:border-brand"
                      >
                        {tr(lang, "Submit Another", "अर्को आवेदन पठाउनुहोस्")}
                      </button>
                      <a
                        href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                          "PANORA Marketing Partner & Earn Application"
                        )}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-5 py-2.5 text-xs font-bold text-white shadow-brand"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        <span>{contactEmail}</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handlePartnerSubmit} noValidate className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={label} htmlFor="mp-fullName">
                          {tr(lang, "Full Name", "पूरा नाम")}
                        </label>
                        <input
                          id="mp-fullName"
                          name="fullName"
                          className={field}
                          placeholder={tr(lang, "Your full name", "तपाईंको पूरा नाम")}
                        />
                        {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className={label} htmlFor="mp-phone">
                          {tr(lang, "Phone / WhatsApp", "फोन / ह्वाट्सएप")}
                        </label>
                        <input
                          id="mp-phone"
                          name="phone"
                          type="tel"
                          className={field}
                          placeholder="+977 98..."
                        />
                        {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className={label} htmlFor="mp-email">
                          {tr(lang, "Email Address", "इमेल ठेगाना")}
                        </label>
                        <input
                          id="mp-email"
                          name="email"
                          type="email"
                          className={field}
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                      </div>

                      <div>
                        <label className={label} htmlFor="mp-city">
                          {tr(lang, "City / District", "शहर / जिल्ला")}
                        </label>
                        <input
                          id="mp-city"
                          name="city"
                          className={field}
                          placeholder={tr(lang, "e.g., Kathmandu, Rajbiraj, Pokhara", "जस्तै: काठमाडौँ, राजविराज, पोखरा")}
                        />
                        {errors.city && <p className="mt-1 text-xs text-destructive">{errors.city}</p>}
                      </div>
                    </div>

                    <div>
                      <label className={label} htmlFor="mp-province">
                        {tr(lang, "Province", "प्रदेश")}
                      </label>
                      <select id="mp-province" name="province" className={field} defaultValue="Bagmati Province">
                        {provinces.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>

                    <fieldset>
                      <legend className={label}>{tr(lang, "Current Profile", "तपाईंको हालको परिचय")}</legend>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {profiles.map((p) => (
                          <button
                            type="button"
                            key={p.en}
                            onClick={() => setProfile(p.en)}
                            aria-pressed={profile === p.en}
                            className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-all ${
                              profile === p.en
                                ? "bg-brand-gradient text-white shadow-brand"
                                : "border border-border text-navy hover:border-brand"
                            }`}
                          >
                            {p[lang]}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="profile" value={profile} />
                    </fieldset>

                    <div>
                      <label className={label} htmlFor="mp-experience">
                        {tr(lang, "How Will You Promote & Onboard?", "तपाईं कसरी व्यापारी/राइडर जोड्नुहुन्छ?")}
                      </label>
                      <textarea
                        id="mp-experience"
                        name="experience"
                        rows={3}
                        className={field}
                        placeholder={tr(
                          lang,
                          "Tell us about your network, target area, or marketing experience...",
                          "आफ्नो सम्पर्क क्षेत्र, लक्षित बजार वा मार्केटिङ अनुभव बारे छोटकरीमा लेख्नुहोस्..."
                        )}
                      />
                      {errors.experience && <p className="mt-1 text-xs text-destructive">{errors.experience}</p>}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
                    >
                      <Send className="h-4 w-4" />
                      <span>{tr(lang, "Join Marketing Partner & Earn", "मार्केटिङ साझेदार बन्नुहोस् र कमाउनुहोस्")}</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
