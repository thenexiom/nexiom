import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "CRM Solutions",
  description:
    "CRM and automation solutions for service businesses, construction, real estate, and more.",
};

export default async function SolutionsPage() {
  const t = await getTranslations("solutions_page");
  return <SolutionsContent />;
}
