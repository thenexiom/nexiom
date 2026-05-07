"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Check, ArrowRight, Star } from "lucide-react";

export default function PlansPreview() {
  const t = useTranslations("plans_preview");
  const locale = useLocale();
  const plans = t.raw("plans") as {
    name: string;
    tagline: string;
    desc: string;
    features: string[];
  }[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-6">
            <span className="text-sm font-medium text-[#00A3D7]">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2B3A] mb-4 max-w-3xl mx-auto leading-tight">
            {t("headline")}
          </h2>
          <p className="text-lg text-[#1E2B3A]/60 max-w-xl mx-auto">
            {t("subheadline")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, i) => {
            const isMiddle = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
                  isMiddle
                    ? "gradient-bg text-white shadow-blue-lg border-transparent"
                    : "bg-[#F7F9FC] border-gray-100 hover:border-[#00A3D730] hover:shadow-blue hover:bg-white"
                }`}
              >
                {isMiddle && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#00A3D7] text-xs font-bold shadow-sm">
                      <Star size={10} fill="currentColor" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-5">
                  <div
                    className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
                      isMiddle ? "text-white/60" : "text-[#00A3D7]"
                    }`}
                  >
                    {plan.tagline}
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isMiddle ? "text-white" : "text-[#1E2B3A]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isMiddle ? "text-white/80" : "text-[#1E2B3A]/60"
                    }`}
                  >
                    {plan.desc}
                  </p>
                </div>

                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
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
                        className={
                          isMiddle ? "text-white/90" : "text-[#1E2B3A]/70"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/contact`}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    isMiddle
                      ? "bg-white text-[#00A3D7] hover:bg-white/90"
                      : "gradient-bg text-white shadow-blue hover:shadow-blue-lg"
                  }`}
                >
                  Get Started
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/plans`}
            className="inline-flex items-center gap-2 text-[#00A3D7] font-semibold hover:gap-3 transition-all duration-200"
          >
            {t("cta")}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
