import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Logo } from "@/components/panora/Logo";
import { BackgroundVideo } from "@/components/panora/BackgroundVideo";
import { StatusBadge } from "@/components/panora/StatusBadge";
import { videos } from "@/config/videos";
import { useLanguage, tr } from "@/lib/i18n";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Partner & Merchant Portal — PANORA Pvt. Ltd." },
      { name: "description", content: "Sign in to your PANORA business account with your mobile number or email." },
      { property: "og:title", content: "Login — PANORA Pvt. Ltd." },
      { property: "og:description", content: "Access your PANORA business account." },
      { property: "og:url", content: "/login" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
  component: Login,
});

function Login() {
  const { lang } = useLanguage();
  const [mode, setMode] = useState<"password" | "otp">("password");
  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    toast.info(tr(lang, "Portal Currently in Beta Development", "पोर्टल हाल बेटा विकासको क्रममा छ"), {
      description: tr(
        lang,
        "Direct portal sign-in will be activated for verified founding partners upon beta rollout. Please pre-book your business or rider access.",
        "बेटा सुरुआतसँगै प्रमाणित संस्थापक साझेदारहरूका लागि पोर्टल सक्रिय हुनेछ। कृपया आफ्नो व्यापार वा राइडर दर्ता गर्नुहोस्।"
      ),
    });
  }

  return (
    <section className="grid min-h-[100svh] lg:grid-cols-2">
      <div className="flex items-center justify-center px-5 pb-16 pt-32">
        <div className="w-full max-w-md">
          <Logo />
          <div className="mt-6 flex items-center justify-between">
            <h1 className="text-2xl font-extrabold text-navy">{tr(lang, "Partner Sign-In", "साझेदार साइन-इन")}</h1>
            <StatusBadge status="In Development" size="sm" />
          </div>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {tr(
              lang,
              "Single sign-on portal for PANORA Business App merchants, MoveX delivery partners, and verified distributors.",
              "PANORA Business App व्यापारी, MoveX राइडर, र प्रमाणित वितरकहरूका लागि एकीकृत लगइन पोर्टल।"
            )}
          </p>

          <div className="mt-7 inline-flex rounded-full border border-border p-1 bg-surface">
            {(["password", "otp"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  mode === m ? "bg-brand-gradient text-white shadow-brand" : "text-muted-foreground hover:text-brand"
                }`}
              >
                {m === "password" ? tr(lang, "Password", "पासवर्ड") : tr(lang, "SMS OTP", "SMS OTP")}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground" htmlFor="identifier">
                {tr(lang, "Registered mobile or business email", "दर्ता भएको मोबाइल नम्बर वा इमेल")}
              </label>
              <input id="identifier" name="identifier" className={field} placeholder="98XXXXXXXX / you@business.com" required />
            </div>
            {mode === "password" ? (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground" htmlFor="password">
                  {tr(lang, "Password", "पासवर्ड")}
                </label>
                <input id="password" name="password" type="password" className={field} placeholder="••••••••" required />
              </div>
            ) : (
              <p className="rounded-xl bg-surface border border-border px-4 py-3 text-xs text-muted-foreground">
                {tr(lang, "We'll send a 6-digit one-time code to your verified mobile number.", "हामी तपाईंको दर्ता भएको मोबाइल नम्बरमा ६-अंकको कोड पठाउनेछौं।")}
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-full bg-brand-gradient px-7 py-3.5 text-xs font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
            >
              {mode === "password" ? tr(lang, "Sign In to Portal", "पोर्टलमा साइन इन गर्नुहोस्") : tr(lang, "Request OTP Code", "OTP कोड पठाउनुहोस्")}
            </button>
          </form>

          <div className="mt-8 rounded-2xl bg-surface border border-border p-4 text-xs space-y-2">
            <p className="font-bold text-navy">
              {tr(lang, "Don't have an active account yet?", "अहिलेसम्म खाता छैन?")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/merchant-registration" className="font-bold text-brand hover:underline">
                {tr(lang, "Pre-book Business App →", "Business App प्रि-बुक गर्नुहोस् →")}
              </Link>
              <Link to="/rider-registration" className="font-bold text-emerald-600 hover:underline">
                {tr(lang, "Register as MoveX Rider →", "MoveX राइडर दर्ता गर्नुहोस् →")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden lg:block">
        <BackgroundVideo source={videos.distributor} eager />
        <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(1,86,232,0.85),rgba(7,21,47,0.92))]" />
        <div className="absolute inset-x-0 bottom-0 p-12 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan mb-2">
            Connect. Manage. Trade.
          </p>
          <p className="max-w-sm text-2xl font-extrabold leading-snug">
            {tr(
              lang,
              "Building Nepal's Integrated Digital Business Ecosystem.",
              "नेपालको एकीकृत डिजिटल व्यवसाय र ढुवानी पारिस्थितिकी।"
            )}
          </p>
          <p className="mt-2 text-xs text-white/70 max-w-sm">
            PANORA Pvt. Ltd. — Saptari, Madhesh Province, Nepal
          </p>
        </div>
      </div>
    </section>
  );
}
