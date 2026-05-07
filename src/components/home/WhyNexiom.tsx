"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Building2, Heart, Cpu, TrendingUp } from "lucide-react";

const icons = [Building2, Heart, Cpu, TrendingUp];

export default function WhyNexiom() {
  const t = useTranslations("why");
  const items = t.raw("items") as { title: string; desc: string }[];

  return (
    <section className="py-24 bg-[#1E2B3A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #00A3D7 0%, transparent 50%), radial-gradient(circle at 80% 50%, #4A8CFF 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-sm font-medium text-white/80">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
            {t("headline")}
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            {t("subheadline")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00A3D7]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 shadow-blue group-hover:scale-110 transition-transform duration-200">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
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
