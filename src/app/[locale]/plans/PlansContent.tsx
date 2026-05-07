"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Check, Star, ArrowRight, MessageSquare } from "lucide-react";
import AIAdvisor from "@/components/plans/AIAdvisor";

type Plan = {
  name: string;
  tagline: string;
  desc: string;
  features: string[];
};

type Props = {
  plans: Plan[];
  fullFeatures: string[][];
  prices: string[];
  translations: {
    badge: string;
    headline: string;
    subheadline: string;
    monthly: string;
    most_popular: string;
    cta: string;
    contact_cta: string;
    features_title: string;
    advisor_badge: string;
    advisor_headline: string;
    advisor_subheadline: string;
  };
};

export default function PlansContent({
  plans,
  fullFeatures,
  prices,
  translations: tr,
}: Props) {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#F7F9FC] pt-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-6">
            <span className="text-sm font-medium text-[#00A3D7]">{tr.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1E2B3A] mb-4 leading-tight">
            {tr.headline}
          </h1>
          <p className="text-lg text-[#1E2B3A]/60 max-w-xl mx-auto">
            {tr.subheadline}
          </p>
        </motion.div>
      </div>

      {/* Plans cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const isMiddle = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={`relative rounded-3xl border flex flex-col ${
                  isMiddle
                    ? "gradient-bg border-transparent shadow-blue-lg"
                    : "bg-white border-gray-100 shadow-sm hover:shadow-blue hover:border-[#00A3D730] transition-all duration-300"
                }`}
              >
                {isMiddle && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#00A3D7] text-xs font-bold shadow-md">
                      <Star size={10} fill="currentColor" />
                      {tr.most_popular}
                    </div>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div
                      className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                        isMiddle ? "text-white/60" : "text-[#00A3D7]"
                      }`}
                    >
                      {plan.tagline}
                    </div>
                    <h2
                      className={`text-3xl font-bold mb-1 ${
                        isMiddle ? "text-white" : "text-[#1E2B3A]"
                      }`}
                    >
                      {plan.name}
                    </h2>
                    <div
                      className={`text-2xl font-bold mb-3 ${
                        isMiddle ? "text-white" : "gradient-text"
                      }`}
                    >
                      {prices[i]}{" "}
                      <span
                        className={`text-sm font-normal ${
                          isMiddle ? "text-white/60" : "text-[#1E2B3A]/50"
                        }`}
                      >
                        {tr.monthly}
                      </span>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        isMiddle ? "text-white/80" : "text-[#1E2B3A]/60"
                      }`}
                    >
                      {plan.desc}
                    </p>
                  </div>

                  <div className="mb-8 flex-1">
                    <div
                      className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                        isMiddle ? "text-white/60" : "text-[#1E2B3A]/40"
                      }`}
                    >
                      {tr.features_title}
                    </div>
                    <ul className="space-y-2.5">
                      {fullFeatures[i].map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isMiddle ? "bg-white/20" : "bg-[#00A3D710]"
                            }`}
                          >
                            <Check
                              size={10}
                              className={
                                isMiddle ? "text-white" : "text-[#00A3D7]"
                              }
                            />
                          </div>
                          <span
                            className={`text-sm ${
                              isMiddle
                                ? "text-white/90"
                                : "text-[#1E2B3A]/70"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/${locale}/contact`}
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                      isMiddle
                        ? "bg-white text-[#00A3D7] hover:bg-white/90 hover:shadow-lg"
                        : "gradient-bg text-white shadow-blue hover:shadow-blue-lg hover:scale-[1.02]"
                    }`}
                  >
                    {tr.contact_cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-[#1E2B3A]/50 mt-6"
        >
          {locale === "en"
            ? "All plans include a dedicated setup call and onboarding. Pricing discussed during consultation."
            : "Tous les forfaits incluent un appel de configuration dédié et l'onboarding. Tarification discutée lors de la consultation."}
        </motion.p>
      </div>

      {/* AI Advisor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-6">
            <MessageSquare size={14} className="text-[#00A3D7]" />
            <span className="text-sm font-medium text-[#00A3D7]">
              {tr.advisor_badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2B3A] mb-4">
            {tr.advisor_headline}
          </h2>
          <p className="text-lg text-[#1E2B3A]/60 max-w-xl mx-auto">
            {tr.advisor_subheadline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <AIAdvisor />
        </motion.div>
      </div>
    </div>
  );
}
