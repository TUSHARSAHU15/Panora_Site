import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export type FeatureStatus = "Available" | "In Development" | "Planned";

interface StatusBadgeProps {
  status: FeatureStatus;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
  highlighted?: boolean;
  className?: string;
  showIcon?: boolean;
}

export function StatusBadge({
  status,
  size = "md",
  theme = "light",
  highlighted = false,
  className = "",
  showIcon = true,
}: StatusBadgeProps) {
  const { lang } = useLanguage();

  const labels: Record<FeatureStatus, { en: string; ne: string; hint: string }> = {
    Available: {
      en: "Available",
      ne: "उपलब्ध",
      hint: "Ready for live use and onboarding",
    },
    "In Development": {
      en: "In Development",
      ne: "विकासमा",
      hint: "Currently in active engineering and pilot testing",
    },
    Planned: {
      en: "Planned",
      ne: "योजनाबद्ध",
      hint: "On our product development roadmap",
    },
  };

  const lightStyles: Record<FeatureStatus, { bg: string; text: string; border: string; dot: string }> = {
    Available: {
      bg: "bg-emerald-50",
      text: "text-emerald-700 font-bold",
      border: "border-emerald-300 shadow-xs",
      dot: "bg-emerald-500",
    },
    "In Development": {
      bg: "bg-amber-50",
      text: "text-amber-800 font-bold",
      border: "border-amber-300 shadow-xs",
      dot: "bg-amber-500",
    },
    Planned: {
      bg: "bg-purple-50",
      text: "text-purple-700 font-bold",
      border: "border-purple-200 shadow-xs",
      dot: "bg-purple-500",
    },
  };

  const darkStyles: Record<FeatureStatus, { bg: string; text: string; border: string; dot: string }> = {
    Available: {
      bg: "bg-emerald-400/20 backdrop-blur-sm",
      text: "text-emerald-300 font-extrabold",
      border: "border-emerald-400/60 shadow-[0_0_12px_rgba(52,211,153,0.35)]",
      dot: "bg-emerald-400",
    },
    "In Development": {
      bg: "bg-amber-400/25 backdrop-blur-sm",
      text: "text-amber-300 font-extrabold",
      border: "border-amber-400/70 shadow-[0_0_14px_rgba(251,191,36,0.45)]",
      dot: "bg-amber-400 shadow-[0_0_8px_#f59e0b]",
    },
    Planned: {
      bg: "bg-purple-400/20 backdrop-blur-sm",
      text: "text-purple-300 font-extrabold",
      border: "border-purple-400/60 shadow-[0_0_12px_rgba(192,132,252,0.35)]",
      dot: "bg-purple-400",
    },
  };

  const styles = theme === "dark" ? darkStyles : lightStyles;

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[11px] gap-1.5",
    md: "px-3 py-1 text-xs gap-1.5",
    lg: "px-4 py-1.5 text-sm gap-2",
  };

  const style = styles[status];
  const label = labels[status];
  const highlightClass = highlighted
    ? "ring-1 ring-amber-400/70 shadow-[0_0_16px_rgba(251,191,36,0.5)] font-black"
    : "";

  return (
    <span
      title={label.hint}
      className={`inline-flex items-center rounded-full border ${style.bg} ${style.text} ${style.border} ${sizeClasses[size]} ${highlightClass} ${className}`}
    >
      {showIcon && (
        <>
          {status === "Available" && <CheckCircle2 className="h-3 w-3 shrink-0" />}
          {status === "In Development" && (
            <span className="relative flex h-2 w-2 shrink-0">
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${style.dot} opacity-85`} />
              <span className={`relative inline-flex h-2 w-2 rounded-full ${style.dot}`} />
            </span>
          )}
          {status === "Planned" && <Clock className="h-3 w-3 shrink-0" />}
        </>
      )}
      <span className="tracking-tight">{label[lang]}</span>
    </span>
  );
}
