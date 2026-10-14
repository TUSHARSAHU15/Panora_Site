import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/panora/SolutionPage";
import { videos } from "@/config/videos";

export const Route = createFileRoute("/solutions/merchants")({
  head: () => ({
    meta: [
      { title: "PANORA for Merchants & Retailers — Modern Shop Operations" },
      {
        name: "description",
        content:
          "Order from verified distributors, manage digital udhaaro ledgers, track inventory, and receive MoveX doorstep deliveries with PANORA.",
      },
      { property: "og:title", content: "PANORA for Merchants — Connect. Manage. Trade." },
      { property: "og:description", content: "Shop billing, digital khata, inventory, and B2B ordering for Nepalese merchants." },
      { property: "og:url", content: "/solutions/merchants" },
    ],
    links: [{ rel: "canonical", href: "/solutions/merchants" }],
  }),
  component: () => (
    <SolutionPage
      eyebrow={{ en: "For Retailers & Merchants (B2B & B2C)", ne: "खुद्रा बिक्रेता तथा व्यापारी (B2B र B2C)" }}
      title={{ en: "Modernize Both B2B Restock & B2C Retail Operations", ne: "B2B थोक खरिद र B2C खुद्रा बिक्री दुवै आधुनिक बनाउनुहोस्" }}
      subtitle={{
        en: "Run your everyday B2C consumer counter billing, customer credit ledgers (khata), and B2B wholesale restock orders from one unified platform.",
        ne: "दैनिक B2C काउन्टर बिलिङ, ग्राहकको उधारो खाता र B2B थोक अर्डर एउटै सरल प्रविधिबाट सञ्चालन गर्नुहोस्।",
      }}
      crumbs={[
        { label: { en: "Solutions", ne: "समाधानहरू" }, to: "/solutions" },
        { label: { en: "For Merchants", ne: "व्यापारीहरूका लागि" } },
      ]}
      video={videos.merchant}
      ctaTo="/merchant-registration"
      intro={{
        en: {
          heading: "Unified B2B procurement and B2C consumer retail without lost records",
          body: [
            "Instead of juggling disconnected retail billing counters, paper notebooks, and endless phone calls with suppliers, merchants manage their entire trade cycle in one flow.",
            "Ring up consumer walk-ins with fast QR codes and WhatsApp receipts (B2C), while placing wholesale restock orders with verified brand distributors (B2B) — all synchronized by the PANORA Business App and Marketplace.",
          ],
        },
        ne: {
          heading: "कापीको हिसाब र फोन कलको झन्झट बिना B2B र B2C व्यापार सञ्चालन",
          body: [
            "कापीमा उधारो छुट्ने डर र वितरकलाई दिनहुँ फोन गर्नुपर्ने झन्झट अन्त्य गर्दै व्यापारीले आफ्नो सम्पूर्ण पसल एउटै डिजिटल प्रणालीबाट चलाउन सक्छन्।",
            "पसलमा आउने ग्राहकलाई द्रुत क्युआर बिलिङ र व्हाट्सएप रसिद (B2C) दिँदै आधिकारिक वितरकबाट सिधै थोक सामान अर्डर (B2B) गर्नुहोस् — सबै PANORA Business App मार्फत।",
          ],
        },
      }}
      benefits={{
        en: [
          { title: "Fast B2C POS & Dynamic QR", body: "Scan barcodes, display instant Fonepay/eSewa QR codes, and send paperless WhatsApp e-receipts." },
          { title: "One-Tap B2B Restock Ordering", body: "Browse verified brand catalogues on the Marketplace and reorder wholesale stock in seconds." },
          { title: "Dual Digital Khata (B2C & B2B)", body: "Separate ledgers for neighborhood consumer credit and distributor balances with SMS confirmations." },
          { title: "B2C Digital Storefront", body: "Share your live product catalogue on WhatsApp/social links for direct consumer home delivery." },
          { title: "MoveX Doorstep Delivery", body: "Dispatch retail orders to local consumers and track incoming wholesale restock cartons live." },
          { title: "100% Free Beta Period", body: "Pre-book today to receive free setup assistance, zero pilot fees, and permanent early adopter benefits." },
        ],
        ne: [
          { title: "द्रुत B2C POS र डायनामिक QR", body: "बारकोड स्क्यान, फोनपे/ईसेवा क्युआर कोड र ग्राहकका लागि कागजविहीन व्हाट्सएप रसिद।" },
          { title: "एक ट्यापमा B2B रिस्टक अर्डर", body: "बजारमा प्रमाणित क्याटलग हेरी केही सेकेन्डमै थोक सामान अर्डर पठाउनुहोस्।" },
          { title: "दोहोरो डिजिटल खाता (B2C र B2B)", body: "ग्राहकको उधारो र वितरकको हिसाबलाई एसएमएस पुष्टिसहित छुट्टाछुट्टै स्पष्ट राख्नुहोस्।" },
          { title: "B2C अनलाइन डिजिटल पसल", body: "ह्वाट्सएपमा पसलको क्याटलग सेयर गरी टोलका ग्राहकबाट सिधै अनलाइन अर्डर लिनुहोस्।" },
          { title: "MoveX घरदैलो डेलिभरी", body: "ग्राहकको घरमै सामान पठाउनुहोस् र गोदामबाट आउने थोक सामान प्रत्यक्ष ट्र्याक गर्नुहोस्।" },
          { title: "निःशुल्क बेटा अवधि", body: "आजै प्रि-बुक गरेर आजीवन विशेष सहुलियत र निःशुल्क अनबोर्डिङ सहयोग पाउनुहोस्।" },
        ],
      }}
      cta={{ en: "Pre-book Business App (Free Beta)", ne: "Business App प्रि-बुक गर्नुहोस् (निःशुल्क बेटा)" }}
    />
  ),
});
