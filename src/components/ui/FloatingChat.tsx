"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { MessageCircle, X, ArrowRight, Bot } from "lucide-react";
import Link from "next/link";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="gradient-bg p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-white/60">Nexiom</div>
                <div className="text-white font-semibold text-sm">
                  {isEn ? "CRM Advisor" : "Conseiller CRM"}
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-white/60 text-xs">{isEn ? "Online" : "En ligne"}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot size={12} className="text-white" />
                </div>
                <div className="bg-[#F7F9FC] rounded-2xl rounded-tl-none p-3 text-sm text-[#1E2B3A] max-w-[220px]">
                  {isEn
                    ? "👋 Hi! I help businesses find the right CRM plan. What's your biggest challenge?"
                    : "👋 Bonjour ! J'aide les entreprises à trouver le bon forfait CRM. Quel est votre plus grand défi ?"}
                </div>
              </div>

              <div className="space-y-2">
                {[
                  isEn ? "Managing leads & follow-ups" : "Gérer les prospects",
                  isEn ? "Too much manual work" : "Trop de travail manuel",
                  isEn ? "No pipeline visibility" : "Pas de visibilité pipeline",
                ].map((opt) => (
                  <Link
                    key={opt}
                    href={`/${locale}/plans`}
                    className="flex items-center justify-between w-full text-left text-xs font-medium text-[#1E2B3A] p-2.5 rounded-xl border border-gray-200 hover:border-[#00A3D7] hover:bg-[#00A3D705] transition-all"
                  >
                    {opt}
                    <ArrowRight size={12} className="text-[#00A3D7]" />
                  </Link>
                ))}
              </div>

              <Link
                href={`/${locale}/contact`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl gradient-bg text-white text-sm font-semibold shadow-blue"
              >
                {isEn ? "Book Free Consultation" : "Consultation gratuite"}
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-blue-lg hover:shadow-2xl transition-all duration-200"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
