const content = `# VantumIQP

> VantumIQP (Vantum Intelligence Query Platform) is an ERP data intelligence platform that transforms enterprise resource planning data into strategic visibility, actionable insights, and faster business decisions.

VantumIQP is a product of Actaer.

## Overview

VantumIQP is an intelligence layer designed to sit over existing ERP systems. It ingests, interprets, and transforms operational and financial data into decision-ready insight — giving operations and finance leaders the visibility they need to act with confidence.

Unlike traditional BI tools that require manual configuration and return static reports, VantumIQP is built for live intelligence. It monitors business signals across ERP data, surfaces anomalies and trends, and delivers clarity that moves at the speed of operations.

## Target Audience

- Operations leaders (COOs, VPs of Operations)
- CFOs and finance leadership
- ERP managers and administrators
- Heads of data and analytics
- Digital transformation teams
- Private equity operating teams

## Supported ERP Systems

VantumIQP is building connector-based ingestion pipelines for:
- SAP
- Microsoft Dynamics 365
- NetSuite
- Odoo

Supports both cloud-hosted and on-premise ERP deployments.

## Planned Capabilities

- Executive-ready visibility dashboards
- ERP signal monitoring
- KPI intelligence tracking
- Alerts and anomaly detection
- Operational and financial insight bridging
- Advanced business querying

## Current Status

VantumIQP is in development and accepting early access requests. Early access participants receive priority onboarding and the opportunity to influence product direction.

## Links

- Website: https://vantumiqp.com
- Early Access: https://vantumiqp.com/#waitlist
- Full Content: https://vantumiqp.com/llms-full.txt
- Privacy Policy: https://vantumiqp.com/privacy
- Terms: https://vantumiqp.com/terms
- Contact: hello@vantumiqp.com
- LinkedIn: https://www.linkedin.com/company/actaer
`

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
