const content = `# VantumData

> VantumData is an ERP data intelligence platform that transforms enterprise resource planning data into strategic visibility, actionable insights, and faster business decisions.

VantumData is a product of Actaer.

## Overview

VantumData is an intelligence layer designed to sit over existing ERP systems. It ingests, interprets, and transforms operational and financial data into decision-ready insight — giving operations and finance leaders the visibility they need to act with confidence.

Unlike traditional BI tools that require manual configuration and return static reports, VantumData is built for live intelligence. It monitors business signals across ERP data, surfaces anomalies and trends, and delivers clarity that moves at the speed of operations.

## Target Audience

- Operations leaders (COOs, VPs of Operations)
- CFOs and finance leadership
- ERP managers and administrators
- Heads of data and analytics
- Digital transformation teams
- Private equity operating teams

## Supported ERP Systems

VantumData is building connector-based ingestion pipelines for:
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

VantumData is in development and accepting early access requests. Early access participants receive priority onboarding and the opportunity to influence product direction.

## Links

- Website: https://vantumdata.com
- Early Access: https://vantumdata.com/#waitlist
- Full Content: https://vantumdata.com/llms-full.txt
- Privacy Policy: https://vantumdata.com/privacy
- Terms: https://vantumdata.com/terms
- Contact: office@actaer.com
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
