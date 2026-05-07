"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Bot, Send, ArrowRight, RotateCcw } from "lucide-react";

type Step = {
  q: string;
  options: string[];
};

const STEPS_EN: Step[] = [
  {
    q: "How many people are on your team?",
    options: ["Just me", "2–5 people", "6–20 people", "20+ people"],
  },
  {
    q: "What's your biggest challenge right now?",
    options: [
      "Managing leads & follow-ups",
      "Too much manual work",
      "No visibility on deals",
      "Scaling without more staff",
    ],
  },
  {
    q: "Do you currently use any CRM or sales tools?",
    options: [
      "No, nothing yet",
      "Spreadsheets / email",
      "A basic CRM",
      "Multiple tools",
    ],
  },
  {
    q: "How important is workflow automation for you?",
    options: [
      "Nice to have",
      "Somewhat important",
      "Very important",
      "Critical",
    ],
  },
];

const STEPS_FR: Step[] = [
  {
    q: "Combien de personnes composent votre équipe ?",
    options: [
      "Juste moi",
      "2–5 personnes",
      "6–20 personnes",
      "20+ personnes",
    ],
  },
  {
    q: "Quel est votre plus grand défi en ce moment ?",
    options: [
      "Gérer les prospects et suivis",
      "Trop de travail manuel",
      "Aucune visibilité sur les deals",
      "Grandir sans embaucher plus",
    ],
  },
  {
    q: "Utilisez-vous actuellement un CRM ou des outils de vente ?",
    options: [
      "Non, rien pour l'instant",
      "Tableurs / email",
      "Un CRM basique",
      "Plusieurs outils",
    ],
  },
  {
    q: "Quelle importance accordez-vous à l'automatisation ?",
    options: [
      "Agréable à avoir",
      "Assez important",
      "Très important",
      "Critique",
    ],
  },
];

function getRecommendation(
  answers: number[],
  locale: string
): { plan: string; reason: string } {
  const score = answers.reduce((sum, a) => sum + a, 0);
  const isEn = locale === "en";

  if (score <= 3) {
    return {
      plan: isEn ? "Essential" : "Essentiel",
      reason: isEn
        ? "Based on your answers, you're looking to get organized and structured. The Essential plan gives you everything you need to manage contacts, track leads, and build a clear sales process."
        : "Sur la base de vos réponses, vous cherchez à vous organiser et vous structurer. Le forfait Essentiel vous donne tout ce dont vous avez besoin pour gérer les contacts, suivre les prospects et construire un processus de vente clair.",
    };
  } else if (score <= 7) {
    return {
      plan: "Performance",
      reason: isEn
        ? "You're ready to save time and automate repetitive tasks. The Performance plan adds workflow automation, advanced pipelines, and priority support to help you grow efficiently."
        : "Vous êtes prêt à gagner du temps et à automatiser les tâches répétitives. Le forfait Performance ajoute l'automatisation, des pipelines avancés et un support prioritaire pour vous aider à croître efficacement.",
    };
  } else {
    return {
      plan: isEn ? "Elite" : "Élite",
      reason: isEn
        ? "You need advanced automation, deep integrations, and a long-term CRM partner. The Elite plan gives you unlimited integrations, custom dashboards, and a dedicated CRM consultant."
        : "Vous avez besoin d'automatisation avancée, d'intégrations profondes et d'un partenaire CRM à long terme. Le forfait Élite vous offre des intégrations illimitées, des tableaux de bord personnalisés et un consultant CRM dédié.",
    };
  }
}

export default function AIAdvisor() {
  const locale = useLocale();
  const STEPS = locale === "fr" ? STEPS_FR : STEPS_EN;

  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{ plan: string; reason: string } | null>(
    null
  );

  const handleAnswer = (idx: number) => {
    const newAnswers = [...answers, idx];
    setAnswers(newAnswers);
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setResult(getRecommendation(newAnswers, locale));
    }
  };

  const reset = () => {
    setStarted(false);
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const isEn = locale === "en";

  return (
    <div className="bg-[#F7F9FC] rounded-3xl border border-gray-100 overflow-hidden">
      <div className="gradient-bg p-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
          <Bot size={20} className="text-white" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-0.5">
            {isEn ? "AI CRM Advisor" : "Conseiller IA CRM"}
          </div>
          <div className="text-white font-bold">
            {isEn ? "Find your perfect plan" : "Trouvez votre forfait idéal"}
          </div>
        </div>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {!started && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-blue">
                <Bot size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-[#1E2B3A] text-lg mb-2">
                {isEn
                  ? "Not sure which plan fits you?"
                  : "Pas sûr du bon forfait ?"}
              </h3>
              <p className="text-sm text-[#1E2B3A]/60 mb-6">
                {isEn
                  ? "Answer 4 quick questions and I'll recommend the best plan for your business."
                  : "Répondez à 4 questions rapides et je vous recommanderai le meilleur forfait."}
              </p>
              <button
                onClick={() => setStarted(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-semibold shadow-blue hover:shadow-blue-lg hover:scale-105 transition-all duration-200"
              >
                <Send size={14} />
                {isEn ? "Find My Plan" : "Trouver mon forfait"}
              </button>
            </motion.div>
          )}

          {started && !result && (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress */}
              <div className="flex gap-1.5 mb-5">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      i <= currentStep ? "gradient-bg" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xs font-semibold text-[#00A3D7] uppercase tracking-wider mb-3">
                {isEn ? "Question" : "Question"} {currentStep + 1}{" "}
                {isEn ? "of" : "sur"} {STEPS.length}
              </p>

              <h3 className="font-bold text-[#1E2B3A] text-lg mb-5">
                {STEPS[currentStep].q}
              </h3>

              <div className="space-y-2">
                {STEPS[currentStep].options.map((option, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 bg-white hover:border-[#00A3D7] hover:shadow-blue transition-all duration-200 text-sm font-medium text-[#1E2B3A] flex items-center justify-between group"
                  >
                    {option}
                    <ArrowRight
                      size={14}
                      className="text-[#1E2B3A]/30 group-hover:text-[#00A3D7] group-hover:translate-x-1 transition-all"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-blue">
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-xs font-semibold text-[#00A3D7] uppercase tracking-wider mb-1">
                {isEn
                  ? "Recommended for you"
                  : "Recommandé pour vous"}
              </p>
              <h3 className="text-3xl font-bold gradient-text mb-4">
                {result.plan}
              </h3>
              <p className="text-sm text-[#1E2B3A]/70 leading-relaxed mb-6">
                {result.reason}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`/${locale}/contact`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl gradient-bg text-white font-semibold shadow-blue hover:shadow-blue-lg transition-all duration-200"
                >
                  {isEn ? "Get Started" : "Commencer"}
                  <ArrowRight size={14} />
                </a>
                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-2 py-2 text-sm text-[#1E2B3A]/60 hover:text-[#1E2B3A] transition-colors"
                >
                  <RotateCcw size={12} />
                  {isEn ? "Start over" : "Recommencer"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
