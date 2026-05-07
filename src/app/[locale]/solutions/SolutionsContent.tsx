"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  Wrench,
  Home,
  Briefcase,
  Stethoscope,
  ShoppingBag,
  Users,
  ArrowRight,
  TrendingUp,
  Clock,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";

const industries = [
  {
    icon: Wrench,
    name: "Construction & Trades",
    name_fr: "Construction & Artisanat",
    desc: "Manage project leads, client follow-ups, subcontractor communications, and job quotes — all in one place.",
    desc_fr: "Gérez les prospects de projets, les suivis clients, les communications sous-traitants et les devis.",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: Home,
    name: "Real Estate",
    name_fr: "Immobilier",
    desc: "Track property listings, client preferences, viewings, and closing processes with automated follow-ups.",
    desc_fr: "Suivez les propriétés, les préférences clients, les visites et les processus de clôture avec des suivis automatisés.",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    name_fr: "Services professionnels",
    desc: "Organize client onboarding, project milestones, invoicing, and recurring service relationships.",
    desc_fr: "Organisez l'onboarding client, les jalons de projets, la facturation et les relations de services récurrents.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    name_fr: "Santé",
    desc: "Streamline patient intake, appointment follow-ups, referral tracking, and care coordination.",
    desc_fr: "Rationalisez l'accueil des patients, les suivis de rendez-vous, le suivi des références et la coordination des soins.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    name_fr: "Commerce & E-commerce",
    desc: "Build customer loyalty, automate post-purchase flows, manage wholesale relationships, and track VIP clients.",
    desc_fr: "Fidélisez les clients, automatisez les flux post-achat et gérez les relations grossistes.",
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    icon: Users,
    name: "Agencies & Consulting",
    name_fr: "Agences & Consulting",
    desc: "Manage proposals, client relationships, project deliverables, and team coordination from a single CRM.",
    desc_fr: "Gérez les propositions, les relations clients, les livrables de projets et la coordination d'équipe depuis un seul CRM.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
];

const benefits = [
  { icon: Clock, title: "Save 10+ hours/week", title_fr: "Économisez 10h+/semaine", desc: "Automate repetitive tasks and spend more time growing your business.", desc_fr: "Automatisez les tâches répétitives et consacrez plus de temps à la croissance." },
  { icon: TrendingUp, title: "3x faster sales cycles", title_fr: "Cycles de vente 3x plus rapides", desc: "Structured pipelines and automated follow-ups close deals faster.", desc_fr: "Des pipelines structurés et des suivis automatisés concluent les deals plus rapidement." },
  { icon: BarChart3, title: "Real-time visibility", title_fr: "Visibilité en temps réel", desc: "Know exactly where every deal stands with live dashboards.", desc_fr: "Sachez exactement où en est chaque deal avec des tableaux de bord en direct." },
  { icon: Zap, title: "80% less manual work", title_fr: "80% moins de travail manuel", desc: "Automations handle the routine so your team can focus on what matters.", desc_fr: "Les automatisations gèrent la routine pour que votre équipe se concentre sur l'essentiel." },
  { icon: Shield, title: "Never miss a follow-up", title_fr: "Ne manquez jamais un suivi", desc: "Automated reminders and tasks ensure every lead gets proper attention.", desc_fr: "Les rappels et tâches automatisés s'assurent que chaque prospect reçoit l'attention qu'il mérite." },
  { icon: Users, title: "Team alignment", title_fr: "Alignement d'équipe", desc: "Everyone works from the same system with clear ownership and visibility.", desc_fr: "Tout le monde travaille avec le même système avec une propriété et une visibilité claires." },
];

export default function SolutionsContent() {
  const t = useTranslations("solutions_page");
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <div className="min-h-screen bg-[#F7F9FC] pt-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-6">
            <span className="text-sm font-medium text-[#00A3D7]">{t("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1E2B3A] mb-4 leading-tight">
            {t("headline")}
          </h1>
          <p className="text-lg text-[#1E2B3A]/60 max-w-xl mx-auto">
            {t("subheadline")}
          </p>
        </motion.div>
      </div>

      {/* Industries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-4">
            <span className="text-sm font-medium text-[#00A3D7]">{t("industries_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2B3A]">{t("industries_headline")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-blue hover:border-[#00A3D730] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${industry.color} flex items-center justify-center mb-4`}>
                  <Icon size={20} className={industry.iconColor} />
                </div>
                <h3 className="font-bold text-[#1E2B3A] text-lg mb-2">
                  {isEn ? industry.name : industry.name_fr}
                </h3>
                <p className="text-sm text-[#1E2B3A]/60 leading-relaxed">
                  {isEn ? industry.desc : industry.desc_fr}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-4">
              <span className="text-sm font-medium text-[#00A3D7]">{t("benefits_badge")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2B3A]">{t("benefits_headline")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-[#F7F9FC] border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4 shadow-blue">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#1E2B3A] mb-2">{isEn ? benefit.title : benefit.title_fr}</h3>
                  <p className="text-sm text-[#1E2B3A]/60 leading-relaxed">{isEn ? benefit.desc : benefit.desc_fr}</p>
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
          className="rounded-3xl overflow-hidden p-12"
          style={{ background: "linear-gradient(135deg, #00A3D7 0%, #4A8CFF 100%)" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {isEn ? "Ready to see what's possible for your business?" : "Prêt à voir ce qui est possible pour votre entreprise ?"}
          </h2>
          <p className="text-white/80 mb-8">
            {isEn ? "Book a free strategy call and we'll show you exactly how we'd set up your CRM." : "Réservez un appel stratégique gratuit et nous vous montrerons exactement comment nous configurerions votre CRM."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#00A3D7] font-bold hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            {isEn ? "Book Free Consultation" : "Réserver une consultation gratuite"}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
