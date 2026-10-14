import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useLanguage, tr } from "@/lib/i18n";

export type Role = "Merchant" | "Distributor" | "Delivery Partner" | "Business Partner" | "Other";

const roleNames: Record<Role, { en: string; ne: string }> = {
  Merchant: { en: "Merchant", ne: "व्यापारी" },
  Distributor: { en: "Distributor", ne: "वितरक" },
  "Delivery Partner": { en: "Delivery Partner", ne: "डेलिभरी साझेदार" },
  "Business Partner": { en: "Business Partner", ne: "व्यावसायिक साझेदार" },
  Other: { en: "Other", ne: "अन्य" },
};

const roles: Role[] = ["Merchant", "Distributor", "Delivery Partner", "Business Partner", "Other"];

type Errors = Partial<Record<"fullName" | "email" | "phone" | "message", string>>;

export function InquiryForm({ defaultRole }: { defaultRole?: Role }) {
  const { lang } = useLanguage();
  const [role, setRole] = useState<Role>(defaultRole ?? "Merchant");
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (fullName.length < 2) next.fullName = tr(lang, "Please enter your full name.", "कृपया आफ्नो पूरा नाम लेख्नुहोस्।");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = tr(lang, "Please enter a valid email address.", "कृपया वैध इमेल ठेगाना लेख्नुहोस्।");
    if (phone.replace(/\D/g, "").length < 7) next.phone = tr(lang, "Please enter a valid phone number.", "कृपया वैध फोन नम्बर लेख्नुहोस्।");
    if (message.length < 10) next.message = tr(lang, "Please tell us a little more (10+ characters).", "कृपया हामीलाई केही बढी बताउनुहोस् (१०+ अक्षर)।");
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    e.currentTarget.reset();
    toast.success(tr(lang, "Inquiry submitted", "सुधी प्राप्त भयो"), {
      description: tr(lang, "Thank you — the PANORA team will be in touch shortly.", "धन्यवाद — PANORA टोली चाँडै सम्पर्कमा आउनेछ।"),
    });
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";
  const label = "text-xs font-bold uppercase tracking-wider text-muted-foreground";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="fullName">
            {tr(lang, "Full Name", "पूरा नाम")}
          </label>
          <input id="fullName" name="fullName" className={field} placeholder={tr(lang, "Your name", "तपाईंको नाम")} />
          {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
        </div>
        <div>
          <label className={label} htmlFor="businessName">
            {tr(lang, "Business Name", "व्यवसायको नाम")}
          </label>
          <input id="businessName" name="businessName" className={field} placeholder={tr(lang, "Your business", "तपाईंको व्यवसाय")} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            {tr(lang, "Email", "इमेल")}
          </label>
          <input id="email" name="email" type="email" className={field} placeholder="you@business.com" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">
            {tr(lang, "Phone", "फोन")}
          </label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="+977 ..." />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <fieldset>
        <legend className={label}>{tr(lang, "I am a", "म एउटा")}</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {roles.map((r) => (
            <button
              type="button"
              key={r}
              onClick={() => setRole(r)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                role === r ? "bg-brand-gradient text-white shadow-brand" : "border border-border text-navy hover:border-brand"
              }`}
              aria-pressed={role === r}
            >
              {roleNames[r][lang]}
            </button>
          ))}
        </div>
        <input type="hidden" name="role" value={role} />
      </fieldset>

      <div>
        <label className={label} htmlFor="message">
          {tr(lang, "Message", "सन्देश")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={field}
          placeholder={tr(lang, "How can we help your business?", "हामी तपाईंको व्यवसायलाई कसरी सहयोग गर्न सक्छौँ?")}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
      >
        {tr(lang, "Submit Inquiry", "सुधी पठाउनुहोस्")}
      </button>
    </form>
  );
}
