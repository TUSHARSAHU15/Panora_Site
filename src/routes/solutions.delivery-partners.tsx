import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/panora/SolutionPage";
import { videos } from "@/config/videos";

export const Route = createFileRoute("/solutions/delivery-partners")({
  head: () => ({
    meta: [
      { title: "PANORA MoveX for Delivery Partners & Riders — Reliable Logistics Network" },
      {
        name: "description",
        content:
          "Join PANORA MoveX as an early delivery rider or fleet partner. Enjoy steady parcel assignments, grouped routes, and guaranteed weekly bank payouts.",
      },
      { property: "og:title", content: "MoveX for Delivery Partners — Connect. Manage. Trade." },
      { property: "og:description", content: "Parcel logistics assignments, route coordination, and verified COD settlement for riders in Nepal." },
      { property: "og:url", content: "/solutions/delivery-partners" },
    ],
    links: [{ rel: "canonical", href: "/solutions/delivery-partners" }],
  }),
  component: () => (
    <SolutionPage
      eyebrow={{ en: "For Delivery Partners & Riders", ne: "डेलिभरी साझेदारहरूका लागि" }}
      title={{ en: "Deliver Smarter. Earn With PANORA MoveX.", ne: "स्मार्टर डेलिभरी। PANORA MoveX सँग कमाउनुहोस्।" }}
      subtitle={{
        en: "Steady commercial parcel assignments, optimized route batches, and guaranteed weekly bank payouts for riders and fleet operators.",
        ne: "नियमित व्यावसायिक पार्सल काम, इन्धन बचाउने अनुकूलित रूट, र राइडर तथा फ्लीटका लागि निश्चित साप्ताहिक बैंक भुक्तानी।",
      }}
      crumbs={[
        { label: { en: "Solutions", ne: "समाधानहरू" }, to: "/solutions" },
        { label: { en: "For Delivery Partners", ne: "डेलिभरी साझेदारहरूका लागि" } },
      ]}
      video={{ ...videos.delivery, poster: "/images/rider-dispatch.jpg" }}
      ctaTo="/rider-registration"
      intro={{
        en: {
          heading: "Every trip optimized, every rupee accounted for",
          body: [
            "With PANORA MoveX, riders and delivery businesses see clear pickup points, parcel dimensions, destination addresses, and pre-calculated earnings before starting their shift.",
            "Handover confirmation via secure OTP ensures full proof of delivery, and cash collected is digitally reconciled without delayed courier disputes.",
          ],
        },
        ne: {
          heading: "हरेक यात्रा योजनाबद्ध, हरेक रुपैयाँ पारदर्शी",
          body: [
            "PANORA MoveX मार्फत राइडर र ढुवानी व्यवसायहरूले यात्रा सुरु गर्नुअघि नै स्पष्ट पिकअप स्थान, पार्सल आकार, गन्तव्य र अनुमानित आम्दानी देख्न सक्छन्।",
            "सुरक्षित OTP मार्फत डेलिभरी पुष्टि हुने हुँदा सामान हराउने डर रहँदैन, र संकलित नगद तत्काल एपमा हिसाब मिलान हुन्छ।",
          ],
        },
      }}
      benefits={{
        en: [
          { title: "Steady Commercial Parcels", body: "Receive high-priority business parcel deliveries from local stores and distributors." },
          { title: "Turn-by-Turn Guidance", body: "Optimized stop sequencing keeps your route direct and minimizes fuel waste." },
          { title: "Digital COD Tracking", body: "Every rupee of Cash-on-Delivery is digitally logged upon recipient OTP validation." },
          { title: "Weekly Bank Settlement", body: "Earnings are credited directly to your bank account on fixed weekly schedules." },
          { title: "Flexible Working Hours", body: "Choose full-time morning/evening shifts or weekend parcel delivery runs." },
          { title: "Fleet Management Integration", body: "Courier companies can manage multiple two-wheelers and vans from a single portal." },
        ],
        ne: [
          { title: "नियमित व्यावसायिक पार्सल", body: "स्थानीय पसल तथा वितरकहरूबाट आउने नियमित पार्सल ढुवानीको काम।" },
          { title: "अनुकूलित नेभिगेसन", body: "एउटै रूटमा पर्ने पार्सलहरू मिलाएर दिइने हुँदा समय र इन्धनको बचत।" },
          { title: "डिजिटल क्यास हिसाब", body: "ग्राहकबाट लिइएको नगद OTP मार्फत तुरुन्तै एपमा प्रमाणित हुन्छ।" },
          { title: "साप्ताहिक बैंक भुक्तानी", body: "कुनै झन्झट बिना तपाईंको आम्दानी हरेक हप्ता सिधै बैंक खातामा जम्मा।" },
          { title: "लचिलो कामको समय", body: "आफ्नो अनुकूलता अनुसार बिहान, साँझ, वा पूरा समय काम गर्ने सुविधा।" },
          { title: "फ्लीट व्यवस्थापन पोर्टल", body: "धेरै बाइक वा भ्यान भएका ढुवानी कम्पनीहरूले सजिलै सञ्चालन गर्न सक्ने।" },
        ],
      }}
      cta={{ en: "Register As MoveX Rider Partner", ne: "MoveX राइडर साझेदार दर्ता गर्नुहोस्" }}
    />
  ),
});
