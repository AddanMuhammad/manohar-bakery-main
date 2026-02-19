"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-secondary text-center mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-secondary/80 text-center mb-12">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="flex flex-col gap-8 text-secondary/90">
          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              Welcome to Manohar Bakery Fleetwood ("we," "our," or "us"). We are
              committed to protecting your privacy and ensuring you have a
              positive experience on our website and in our store. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website, place orders, or interact
              with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              2. Information We Collect
            </h2>
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  2.1 Personal Information
                </h3>
                <p className="mb-2">
                  We may collect personal information that you provide to us,
                  including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Name and contact information (email address, phone number,
                    mailing address)
                  </li>
                  <li>Order details and preferences</li>
                  <li>
                    Payment information (processed securely through third-party
                    payment processors)
                  </li>
                  <li>
                    Any other information you choose to provide when contacting
                    us or placing orders
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  2.2 Automatically Collected Information
                </h3>
                <p className="mb-2">
                  When you visit our website, we may automatically collect
                  certain information, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Process and fulfill your orders</li>
              <li>
                Communicate with you about your orders, inquiries, and our
                services
              </li>
              <li>
                Send you marketing communications (with your consent, where
                required)
              </li>
              <li>Improve our website, products, and services</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Service Providers:</strong> We may share information
                with third-party service providers who perform services on our
                behalf, such as payment processing, order fulfillment, and
                website hosting.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                if required by law or in response to valid legal requests.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your
                information with your explicit consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              5. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="mb-2">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt-out of marketing communications</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information
              provided in the "Contact Us" section below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              Our website may use cookies and similar tracking technologies to
              enhance your experience, analyze usage patterns, and improve our
              services. You can control cookie preferences through your browser
              settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              8. Children's Privacy
            </h2>
            <p className="mb-4">
              Our services are not directed to individuals under the age of 13.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new Privacy
              Policy on this page and updating the "Last updated" date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              10. Contact Us
            </h2>
            <p className="mb-2">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="ml-4 space-y-1">
              <p>
                <strong>Manohar Bakery Fleetwood</strong>
              </p>
              <p>Fruiticana & BMO plaza, 15905 Fraser Hwy Unit 101</p>
              <p>Surrey, BC V4N 0Y3</p>
              <p>
                You can also reach us through our{" "}
                <a href="/contact" className="underline hover:text-secondary">
                  Contact Us
                </a>{" "}
                page.
              </p>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
