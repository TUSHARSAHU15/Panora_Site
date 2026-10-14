import { cn } from "@/lib/utils";

export function Logo({
  variant = "dark",
  className,
  imgClassName,
}: {
  variant?: "dark" | "light";
  className?: string;
  imgClassName?: string;
}) {
  const src = variant === "light" ? "/logo-new.png" : "/logo.png";
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={src}
        alt="PANORA - Connect. Manage. Trade."
        className={cn("h-12 w-auto object-contain", imgClassName)}
      />
    </span>
  );
}
