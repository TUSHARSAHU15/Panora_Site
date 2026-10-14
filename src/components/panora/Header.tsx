import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Sparkles, Building2, Smartphone, Package, ShoppingBag, Users, HelpCircle } from "lucide-react";
import { Logo } from "./Logo";
import { StatusBadge } from "./StatusBadge";
import { mainNav, productsNav, solutionsNav } from "@/config/site";
import { useLanguage, tr } from "@/lib/i18n";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const products = productsNav[lang];
  const solutions = solutionsNav[lang];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/15 bg-[#07152F]/95 py-2.5 backdrop-blur-xl shadow-[0_10px_35px_-10px_rgba(1,86,232,0.35)]"
          : "border-b border-white/10 bg-[#07152F]/50 py-3.5 backdrop-blur-md [box-shadow:0_8px_40px_-12px_rgba(1,107,252,0.3)]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="PANORA home"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90"
        >
          <Logo variant="light" imgClassName="h-10 sm:h-11 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 2xl:gap-1 xl:flex shrink-0" aria-label="Main">
          {/* Home */}
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1.5 2xl:px-3 text-[13px] 2xl:text-sm font-semibold transition-colors text-white/85 hover:text-white hover:bg-white/10"
            activeProps={{ className: "text-white font-bold bg-white/15" }}
          >
            {tr(lang, "Home", "गृह")}
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 2xl:px-3 text-[13px] 2xl:text-sm font-semibold transition-colors text-white/85 hover:text-white hover:bg-white/10"
              activeProps={{ className: "text-white font-bold bg-white/15" }}
            >
              <span>{tr(lang, "About", "हाम्रो बारेमा")}</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-70 shrink-0" />
            </Link>
            {activeDropdown === "about" && (
              <div className="absolute left-0 top-full w-72 pt-2">
                <div className="rounded-2xl border border-white/15 bg-[#07152F]/98 p-2.5 shadow-2xl backdrop-blur-2xl">
                  <Link
                    to="/about"
                    className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/10"
                  >
                    <Building2 className="mt-0.5 h-4 w-4 text-brand-cyan shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-white">{tr(lang, "About PANORA Pvt. Ltd.", "PANORA Pvt. Ltd. बारे")}</p>
                      <p className="mt-0.5 text-xs text-white/65">{tr(lang, "Company background, purpose & team", "कम्पनीको पृष्ठभूमि र उद्देश्य")}</p>
                    </div>
                  </Link>
                  <Link
                    to="/vision-mission"
                    className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/10"
                  >
                    <Sparkles className="mt-0.5 h-4 w-4 text-brand-cyan shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-white">{tr(lang, "Vision, Mission & Purpose", "दृष्टिकोण, लक्ष्य र उद्देश्य")}</p>
                      <p className="mt-0.5 text-xs text-white/65">{tr(lang, "Our long-term commitment to Nepal", "नेपालप्रतिको दीर्घकालीन प्रतिबद्धता")}</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 2xl:px-3 text-[13px] 2xl:text-sm font-semibold transition-colors text-white/85 hover:text-white hover:bg-white/10"
              activeProps={{ className: "text-white font-bold bg-white/15" }}
            >
              <span>{tr(lang, "Products", "उत्पादनहरू")}</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-70 shrink-0" />
            </Link>
            {activeDropdown === "products" && (
              <div className="absolute left-0 top-full w-96 pt-2">
                <div className="rounded-2xl border border-white/15 bg-[#07152F]/98 p-3 shadow-2xl backdrop-blur-2xl space-y-1">
                  <div className="px-3 py-1.5 border-b border-white/10 mb-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                      {tr(lang, "PANORA Product Suite", "PANORA उत्पादन शृङ्खला")}
                    </p>
                  </div>
                  {products.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block rounded-xl p-3 transition-colors hover:bg-white/10"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-white">{p.label}</span>
                        <StatusBadge status={p.status} size="sm" theme="dark" />
                      </div>
                      <p className="mt-1 text-xs text-white/65 leading-relaxed">{p.blurb}</p>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-white/10 text-center">
                    <Link
                      to="/products"
                      className="inline-block text-xs font-bold text-brand-cyan hover:underline"
                    >
                      {tr(lang, "View all product roadmaps →", "सबै उत्पादन मार्गचित्र हेर्नुहोस् →")}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 2xl:px-3 text-[13px] 2xl:text-sm font-semibold transition-colors text-white/85 hover:text-white hover:bg-white/10"
              activeProps={{ className: "text-white font-bold bg-white/15" }}
            >
              <span>{tr(lang, "Solutions", "समाधानहरू")}</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-70 shrink-0" />
            </Link>
            {activeDropdown === "solutions" && (
              <div className="absolute left-0 top-full w-80 pt-2">
                <div className="rounded-2xl border border-white/15 bg-[#07152F]/98 p-2.5 shadow-2xl backdrop-blur-2xl space-y-1">
                  {solutions.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-xl p-3 transition-colors hover:bg-white/10"
                    >
                      <span className="block text-sm font-bold text-white">{s.label}</span>
                      <span className="mt-0.5 block text-xs text-white/65 leading-relaxed">{s.blurb}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* How It Works */}
          <Link
            to="/how-it-works"
            className="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1.5 2xl:px-3 text-[13px] 2xl:text-sm font-semibold transition-colors text-white/85 hover:text-white hover:bg-white/10"
            activeProps={{ className: "text-white font-bold bg-white/15" }}
          >
            {tr(lang, "How It Works", "प्रक्रिया")}
          </Link>

          {/* Pricing */}
          <Link
            to="/pricing"
            className="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1.5 2xl:px-3 text-[13px] 2xl:text-sm font-semibold transition-colors text-white/85 hover:text-white hover:bg-white/10"
            activeProps={{ className: "text-white font-bold bg-white/15" }}
          >
            {tr(lang, "Pricing", "मूल्य")}
          </Link>

          {/* Highlighted Partners */}
          <Link
            to="/partners-careers"
            className="inline-flex items-center whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] 2xl:text-sm font-bold transition-all text-brand-cyan border border-brand-cyan/35 bg-brand-cyan/10 hover:bg-brand-cyan/20 hover:text-white shadow-xs"
            activeProps={{ className: "text-white font-bold bg-brand-cyan/30 border-brand-cyan" }}
          >
            {tr(lang, "Partners", "साझेदारहरू")}
          </Link>

          {/* FAQ */}
          <Link
            to="/faq"
            className="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1.5 2xl:px-3 text-[13px] 2xl:text-sm font-semibold transition-colors text-white/85 hover:text-white hover:bg-white/10"
            activeProps={{ className: "text-white font-bold bg-white/15" }}
          >
            {tr(lang, "FAQ", "प्रश्नोत्तर")}
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1.5 2xl:px-3 text-[13px] 2xl:text-sm font-semibold transition-colors text-white/85 hover:text-white hover:bg-white/10"
            activeProps={{ className: "text-white font-bold bg-white/15" }}
          >
            {tr(lang, "Contact", "सम्पर्क")}
          </Link>
        </nav>

        {/* Right Action Cluster */}
        <div className="hidden items-center gap-2 2xl:gap-2.5 lg:flex shrink-0">
          {/* Language Switcher */}
          <div className="inline-flex items-center h-9 px-3 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white/80 shrink-0 select-none">
            <button
              type="button"
              className={`cursor-pointer transition-colors ${lang === "en" ? "text-white font-bold" : "text-white/60 hover:text-white"}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="mx-1.5 opacity-30 select-none">|</span>
            <button
              type="button"
              className={`cursor-pointer transition-colors ${lang === "ne" ? "text-white font-bold" : "text-white/60 hover:text-white"}`}
              onClick={() => setLang("ne")}
            >
              नेपाली
            </button>
          </div>

          {/* Rider Registration CTA */}
          <Link
            to="/rider-registration"
            className="inline-flex items-center justify-center h-9 px-3.5 2xl:px-4 rounded-full border border-white/30 text-xs font-bold text-white hover:bg-white/10 hover:border-white/60 transition-all whitespace-nowrap shrink-0"
          >
            {tr(lang, "Join as Rider", "राइडर बन्नुहोस्")}
          </Link>

          {/* Merchant Pre-Booking CTA */}
          <Link
            to="/merchant-registration"
            className="inline-flex items-center justify-center h-9 px-4 2xl:px-4.5 rounded-full bg-brand-gradient text-xs font-bold text-white shadow-brand hover:brightness-110 hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0"
          >
            {tr(lang, "Pre-book Business App", "एप प्रि-बुक गर्नुहोस्")}
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 text-white hover:bg-white/10 xl:hidden shrink-0 transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="container-page mt-3 max-h-[85vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#07152F]/98 p-5 shadow-2xl backdrop-blur-2xl text-white xl:hidden">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">
              {tr(lang, "Menu & Navigation", "मेनु र नेभिगेसन")}
            </span>
            <div className="text-xs font-bold flex items-center gap-2">
              <button
                className={lang === "en" ? "text-white font-bold" : "text-white/60 hover:text-white"}
                onClick={() => setLang("en")}
              >
                English
              </button>
              <span className="text-white/30">|</span>
              <button
                className={lang === "ne" ? "text-white font-bold" : "text-white/60 hover:text-white"}
                onClick={() => setLang("ne")}
              >
                नेपाली
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-1">
            <Link to="/" className="block py-2 text-base font-bold text-white hover:text-brand-cyan">
              {tr(lang, "Home", "गृह")}
            </Link>

            <div className="pt-2">
              <p className="text-xs font-bold uppercase text-white/60">{tr(lang, "About Us", "हाम्रो बारेमा")}</p>
              <div className="ml-3 mt-1.5 space-y-1.5">
                <Link to="/about" className="block text-sm font-semibold text-white/80 hover:text-brand-cyan">
                  {tr(lang, "About PANORA Pvt. Ltd.", "PANORA Pvt. Ltd. बारे")}
                </Link>
                <Link to="/vision-mission" className="block text-sm font-semibold text-white/80 hover:text-brand-cyan">
                  {tr(lang, "Vision, Mission & Purpose", "दृष्टिकोण, लक्ष्य र उद्देश्य")}
                </Link>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-xs font-bold uppercase text-white/60">{tr(lang, "Products (Status)", "उत्पादनहरू")}</p>
              <div className="ml-3 mt-1.5 space-y-2">
                {products.map((p) => (
                  <Link key={p.to} to={p.to} className="flex items-center justify-between text-sm font-semibold text-white/80 hover:text-brand-cyan">
                    <span>{p.label}</span>
                    <StatusBadge status={p.status} size="sm" theme="dark" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <p className="text-xs font-bold uppercase text-white/60">{tr(lang, "Solutions", "समाधानहरू")}</p>
              <div className="ml-3 mt-1.5 space-y-1.5">
                {solutions.map((s) => (
                  <Link key={s.to} to={s.to} className="block text-sm font-semibold text-white/80 hover:text-brand-cyan">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 space-y-2 border-t border-white/10 mt-3">
              <Link to="/how-it-works" className="block text-sm font-semibold text-white/80 hover:text-brand-cyan">
                {tr(lang, "How It Works", "प्रक्रिया")}
              </Link>
              <Link to="/pricing" className="block text-sm font-semibold text-white/80 hover:text-brand-cyan">
                {tr(lang, "Pricing & Plans", "मूल्य निर्धारण")}
              </Link>
              <Link to="/partners-careers" className="block text-sm font-bold text-brand-cyan hover:underline">
                ★ {tr(lang, "Partners & Alliances", "साझेदार तथा सहकार्य")}
              </Link>
              <Link to="/faq" className="block text-sm font-semibold text-white/80 hover:text-brand-cyan">
                {tr(lang, "FAQ & Support", "प्रश्नोत्तर र सहायता")}
              </Link>
              <Link to="/contact" className="block text-sm font-semibold text-white/80 hover:text-brand-cyan">
                {tr(lang, "Contact Us", "सम्पर्क")}
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2.5 pt-4 border-t border-white/10">
            <Link
              to="/merchant-registration"
              className="w-full text-center rounded-xl bg-brand-gradient py-3 text-sm font-bold text-white shadow-brand hover:brightness-110"
            >
              {tr(lang, "Pre-book PANORA Business App", "Business App प्रि-बुक गर्नुहोस्")}
            </Link>
            <Link
              to="/rider-registration"
              className="w-full text-center rounded-xl border border-white/30 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              {tr(lang, "Join as MoveX Rider Partner", "MoveX राइडर साझेदार बन्नुहोस्")}
            </Link>
            <Link
              to="/login"
              className="w-full text-center py-2 text-xs font-semibold text-white/60 hover:text-white"
            >
              {tr(lang, "Partner / Merchant Login", "साझेदार / व्यापारी लग इन")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
