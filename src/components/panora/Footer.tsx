import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export function Footer() {
  const { lang, setLang } = useLanguage();

  const groups = [
    {
      title: tr(lang, "Products", "उत्पादनहरू"),
      links: [
        { label: tr(lang, "PANORA Business App", "PANORA Business App"), to: "/products/business-app" },
        { label: tr(lang, "PANORA MoveX Parcel App", "PANORA MoveX Parcel App"), to: "/products/movex" },
        { label: tr(lang, "PANORA Marketplace", "PANORA Marketplace"), to: "/products/marketplace" },
        { label: tr(lang, "All Products & Roadmap", "सबै उत्पादन तथा मार्गचित्र"), to: "/products" },
      ],
    },
    {
      title: tr(lang, "Company", "कम्पनी"),
      links: [
        { label: tr(lang, "About PANORA Pvt. Ltd.", "PANORA Pvt. Ltd. बारे"), to: "/about" },
        { label: tr(lang, "Vision, Mission & Purpose", "दृष्टिकोण, लक्ष्य र उद्देश्य"), to: "/vision-mission" },
        { label: tr(lang, "How It Works", "प्रणाली कसरी काम गर्छ"), to: "/how-it-works" },
        { label: tr(lang, "Strategic Partners", "रणनीतिक साझेदारहरू"), to: "/partners-careers" },
      ],
    },
    {
      title: tr(lang, "Solutions", "समाधानहरू"),
      links: [
        { label: tr(lang, "For Merchants & Retailers", "व्यापारी तथा खुद्रा बिक्रेता"), to: "/solutions/merchants" },
        { label: tr(lang, "For Wholesalers & Distributors", "थोक बिक्रेता तथा वितरकहरू"), to: "/solutions/distributors" },
        { label: tr(lang, "For Delivery Partners", "डेलिभरी साझेदारहरू"), to: "/solutions/delivery-partners" },
        { label: tr(lang, "Pricing & Plans", "मूल्य निर्धारण"), to: "/pricing" },
      ],
    },
    {
      title: tr(lang, "Get Involved", "सामेल हुनुहोस्"),
      links: [
        { label: tr(lang, "Merchant Pre-booking", "व्यापारी प्रि-बुकिङ"), to: "/merchant-registration" },
        { label: tr(lang, "Rider Partner Registration", "राइडर साझेदार दर्ता"), to: "/rider-registration" },
        { label: tr(lang, "FAQ & Help Center", "प्रश्नोत्तर तथा सहयोग"), to: "/faq" },
        { label: tr(lang, "Contact & Support", "सम्पर्क तथा सहायता"), to: "/contact" },
      ],
    },
    {
      title: tr(lang, "Legal & Trust", "कानुनी तथा विश्वास"),
      links: [
        { label: tr(lang, "Privacy Policy", "गोपनीयता नीति"), to: "/privacy-policy" },
        { label: tr(lang, "Terms of Service", "सेवाका सर्तहरू"), to: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-night-gradient text-white border-t border-white/10">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-6 pb-12 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" imgClassName="h-14 w-auto" />
            <p className="max-w-sm text-sm text-white/75 leading-relaxed">
              {site[lang].description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                <span>{site[lang].contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                <a
                  href={`mailto:${site[lang].contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {site[lang].contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                <a
                  href={`tel:${site[lang].contact.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {site[lang].contact.phone}
                </a>
              </div>
            </div>

            <div className="pt-3 flex gap-2.5">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="PANORA social profile"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-white/50">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-xs font-medium text-white/80 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Development Transparency Notice */}
        <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" />
            <p className="text-xs text-white/70 leading-relaxed">
              <strong className="text-white font-semibold">{tr(lang, "PANORA Ecosystem Transparency Notice:", "PANORA पारिस्थितिकी पारदर्शिता सूचना:")}</strong>{" "}
              {tr(
                lang,
                "PANORA Pvt. Ltd. is actively engineering its products for sustainable long-term impact across Nepal. Features are transparently labeled as Available, In Development, or Planned based on actual operational readiness.",
                "PANORA Pvt. Ltd. ले नेपालभरि दिगो प्रभावका लागि आफ्ना उत्पादनहरूको सक्रिय निर्माण गरिरहेको छ। हाम्रा सुविधाहरू वास्तविक तयारीका आधारमा उपलब्ध, विकासमा, वा योजनाबद्ध भनी स्पष्ट रूपमा चिन्हित गरिएका छन्।"
              )}
            </p>
          </div>
          <Link
            to="/products"
            className="shrink-0 text-xs font-bold text-brand-cyan hover:underline"
          >
            {tr(lang, "Explore Product Statuses →", "उत्पादनको स्थिति हेर्नुहोस् →")}
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
          <p>
            {tr(
              lang,
              "© 2026 PANORA Pvt. Ltd. All rights reserved. Registered in Nepal.",
              "© २०२६ PANORA Pvt. Ltd. सर्वाधिकार सुरक्षित। नेपालमा दर्ता।"
            )}
          </p>
          <div className="flex items-center gap-3">
            <span>{tr(lang, "Language / भाषा:", "भाषा / Language:")}</span>
            <button
              className={`font-semibold ${lang === "en" ? "text-white" : "hover:text-white"}`}
              onClick={() => setLang("en")}
            >
              English
            </button>
            <span className="opacity-40">|</span>
            <button
              className={`font-semibold ${lang === "ne" ? "text-white" : "hover:text-white"}`}
              onClick={() => setLang("ne")}
            >
              नेपाली
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
