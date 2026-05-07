import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description:
    "Book your free CRM strategy consultation with Nexiom. Tell us about your business and we'll create a personalized plan.",
};

export default function ContactPage() {
  return <ContactForm />;
}
