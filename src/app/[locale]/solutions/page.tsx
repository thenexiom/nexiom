import type { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "CRM Solutions",
  description:
    "CRM and automation solutions for service businesses, construction, real estate, and more.",
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
