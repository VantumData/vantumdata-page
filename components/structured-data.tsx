const faqItems = [
  {
    question: "What is VantumIQP?",
    answer:
      "VantumIQP (Vantum Intelligence Query Platform) is an ERP data intelligence platform that transforms raw ERP data into strategic visibility, actionable insights, and faster business decision-making. It acts as an intelligence layer over your existing ERP system.",
  },
  {
    question: "Who is VantumIQP for?",
    answer:
      "VantumIQP is designed for operations leaders, CFOs, COOs, ERP managers, heads of data, digital transformation teams, and private equity operating teams — anyone who needs better visibility into ERP-driven business operations.",
  },
  {
    question: "Which ERP systems will VantumIQP support?",
    answer:
      "VantumIQP is building toward support for major ERP ecosystems including SAP, Microsoft Dynamics 365, NetSuite, and Odoo, with a connector-based architecture designed for broad compatibility.",
  },
  {
    question: "Can VantumIQP work with cloud and on-premise ERP environments?",
    answer:
      "Yes. VantumIQP is being architected to support both cloud-hosted and on-premise ERP deployments, recognizing the hybrid realities of modern enterprise infrastructure.",
  },
  {
    question: "Is VantumIQP only for large enterprises?",
    answer:
      "No. VantumIQP is designed for mid-market and enterprise organizations alike — any business that relies on ERP data for operational and financial decisions can benefit from an intelligence layer.",
  },
  {
    question: "What does early access mean?",
    answer:
      "Early access means you will be among the first to preview VantumIQP, provide feedback that shapes the platform, and gain priority onboarding when the product launches.",
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
      logo: "https://vantumiqp.com/logo.png",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "VantumIQP",
      url: "https://vantumiqp.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "VantumIQP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud",
      description:
        "VantumIQP (Vantum Intelligence Query Platform) is an ERP data intelligence platform designed to turn ERP data into strategic visibility, actionable intelligence, and faster business decision-making.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        description: "Early access — join the waitlist",
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
