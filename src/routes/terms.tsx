import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/panora/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — PANORA Pvt. Ltd." },
      { name: "description", content: "Terms of Service governing the use of PANORA Pvt. Ltd. platforms, Business App, MoveX, and Marketplace." },
      { property: "og:title", content: "Terms of Service — PANORA Pvt. Ltd." },
      { property: "og:description", content: "Service standards, merchant terms, and logistics rules for the PANORA ecosystem." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const sections: LegalSection[] = [
  {
    id: "acceptance-entity",
    title: "1. Acceptance & Corporate Authority",
    body: [
      "These Terms of Service ('Terms') constitute a legally binding agreement between your commercial business and PANORA Pvt. Ltd., a private limited company incorporated under the laws of Nepal.",
      "By visiting our website, submitting a merchant pre-booking, registering as a MoveX delivery partner, or accessing any PANORA software application, you confirm that you possess full legal authority to bind the represented business.",
    ],
  },
  {
    id: "product-lifecycle-disclaimer",
    title: "2. Product Lifecycle & Development Status",
    body: [
      "PANORA Pvt. Ltd. is actively engineering its ecosystem. You acknowledge that features labeled as 'In Development' or 'Planned' represent active work and forward-looking product roadmaps.",
      "Early adopter beta registrations for the PANORA Business App and MoveX Parcel App provide priority access to pilot releases, which may be refined based on merchant and rider testing.",
    ],
  },
  {
    id: "commercial-credit",
    title: "3. Trade Arrangements & Digital Udhaaro",
    body: [
      "The PANORA Business App provides software for merchants and distributors to record transactions and track credit (udhaaro) balances mutually.",
      "PANORA Pvt. Ltd. operates as a technology facilitator and digital record system. PANORA is not a licensed bank, non-banking financial company (NBFC), or guarantor of trade credit, and assumes no liability for default between buyers and wholesale suppliers.",
    ],
  },
  {
    id: "movex-logistics",
    title: "4. MoveX Logistics & Parcel Coordination",
    body: [
      "MoveX coordinates parcel pickup and delivery requests between eligible businesses, customers, and delivery partners.",
      "Senders must ensure packages do not contain illegal, hazardous, stolen, or restricted goods under Nepalese law. Consignments are subject to inspection and secure OTP verification.",
      "Cash-on-Delivery (COD) funds collected by authorized MoveX riders are held in dedicated trust accounts and remitted to merchants according to agreed settlement cycles.",
    ],
  },
  {
    id: "account-security",
    title: "5. User Responsibilities & Account Security",
    body: [
      "You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your business account.",
      "You agree not to reverse-engineer, disrupt, or deploy unauthorized automated scripts against any PANORA infrastructure.",
    ],
  },
  {
    id: "governing-law",
    title: "6. Governing Law & Jurisdiction",
    body: [
      "These Terms are governed by and construed in accordance with the laws of Nepal.",
      "Any dispute arising from or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts of Kathmandu, Nepal.",
    ],
  },
];

function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The contractual terms governing the use of PANORA Pvt. Ltd. software, logistics services, and trade platforms."
      crumbLabel="Terms of Service"
      updated="October 2026"
      sections={sections}
    />
  );
}
