"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  UserX,
  RefreshCw,
  EyeOff,
  Database,
  Clock,
  TrendingDown,
} from "lucide-react";

const icons = [UserX, RefreshCw, EyeOff, Database, Clock, TrendingDown];

export default function PainPoints() {
  const t = useTranslations("pain");
  const items = t.raw("items") as { title: string; desc: string }[];

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
            <span className="text-sm font-medium text-red-500">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl border border-gray-100 bg-[#F7F9FC] hover:border-red-100 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <Icon size={18} className="text-red-400" />
                </div>
                <h3 className="font-semibold text-[#1E2B3A] mb-2">
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
