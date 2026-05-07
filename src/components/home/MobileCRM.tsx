"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Bell, ChevronRight, User, Phone, Mail } from "lucide-react";

export default function MobileCRM() {
  const t = useTranslations("mobile");
  const features = t.raw("features") as string[];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-6">
              <span className="text-sm font-medium text-[#00A3D7]">
                {t("badge")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2B3A] mb-5 leading-tight">
              {t("headline")}
            </h2>
            <p className="text-lg text-[#1E2B3A]/60 mb-8 leading-relaxed">
              {t("subheadline")}
            </p>

            <ul className="space-y-3">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-[#1E2B3A]/80 font-medium">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-[48px] blur-3xl opacity-20"
                style={{ background: "var(--gradient)" }}
              />

              {/* Phone frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[280px] rounded-[48px] bg-[#1E2B3A] p-3 shadow-2xl"
              >
                {/* Screen */}
                <div className="rounded-[38px] overflow-hidden bg-[#F7F9FC]">
                  {/* Status bar */}
                  <div className="h-12 bg-[#1E2B3A] flex items-end justify-between px-6 pb-2">
                    <span className="text-white/60 text-xs">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-1.5 rounded-sm bg-white/60" />
                      <div className="w-1 h-1 rounded-full bg-white/60" />
                      <div className="w-4 h-2 rounded-sm border border-white/60 flex items-center justify-end pr-0.5">
                        <div className="w-2.5 h-1.5 bg-green-400 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Notch area */}
                  <div className="h-8 bg-[#1E2B3A] flex items-center justify-center">
                    <div className="w-24 h-4 rounded-full bg-black" />
                  </div>

                  {/* App content */}
                  <div className="p-4 space-y-3 bg-[#F7F9FC] min-h-[480px]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-xs text-[#1E2B3A]/50">Good morning,</div>
                        <div className="font-bold text-[#1E2B3A] text-base">Dashboard</div>
                      </div>
                      <div className="relative">
                        <Bell size={18} className="text-[#1E2B3A]/60" />
                        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#00A3D7] flex items-center justify-center">
                          <span className="text-white text-[8px] font-bold">3</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                        <div className="text-lg font-bold gradient-text">12</div>
                        <div className="text-[10px] text-[#1E2B3A]/50">Active Leads</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                        <div className="text-lg font-bold text-green-500">$48k</div>
                        <div className="text-[10px] text-[#1E2B3A]/50">Pipeline Value</div>
                      </div>
                    </div>

                    {/* Recent leads */}
                    <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                      <div className="text-xs font-semibold text-[#1E2B3A] mb-2">Recent Leads</div>
                      <div className="space-y-2">
                        {[
                          { name: "Sarah M.", status: "Hot", color: "bg-red-100 text-red-500" },
                          { name: "Mike R.", status: "New", color: "bg-blue-100 text-blue-500" },
                          { name: "Tom L.", status: "Follow-up", color: "bg-yellow-100 text-yellow-600" },
                        ].map((lead) => (
                          <div key={lead.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                                <User size={10} className="text-white" />
                              </div>
                              <span className="text-[11px] font-medium text-[#1E2B3A]">{lead.name}</span>
                            </div>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${lead.color}`}>
                              {lead.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tasks */}
                    <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                      <div className="text-xs font-semibold text-[#1E2B3A] mb-2">Today&apos;s Tasks</div>
                      <div className="space-y-1.5">
                        {["Call Sarah M.", "Send proposal"].map((task) => (
                          <div key={task} className="flex items-center gap-2">
                            <div className="w-3.5 h-3.5 rounded border border-[#00A3D7] flex-shrink-0" />
                            <span className="text-[11px] text-[#1E2B3A]/70">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { Icon: Phone, label: "Call" },
                        { Icon: Mail, label: "Email" },
                        { Icon: ChevronRight, label: "More" },
                      ].map(({ Icon, label }) => (
                        <button
                          key={label}
                          className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white border border-gray-100 shadow-sm"
                        >
                          <Icon size={14} className="text-[#00A3D7]" />
                          <span className="text-[9px] text-[#1E2B3A]/60 font-medium">{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="flex justify-center mt-2 mb-1">
                  <div className="w-24 h-1 rounded-full bg-white/20" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
