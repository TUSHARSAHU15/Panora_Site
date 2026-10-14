import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Store, CheckCircle2, ShieldCheck, Sparkles, Building2, Smartphone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/merchant-registration")({
  head: () => ({
    meta: [
      { title: "Merchant Pre-Booking & Registration — PANORA Business App" },
      {
        name: "description",
        content:
          "Pre-book the PANORA Business App for early beta access. Free digital udhaaro khata, billing, stock management, and B2B restock ordering for merchants in Nepal.",
      },
      { property: "og:title", content: "Merchant Pre-Booking — PANORA Business App" },
      {
        property: "og:description",
        content: "Join the founding merchant cohort for PANORA Business App across Nepal.",
      },
      { property: "og:url", content: "/merchant-registration" },
    ],
    links: [{ rel: "canonical", href: "/merchant-registration" }],
  }),
  component: MerchantRegistrationPage,
});

function MerchantRegistrationPage() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [businessType, setBusinessType] = useState("Kirana / Grocery");

  const categories = [
    { en: "Kirana / Grocery / Departmental", ne: "किराना / ग्रोसरी / डिपार्टमेन्टल" },
    { en: "Clothing, Fancy & Footwear", ne: "कपडा, फेन्सी तथा जुत्ता-चप्पल" },
    { en: "Hardware, Sanitary & Electric", ne: "हार्डवेयर, सेनेटरी तथा बिजुली" },
    { en: "Electronics & Mobile Store", ne: "इलेक्ट्रोनिक्स तथा मोबाइल पसल" },
    { en: "Pharmacy & Health Store", ne: "औषधि पसल / फार्मेसी" },
    { en: "Wholesale Stockist / Distributor", ne: "थोक बिक्रेता / वितरक" },
    { en: "Other Commercial Trade", ne: "अन्य व्यापार" },
  ];

  const provinces = [
    "Koshi Province",
    "Madhesh Province",
    "Bagmati Province (Kathmandu Valley & Beyond)",
    "Gandaki Province (Pokhara & Beyond)",
    "Lumbini Province",
    "Karnali Province",
    "Sudurpashchim Province",
  ];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success(
        tr(lang, "Pre-Booking Received!", "प्रि-बुकिङ दर्ता भयो!"),
        {
          description: tr(
            lang,
            "Thank you. Our merchant onboarding team will contact you within 24–48 hours.",
            "धन्यवाद। हाम्रो मर्चेन्ट अनबोर्डिङ टोलीले २४–४८ घण्टाभित्र सम्पर्क गर्नेछ।"
          ),
        }
      );
    }, 600);
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";
  const label = "text-xs font-bold uppercase tracking-wider text-muted-foreground";

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "Early Access Cohort", "सुरुआती बेटा समूह")}
        title={tr(lang, "Merchant Pre-Booking (B2B & B2C)", "व्यापारी प्रि-बुकिङ तथा दर्ता (B2B र B2C)")}
        subtitle={tr(
          lang,
          "Reserve your business's founding access to the PANORA Business App beta. Power both B2B wholesale restock and B2C retail counter sales with zero pilot fees, free digital ledger setup, and direct engineering support.",
          "PANORA Business App बेटा संस्करणका लागि आफ्नो व्यवसाय अग्रिम दर्ता गर्नुहोस्। B2B थोक खरिद र B2C खुद्रा बिक्री दुवैका लागि परीक्षण शुल्क छुट, निःशुल्क डिजिटल खाता सेटअप, र प्रत्यक्ष प्राविधिक सहयोग।"
        )}
        crumbs={[
          { label: tr(lang, "Products", "उत्पादनहरू"), to: "/products" },
          { label: tr(lang, "Merchant Registration", "व्यापारी दर्ता") },
        ]}
        video={videos.merchant}
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left info & perks column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-border bg-white p-7 shadow-soft space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    {tr(lang, "Program Status", "कार्यक्रम स्थिति")}
                  </span>
                  <StatusBadge status="Available" size="sm" />
                </div>

                <h2 className="text-xl font-extrabold text-navy">
                  {tr(lang, "Why Pre-Book Now?", "अहिले नै किन प्रि-बुक गर्ने?")}
                </h2>

                <ul className="space-y-4 text-xs text-navy font-medium">
                  <li className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-navy font-bold">{tr(lang, "100% Free Beta Period", "१००% निःशुल्क बेटा अवधि")}</strong>
                      <span className="text-muted-foreground">{tr(lang, "Full access to B2C retail billing, B2B wholesale restock, and dual digital khata with zero software fees.", "B2C खुद्रा बिलिङ, B2B थोक खरिद र दोहोरो डिजिटल खातामा कुनै पनि सफ्टवेयर शुल्क लाग्दैन।")}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand shrink-0">
                      <Store className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-navy font-bold">{tr(lang, "Hands-On Setup Assistance", "स्थलगत वा फोनबाट निःशुल्क सेटअप")}</strong>
                      <span className="text-muted-foreground">{tr(lang, "Our Kathmandu field specialists help digitize your paper ledger and item stock.", "हाम्रो टोलीले तपाईंको पुरानो कापीको हिसाब डिजिटलमा सार्न सहयोग गर्दछ।")}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 shrink-0">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-navy font-bold">{tr(lang, "Grandfathered Pricing", "भविष्यमा विशेष सहुलियत")}</strong>
                      <span className="text-muted-foreground">{tr(lang, "Founding merchants lock in permanent discounts on future premium tiers.", "संस्थापक सदस्यहरूले भविष्यका प्रिमियम सुविधाहरूमा स्थायी छुट पाउनेछन्।")}</span>
                    </div>
                  </li>
                </ul>

                <div className="rounded-2xl bg-surface p-4 border border-border text-xs text-muted-foreground">
                  <p className="flex items-center gap-1.5 font-bold text-navy mb-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{tr(lang, "Data Privacy Guaranteed", "डाटा गोपनीयताको पूर्ण प्रत्याभूति")}</span>
                  </p>
                  {tr(
                    lang,
                    "Your financial entries, customer records, and wholesale orders remain strictly confidential to your registered business.",
                    "तपाईंको हिसाबकिताब, ग्राहक रेकर्ड र अर्डरहरू तपाईंको व्यवसायका लागि मात्र पूर्ण रूपमा गोप्य रहन्छन्।"
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="rounded-3xl border border-border bg-white p-7 sm:p-10 shadow-soft">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-navy">
                      {tr(lang, "Pre-Booking Successfully Confirmed!", "प्रि-बुकिङ सफलतापूर्वक दर्ता भयो!")}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      {tr(
                        lang,
                        "Your registration has been logged in our founding merchant queue. A PANORA representative will contact you via phone/WhatsApp to coordinate your beta setup.",
                        "तपाईंको दर्ता हाम्रो संस्थापक व्यापारी सूचीमा दर्ता भएको छ। PANORA प्रतिनिधिले तपाईंको बेटा सेटअपका लागि फोन/ह्वाट्सएप मार्फत सम्पर्क गर्नेछन्।"
                      )}
                    </p>
                    <div className="pt-6 flex justify-center gap-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="rounded-full border border-border px-6 py-2.5 text-xs font-bold text-navy hover:border-brand"
                      >
                        {tr(lang, "Register Another Business", "अर्को व्यवसाय दर्ता गर्नुहोस्")}
                      </button>
                      <Link
                        to="/products/business-app"
                        className="rounded-full bg-brand-gradient px-6 py-2.5 text-xs font-bold text-white shadow-brand"
                      >
                        {tr(lang, "Explore Business App Features", "Business App सुविधाहरू हेर्नुहोस्")}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-navy">
                        {tr(lang, "Business Pre-Booking Form", "व्यापार प्रि-बुकिङ फारम")}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {tr(lang, "Please provide your accurate trade details to reserve early access.", "प्रारम्भिक पहुँच सुरक्षित गर्न कृपया सही विवरण भर्नुहोस्।")}
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={label} htmlFor="ownerName">
                          {tr(lang, "Owner / Manager Full Name *", "सञ्चालक / व्यवस्थापकको पूरा नाम *")}
                        </label>
                        <input
                          id="ownerName"
                          required
                          className={field}
                          placeholder={tr(lang, "e.g. Ramesh Shrestha", "जस्तै: रमेश श्रेष्ठ")}
                        />
                      </div>

                      <div>
                        <label className={label} htmlFor="businessName">
                          {tr(lang, "Business / Store Name *", "पसल / व्यवसायको नाम *")}
                        </label>
                        <input
                          id="businessName"
                          required
                          className={field}
                          placeholder={tr(lang, "e.g. Shrestha Kirana Store", "जस्तै: श्रेष्ठ किराना पसल")}
                        />
                      </div>

                      <div>
                        <label className={label} htmlFor="phone">
                          {tr(lang, "Mobile / WhatsApp Number *", "मोबाइल / ह्वाट्सएप नम्बर *")}
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          className={field}
                          placeholder="+977 98..."
                        />
                      </div>

                      <div>
                        <label className={label} htmlFor="panNumber">
                          {tr(lang, "PAN / VAT Number (Optional)", "प्यान / भ्याट नम्बर (वैकल्पिक)")}
                        </label>
                        <input
                          id="panNumber"
                          className={field}
                          placeholder="9-digit PAN (if registered)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={label}>
                        {tr(lang, "Business Category *", "व्यवसायको वर्ग *")}
                      </label>
                      <select
                        className={field}
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                      >
                        {categories.map((c) => (
                          <option key={c.en} value={c.en}>
                            {c[lang]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={label}>
                          {tr(lang, "Province *", "प्रदेश *")}
                        </label>
                        <select className={field} defaultValue="Bagmati Province (Kathmandu Valley & Beyond)">
                          {provinces.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={label} htmlFor="districtCity">
                          {tr(lang, "District & City / Tole *", "जिल्ला र शहर / टोल *")}
                        </label>
                        <input
                          id="districtCity"
                          required
                          className={field}
                          placeholder={tr(lang, "e.g. Kathmandu, New Road", "जस्तै: काठमाडौँ, न्यूरोड")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={label}>
                        {tr(lang, "Biggest Operational Challenge Right Now:", "हालको सबैभन्दा ठूलो समस्या:")}
                      </label>
                      <div className="mt-2 grid gap-2 sm:grid-cols-2 text-xs text-navy">
                        {[
                          tr(lang, "B2C Customer udhaaro credit tracking", "ग्राहकको उधारो हिसाब (B2C) राख्न कठिन"),
                          tr(lang, "Fast B2C counter billing & QR payments", "द्रुत B2C डिजिटल बिलिङ र QR भुक्तानी"),
                          tr(lang, "B2B supplier restock delays & stockouts", "सामान सकिने र वितरकबाट B2B अर्डर ढिलाइ"),
                          tr(lang, "Direct B2C parcel delivery to consumers", "ग्राहकलाई घरमै पार्सल डेलिभरी गर्न समस्या"),
                        ].map((ch) => (
                          <label key={ch} className="flex items-center gap-2 p-2 rounded-xl border border-border bg-surface cursor-pointer hover:border-brand/40">
                            <input type="checkbox" className="rounded text-brand" />
                            <span>{ch}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-brand-gradient py-4 text-xs font-bold text-white shadow-brand hover:opacity-95 transition-opacity disabled:opacity-50"
                    >
                      {loading
                        ? tr(lang, "Submitting Registration...", "दर्ता हुँदैछ...")
                        : tr(lang, "Confirm Free Pre-Booking", "निःशुल्क प्रि-बुकिङ सुरक्षित गर्नुहोस्")}
                    </button>

                    <p className="text-center text-[11px] text-muted-foreground">
                      {tr(
                        lang,
                        "By submitting, you agree to receive onboarding communications from PANORA Pvt. Ltd.",
                        "यो फारम बुझाएर, तपाईं PANORA Pvt. Ltd. बाट सम्पर्क प्राप्त गर्न सहमत हुनुहुन्छ।"
                      )}
                    </p>
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
