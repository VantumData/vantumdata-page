const faqItems = [
  {
    question: "What is VantumData?",
    answer:
      "VantumData is an ERP data intelligence platform that transforms raw ERP data into strategic visibility, actionable insights, and faster business decision-making. It acts as an intelligence layer over your existing ERP system \u2014 bridging the gap between complex ERP data and the real-time insight that operations and finance leaders need to make informed decisions.",
  },
  {
    question: "Who is VantumData for?",
    answer:
      "VantumData is designed for operations leaders, CFOs, COOs, ERP managers, heads of data, digital transformation teams, and private equity operating teams. It serves any organization that needs better visibility into ERP-driven business operations \u2014 from mid-market companies to large enterprises running complex multi-module ERP environments.",
  },
  {
    question: "Which ERP systems will VantumData support?",
    answer:
      "VantumData is building toward support for major ERP ecosystems including SAP, Microsoft Dynamics 365, NetSuite, and Odoo. Its connector-based architecture is designed for broad compatibility, enabling integration with both established enterprise platforms and emerging ERP solutions.",
  },
  {
    question: "Can VantumData work with cloud and on-premise ERP environments?",
    answer:
      "Yes. VantumData is being architected to support both cloud-hosted and on-premise ERP deployments. Given that many enterprises operate hybrid ERP infrastructure, VantumData\u2019s flexible ingestion pipelines are designed to meet your data where it lives \u2014 regardless of hosting model.",
  },
  {
    question: "Is VantumData only for large enterprises?",
    answer:
      "No. VantumData is designed for mid-market and enterprise organizations alike. Any business that relies on ERP data for operational and financial decisions can benefit from an intelligence layer \u2014 whether running a single-instance ERP or a multi-entity, multi-module environment.",
  },
  {
    question: "What does early access mean?",
    answer:
      "Early access means you will be among the first to preview VantumData, provide feedback that shapes the platform, and gain priority onboarding when the product launches. Early access participants help influence product direction and receive dedicated support during the onboarding process.",
  },
  {
    question:
      "How is VantumData different from traditional BI tools and dashboards?",
    answer:
      "Traditional business intelligence tools require manual configuration and return static reports. VantumData is purpose-built for ERP data and delivers live intelligence \u2014 continuously monitoring business signals, surfacing anomalies and trends, and providing decision-ready insight that moves at the speed of your operations. It is a strategic visibility engine, not another dashboard.",
  },
]

export function StructuredData() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "VantumData",
      url: "https://vantumdata.com",
      description:
        "VantumData is an ERP data intelligence platform that transforms enterprise resource planning data into strategic visibility, actionable insights, and faster business decisions.",
      logo: "https://vantumdata.com/logo.svg",
      parentOrganization: {
        "@type": "Organization",
        name: "Actaer",
      },
      sameAs: ["https://www.linkedin.com/company/actaer"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "VantumData",
      url: "https://vantumdata.com",
      description:
        "VantumData \u2014 the ERP Data Intelligence Platform. Strategic visibility, actionable insights, and faster business decisions from your existing ERP data.",
      publisher: {
        "@type": "Organization",
        name: "Actaer",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "VantumData \u2014 ERP Data Intelligence Platform",
      url: "https://vantumdata.com",
      description:
        "VantumData transforms ERP data into strategic visibility, actionable intelligence, and faster business decisions. Join the early access waitlist.",
      isPartOf: {
        "@type": "WebSite",
        name: "VantumData",
        url: "https://vantumdata.com",
      },
      about: {
        "@type": "SoftwareApplication",
        name: "VantumData",
      },
      mainEntity: {
        "@type": "SoftwareApplication",
        name: "VantumData",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "VantumData",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "ERP Data Intelligence",
      operatingSystem: "Cloud",
      description:
        "VantumData is an ERP data intelligence platform designed to turn ERP data into strategic visibility, actionable intelligence, and faster business decision-making.",
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
        url: "https://vantumdata.com/#waitlist",
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
