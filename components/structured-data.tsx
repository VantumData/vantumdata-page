const faqItems = [
  {
    question: "What is VantumIQP?",
    answer:
      "VantumIQP (Vantum Intelligence Query Platform) is an ERP data intelligence platform that transforms raw ERP data into strategic visibility, actionable insights, and faster business decision-making. It acts as an intelligence layer over your existing ERP system — bridging the gap between complex ERP data and the real-time insight that operations and finance leaders need to make informed decisions.",
  },
  {
    question: "Who is VantumIQP for?",
    answer:
      "VantumIQP is designed for operations leaders, CFOs, COOs, ERP managers, heads of data, digital transformation teams, and private equity operating teams. It serves any organization that needs better visibility into ERP-driven business operations — from mid-market companies to large enterprises running complex multi-module ERP environments.",
  },
  {
    question: "Which ERP systems will VantumIQP support?",
    answer:
      "VantumIQP is building toward support for major ERP ecosystems including SAP, Microsoft Dynamics 365, NetSuite, and Odoo. Its connector-based architecture is designed for broad compatibility, enabling integration with both established enterprise platforms and emerging ERP solutions.",
  },
  {
    question: "Can VantumIQP work with cloud and on-premise ERP environments?",
    answer:
      "Yes. VantumIQP is being architected to support both cloud-hosted and on-premise ERP deployments. Given that many enterprises operate hybrid ERP infrastructure, VantumIQP\u2019s flexible ingestion pipelines are designed to meet your data where it lives — regardless of hosting model.",
  },
  {
    question: "Is VantumIQP only for large enterprises?",
    answer:
      "No. VantumIQP is designed for mid-market and enterprise organizations alike. Any business that relies on ERP data for operational and financial decisions can benefit from an intelligence layer — whether running a single-instance ERP or a multi-entity, multi-module environment.",
  },
  {
    question: "What does early access mean?",
    answer:
      "Early access means you will be among the first to preview VantumIQP, provide feedback that shapes the platform, and gain priority onboarding when the product launches. Early access participants help influence product direction and receive dedicated support during the onboarding process.",
  },
  {
    question:
      "How is VantumIQP different from traditional BI tools and dashboards?",
    answer:
      "Traditional business intelligence tools require manual configuration and return static reports. VantumIQP is purpose-built for ERP data and delivers live intelligence — continuously monitoring business signals, surfacing anomalies and trends, and providing decision-ready insight that moves at the speed of your operations. It is a strategic visibility engine, not another dashboard.",
  },
]

export function StructuredData() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "VantumIQP",
      url: "https://vantumiqp.com",
      description:
        "VantumIQP is an ERP data intelligence platform that transforms enterprise resource planning data into strategic visibility, actionable insights, and faster business decisions.",
      logo: "https://vantumiqp.com/logo.svg",
      parentOrganization: {
        "@type": "Organization",
        name: "Actaer",
      },
      sameAs: ["https://www.linkedin.com/company/actaer"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "VantumIQP",
      url: "https://vantumiqp.com",
      description:
        "VantumIQP — the ERP Data Intelligence Platform. Strategic visibility, actionable insights, and faster business decisions from your existing ERP data.",
      publisher: {
        "@type": "Organization",
        name: "Actaer",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "VantumIQP — ERP Data Intelligence Platform",
      url: "https://vantumiqp.com",
      description:
        "VantumIQP transforms ERP data into strategic visibility, actionable intelligence, and faster business decisions. Join the early access waitlist.",
      isPartOf: {
        "@type": "WebSite",
        name: "VantumIQP",
        url: "https://vantumiqp.com",
      },
      about: {
        "@type": "SoftwareApplication",
        name: "VantumIQP",
      },
      mainEntity: {
        "@type": "SoftwareApplication",
        name: "VantumIQP",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "VantumIQP",
      alternateName: "Vantum Intelligence Query Platform",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "ERP Data Intelligence",
      operatingSystem: "Cloud",
      description:
        "VantumIQP (Vantum Intelligence Query Platform) is an ERP data intelligence platform designed to turn ERP data into strategic visibility, actionable intelligence, and faster business decision-making.",
      featureList: [
        "Executive-ready visibility dashboards",
        "ERP signal monitoring",
        "KPI intelligence tracking",
        "Alerts and anomaly detection",
        "Operational and financial insight bridging",
        "Advanced business querying",
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        description: "Early access — join the waitlist",
        url: "https://vantumiqp.com/#waitlist",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ]

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export { faqItems }
