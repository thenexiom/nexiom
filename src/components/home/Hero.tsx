"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Zap, BarChart3, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const stats = [
    { icon: Zap, value: t("stat1_value"), label: t("stat1_label") },
    { icon: BarChart3, value: t("stat2_value"), label: t("stat2_label") },
    { icon: Clock, value: t("stat3_value"), label: t("stat3_label") },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#F7F9FC]" />
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,163,215,0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,140,255,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#1E2B3A 1px, transparent 1px), linear-gradient(90deg, #1E2B3A 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#00A3D7] animate-pulse" />
          <span className="text-sm font-medium text-[#00A3D7]">
            {t("badge")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1E2B3A] leading-tight tracking-tight max-w-5xl mx-auto mb-6"
        >
          <span className="gradient-text">{t("headline").split(" ").slice(0, 3).join(" ")}</span>{" "}
          {t("headline").split(" ").slice(3).join(" ")}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-[#1E2B3A]/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("subheadline")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href={`/${locale}/contact`}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold gradient-bg shadow-blue hover:shadow-blue-lg hover:scale-105 transition-all duration-200"
          >
            {t("cta_primary")}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href={`/${locale}/plans`}
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-[#1E2B3A] font-semibold bg-white border border-gray-200 hover:border-[#00A3D7] hover:text-[#00A3D7] hover:shadow-md transition-all duration-200"
          >
            {t("cta_secondary")}
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <Icon size={20} className="text-[#00A3D7]" />
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-[#1E2B3A]/50 font-medium">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating UI preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl mx-auto px-4 pb-16 hidden md:block"
      >
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white">
          {/* Mock browser bar */}
          <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center gap-2 px-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="mx-auto flex items-center gap-2 px-4 py-1 rounded-lg bg-white border border-gray-200 text-xs text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              app.nexiom.co/pipeline
            </div>
          </div>
          {/* Mock dashboard */}
          <div className="p-6 bg-[#F7F9FC]">
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: "Active Leads", value: "48", color: "text-[#00A3D7]" },
                { label: "Deals Won", value: "12", color: "text-green-500" },
                {
                  label: "Revenue (MTD)",
                  value: "$84k",
                  color: "text-purple-500",
                },
                { label: "Follow-ups", value: "7", color: "text-orange-500" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <div
                    className={`text-2xl font-bold ${stat.color} mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-[#1E2B3A]">
                    Sales Pipeline
                  </span>
                  <span className="text-xs text-[#00A3D7] font-medium">
                    View all →
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      name: "Johnson Construction",
                      stage: "Proposal",
                      value: "$12,400",
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      name: "Maple Real Estate",
                      stage: "Negotiation",
                      value: "$8,200",
                      color: "bg-yellow-100 text-yellow-600",
                    },
                    {
                      name: "Sunrise Services",
                      stage: "Closed",
                      value: "$5,800",
                      color: "bg-green-100 text-green-600",
                    },
                  ].map((deal) => (
                    <div
                      key={deal.name}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#00A3D710] flex items-center justify-center text-xs font-bold text-[#00A3D7]">
                          {deal.name[0]}
                        </div>
                        <span className="text-sm font-medium text-[#1E2B3A]">
                          {deal.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${deal.color}`}
                        >
                          {deal.stage}
                        </span>
                        <span className="text-sm font-semibold text-[#1E2B3A]">
                          {deal.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-sm font-semibold text-[#1E2B3A] mb-4">
                  Today&apos;s Tasks
                </div>
                <div className="space-y-2">
                  {[
                    "Follow up: Johnson Construction",
                    "Send proposal: Maple RE",
                    "Call: Sunrise Services",
                  ].map((task) => (
                    <div
                      key={task}
                      className="flex items-start gap-2 text-xs text-gray-600"
                    >
                      <div className="w-4 h-4 rounded border border-[#00A3D7] flex-shrink-0 mt-0.5" />
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
