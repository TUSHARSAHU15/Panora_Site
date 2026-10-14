import { useEffect, useRef, useState } from "react";
import type { VideoSource } from "@/config/videos";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/**
 * Cinematic background video with poster fallback.
 * Never shows controls, always muted, loops, and degrades to a poster image
 * when the video fails, is off-screen, or reduced motion is requested.
 */
export function BackgroundVideo({
  source,
  className = "",
  active = true,
  eager = false,
}: {
  source: VideoSource;
  className?: string;
  active?: boolean;
  eager?: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLVideoElement | null>(null);
  const [failed, setFailed] = useState(false);
  const [inView, setInView] = useState(eager);

  useEffect(() => {
    const el = ref.current;
    if (!el || eager) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || failed) return;
    if (inView && active) {
      void el.play().catch(() => undefined);
    } else {
      el.pause();
    }
  }, [inView, active, reduced, failed]);

  if (reduced || failed) {
    return (
      <img
        src={source.poster}
        alt={source.label}
        width={1920}
        height={1080}
        loading={eager ? "eager" : "lazy"}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <video
      ref={ref}
      className={`h-full w-full object-cover ${className}`}
      poster={source.poster}
      muted
      loop
      playsInline
      autoPlay={eager}
      preload={eager ? "auto" : "none"}
      aria-label={source.label}
      onError={() => setFailed(true)}
    >
      {source.webm ? <source src={source.webm} type="video/webm" /> : null}
      <source src={source.mp4} type="video/mp4" />
    </video>
  );
}
