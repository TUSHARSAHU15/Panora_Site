import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/panora/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — PANORA Pvt. Ltd." },
      { name: "description", content: "How PANORA Pvt. Ltd. collects, manages, and protects business and personal data across our digital ecosystem." },
      { property: "og:title", content: "Privacy Policy — PANORA Pvt. Ltd." },
      { property: "og:description", content: "Data protection standards for PANORA Business App, MoveX Parcel App, and Marketplace." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

const sections: LegalSection[] = [
  {
    id: "entity-scope",
    title: "1. Corporate Entity & Scope",
    body: [
      "This Privacy Policy is issued by PANORA Pvt. Ltd. ('PANORA', 'we', 'our', or 'us'), a private limited company registered in Nepal. It governs the collection, processing, and protection of information across all our digital touchpoints, including the PANORA corporate website, the PANORA Business App, the PANORA MoveX Parcel App, and the PANORA Marketplace.",
      "This policy applies to all registered merchants, retailers, distributors, logistics riders, commercial partners, and website visitors.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: [
      "Business Profile & Identification: Business name, owner/manager name, PAN/VAT registration numbers, physical shop location, contact phone numbers, and email addresses.",
      "Operational & Transactional Data: Order details, inventory catalogues, invoice quantities, and digital udhaaro (credit) records entered by merchants into the PANORA Business App.",
      "Logistics & Location Information: For PANORA MoveX, we collect parcel pickup/drop addresses, recipient contact details, vehicle registration details for riders, and real-time GPS location during active delivery runs.",
      "Financial Settlement Data: Bank account details and mobile wallet identifiers strictly for processing Cash-on-Delivery (COD) remittances and verified merchant payouts.",
    ],
  },
  {
    id: "confidentiality-ledgers",
    title: "3. Merchant Ledger & Khata Confidentiality",
    body: [
      "PANORA Pvt. Ltd. regards your shop's customer records, private credit balances, and wholesale pricing agreements as strictly confidential trade secrets.",
      "We will never monetize, sell, or disclose your individual shop ledger data, customer lists, or proprietary margins to third-party advertisers or competing businesses.",
    ],
  },
  {
    id: "how-we-use",
    title: "4. Purpose of Data Processing",
    body: [
      "To provision and maintain the PANORA Business App, MoveX parcel dispatching engine, and Marketplace directory.",
      "To verify rider credentials and execute secure OTP-verified deliveries.",
      "To facilitate accurate, automated Cash-on-Delivery (COD) settlements directly to merchant bank accounts.",
      "To communicate important service alerts, security notifications, and beta development updates.",
      "To comply with applicable laws and regulatory obligations in Nepal.",
    ],
  },
  {
    id: "data-security",
    title: "5. Data Security & Retention",
    body: [
      "We enforce industry-standard technical and operational safeguards, including transport layer encryption (TLS), access-controlled database storage, and tokenized session management.",
      "Operational records are retained for the duration of your active business relationship with PANORA Pvt. Ltd., plus any statutory record-keeping period mandated by Nepalese commercial law.",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights & Inquiries",
    body: [
      "You hold the right to review, update, or request the closure and data deletion of your registered account, subject to resolving active financial or delivery balances.",
      "For questions regarding our privacy practices, reach our Data Protection Officer at privacy@panora.com.np or through our corporate office in Kathmandu, Nepal.",
    ],
  },
];

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How PANORA Pvt. Ltd. protects and manages data across our business, logistics, and trade ecosystem."
      crumbLabel="Privacy Policy"
      updated="October 2026"
      sections={sections}
    />
  );
}
