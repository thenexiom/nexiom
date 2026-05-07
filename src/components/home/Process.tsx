"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as {
    number: string;
    title: string;
    desc: string;
  }[];

  return (
    <section className="py-24 bg-[#F7F9FC]">
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

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00A3D7] via-[#4A8CFF] to-[#00A3D7] opacity-30" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="relative flex justify-center mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex flex-col items-center justify-center shadow-blue z-10">
                  <span className="text-white font-bold text-xs opacity-70">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-[#1E2B3A] text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#1E2B3A]/60 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-blue flex-shrink-0">
                  <span className="text-white font-bold text-xs">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-[#00A3D7]/30 to-transparent mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-[#1E2B3A] text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[#1E2B3A]/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
