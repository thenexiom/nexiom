"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Settings,
  Zap,
  BarChart2,
  PieChart,
  Plug,
  RefreshCw,
} from "lucide-react";

const icons = [Settings, Zap, BarChart2, PieChart, Plug, RefreshCw];

export default function WhatWeDo() {
  const t = useTranslations("what");
  const items = t.raw("items") as { title: string; desc: string }[];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#00A3D730] hover:shadow-blue transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 shadow-blue group-hover:scale-110 transition-transform duration-200">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-[#1E2B3A] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1E2B3A]/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
