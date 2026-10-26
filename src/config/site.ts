import type { FeatureStatus } from "@/components/panora/StatusBadge";

export const site = {
  en: {
    name: "PANORA Pvt. Ltd.",
    brandName: "PANORA",
    tagline: "Connect. Manage. Trade.",
    subtagline: "Building Nepal's Integrated Digital Business & Logistics Ecosystem",
    description:
      "PANORA Pvt. Ltd. is a technology company developing an integrated digital business ecosystem for Nepal. We unite everyday business management, parcel logistics coordination, and multi-vendor trade under one unified infrastructure.",
    contact: {
      email: "info@panora.com.np",
      supportEmail: "info@panora.com.np",
      careersEmail: "careers@panora.com.np",
      phone: "+977 9852822139",
      location: "Saptari, Madhesh Province, Nepal",
      hours: "Sunday – Friday, 9:00 AM – 6:00 PM (NPT)",
    },
  },
  ne: {
    name: "PANORA Pvt. Ltd.",
    brandName: "PANORA",
    tagline: "Connect. Manage. Trade.",
    subtagline: "नेपालको एकीकृत डिजिटल व्यवसाय र रसद (Logistics) पारिस्थितिकी निर्माण गर्दै",
    description:
      "PANORA Pvt. Ltd. नेपालका लागि एक एकीकृत डिजिटल व्यापार पारिस्थितिकी विकास गर्ने प्रविधि कम्पनी हो। हामी दैनिक व्यापार सञ्चालन, पार्सल डेलिभरी समन्वय, र बहु-विक्रेता व्यापारलाई एउटै पूर्वाधारमा जोड्छौं।",
    contact: {
      email: "info@panora.com.np",
      supportEmail: "info@panora.com.np",
      careersEmail: "careers@panora.com.np",
      phone: "+977 9852822139",
      location: "सप्तरी, मधेश प्रदेश, नेपाल",
      hours: "आइतबार – शुक्रबार, बिहान ९:०० – साँझ ६:०० (NPT)",
    },
  },
};

