import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of VantumIQP, the ERP data intelligence platform operated by Actaer.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-8 text-3xl tracking-tight sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Last updated: March 13, 2026
      </p>

      <div className="flex flex-col gap-8 text-muted-foreground [&_h2]:text-xl [&_h2]:tracking-tight [&_h2]:text-foreground [&_strong]:text-foreground">
        <section>
          <h2 className="mb-3">1. Introduction</h2>
          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
            access to and use of the VantumIQP website and services, operated by{" "}
            <strong>Actaer</strong>. By accessing or using our website, you
            agree to be bound by these Terms. If you do not agree, please do not
            use our website.
          </p>
        </section>

        <section>
          <h2 className="mb-3">2. Description of Service</h2>
          <p>
            VantumIQP is an ERP data intelligence platform currently in
            development. The website provides information about the platform and
            allows visitors to request early access. The platform and its
            features are subject to change prior to and after launch.
          </p>
        </section>

        <section>
          <h2 className="mb-3">3. Eligibility</h2>
          <p>
            You must be at least 18 years of age to use our website or submit
            information through our forms. By using our website, you represent
            that you meet this requirement.
          </p>
        </section>

        <section>
          <h2 className="mb-3">4. Early Access Waitlist</h2>
          <p>
            Submitting an early access request does not guarantee access to the
            VantumIQP platform. We reserve the right to grant or deny access at
            our sole discretion. Submission of the form constitutes consent to
            receive communications from Actaer related to VantumIQP.
          </p>
        </section>

        <section>
          <h2 className="mb-3">5. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos,
            icons, images, and software — is the property of Actaer or its
            licensors and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, modify, or create derivative
            works without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="mb-3">6. Prohibited Conduct</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-inside list-disc space-y-1.5 pl-2">
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems or data</li>
            <li>Interfere with or disrupt the website or its infrastructure</li>
            <li>Submit false or misleading information through our forms</li>
            <li>
              Scrape, crawl, or use automated means to access the website
              without permission
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3">7. Disclaimer of Warranties</h2>
          <p>
            The website and all information provided are offered &ldquo;as
            is&rdquo; and &ldquo;as available&rdquo; without warranties of any
            kind, whether express or implied. Actaer does not warrant that the
            website will be uninterrupted, error-free, or free of harmful
            components.
          </p>
        </section>

        <section>
          <h2 className="mb-3">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Actaer shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages arising out of or relating to your use of the website or
            reliance on any information provided, regardless of the cause of
            action.
          </p>
        </section>

        <section>
          <h2 className="mb-3">9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services.
            We are not responsible for the content, privacy practices, or
            availability of those external sites. Accessing third-party links is
            at your own risk.
          </p>
        </section>

        <section>
          <h2 className="mb-3">10. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page with an updated revision date. Your continued
            use of the website after changes are posted constitutes acceptance
            of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="mb-3">12. Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a
              href="mailto:hello@vantumiqp.com"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              hello@vantumiqp.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
