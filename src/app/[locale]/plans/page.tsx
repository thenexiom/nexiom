import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PlansContent from "./PlansContent";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Simple, transparent plans for growing businesses. Essential, Performance, and Elite CRM packages.",
};

export default async function PlansPage() {
  const t = await getTranslations("plans_page");
  const plansPreview = await getTranslations("plans_preview");

  const plans = plansPreview.raw("plans") as {
    name: string;
    tagline: string;
    desc: string;
    features: string[];
  }[];

  const fullFeatures = [
    // Essential
    [
      "CRM setup & configuration",
      "Contact & lead management",
      "Basic sales pipeline (3 stages)",
      "Email integration",
      "Mobile CRM access",
      "1 workflow automation",
      "Monthly support call",
      "Onboarding & training",
    ],
    // Performance
    [
      "Everything in Essential",
      "Advanced pipeline (unlimited stages)",
      "5 workflow automations",
      "Custom reporting dashboards",
      "2 integrations (email, calendar, etc.)",
      "Task & activity tracking",
      "Priority email & chat support",
      "Bi-weekly optimization calls",
      "Team management features",
    ],
    // Elite
    [
      "Everything in Performance",
      "Unlimited workflow automations",
      "Custom dashboards & advanced reports",
      "Unlimited integrations",
      "AI-powered lead scoring",
      "Dedicated CRM consultant",
      "Quarterly strategy sessions",
      "Custom automation development",
      "24/7 priority support",
      "Scalable multi-team setup",
    ],
  ];

  const prices = ["Custom", "Custom", "Custom"];

  return (
    <PlansContent
      plans={plans}
      fullFeatures={fullFeatures}
      prices={prices}
      translations={{
        badge: t("badge"),
        headline: t("headline"),
        subheadline: t("subheadline"),
        monthly: t("monthly"),
        most_popular: t("most_popular"),
        cta: t("cta"),
        contact_cta: t("contact_cta"),
        features_title: t("features_title"),
        advisor_badge: t("advisor_badge"),
        advisor_headline: t("advisor_headline"),
        advisor_subheadline: t("advisor_subheadline"),
      }}
    />
  );
}
