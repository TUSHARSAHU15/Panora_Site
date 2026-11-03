import { tr, useLanguage } from "@/lib/i18n";

export const MERCHANT_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.panora.merchantapp&pcampaignid=web_share";

export const RIDER_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.panora.riderapp&pcampaignid=web_share";

// Default export for backward compatibility
export const PLAY_STORE_URL = MERCHANT_PLAY_STORE_URL;

export function GooglePlayIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3.609 1.814A2.08 2.08 0 0 0 3 3.6v16.8c0 .714.234 1.343.609 1.786l.094.09 9.489-9.489v-.22L3.703 3.078l-.094.09z"
        fill="#00D2FF"
      />
      <path
        d="M17.441 15.632l-4.249-4.249v-.22l4.249-4.249.098.056 5.034 2.86c1.438.817 1.438 2.158 0 2.975l-5.034 2.86-.098-.033z"
        fill="#FFCE00"
      />
      <path
        d="M13.192 11.163L3.609 1.814C4.103 1.258 4.957 1.22 5.922 1.768l11.519 6.544-4.249 4.251v-1.4z"
        fill="#00E676"
      />
      <path
        d="M13.192 12.837l4.249 4.25-11.519 6.545c-.965.548-1.819.51-2.313-.046l9.583-9.349v-1.4z"
        fill="#FF3A44"
      />
    </svg>
  );
}

interface PlayStoreButtonProps {
  className?: string;
  size?: "xs" | "sm" | "md";
  label?: string;
  theme?: "dark" | "light" | "outline" | "emerald";
  app?: "merchant" | "rider";
  url?: string;
}

export function PlayStoreButton({
  className = "",
  size = "sm",
  label,
  theme = "dark",
  app = "merchant",
  url,
}: PlayStoreButtonProps) {
  const { lang } = useLanguage();

  const targetUrl = url || (app === "rider" ? RIDER_PLAY_STORE_URL : MERCHANT_PLAY_STORE_URL);

  const sizeClasses = {
    xs: "px-2.5 py-1 text-[11px] gap-1.5",
    sm: "px-3.5 py-1.5 text-xs gap-2",
    md: "px-5 py-2.5 text-xs sm:text-sm gap-2.5",
  };

  const iconSizes = {
    xs: "h-3.5 w-3.5",
    sm: "h-4 w-4",
    md: "h-5 w-5",
  };

  const themeClasses = {
    dark: "bg-navy text-white hover:bg-navy/90 border border-white/10 shadow-sm",
    light: "bg-white text-navy hover:bg-surface border border-border shadow-xs",
    outline: "bg-transparent text-navy hover:bg-surface border border-border hover:border-brand",
    emerald: "bg-emerald-600 text-white hover:bg-emerald-700 border border-emerald-500/30 shadow-sm",
  };

  const defaultLabel = tr(lang, "Google Play", "गुगल प्ले");

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 ${themeClasses[theme]} ${sizeClasses[size]} ${className}`}
      title={
        app === "rider"
          ? "Download PANORA Rider App on Google Play Store"
          : "Download PANORA App on Google Play Store"
      }
    >
      <GooglePlayIcon className={`${iconSizes[size]} shrink-0`} />
      <span className="whitespace-nowrap">{label || defaultLabel}</span>
    </a>
  );
}
