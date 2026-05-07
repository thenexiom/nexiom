"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export default function AutomationFlow() {
  const t = useTranslations("automation");
  const flows = t.raw("flows") as { title: string; steps: string[] }[];
  const [activeFlow, setActiveFlow] = useState(0);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Flow selector */}
          <div className="space-y-3">
            {flows.map((flow, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveFlow(i)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  activeFlow === i
                    ? "border-[#00A3D7] bg-white shadow-blue"
                    : "border-gray-100 bg-white hover:border-[#00A3D730] hover:shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                      activeFlow === i
                        ? "gradient-bg text-white shadow-blue"
                        : "bg-gray-100 text-[#1E2B3A]/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span
                    className={`font-semibold text-base ${
                      activeFlow === i ? "text-[#00A3D7]" : "text-[#1E2B3A]"
                    }`}
                  >
                    {flow.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Flow visualization */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlow}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-[#1E2B3A]/60">
                    Automation running...
                  </span>
                </div>

                <div className="space-y-1">
                  {flows[activeFlow].steps.map((step, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: j * 0.15, duration: 0.4 }}
                      className="flex flex-col items-start"
                    >
                      <div className="flex items-center gap-3 p-3 w-full rounded-xl hover:bg-[#F7F9FC] transition-colors group">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full gradient-bg flex items-center justify-center shadow-sm">
                          <CheckCircle2 size={14} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-[#1E2B3A]">
                          {step}
                        </span>
                      </div>
                      {j < flows[activeFlow].steps.length - 1 && (
                        <div className="ml-6 my-1">
                          <ArrowDown size={14} className="text-[#00A3D7]/40" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00A3D7]" />
                  <span className="text-xs text-[#1E2B3A]/40 font-medium">
                    Powered by Nexiom Automation
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
