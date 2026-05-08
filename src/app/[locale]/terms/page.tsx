import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Terms of Service" };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("footer");

  return (
    <div className="min-h-screen bg-[#F7F9FC] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1E2B3A] mb-2">{t("terms")}</h1>
        <p className="text-[#1E2B3A]/50 text-sm mb-10">Last updated: January 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-[#1E2B3A]/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#1E2B3A] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Nexiom services, you accept and agree to be bound by the terms and
              provisions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E2B3A] mb-3">2. Services</h2>
            <p>
              Nexiom provides CRM implementation and business automation services. We reserve the right to
              modify or discontinue our services at any time with reasonable notice to clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E2B3A] mb-3">3. Payment Terms</h2>
            <p>
              Payment terms are specified in individual service agreements. All fees are non-refundable unless
              otherwise specified in your service agreement with Nexiom.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E2B3A] mb-3">4. Limitation of Liability</h2>
            <p>
              Nexiom shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E2B3A] mb-3">5. Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at{" "}
              <a href="mailto:hello@nexiom.co" className="text-[#00A3D7] hover:underline">
                hello@nexiom.co
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href={`/${locale}`}
            className="text-[#00A3D7] text-sm font-medium hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
