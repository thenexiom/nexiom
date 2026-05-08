import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Privacy Policy" };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("footer");

  return (
    <div className="min-h-screen bg-[#F7F9FC] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1E2B3A] mb-2">{t("privacy")}</h1>
        <p className="text-[#1E2B3A]/50 text-sm mb-10">Last updated: January 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-[#1E2B3A]/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#1E2B3A] mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you contact us through our website,
              request a consultation, or subscribe to our services. This may include your name, email address,
              phone number, and business information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E2B3A] mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, communicate with you
              about our services, and respond to your inquiries. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E2B3A] mb-3">3. Data Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse,
              unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E2B3A] mb-3">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