export const mainNav = {
  en: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Vision & Mission", to: "/vision-mission" },
    { label: "Products", to: "/products" },
    { label: "Solutions", to: "/solutions" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Pricing", to: "/pricing" },
    { label: "Partners", to: "/partners-careers" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ] as const,
  ne: [
    { label: "गृह", to: "/" },
    { label: "हाम्रो बारेमा", to: "/about" },
    { label: "दृष्टिकोण र लक्ष्य", to: "/vision-mission" },
    { label: "उत्पादनहरू", to: "/products" },
    { label: "समाधानहरू", to: "/solutions" },
    { label: "यसले कसरी काम गर्छ", to: "/how-it-works" },
    { label: "मूल्य निर्धारण", to: "/pricing" },
    { label: "साझेदारहरू", to: "/partners-careers" },
    { label: "प्रश्नोत्तर", to: "/faq" },
    { label: "सम्पर्क", to: "/contact" },
  ] as const,
};

export const productsNav = {
  en: [
    {
      label: "PANORA Business App (B2B & B2C)",
      to: "/products/business-app",
      status: "In Development" as FeatureStatus,
      blurb: "Unified B2B & B2C app for merchants, retailers & distributors to simplify wholesale restock and retail counter sales.",
    },
    {
      label: "PANORA MoveX Parcel App",
      to: "/products/movex",
      status: "In Development" as FeatureStatus,
      blurb: "Parcel pickup, delivery coordination, and real-time rider tracking.",
    },
    {
      label: "PANORA Marketplace",
      to: "/products/marketplace",
      status: "In Development" as FeatureStatus,
      blurb: "Product discovery and multi-vendor trade catalogue for B2B and B2C commerce.",
    },
  ],
  ne: [
    {
      label: "PANORA Business App (B2B र B2C)",
      to: "/products/business-app",
      status: "In Development" as FeatureStatus,
      blurb: "व्यापारी, खुद्रा विक्रेता र वितरकका लागि B2B थोक खरिद र B2C खुद्रा बिक्री सञ्चालन गर्ने एकीकृत एप।",
    },
    {
      label: "PANORA MoveX Parcel App",
      to: "/products/movex",
      status: "In Development" as FeatureStatus,
      blurb: "पार्सल पिकअप, डेलिभरी समन्वय र वास्तविक समयको राइडर ट्र्याकिङ।",
    },
    {
      label: "PANORA Marketplace",
      to: "/products/marketplace",
      status: "In Development" as FeatureStatus,
      blurb: "B2B र B2C व्यापारका लागि उत्पादन खोज तथा बहु-विक्रेता व्यापार क्याटलग।",
    },
  ],
};

export const solutionsNav = {
  en: [
    {
      label: "For Merchants & Retailers",
      to: "/solutions/merchants",
      blurb: "Manage shop inventory, digital udhaaro, and place wholesale restock orders.",
    },
    {
      label: "For Wholesalers & Distributors",
      to: "/solutions/distributors",
      blurb: "Streamline order dispatch, warehouse stock, and merchant credit ledgers.",
    },
    {
      label: "For Delivery Partners & Riders",
      to: "/solutions/delivery-partners",
      blurb: "Coordinate business parcel runs, route pickups, and verify cash-on-delivery.",
    },
  ] as const,
  ne: [
    {
      label: "व्यापारी तथा खुद्रा बिक्रेता",
      to: "/solutions/merchants",
      blurb: "पसलको मौज्दात, डिजिटल उधारो खाता र थोक अर्डर व्यवस्थापन गर्नुहोस्।",
    },
    {
      label: "थोक बिक्रेता तथा वितरकहरू",
      to: "/solutions/distributors",
      blurb: "अर्डर प्रेषण, गोदाम मौज्दात र व्यापारी क्रेडिट खाता सुव्यवस्थित गर्नुहोस्।",
    },
    {
      label: "डेलिभरी साझेदार तथा राइडरहरू",
      to: "/solutions/delivery-partners",
      blurb: "पार्सल ढुवानी, पिकअप रूट समन्वय र क्यास-अन-डेलिभरी प्रमाणित गर्नुहोस्।",
    },
  ] as const,
};

export const productsDetail = {
  en: {
    businessApp: {
      id: "business-app",
      name: "PANORA Business App (B2B & B2C)",
      tagline: "Dual B2B & B2C Engine — Streamline wholesale restock, accelerate retail counter checkout, and trade with confidence.",
      status: "In Development" as FeatureStatus,
      readinessSummary: "Currently under active development. Core modules for B2B supplier restock and B2C retail POS checkout are in pilot testing. Pre-booking is open for early adopter merchants, retailers, and distributors across Nepal.",
      overview:
        "A unified, dual-engine business management application engineered specifically for Nepal's trade ecosystem. PANORA Business App bridges both B2B wholesale supplier procurement and high-speed B2C retail counter sales under one live inventory ledger. Whether replenishing stock from authorized wholesale distributors (B2B) or serving walk-in retail shoppers with instant QR billing and WhatsApp e-receipts (B2C), merchants manage their entire trade cycle seamlessly.",
      targetUsers: [
        "B2C Retailers & Local Shopkeepers (Kirana, Electronics, Clothing, Hardware) serving daily consumers",
        "B2B Wholesale Stockists & Regional Brand Distributors",
        "Direct-to-Consumer (D2C) & Social Sellers managing online B2C customer orders",
        "Small & Medium Enterprises (SMEs) operating both B2B wholesale trade and B2C retail counters",
      ],
      problemsSolved: [
        {
          problem: "Disconnected B2B Wholesale Restock & B2C Counter Sales",
          solution: "Unified B2B & B2C engine linking wholesale supplier purchases with front-counter retail POS checkout under one synchronized inventory ledger.",
        },
        {
          problem: "Chaotic Paper Ledgers & Udhaaro Disputes (B2B & B2C)",
          solution: "Dual Digital Khata separating B2C customer store credit from B2B supplier payables with automated SMS reminders and mutual balance verification.",
        },
        {
          problem: "Slow Retail Checkout & Paper Receipt Waste",
          solution: "High-speed B2C POS with rapid barcode scanning, dynamic Fonepay/eSewa QR code generation, and paperless WhatsApp digital receipts.",
        },
        {
          problem: "No Digital Channel for Local Consumer Delivery",
          solution: "Instant B2C Digital Storefront link allowing neighborhood consumers to order online with MoveX doorstep delivery integration.",
        },
      ],
      features: [
        { name: "Fast B2C Counter POS & QR Invoicing", status: "In Development" as FeatureStatus, description: "Generate digital bills in seconds with barcode scanning, dynamic Fonepay/eSewa QR codes, and paperless WhatsApp receipts for consumers." },
        { name: "B2B Wholesale Restock & Supplier Connect", status: "In Development" as FeatureStatus, description: "Browse verified brand catalogues, compare wholesale volume pricing, and place bulk restock orders directly in-app." },
        { name: "Dual Digital Khata (B2C & B2B Ledgers)", status: "In Development" as FeatureStatus, description: "Maintain separate, transparent credit ledgers for walk-in retail customers (B2C) and wholesale distributors (B2B)." },
        { name: "B2C Digital Storefront & Social Commerce", status: "In Development" as FeatureStatus, description: "Share your live product catalogue via WhatsApp or social links so neighborhood consumers can place direct orders." },
        { name: "Integrated MoveX B2C & B2B Parcel Dispatch", status: "In Development" as FeatureStatus, description: "Dispatch customer orders for local home delivery or ship B2B wholesale cartons in one tap via MoveX riders." },
        { name: "Unified Real-Time Inventory & Low-Stock Alerts", status: "In Development" as FeatureStatus, description: "Live stock deduction on every B2C retail sale with automated threshold alerts triggering B2B wholesale reorders." },
        { name: "Multi-Staff Roles & Cashier Shift Tracking", status: "Planned" as FeatureStatus, description: "Granular permissions for front-counter retail cashiers and back-office B2B inventory managers." },
        { name: "Tally, Swastik & Tax Invoicing Sync", status: "Planned" as FeatureStatus, description: "Export B2B purchases and B2C retail invoices directly into standard Nepalese accounting and VAT formats." },
      ],
    },
    movex: {
      id: "movex",
      name: "PANORA MoveX Parcel App",
      tagline: "Reliable parcel pickup, transparent delivery coordination, and rider empowerment.",
      status: "In Development" as FeatureStatus,
      readinessSummary: "In active engineering. Parcel booking architecture and rider dispatch flows are being piloted in selected zones of the Kathmandu Valley. Rider and fleet onboarding is currently accepting applications.",
      overview:
        "PANORA MoveX is our dedicated logistics and parcel coordination product. It bridges businesses, local couriers, independent riders, and customers into one reliable delivery network designed for the unique geographic realities of Nepal.",
      targetUsers: [
        "Local Businesses & E-commerce Merchants requiring scheduled or on-demand parcel dispatch",
        "Independent Two-Wheeler Riders & Fleet Operators seeking steady delivery earnings",
        "Wholesalers dispatching urgent samples and high-priority cartons",
        "Individual Customers needing secure point-to-point parcel transport",
      ],
      problemsSolved: [
        {
          problem: "Unpredictable Delivery Timelines & Lost Parcels",
          solution: "End-to-end status milestones, secure pickup verification, and real-time live map tracking.",
        },
        {
          problem: "Delayed Cash-on-Delivery (COD) Remittances",
          solution: "Automated digital reconciliation with transparent COD settlement schedules directly to bank accounts.",
        },
        {
          problem: "Arbitrary Delivery Rates & Lack of Route Optimization",
          solution: "Clear standard parcel tier pricing and grouped route coordination to minimize rider deadhead miles.",
        },
      ],
      features: [
        { name: "Point-to-Point Parcel Booking", status: "In Development" as FeatureStatus, description: "Quick pickup address, parcel dimensions, recipient details, and on-demand courier dispatch." },
        { name: "Rider Companion App & Navigation", status: "In Development" as FeatureStatus, description: "Optimized delivery stop sequences, turn-by-turn guidance, and instant status updates." },
        { name: "Proof of Delivery (OTP / Signature)", status: "In Development" as FeatureStatus, description: "Secure recipient handoff verification preventing disputed drops and missing items." },
        { name: "COD Collection & Digital Khata", status: "In Development" as FeatureStatus, description: "Real-time tracking of cash collected with scheduled merchant settlement." },
        { name: "Intercity Freight & Express Hubs", status: "Planned" as FeatureStatus, description: "Scheduled intercity parcel transfer linking Kathmandu with major provincial hubs." },
        { name: "Automated Fleet Dispatch Engine", status: "Planned" as FeatureStatus, description: "AI-driven batch dispatching for high-volume commercial logistics partners." },
      ],
    },
    marketplace: {
      id: "marketplace",
      name: "PANORA Marketplace",
      tagline: "Transparent product discovery, verified supplier directories, and multi-tier trade.",
      status: "In Development" as FeatureStatus,
      readinessSummary: "Directory and wholesale supplier catalogue discovery are currently in development. Full automated cross-country B2B/B2C checkout and consumer retail capabilities are scheduled in upcoming phases.",
      overview:
        "The digital marketplace layer of PANORA Pvt. Ltd. It connects verified distributors and manufacturers directly with retail businesses and eligible buyers across Nepal, making price discovery fair, accessible, and transparent.",
      targetUsers: [
        "Brand Principals & Authorized National Distributors",
        "Retail Shopkeepers seeking genuine source pricing and bulk discounts",
        "Institutional Buyers & Corporate Procurement Offices",
        "Consumers seeking verified local and national goods (Future phase)",
      ],
      problemsSolved: [
        {
          problem: "High Middlemen Markups & Price Opacity",
          solution: "Verified supplier storefronts showing transparent wholesale pricing tiers and minimum order quantities (MOQs).",
        },
        {
          problem: "Limited Discovery Beyond Immediate Geography",
          solution: "National digital catalogue enabling rural merchants to order directly from Kathmandu and Terai distributors.",
        },
        {
          problem: "Counterfeit & Unverified Products",
          solution: "Rigorous PANORA verification of business registration (PAN/VAT) and authorized distributorship rights.",
        },
      ],
      features: [
        { name: "Verified Distributor Catalogues", status: "In Development" as FeatureStatus, description: "Browse verified brand catalogues with clear specifications and wholesale pricing tiers." },
        { name: "Direct RFQ & Bulk Price Negotiation", status: "In Development" as FeatureStatus, description: "Request formal price quotes for large commercial purchases and custom payment terms." },
        { name: "Supplier Rating & Authenticity Badges", status: "In Development" as FeatureStatus, description: "Community-driven merchant reviews, order completion rates, and official brand badges." },
        { name: "Integrated MoveX Shipping at Checkout", status: "In Development" as FeatureStatus, description: "Seamless delivery calculation and parcel dispatch through the MoveX network." },
        { name: "B2C Consumer Marketplace Portal", status: "Planned" as FeatureStatus, description: "Expanding merchant storefronts to retail consumers for direct digital shopping across Nepal." },
        { name: "Cross-Border Import/Export Channels", status: "Planned" as FeatureStatus, description: "Future-facing trade bridge connecting Nepalese producers with regional South Asian markets." },
      ],
    },
  },
  ne: {
    businessApp: {
      id: "business-app",
      name: "PANORA Business App (B2B र B2C)",
      tagline: "B2B र B2C एकीकृत इन्जिन — थोक सामान खरिद, खुद्रा काउन्टर बिलिङ र ग्राहक अर्डर सहजै सञ्चालन गर्नुहोस्।",
      status: "In Development" as FeatureStatus,
      readinessSummary: "हाल सक्रिय विकासमा छ। B2B वितरक रिस्टकिङ र B2C खुद्रा POS बिलिङका मुख्य मोड्युलहरू आन्तरिक परीक्षणमा छन्। नेपालभरका अग्रगामी व्यापारी, बिक्रेता र वितरकहरूका लागि प्रि-बुकिङ खुला छ।",
      overview:
        "नेपालको व्यापारिक वातावरणलाई ध्यानमा राखी निर्माण गरिएको एकीकृत B2B र B2C व्यवसाय व्यवस्थापन एप। PANORA Business App ले थोक वितरकबाट सामान खरिद (B2B) र ग्राहकलाई पसलमा द्रुत डिजिटल बिलिङ तथा अनलाइन बिक्री (B2C) लाई एउटै डिजिटल खाता र स्टकमा जोड्छ। चाहे आधिकारिक वितरकबाट थोक सामान रिस्टक गर्नुपरोस् वा पसलमा आउने ग्राहकलाई तत्काल क्युआर बिलिङ र व्हाट्सएप रसिद दिनुपरोस्, सबै कारोबार एउटै एपबाट सम्भव हुन्छ।",
      targetUsers: [
        "दैनिक ग्राहकलाई सेवा दिने B2C खुद्रा बिक्रेता तथा स्थानीय पसलहरू (किराना, कपडा, इलेक्ट्रोनिक्स, हार्डवेयर)",
        "B2B थोक व्यापारी तथा क्षेत्रीय ब्राण्ड वितरकहरू",
        "अनलाइन ग्राहकलाई सिधै सामान बेच्ने D2C तथा सामाजिक सञ्जाल बिक्रेताहरू",
        "B2B थोक व्यापार र B2C खुद्रा काउन्टर दुवै सञ्चालन गर्ने साना तथा मझौला उद्योगहरू (SMEs)",
      ],
      problemsSolved: [
        {
          problem: "B2B थोक खरिद र B2C खुद्रा काउन्टर बीच हिसाब नमिल्नु",
          solution: "B2B र B2C एकीकृत इन्जिन जसले वितरकबाट आएको सामान र काउन्टरमा भएको बिक्रीलाई एउटै स्टक र खातामा स्वचालित मिलाउँछ।",
        },
        {
          problem: "कापीमा उधारो हिसाब र ग्राहक/वितरक विवाद (B2B र B2C)",
          solution: "दोहोरो डिजिटल खाता — ग्राहकको उधारो (B2C) र वितरकको भुक्तानी (B2B) लाई स्वचालित एसएमएस पुष्टिसहित छुट्टाछुट्टै स्पष्ट राख्छ।",
        },
        {
          problem: "काउन्टरमा बिलिङ ढिलाइ र कागजको रसिद झन्झट",
          solution: "द्रुत B2C POS — बारकोड स्क्यान, फोनपे/ईसेवा क्युआर कोड र ग्राहकका लागि कागजविहीन व्हाट्सएप डिजिटल बिल।",
        },
        {
          problem: "स्थानीय ग्राहकका लागि अनलाइन डेलिभरी सुविधा नहुनु",
          solution: "तत्काल B2C डिजिटल स्टोर लिङ्क जसबाट टोलका ग्राहकले अनलाइन अर्डर गर्न सक्छन् र MoveX मार्फत घरमै सामान डेलिभरी हुन्छ।",
        },
      ],
      features: [
        { name: "द्रुत B2C काउन्टर POS र QR बिलिङ", status: "In Development" as FeatureStatus, description: "बारकोड स्क्यान, फोनपे/ईसेवा क्युआर कोड र ग्राहकका लागि व्हाट्सएप डिजिटल बिल केही सेकेन्डमै जारी गर्नुहोस्।" },
        { name: "B2B थोक वितरक जडान तथा रिस्टकिङ", status: "In Development" as FeatureStatus, description: "प्रमाणित वितरकका क्याटलग हेरी थोक मूल्यमा सिधै एप भित्रैबाट सामान अर्डर गर्नुहोस्।" },
        { name: "दोहोरो डिजिटल खाता (B2C र B2B)", status: "In Development" as FeatureStatus, description: "खुद्रा ग्राहकको उधारो (B2C) र वितरकको खाता (B2B) लाई छुट्टाछुट्टै पारदर्शी राख्नुहोस्।" },
        { name: "B2C डिजिटल पसल र अनलाइन अर्डर", status: "In Development" as FeatureStatus, description: "ह्वाट्सएप वा फेसबुकमा आफ्नो पसलको क्याटलग सेयर गरी ग्राहकबाट सिधै अनलाइन अर्डर लिनुहोस्।" },
        { name: "MoveX मार्फत B2C होम डेलिभरी", status: "In Development" as FeatureStatus, description: "पसलको काउन्टरबाटै एक क्लिकमा MoveX राइडर बोलाएर ग्राहकको घरमा सामान पठाउनुहोस्।" },
        { name: "एकीकृत स्टक ट्र्याकर र न्यून स्टक सूचना", status: "In Development" as FeatureStatus, description: "B2C बिक्रीसँगै स्टक घट्ने र सामान सकिन लाग्दा B2B रिस्टक सूचना प्राप्त हुने।" },
        { name: "कर्मचारी भूमिका र क्यासियर सिफ्ट व्यवस्थापन", status: "Planned" as FeatureStatus, description: "काउन्टर क्यासियर र गोदाम व्यवस्थापकका लागि छुट्टाछुट्टै भूमिका र अनुमति नियन्त्रण।" },
        { name: "ट्याली (Tally) र भ्याट बिलिङ सिंक", status: "Planned" as FeatureStatus, description: "B2B खरिद र B2C बिक्रीलाई नेपाली प्रचलित लेखा सफ्टवेयरसँग सिधै सिंक गर्नुहोस्।" },
      ],
    },
    movex: {
      id: "movex",
      name: "PANORA MoveX Parcel App",
      tagline: "भरपर्दो पार्सल पिकअप, पारदर्शी डेलिभरी समन्वय, र राइडर सशक्तीकरण।",
      status: "In Development" as FeatureStatus,
      readinessSummary: "सक्रिय विकासमा छ। पार्सल बुकिङ र राइडर प्रेषण प्रणाली काठमाडौँ उपत्यकाका छानिएका क्षेत्रहरूमा परीक्षण भइरहेको छ। राइडर र फ्लीट साझेदारहरूको आवेदन खुला छ।",
      overview:
        "PANORA MoveX हाम्रो समर्पित ढुवानी तथा पार्सल समन्वय उत्पादन हो। यसले व्यवसाय, स्थानीय कुरियर, स्वतन्त्र राइडर र ग्राहकहरूलाई नेपालको भौगोलिक वास्तविकता अनुकूल भरपर्दो नेटवर्कमा जोड्छ।",
      targetUsers: [
        "पार्सल पठाउन चाहने स्थानीय व्यवसाय तथा ई-कमर्स बिक्रेता",
        "स्थिर आम्दानी खोज्ने स्वतन्त्र दुई-पाङ्ग्रे राइडर तथा ढुवानी कम्पनीहरू",
        "तत्काल नमुना वा सामान पठाउन चाहने थोक व्यापारीहरू",
        "सुरक्षित पार्सल ओसारपसार गर्न चाहने सर्वसाधारण ग्राहकहरू",
      ],
      problemsSolved: [
        {
          problem: "डेलिभरीमा ढिलाइ र हराउने जोखिम",
          solution: "प्रत्येक चरणको स्थिति अद्यावधिक, सुरक्षित पिकअप कोड, र लाइभ म्याप ट्र्याकिङ।",
        },
        {
          problem: "क्यास-अन-डेलिभरी (COD) भुक्तानीमा ढिलाइ",
          solution: "पारदर्शी डिजिटल हिसाब र सिधै बैंक खातामा निश्चित समयमा रकम भुक्तानी।",
        },
        {
          problem: "अव्यवस्थित भाडा र रूट समस्या",
          solution: "स्पष्ट पार्सल दर र राइडरका लागि उपयुक्त रूट अनुकूलन।",
        },
      ],
      features: [
        { name: "प्वाइन्ट-टु-प्वाइन्ट पार्सल बुकिङ", status: "In Development" as FeatureStatus, description: "सजिलो पिकअप ठेगाना, पार्सल आकार र अन-डिमान्ड कुरियर अनुरोध।" },
        { name: "राइडर साथी एप र नेभिगेसन", status: "In Development" as FeatureStatus, description: "अनुकूलित डेलिभरी क्रम र तत्काल स्थिति अपडेट।" },
        { name: "सुरक्षित डेलिभरी प्रमाण (OTP/हस्ताक्षर)", status: "In Development" as FeatureStatus, description: "सामान सही व्यक्तिको हातमा पुगेको प्रामाणिक पुष्टि।" },
        { name: "COD संकलन र डिजिटल रेकर्ड", status: "In Development" as FeatureStatus, description: "संकलित नगदको प्रत्यक्ष रेकर्ड र व्यापारीलाई समयमै भुक्तानी।" },
        { name: "अन्तर-शहर फ्रेट तथा एक्सप्रेस हब", status: "Planned" as FeatureStatus, description: "काठमाडौँलाई प्रमुख प्रादेशिक शहरहरूसँग जोड्ने द्रुत सेवा।" },
        { name: "स्वचालित फ्लीट प्रेषण इन्जिन", status: "Planned" as FeatureStatus, description: "ठूलो परिमाणका ढुवानी साझेदारहरूका लागि एआई-आधारित प्रेषण।" },
      ],
    },
    marketplace: {
      id: "marketplace",
      name: "PANORA Marketplace",
      tagline: "पारदर्शी उत्पादन खोज, प्रमाणित आपूर्तिकर्ता र बहु-तह व्यापार।",
      status: "In Development" as FeatureStatus,
      readinessSummary: "निर्देशिका र थोक आपूर्तिकर्ता क्याटलग खोज हाल विकासमा छ। पूर्ण स्वचालित देशव्यापी B2B/B2C चेकआउट र उपभोक्ता खुद्रा सेवाहरू आगामी चरणका लागि योजनाबद्ध छन्।",
      overview:
        "PANORA Pvt. Ltd. को डिजिटल बजार तह जसले प्रमाणित वितरक र उत्पादकहरूलाई नेपालभरका खुद्रा व्यापारी र ग्राहकहरूसँग जोड्दछ, जसले गर्दा मूल्य निर्धारण निष्पक्ष र सुलभ बन्छ।",
      targetUsers: [
        "आधिकारिक ब्राण्ड तथा राष्ट्रिय वितरकहरू",
        "सस्तो स्रोत मूल्य खोज्ने खुद्रा व्यापारीहरू",
        "संस्थागत खरिदकर्ताहरू",
        "विश्वसनीय स्थानीय उत्पादन खोज्ने उपभोक्ताहरू (भावी चरण)",
      ],
      problemsSolved: [
        {
          problem: "बिचौलियाको उच्च नाफा र मूल्य अस्पष्टता",
          solution: "प्रमाणित आपूर्तिकर्ता स्टोरफ्रन्ट र स्पष्ट थोक मूल्य दरहरू।",
        },
        {
          problem: "भौगोलिक सीमितताका कारण नयाँ सामान नपाइने",
          solution: "राष्ट्रिय डिजिटल क्याटलग जसले गाउँका व्यापारीलाई पनि सिधै ठूला वितरकसँग जोड्छ।",
        },
        {
          problem: "नक्कली र अप्रमाणित सामानको डर",
          solution: "प्यान/भ्याट दर्ता र आधिकारिक वितरक प्रमाणपत्रको कडा प्रमाणीकरण।",
        },
      ],
      features: [
        { name: "प्रमाणित वितरक क्याटलग", status: "In Development" as FeatureStatus, description: "स्पष्ट विवरण र थोक मूल्य दरसहित ब्राण्ड क्याटलग ब्राउज गर्नुहोस्।" },
        { name: "प्रत्यक्ष कोटेशन र ठूलो अर्डर वार्ता", status: "In Development" as FeatureStatus, description: "ठूला व्यावसायिक खरिदका लागि विशेष मूल्य अनुरोध गर्नुहोस्।" },
        { name: "आपूर्तिकर्ता रेटिङ र विश्वास ब्याज", status: "In Development" as FeatureStatus, description: "व्यापारीहरूको समीक्षा र अर्डर पूरा गरेको इतिहास।" },
        { name: "चेकआउटमा MoveX ढुवानी जडान", status: "In Development" as FeatureStatus, description: "MoveX नेटवर्क मार्फत तत्काल ढुवानी भाडा र डेलिभरी व्यवस्था।" },
        { name: "B2C उपभोक्ता बजार पोर्टल", status: "Planned" as FeatureStatus, description: "नेपालभरिका खुद्रा उपभोक्ताहरूका लागि प्रत्यक्ष अनलाइन किनमेल।" },
        { name: "सीमापार आयात/निर्यात व्यापार सेतु", status: "Planned" as FeatureStatus, description: "नेपाली उत्पादनलाई दक्षिण एसियाली बजारसँग जोड्ने भावी व्यापार सेतु।" },
      ],
    },
  },
};

export const stats = {
  en: [
    { value: 100, suffix: "%", label: "Focused on Nepal's Trade Realities" },
    { value: 3, suffix: " Pillars", label: "Business App, MoveX & Marketplace" },
    { value: 7, suffix: " Provinces", label: "Planned Nationwide Coverage" },
    { value: 24, suffix: "/7", label: "Ecosystem Commitment" },
  ] as const,
  ne: [
    { value: 100, suffix: "%", label: "नेपालको व्यापारिक वास्तविकतामा केन्द्रित" },
    { value: 3, suffix: " आधारस्तम्भ", label: "बिजनेस एप, MoveX र बजार" },
    { value: 7, suffix: " प्रदेश", label: "देशव्यापी योजनाबद्ध पहुँच" },
    { value: 24, suffix: "/7", label: "पारिस्थितिकीप्रति प्रतिबद्धता" },
  ] as const,
};

export const whyPanora = {
  en: [
    {
      title: "Connect",
      body: "Bridge merchants, distributors, logistics providers, and end customers into one synchronized commerce loop.",
    },
    {
      title: "Manage",
      body: "Eliminate friction in billing, credit ledgers (khata), stock movements, and parcel handoffs with intuitive software.",
    },
    {
      title: "Trade",
      body: "Enable fair, transparent B2B and B2C commercial exchange without fragmented communication or opaque middlemen.",
    },
    {
      title: "Scale Together",
      body: "Engineered specifically for Nepal's trade dynamics with transparent roadmaps and honest product availability.",
    },
  ] as const,
  ne: [
    {
      title: "Connect (जोड्नुहोस्)",
      body: "व्यापारी, वितरक, ढुवानी साझेदार, र ग्राहकहरूलाई एउटै लयबद्ध व्यापारिक चक्रमा जोड्नुहोस्।",
    },
    {
      title: "Manage (व्यवस्थापन गर्नुहोस्)",
      body: "बिलिङ, उधारो खाता, स्टक र पार्सल डेलिभरीको झन्झटलाई आधुनिक सफ्टवेयर मार्फत सहज बनाउनुहोस्।",
    },
    {
      title: "Trade (व्यापार गर्नुहोस्)",
      body: "बिचौलियाको भर नपरी पारदर्शी र निष्पक्ष B2B र B2C व्यापार सञ्चालन गर्नुहोस्।",
    },
    {
      title: "सँगै विस्तार गर्नुहोस्",
      body: "नेपालको व्यापारिक आवश्यकता अनुसार निर्मित, स्पष्ट कार्यतालिका र पारदर्शी उत्पादन स्थितिसहित।",
    },
  ] as const,
};

export const coreValues = {
  en: [
    {
      title: "Real-World Grounding",
      body: "We build tools that match the daily reality of Nepalese shops, warehouses, and roads — not Silicon Valley assumptions.",
    },
    {
      title: "Radical Transparency",
      body: "We tell our users exactly what is ready now, what is in active development, and what is planned for tomorrow.",
    },
    {
      title: "Empowerment Over Disruption",
      body: "We do not seek to eliminate traditional shopkeepers or distributors; we build digital tools to empower and safeguard them.",
    },
    {
      title: "Reliability as a Habit",
      body: "From credit tracking to parcel deliveries, consistency and trust are the currency our ecosystem runs on.",
    },
  ],
  ne: [
    {
      title: "वास्तविक धरातलमा आधारित",
      body: "हामी नेपाली पसल, गोदाम र सडकको दैनिक वास्तविकतालाई सम्बोधन गर्ने प्रविधि बनाउँछौं, काल्पनिक धारणामा होइन।",
    },
    {
      title: "स्पष्ट पारदर्शिता",
      body: "हाम्रा प्रयोगकर्तालाई अहिले के उपलब्ध छ, के विकासको क्रममा छ, र के भावी योजना हो स्पष्ट भन्छौं।",
    },
    {
      title: "विस्थापन होइन, सशक्तीकरण",
      body: "हामी परम्परागत व्यापारी वा वितरकलाई हटाउन चाहँदैनौं; उनीहरूलाई डिजिटल औजार दिएर बलियो बनाउँछौं।",
    },
    {
      title: "विश्वसनीयता हाम्रो पहिचान",
      body: "उधारो हिसाबदेखि पार्सल डेलिभरीसम्म, विश्वसनीयता र विश्वास नै हाम्रो पारिस्थितिकीको जग हो।",
    },
  ],
};

export const pricingPlans = {
  en: [
    {
      name: "Early Adopter Beta",
      status: "Available" as FeatureStatus,
      price: "Free",
      period: "During Pilot Phase",
      badge: "Pre-Booking Open",
      description: "For visionary merchants, distributors, and delivery partners joining our founding rollout.",
      features: [
        { text: "Priority access to PANORA Business App beta", included: true },
        { text: "Free digital udhaaro khata & inventory setup", included: true },
        { text: "Zero onboarding fee for MoveX parcel network", included: true },
        { text: "Direct support from PANORA founding product team", included: true },
        { text: "Lifetime grandfathered perks on future upgrades", included: true },
        { text: "Custom API & ERP connectors", included: false },
      ],
      ctaText: "Pre-Book Free Access",
      ctaTo: "/merchant-registration",
      popular: true,
    },
    {
      name: "Business Pro",
      status: "In Development" as FeatureStatus,
      price: "NPR 999",
      period: "per month (Estimated)",
      badge: "Coming Soon",
      description: "Designed for established retail shops, wholesalers, and growing commercial brands.",
      features: [
        { text: "Everything in Early Adopter tier", included: true },
        { text: "Multi-counter billing & staff access control", included: true },
        { text: "Automated SMS credit reminder alerts to buyers", included: true },
        { text: "MoveX bulk parcel shipping discounts", included: true },
        { text: "Advanced analytics & profit/loss summaries", included: true },
        { text: "Dedicated account manager", included: false },
      ],
      ctaText: "Join Waitlist",
      ctaTo: "/merchant-registration",
      popular: false,
    },
    {
      name: "Enterprise & Fleet",
      status: "Planned" as FeatureStatus,
      price: "Custom",
      period: "tailored quote",
      badge: "In Planning",
      description: "For large FMCG distributors, national logistics fleets, and multi-branch commercial enterprises.",
      features: [
        { text: "Full ecosystem white-glove onboarding", included: true },
        { text: "Multi-warehouse dispatch & route automation", included: true },
        { text: "Dedicated MoveX rider fleet integration", included: true },
        { text: "Custom ERP, SAP & Tally integration", included: true },
        { text: "24/7 dedicated enterprise support SLA", included: true },
        { text: "Custom contract terms & volume discounts", included: true },
      ],
      ctaText: "Talk to Leadership",
      ctaTo: "/contact",
      popular: false,
    },
  ],
  ne: [
    {
      name: "अग्रगामी बेटा (Early Adopter)",
      status: "Available" as FeatureStatus,
      price: "निःशुल्क",
      period: "परीक्षण अवधिभर",
      badge: "प्रि-बुकिङ खुला",
      description: "हाम्रो सुरुआती चरणमा जोडिने अग्रगामी व्यापारी, वितरक र डेलिभरी साझेदारहरूका लागि।",
      features: [
        { text: "PANORA Business App बेटामा प्राथमिकता पहुँच", included: true },
        { text: "निःशुल्क डिजिटल उधारो खाता र मौज्दात सेटअप", included: true },
        { text: "MoveX पार्सल नेटवर्कमा शून्य दर्ता शुल्क", included: true },
        { text: "PANORA प्रविधि टोलीबाट प्रत्यक्ष सहयोग", included: true },
        { text: "भविष्यका स्तरवृद्धिहरूमा विशेष सहुलियत", included: true },
        { text: "कस्टम API र ERP जडान", included: false },
      ],
      ctaText: "निःशुल्क प्रि-बुक गर्नुहोस्",
      ctaTo: "/merchant-registration",
      popular: true,
    },
    {
      name: "बिजनेस प्रो (Business Pro)",
      status: "In Development" as FeatureStatus,
      price: "रु ९९९",
      period: "प्रति महिना (अनुमानित)",
      badge: "चाँडै आउँदैछ",
      description: "स्थापित खुद्रा पसल, थोक बिक्रेता र बढ्दो व्यावसायिक ब्राण्डहरूका लागि।",
      features: [
        { text: "अग्रगामी बेटाका सम्पूर्ण सुविधाहरू", included: true },
        { text: "बहु-काउन्टर बिलिङ र कर्मचारी पहुँच नियन्त्रण", included: true },
        { text: "ग्राहकलाई स्वचालित एसएमएस उधारो ताकेता", included: true },
        { text: "MoveX थोक पार्सल ढुवानीमा विशेष छुट", included: true },
        { text: "विस्तृत नाफा/नोक्सान तथा बिक्री विश्लेषण", included: true },
        { text: "समर्पित खाता प्रबन्धक", included: false },
      ],
      ctaText: "प्रतीक्षा सूचीमा बस्नुहोस्",
      ctaTo: "/merchant-registration",
      popular: false,
    },
    {
      name: "इन्टरप्राइज तथा फ्लीट",
      status: "Planned" as FeatureStatus,
      price: "अनुकूलित",
      period: "व्यवसायको आवश्यकता अनुसार",
      badge: "योजना चरणमा",
      description: "ठूला FMCG वितरक, राष्ट्रिय ढुवानी फ्लीट र बहु-शाखा भएका व्यावसायिक प्रतिष्ठानहरूका लागि।",
      features: [
        { text: "सम्पूर्ण पारिस्थितिकीको विशेष सेटअप", included: true },
        { text: "बहु-गोदाम प्रेषण र स्वचालित रूटिङ", included: true },
        { text: "समर्पित MoveX राइडर फ्लीट समन्वय", included: true },
        { text: "कस्टम ERP, SAP र Tally सिंक", included: true },
        { text: "२४/७ समर्पित संस्थागत प्राविधिक सहयोग", included: true },
        { text: "अनुकूलित सम्झौता र ठूलो परिमाणमा छुट", included: true },
      ],
      ctaText: "नेतृत्वसँग कुरा गर्नुहोस्",
      ctaTo: "/contact",
      popular: false,
    },
  ],
};

export const careerOpenings = [
  {
    title: "Senior Full-Stack Engineer (React / TypeScript / Node)",
    department: "Engineering",
    location: "Kathmandu, Nepal (Hybrid)",
    type: "Full-Time",
    description: "Lead the frontend architecture and real-time synchronization layer for PANORA Business App and Marketplace.",
  },
  {
    title: "Mobile App Developer (Flutter / React Native)",
    department: "Engineering",
    location: "Kathmandu, Nepal",
    type: "Full-Time",
    description: "Build the companion mobile apps for PANORA MoveX riders and retail merchant point-of-sale workflows.",
  },
  {
    title: "Merchant Onboarding & Field Operations Lead",
    department: "Operations",
    location: "Kathmandu Valley & Major Hubs",
    type: "Full-Time",
    description: "Work directly on the ground with kirana stores, wholesalers, and hardware merchants to pilot and deploy PANORA tools.",
  },
  {
    title: "Logistics & Fleet Network Coordinator",
    department: "MoveX Logistics",
    location: "Kathmandu, Nepal",
    type: "Full-Time",
    description: "Manage rider partner relationships, route verification, and COD reconciliation processes.",
  },
];

export const faqCategories = {
  en: [
    {
      category: "About PANORA Pvt. Ltd.",
      items: [
        {
          q: "What is PANORA Pvt. Ltd.?",
          a: "PANORA Pvt. Ltd. is a registered Nepalese technology company building an integrated digital business ecosystem. We are not just a B2B ordering portal; our product portfolio spans the PANORA Business App (for store management & trade), PANORA MoveX (for parcel logistics), and PANORA Marketplace (for product discovery and trade).",
        },
        {
          q: "What does 'Connect. Manage. Trade.' mean?",
          a: "It encapsulates our core brand promise: 'Connect' unites merchants, distributors, riders and customers; 'Manage' gives businesses intuitive digital tools for billing, inventory, and credit; 'Trade' enables transparent, fair commercial transactions.",
        },
        {
          q: "Are all PANORA products currently live?",
          a: "We believe in radical honesty. Our ecosystem is being rolled out in strategic phases. The PANORA Business App and PANORA MoveX are currently in active engineering and pilot testing ('In Development'), while advanced marketplace features and cross-border trade are 'Planned'. Merchant pre-booking and rider partner registration are 'Available' now.",
        },
      ],
    },
    {
      category: "PANORA Business App",
      items: [
        {
          q: "Who is the PANORA Business App designed for?",
          a: "It is built for retailers, local shopkeepers, wholesalers, and distributors across Nepal who want to modernize their billing, replace messy paper ledgers (khata), monitor inventory, and place digital restock orders directly with verified distributors.",
        },
        {
          q: "How does pre-booking work for merchants?",
          a: "By submitting the Merchant Pre-booking form, you secure founding early adopter status. You will receive priority access to our beta release, free onboarding assistance, and grandfathered benefits.",
        },
        {
          q: "Will my business data and customer credit records be private?",
          a: "Absolutely. Data security and confidentiality are foundational. Your shop's financial numbers, customer lists, and private ledger entries are encrypted and strictly confidential to your business.",
        },
      ],
    },
    {
      category: "PANORA MoveX Parcel App",
      items: [
        {
          q: "What is PANORA MoveX?",
          a: "MoveX is our parcel logistics coordination product. It facilitates on-demand and scheduled parcel pickups, connects businesses with reliable riders, provides real-time tracking, and manages Cash-on-Delivery (COD) reconciliation.",
        },
        {
          q: "How can riders and delivery partners join?",
          a: "Riders with valid driving licenses, registered two-wheelers, and smartphones can register their interest through our Rider Registration page. As pilot delivery corridors activate, our operations team coordinates verification and onboarding.",
        },
        {
          q: "How does Cash-on-Delivery (COD) reconciliation work?",
          a: "MoveX records every cash collection digitally with OTP verification upon handover. Accumulated COD balances are automatically reconciled and remitted directly to the merchant's verified bank account on an agreed schedule.",
        },
      ],
    },
    {
      category: "Marketplace & Trade",
      items: [
        {
          q: "How does PANORA Marketplace differ from regular e-commerce sites?",
          a: "Unlike typical consumer marketplaces, PANORA Marketplace focuses on authentic source supply, wholesale pricing tiers, verified PAN/VAT registered distributors, and direct integration with local logistics (MoveX) and business workflows.",
        },
        {
          q: "When will full consumer trade be available?",
          a: "Our initial focus is establishing verified wholesale discovery and merchant restocking. Consumer B2C shopping will be rolled out gradually once distribution channels and delivery density achieve mature service levels.",
        },
      ],
    },
  ],
  ne: [
    {
      category: "PANORA Pvt. Ltd. बारे",
      items: [
        {
          q: "PANORA Pvt. Ltd. के हो?",
          a: "PANORA Pvt. Ltd. नेपालमा दर्ता भएको प्रविधि कम्पनी हो जसले एकीकृत डिजिटल व्यवसाय पारिस्थितिकी निर्माण गरिरहेको छ। यो केवल अर्डर गर्ने प्लेटफर्म मात्र होइन; हाम्रो उत्पादनहरूमा PANORA Business App (पसल सञ्चालन तथा व्यापार), PANORA MoveX (पार्सल ढुवानी), र PANORA Marketplace (उत्पादन खोज तथा व्यापार) समावेश छन्।",
        },
        {
          q: "'Connect. Manage. Trade.' को अर्थ के हो?",
          a: "यो हाम्रो ब्राण्डको मूल मर्म हो: 'Connect' ले व्यापारी, वितरक, राइडर र ग्राहकलाई जोड्छ; 'Manage' ले बिलिङ, मौज्दात र उधारो खाता व्यवस्थापन गर्न डिजिटल औजार दिन्छ; 'Trade' ले पारदर्शी र निष्पक्ष व्यापार सम्भव बनाउँछ।",
        },
        {
          q: "के सबै PANORA उत्पादनहरू अहिले नै उपलब्ध छन्?",
          a: "हामी पूर्ण पारदर्शितामा विश्वास गर्छौं। हाम्रा उत्पादनहरू चरणबद्ध रूपमा विकास भइरहेका छन्। PANORA Business App र MoveX हाल सक्रिय विकास र परीक्षणमा छन् ('विकासमा'), जबकि केही ठूला बजार सुविधाहरू 'योजनाबद्ध' छन्। व्यापारी प्रि-बुकिङ र राइडर दर्ता अहिले नै 'उपलब्ध' छन्।",
        },
      ],
    },
    {
      category: "PANORA Business App",
      items: [
        {
          q: "PANORA Business App कसका लागि हो?",
          a: "यो नेपालभरिका खुद्रा पसल, किराना, फेन्सी, हार्डवेयर, थोक बिक्रेता र वितरकहरूका लागि हो जसले आफ्नो बिलिङ, कापीको उधारो खाता, स्टक र वितरकबाट सामान अर्डर गर्ने प्रक्रिया डिजिटल बनाउन चाहन्छन्।",
        },
        {
          q: "व्यापारीहरूले कसरी प्रि-बुकिङ गर्न सक्छन्?",
          a: "हाम्रो मर्चेन्ट प्रि-बुकिङ फारम भरेर तपाईंले सुरुआती संस्थापक सदस्यका रूपमा नाम दर्ता गर्न सक्नुहुन्छ। यसबाट तपाईंले पहिलो बेटा संस्करणमा प्राथमिकता, निःशुल्क तालिम, र विशेष सहुलियत पाउनुहुनेछ।",
        },
      ],
    },
    {
      category: "PANORA MoveX Parcel App",
      items: [
        {
          q: "PANORA MoveX के हो?",
          a: "MoveX हाम्रो पार्सल ढुवानी तथा डेलिभरी समन्वय गर्ने उत्पादन हो। यसले व्यवसायलाई भरपर्दो राइडरसँग जोड्छ, पार्सलको लाइभ ट्र्याकिङ दिन्छ, र क्यास-अन-डेलिभरी (COD) को पारदर्शी हिसाब राख्छ।",
        },
        {
          q: "डेलिभरी राइडरहरू कसरी जोडिन सक्छन्?",
          a: "सवारी चालक अनुमतिपत्र (लाइसेन्स) र आफ्नै मोटरसाइकल/स्कुटर भएका राइडरहरूले हाम्रो राइडर दर्ता पृष्ठ मार्फत आवेदन दिन सक्छन्। क्षेत्रगत रूपमा सेवा सुरु हुँदा हाम्रो टोलीले सम्पर्क गर्नेछ।",
        },
      ],
    },
  ],
};
