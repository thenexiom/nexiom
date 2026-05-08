import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/ui/FloatingChat";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nexiom — Modern CRM & Automation Agency",
    template: "%s | Nexiom",
  },
  description:
    "Nexiom helps small and growing businesses organize customers, automate workflows, and scale with modern CRM systems.",
  keywords: [
    "CRM",
    "automation",
    "sales pipeline",
    "business automation",
    "CRM implementation",
  ],
  openGraph: {
    type: "website",
    siteName: "Nexiom",
    title: "Nexiom — Modern CRM & Automation Agency",
    description:
      "Modern CRM systems and automation for growing businesses. Get organized, automate workflows, and scale.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingChat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
