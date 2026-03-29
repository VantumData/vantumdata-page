import type { Metadata } from "next"

import { BackToHome } from "@/components/back-to-home"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for VantumData, the ERP data intelligence platform operated by Actaer. Learn how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16 md:py-24">
      <BackToHome />

      <h1 className="mb-8 text-3xl tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Last updated: 19.03.2026
      </p>

      <div className="flex flex-col gap-8 text-muted-foreground [&_h2]:text-xl [&_h2]:tracking-tight [&_h2]:text-foreground [&_strong]:text-foreground">
        <section>
          <h2 className="mb-3">1. Who We Are</h2>
          <p>
            VantumData is a product of <strong>Actaer</strong>. In this policy,
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to
            Actaer and its subsidiaries. This policy explains how we collect,
            use, and protect your personal information when you interact with
            the VantumData website and services.
          </p>
        </section>

        <section>
          <h2 className="mb-3">2. Information We Collect</h2>
          <p className="mb-3">
            We collect information you provide directly when you:
          </p>
          <ul className="list-inside list-disc space-y-1.5 pl-2">
            <li>
              Submit the early access waitlist form (name, email, company,
              optional message)
            </li>
            <li>Contact us via email</li>
            <li>Interact with our website</li>
          </ul>
          <p className="mt-3">
            We also automatically collect certain technical information,
            including your IP address, browser type, operating system, referring
            URLs, and pages visited. This data is collected through standard web
            server logs and, where applicable, analytics tools.
          </p>
        </section>

        <section>
          <h2 className="mb-3">3. How We Use Your Information</h2>
          <p className="mb-3">We use collected information to:</p>
          <ul className="list-inside list-disc space-y-1.5 pl-2">
            <li>Process and manage early access requests</li>
            <li>
              Communicate with you about VantumData, including product updates
              and launch information
            </li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3">4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with
            trusted third-party service providers who assist in operating our
            website and processing form submissions (e.g., Formspree for form
            handling). These providers are contractually obligated to protect
            your data and may only use it for the purposes we specify.
          </p>
        </section>

        <section>
          <h2 className="mb-3">5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this policy, unless a longer
            retention period is required or permitted by law. You may request
            deletion of your data at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="mb-3">6. Cookies &amp; Tracking</h2>
          <p>
            Our website may use essential cookies required for site
            functionality. We do not use third-party advertising cookies. If we
            implement analytics in the future, we will update this policy
            accordingly.
          </p>
        </section>

        <section>
          <h2 className="mb-3">7. Your Rights</h2>
          <p className="mb-3">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-inside list-disc space-y-1.5 pl-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:office@actaer.com"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              office@actaer.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3">8. Security</h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated revision date. We encourage you
            to review this page periodically.
          </p>
        </section>

        <section>
          <h2 className="mb-3">10. Contact</h2>
          <p>
            For questions about this privacy policy or your data, contact us at{" "}
            <a
              href="mailto:office@actaer.com"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              office@actaer.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
