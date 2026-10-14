import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Truck, CheckCircle2, ShieldCheck, Sparkles, Navigation, Wallet, Coins, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/panora/PageHero";
import { Reveal } from "@/components/panora/Reveal";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/rider-registration")({
  head: () => ({
    meta: [
      { title: "Rider & Delivery Partner Registration — PANORA MoveX" },
      {
        name: "description",
        content:
          "Register as an early rider or delivery partner for PANORA MoveX Parcel App. Earn steady income, enjoy route optimization, and get transparent weekly payouts.",
      },
      { property: "og:title", content: "MoveX Rider Registration — PANORA Pvt. Ltd." },
      {
        property: "og:description",
        content: "Join the MoveX parcel logistics delivery network across Nepal.",
      },
      { property: "og:url", content: "/rider-registration" },
    ],
    links: [{ rel: "canonical", href: "/rider-registration" }],
  }),
  component: RiderRegistrationPage,
});

function RiderRegistrationPage() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const vehicleTypes = [
    { en: "Motorcycle / Bike", ne: "मोटरसाइकल / बाइक" },
    { en: "Scooter", ne: "स्कुटर" },
    { en: "Cargo Van / Small Pickup", ne: "कार्गो भ्यान / सानो पिकअप" },
    { en: "Delivery Fleet Business", ne: "डेलिभरी फ्लीट व्यवसाय" },
  ];

  const zones = [
    "Kathmandu Central (New Road, Thamel, Baneshwor, Koteshwor)",
    "Lalitpur (Patan, Jawalakhel, Satdobato, Balkumari)",
    "Bhaktapur (Suryabinayak, Thimi, Kamalbinayak)",
    "Outer Valley (Kalanki, Budhanilkantha, Jorpati, Kirtipur)",
    "Outside Valley (Pokhara, Biratnagar, Butwal, Chitwan)",
  ];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success(
        tr(lang, "Rider Application Submitted!", "राइडर आवेदन प्राप्त भयो!"),
        {
          description: tr(
            lang,
            "Thank you. Our MoveX logistics team will verify your details and contact you for onboarding.",
            "धन्यवाद। हाम्रो MoveX ढुवानी टोलीले विवरण प्रमाणीकरण गरी अनबोर्डिङका लागि सम्पर्क गर्नेछ।"
          ),
        }
      );
    }, 600);
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20";
  const label = "text-xs font-bold uppercase tracking-wider text-muted-foreground";

  return (
    <>
      <PageHero
        eyebrow={tr(lang, "MoveX Partner Network", "MoveX साझेदार सञ्जाल")}
        title={tr(lang, "Rider & Delivery Partner Registration", "राइडर तथा डेलिभरी साझेदार दर्ता")}
        subtitle={tr(
          lang,
          "Apply to join the PANORA MoveX delivery network. Deliver parcels for local merchants and e-commerce brands with transparent pay and live route guidance.",
          "PANORA MoveX ढुवानी सञ्जालमा जोडिन आवेदन दिनुहोस्। पारदर्शी आम्दानी र स्मार्ट रूटिङका साथ स्थानीय पसल तथा ई-कमर्सका पार्सल डेलिभरी गर्नुहोस्।"
        )}
        crumbs={[
          { label: tr(lang, "Products", "उत्पादनहरू"), to: "/products" },
          { label: "MoveX", to: "/products/movex" },
          { label: tr(lang, "Rider Registration", "राइडर दर्ता") },
        ]}
        video={videos.delivery}
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-border bg-white p-7 shadow-soft space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    {tr(lang, "Onboarding Status", "दर्ता स्थिति")}
                  </span>
                  <StatusBadge status="Available" size="sm" />
                </div>

                <h2 className="text-xl font-extrabold text-navy">
                  {tr(lang, "Why Ride With MoveX?", "MoveX सँग किन जोडिने?")}
                </h2>

                <ul className="space-y-4 text-xs text-navy font-medium">
                  <li className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0">
                      <Wallet className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-navy font-bold">{tr(lang, "Guaranteed Weekly Bank Payouts", "साप्ताहिक निश्चित बैंक भुक्तानी")}</strong>
                      <span className="text-muted-foreground">{tr(lang, "No delayed courier settlements. Your earnings are credited directly to your bank every week.", "कुनै ढिलाइ बिना तपाईंको आम्दानी हरेक हप्ता सिधै बैंक खातामा जम्मा हुन्छ।")}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand shrink-0">
                      <Navigation className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-navy font-bold">{tr(lang, "Grouped Route Coordination", "अनुकूलित रूट र कम खाली यात्रा")}</strong>
                      <span className="text-muted-foreground">{tr(lang, "Our system batches deliveries heading in the same direction so you spend less on fuel.", "एउटै रूटका पार्सलहरू मिलाएर दिइने हुँदा तपाईंको इन्धन र समय बचत हुन्छ।")}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 shrink-0">
                      <Coins className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-navy font-bold">{tr(lang, "Digital COD Handover", "डिजिटल क्यास-अन-डेलिभरी हिसाब")}</strong>
                      <span className="text-muted-foreground">{tr(lang, "Cash collected from customers is tracked in real-time, eliminating reconciliation disputes.", "ग्राहकबाट लिइएको नगद तत्काल एपमा दर्ता हुन्छ जसले गर्दा हिसाबमा कुनै विवाद रहँदैन।")}</span>
                    </div>
                  </li>
                </ul>

                <div className="rounded-2xl bg-surface p-4 border border-border text-xs text-muted-foreground">
                  <p className="flex items-center gap-1.5 font-bold text-navy mb-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{tr(lang, "Rider Requirements:", "आवश्यक योग्यता:")}</span>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-[11px] mt-1">
                    <li>{tr(lang, "Valid Nepalese Driving License", "सवारी चालक अनुमतिपत्र (लाइसेन्स)")}</li>
                    <li>{tr(lang, "Registered Two-Wheeler / Vehicle with Bluebook", "सवारी साधन र नवीकरण भएको ब्लुबुक")}</li>
                    <li>{tr(lang, "Android or iOS Smartphone with Internet", "इन्टरनेट चल्ने स्मार्टफोन")}</li>
                  </ul>
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
                      {tr(lang, "Application Received!", "आवेदन सफलतापूर्वक दर्ता भयो!")}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      {tr(
                        lang,
                        "Thank you for registering. Our MoveX fleet operations team will review your application and contact you for document verification.",
                        "दर्ता गर्नुभएकोमा धन्यवाद। हाम्रो MoveX सञ्चालन टोलीले तपाईंको कागजात प्रमाणीकरणका लागि सम्पर्क गर्नेछ।"
                      )}
                    </p>
                    <div className="pt-6 flex justify-center gap-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="rounded-full border border-border px-6 py-2.5 text-xs font-bold text-navy hover:border-emerald-600"
                      >
                        {tr(lang, "Submit Another Application", "अर्को आवेदन दिनुहोस्")}
                      </button>
                      <Link
                        to="/products/movex"
                        className="rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-brand hover:bg-emerald-700"
                      >
                        {tr(lang, "Read About MoveX", "MoveX बारे पढ्नुहोस्")}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-navy">
                        {tr(lang, "Rider Partner Application", "राइडर साझेदार आवेदन फारम")}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {tr(lang, "Please provide your genuine details to fast-track verification.", "छिटो प्रमाणीकरणका लागि कृपया सही विवरण भर्नुहोस्।")}
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={label} htmlFor="riderName">
                          {tr(lang, "Full Name *", "पूरा नाम *")}
                        </label>
                        <input
                          id="riderName"
                          required
                          className={field}
                          placeholder={tr(lang, "Your legal name", "तपाईंको पूरा नाम")}
                        />
                      </div>

                      <div>
                        <label className={label} htmlFor="phone">
                          {tr(lang, "Mobile Number (WhatsApp) *", "मोबाइल नम्बर (ह्वाट्सएप) *")}
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
                        <label className={label} htmlFor="licenseNo">
                          {tr(lang, "Driving License Number *", "लाइसेन्स नम्बर *")}
                        </label>
                        <input
                          id="licenseNo"
                          required
                          className={field}
                          placeholder="e.g. 01-06-XXXXXXXX"
                        />
                      </div>

                      <div>
                        <label className={label} htmlFor="plateNo">
                          {tr(lang, "Vehicle Plate Number *", "सवारी नम्बर *")}
                        </label>
                        <input
                          id="plateNo"
                          required
                          className={field}
                          placeholder="e.g. Ba 85 Pa XXXX"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={label}>
                          {tr(lang, "Vehicle Type *", "सवारी साधनको प्रकार *")}
                        </label>
                        <select className={field}>
                          {vehicleTypes.map((v) => (
                            <option key={v.en} value={v.en}>{v[lang]}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={label}>
                          {tr(lang, "Working Availability *", "काम गर्ने समय *")}
                        </label>
                        <select className={field}>
                          <option value="Full-Time">{tr(lang, "Full-Time (Daily)", "पूरा समय (दैनिक)")}</option>
                          <option value="Part-Time Morning">{tr(lang, "Part-Time (Morning)", "आंशिक समय (बिहान)")}</option>
                          <option value="Part-Time Evening">{tr(lang, "Part-Time (Evening)", "आंशिक समय (साँझ)")}</option>
                          <option value="Weekends">{tr(lang, "Weekends Only", "शनिबार तथा बिदाको दिन मात्र")}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={label}>
                        {tr(lang, "Primary Operating Zone *", "मुख्य कार्य क्षेत्र *")}
                      </label>
                      <select className={field}>
                        {zones.map((z) => (
                          <option key={z} value={z}>{z}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={label} htmlFor="experience">
                        {tr(lang, "Prior Delivery Experience (Optional)", "डेलिभरी अनुभव (वैकल्पिक)")}
                      </label>
                      <input
                        id="experience"
                        className={field}
                        placeholder={tr(lang, "e.g. 1 year with Pathao / InDrive / local courier", "जस्तै: १ वर्ष पठाओ / इनड्राइभ / स्थानीय कुरियरमा")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-emerald-600 py-4 text-xs font-bold text-white shadow-brand hover:bg-emerald-700 transition-colors disabled:opacity-50"
                    >
                      {loading
                        ? tr(lang, "Submitting Application...", "आवेदन दर्ता हुँदैछ...")
                        : tr(lang, "Submit Rider Application", "आवेदन पेश गर्नुहोस्")}
                    </button>

                    <p className="text-center text-[11px] text-muted-foreground">
                      {tr(
                        lang,
                        "Your information is protected under PANORA Pvt. Ltd. privacy terms.",
                        "तपाईंको जानकारी PANORA Pvt. Ltd. को गोपनीयता नीति अनुसार सुरक्षित छ।"
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
