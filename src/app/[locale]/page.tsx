import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/home/Hero";
import PainPoints from "@/components/home/PainPoints";
import WhatWeDo from "@/components/home/WhatWeDo";
import PlansPreview from "@/components/home/PlansPreview";
import AutomationFlow from "@/components/home/AutomationFlow";
import MobileCRM from "@/components/home/MobileCRM";
import WhyNexiom from "@/components/home/WhyNexiom";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: "Modern CRM & Automation Agency",
    description: t("subheadline"),
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <WhatWeDo />
      <PlansPreview />
      <AutomationFlow />
      <MobileCRM />
      <WhyNexiom />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
