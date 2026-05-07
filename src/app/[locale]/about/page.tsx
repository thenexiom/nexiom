import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Nexiom",
  description:
    "Learn about Nexiom's mission to make modern CRM systems accessible and effective for small and medium businesses.",
};

export default function AboutPage() {
  return <AboutContent />;
}
