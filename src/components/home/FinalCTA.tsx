"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  const t = useTranslations("cta_section");
  const locale = useLocale();

  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-12 text-center"
          style={{ background: "linear-gradient(135deg, #00A3D7 0%, #4A8CFF 100%)" }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)",
              }}
            />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-8">
              <Calendar size={14} className="text-white" />
              <span className="text-sm font-medium text-white">
                Free 30-minute strategy call
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-2xl mx-auto">
              {t("headline")}
            </h2>

            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              {t("subheadline")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#00A3D7] font-bold hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                {t("cta_primary")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href={`/${locale}/plans`}
                className="px-8 py-4 rounded-2xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-200"
              >
                {t("cta_secondary")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
