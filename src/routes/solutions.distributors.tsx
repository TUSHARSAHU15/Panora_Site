import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/panora/SolutionPage";
import { videos } from "@/config/videos";

export const Route = createFileRoute("/solutions/distributors")({
  head: () => ({
    meta: [
      { title: "PANORA for Wholesalers & Distributors — Scale Your Merchant Network" },
      {
        name: "description",
        content:
          "Showcase your wholesale brand catalogue, streamline order fulfillment, manage merchant credit limits, and coordinate MoveX dispatch across Nepal.",
      },
      { property: "og:title", content: "PANORA for Distributors — Connect. Manage. Trade." },
      { property: "og:description", content: "Wholesale catalogue management, order queues, and warehouse dispatch for distributors in Nepal." },
      { property: "og:url", content: "/solutions/distributors" },
    ],
    links: [{ rel: "canonical", href: "/solutions/distributors" }],
  }),
  component: () => (
    <SolutionPage
      eyebrow={{ en: "For Wholesalers & Distributors", ne: "थोक बिक्रेता तथा वितरकहरूका लागि" }}
      title={{ en: "Scale Your Wholesale Distribution Network Across Nepal", ne: "नेपालभरि आफ्नो थोक वितरण सञ्जाल विस्तार गर्नुहोस्" }}
      subtitle={{
        en: "Digitize wholesale orders from hundreds of shops, synchronize warehouse picking, manage merchant credit, and coordinate express parcel dispatch.",
        ne: "सयौं पसलहरूबाट आउने अर्डर डिजिटल रूपमा संकलन गर्नुहोस्, गोदाम व्यवस्थापन सहज बनाउनुहोस् र छिटो ढुवानी गर्नुहोस्।",
      }}
      crumbs={[
        { label: { en: "Solutions", ne: "समाधानहरू" }, to: "/solutions" },
        { label: { en: "For Distributors", ne: "वितरकहरूका लागि" } },
      ]}
      video={{ ...videos.distributor, poster: "/images/distributor-fleet.jpg" }}
      ctaTo="/merchant-registration"
      intro={{
        en: {
          heading: "A wider merchant reach, a calmer warehouse operation",
          body: [
            "PANORA Marketplace features your verified brand catalogue in front of verified retail shopkeepers across Nepal, directing their reorders into a single, structured digital queue instead of disorganized phone calls and scattered paper slips.",
            "From acceptance to packing and MoveX dispatch handoff, your sales, inventory, and logistics teams operate from one synchronized source of truth.",
          ],
        },
        ne: {
          heading: "फराकिलो बजार पहुँच र व्यवस्थित गोदाम सञ्चालन",
          body: [
            "PANORA ले तपाईंको आधिकारिक क्याटलग नेपालभरका प्रमाणित खुद्रा पसलहरूको अगाडि प्रस्तुत गर्दछ, र छरिएका फोन कलको सट्टा सम्पूर्ण अर्डरहरू एउटै व्यवस्थित डिजिटल लाइनमा ल्याउँछ।",
            "अर्डर स्वीकृति, प्याकिङ र MoveX ढुवानी हस्तान्तरणसम्म तपाईंको बिक्री, गोदाम र हिसाब टोली एउटै भरपर्दो प्रणालीबाट सञ्चालन हुन्छन्।",
          ],
        },
      }}
      benefits={{
        en: [
          { title: "Expanded Merchant Reach", body: "Connect with verified retailers beyond your current physical sales routes." },
          { title: "Clean Order Queues", body: "No missed items or illegible handwritten chits — orders arrive with exact SKU quantities." },
          { title: "Credit & Ledger Controls", body: "Set merchant credit limits and track payment commitments with complete mutual clarity." },
          { title: "Warehouse Picking Lists", body: "Generate optimized item lists so warehouse staff pack cartons faster with fewer errors." },
          { title: "Integrated MoveX Dispatch", body: "Assign shipments directly to verified MoveX parcel riders or your own dedicated fleet." },
          { title: "Analytics & Sell-Through", body: "Analyze which retail areas and product categories are generating the highest volume." },
        ],
        ne: [
          { title: "विस्तारित व्यापारी पहुँच", body: "आफ्नो परम्परागत बजार क्षेत्र बाहिरका नयाँ खुद्रा व्यापारीहरूसम्म सहज पहुँच।" },
          { title: "स्पष्ट डिजिटल अर्डर", body: "कागजमा नबुझिने हस्तलेखनको अन्त्य — अर्डरहरू स्पष्ट परिमाणसहित आउँछन्।" },
          { title: "उधारो र खाता नियन्त्रण", body: "व्यापारी अनुसार उधारो सीमा तोक्नुहोस् र हिसाबकिताब पारदर्शी राख्नुहोस्।" },
          { title: "गोदाम प्याकिङ सूची", body: "गोदामका कर्मचारीहरूले छिटो र गल्ती बिना सामान प्याक गर्न सक्ने सूची।" },
          { title: "MoveX ढुवानी समन्वय", body: "पार्सल संकलनका लागि MoveX राइडर वा आफ्नै गाडीलाई तत्काल खटाउनुहोस्।" },
          { title: "बिक्री तथा माग विश्लेषण", body: "कुन क्षेत्रमा कुन सामान बढी बिक्री भइरहेको छ प्रत्यक्ष हेर्नुहोस्।" },
        ],
      }}
      cta={{ en: "Join As Founding Distributor Partner", ne: "संस्थापक वितरक साझेदार बन्नुहोस्" }}
    />
  ),
});
