"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Heart, Shield, Zap, Users, ArrowRight, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "People first",
    title_fr: "Les personnes avant tout",
    desc: "We build relationships, not just CRM setups. Every client gets a dedicated human who cares about their success.",
    desc_fr: "Nous construisons des relations, pas seulement des CRM. Chaque client a un humain dédié qui se soucie de leur succès.",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: Shield,
    title: "Honesty & transparency",
    title_fr: "Honnêteté & transparence",
    desc: "We tell you what you need, not what sounds impressive. Honest recommendations, clear pricing, no surprises.",
    desc_fr: "Nous vous disons ce dont vous avez besoin, pas ce qui sonne impressionnant. Recommandations honnêtes, prix clairs.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Zap,
    title: "Results over complexity",
    title_fr: "Résultats plutôt que complexité",
    desc: "We simplify, not complicate. Every feature we configure has a clear purpose: making your business work better.",
    desc_fr: "Nous simplifions, ne compliquons pas. Chaque fonctionnalité configurée a un objectif clair : améliorer votre entreprise.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    icon: Users,
    title: "SMB obsessed",
    title_fr: "Obsédés par les PME",
    desc: "We exclusively focus on small and growing businesses. We understand your constraints, budget, and goals.",
    desc_fr: "Nous nous concentrons exclusivement sur les petites et moyennes entreprises. Nous comprenons vos contraintes et objectifs.",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
];

export default function AboutContent() {
  const t = useTranslations("about_page");
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <div className="min-h-screen bg-[#F7F9FC] pt-28">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-6">
            <span className="text-sm font-medium text-[#00A3D7]">{t("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1E2B3A] mb-5 leading-tight">
            {t("headline")}
          </h1>
          <p className="text-xl text-[#1E2B3A]/60 leading-relaxed max-w-3xl mx-auto">
            {t("subheadline")}
          </p>
        </motion.div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <Target size={16} className="text-[#00A3D7]" />
              <span className="text-sm font-semibold text-[#00A3D7] uppercase tracking-wider">{t("mission_headline")}</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-[#1E2B3A] leading-tight mb-6">
              &ldquo;{t("mission_text")}&rdquo;
            </p>
            <p className="text-[#1E2B3A]/60 leading-relaxed">
              {isEn
                ? "Too many great businesses are held back by disorganized systems, manual processes, and a lack of visibility. We believe every business — no matter the size — deserves access to the tools that make operations smooth and growth possible."
                : "Trop de grandes entreprises sont freinées par des systèmes désorganisés, des processus manuels et un manque de visibilité. Nous croyons que chaque entreprise — quelle que soit sa taille — mérite d'accéder aux outils qui rendent les opérations fluides et la croissance possible."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: isEn ? "Businesses helped" : "Entreprises aidées" },
              { value: "2 wks", label: isEn ? "Average setup time" : "Délai moyen d'installation" },
              { value: "80%", label: isEn ? "Less manual work" : "Moins de travail manuel" },
              { value: "24h", label: isEn ? "Support response" : "Réponse support" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-[#1E2B3A]/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-4">
              <span className="text-sm font-medium text-[#00A3D7]">{t("values_badge")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2B3A]">{t("values_headline")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-7 rounded-2xl bg-[#F7F9FC] border border-gray-100 hover:shadow-blue hover:border-[#00A3D730] transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                    <Icon size={20} className={value.iconColor} />
                  </div>
                  <h3 className="font-bold text-[#1E2B3A] text-lg mb-2">
                    {isEn ? value.title : value.title_fr}
                  </h3>
                  <p className="text-sm text-[#1E2B3A]/60 leading-relaxed">
                    {isEn ? value.desc : value.desc_fr}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2B3A] mb-4">
            {isEn ? "Let's work together" : "Travaillons ensemble"}
          </h2>
          <p className="text-lg text-[#1E2B3A]/60 mb-8 max-w-xl mx-auto">
            {isEn
              ? "Book a free 30-minute call and let's talk about your business."
              : "Réservez un appel gratuit de 30 minutes et parlons de votre entreprise."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-bg text-white font-bold shadow-blue hover:shadow-blue-lg hover:scale-105 transition-all duration-200"
          >
            {isEn ? "Book Free Consultation" : "Réserver une consultation gratuite"}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
