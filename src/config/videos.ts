/**
 * Centralized PANORA video configuration.
 * Replace the `mp4` / `webm` / `poster` values here to swap videos site-wide.
 */

export type VideoSource = {
  id: string;
  mp4: string;
  webm?: string;
  poster: string;
  label: string;
};

const POSTER_MERCHANT = "/images/hero-merchant.jpg";
const POSTER_DISTRIBUTOR = "/images/hero-distributor.jpg";
const POSTER_DELIVERY = "/images/hero-delivery.jpg";

export const videos = {
  merchant: {
    id: "merchant",
    mp4: "/__l5e/assets-v1/32c791c2-6f89-4c64-a29f-cca80b8b1c6d/panora-merchant.mp4",
    poster: POSTER_MERCHANT,
    label: "A Nepali retail merchant managing B2B restock and B2C counter sales",
  },
  distributor: {
    id: "distributor",
    mp4: "/__l5e/assets-v1/26d0f14f-d966-41df-80ac-e13e7d9fbe50/panora-distributor.mp4",
    poster: POSTER_DISTRIBUTOR,
    label: "Distribution warehouse team preparing outbound wholesale orders",
  },
  delivery: {
    id: "delivery",
    mp4: "/__l5e/assets-v1/820ec0bc-1cbd-4382-a658-da3a7b0249a2/panora-delivery.mp4",
    poster: POSTER_DELIVERY,
    label: "Delivery partner completing a business and customer delivery",
  },
} satisfies Record<string, VideoSource>;

/** Hero clip sequence — each clip pairs a video with its cinematic headline. */
export const heroSequence: Record<"en" | "ne", Array<{ video: VideoSource; caption: string }>> = {
  en: [
    { video: videos.merchant, caption: "Powering Smarter B2B & B2C Commerce" },
    { video: videos.distributor, caption: "Connecting Businesses at Every Step" },
    { video: videos.delivery, caption: "From Order to Doorstep" },
  ],
  ne: [
    { video: videos.merchant, caption: "स्मार्टर B2B र B2C व्यापारलाई शक्ति प्रदान गर्दै" },
    { video: videos.distributor, caption: "हरेक चरणमा व्यवसायहरूलाई जोड्दै" },
    { video: videos.delivery, caption: "अर्डरदेखि ढोकासम्म" },
  ],
};

export const heroPoster = POSTER_MERCHANT;
