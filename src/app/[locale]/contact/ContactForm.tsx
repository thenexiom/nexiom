"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ArrowLeft, CheckCircle2, Send, Loader2 } from "lucide-react";

type FormData = {
  email: string;
  business: string;
  businessType: string;
  challenge: string;
  message: string;
};

export default function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<FormData>({
    email: "",
    business: "",
    businessType: "",
    challenge: "",
    message: "",
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const step3Options = t.raw("step3.options") as string[];
  const step4Options = t.raw("step4.options") as string[];

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const canNext = () => {
    if (step === 1) return data.email.includes("@");
    if (step === 2) return data.business.trim().length > 0;
    if (step === 3) return data.businessType.length > 0;
    if (step === 4) return data.challenge.length > 0;
    return true;
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A3D710] border border-[#00A3D730] mb-6">
            <span className="text-sm font-medium text-[#00A3D7]">
              {t("badge")}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1E2B3A] mb-3 leading-tight">
            {t("headline")}
          </h1>
          <p className="text-lg text-[#1E2B3A]/60">{t("subheadline")}</p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
        >
          {!success ? (
            <>
              {/* Progress bar */}
              <div className="h-1.5 bg-gray-100">
                <motion.div
                  className="h-full gradient-bg rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>

              <div className="p-8 sm:p-10">
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i + 1 <= step
                          ? "gradient-bg flex-[2]"
                          : "bg-gray-200 flex-1"
                      }`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <Step key="step1">
                      <StepLabel>{t("step1.label")}</StepLabel>
                      <input
                        type="email"
                        value={data.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                        placeholder={t("step1.placeholder")}
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 text-[#1E2B3A] text-lg placeholder:text-gray-300 focus:outline-none focus:border-[#00A3D7] focus:ring-2 focus:ring-[#00A3D710] transition-all"
                        autoFocus
                        onKeyDown={(e) =>
                          e.key === "Enter" && canNext() && setStep(2)
                        }
                      />
                    </Step>
                  )}

                  {step === 2 && (
                    <Step key="step2">
                      <StepLabel>{t("step2.label")}</StepLabel>
                      <input
                        type="text"
                        value={data.business}
                        onChange={(e) =>
                          setData({ ...data, business: e.target.value })
                        }
                        placeholder={t("step2.placeholder")}
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 text-[#1E2B3A] text-lg placeholder:text-gray-300 focus:outline-none focus:border-[#00A3D7] focus:ring-2 focus:ring-[#00A3D710] transition-all"
                        autoFocus
                        onKeyDown={(e) =>
                          e.key === "Enter" && canNext() && setStep(3)
                        }
                      />
                    </Step>
                  )}

                  {step === 3 && (
                    <Step key="step3">
                      <StepLabel>{t("step3.label")}</StepLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step3Options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setData({ ...data, businessType: opt });
                            }}
                            className={`p-4 rounded-2xl border text-sm font-medium text-left transition-all duration-200 ${
                              data.businessType === opt
                                ? "border-[#00A3D7] bg-[#00A3D710] text-[#00A3D7]"
                                : "border-gray-200 text-[#1E2B3A] hover:border-[#00A3D7] hover:bg-[#00A3D705]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </Step>
                  )}

                  {step === 4 && (
                    <Step key="step4">
                      <StepLabel>{t("step4.label")}</StepLabel>
                      <div className="space-y-2">
                        {step4Options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() =>
                              setData({ ...data, challenge: opt })
                            }
                            className={`w-full p-4 rounded-2xl border text-sm font-medium text-left transition-all duration-200 ${
                              data.challenge === opt
                                ? "border-[#00A3D7] bg-[#00A3D710] text-[#00A3D7]"
                                : "border-gray-200 text-[#1E2B3A] hover:border-[#00A3D7] hover:bg-[#00A3D705]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </Step>
                  )}

                  {step === 5 && (
                    <Step key="step5">
                      <StepLabel>{t("step5.label")}</StepLabel>
                      <textarea
                        value={data.message}
                        onChange={(e) =>
                          setData({ ...data, message: e.target.value })
                        }
                        placeholder={t("step5.placeholder")}
                        rows={5}
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 text-[#1E2B3A] placeholder:text-gray-300 focus:outline-none focus:border-[#00A3D7] focus:ring-2 focus:ring-[#00A3D710] transition-all resize-none"
                        autoFocus
                      />
                    </Step>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-[#1E2B3A]/60 hover:text-[#1E2B3A] hover:bg-gray-100 transition-all duration-200"
                    >
                      <ArrowLeft size={14} />
                      {t("back")}
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < totalSteps ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      disabled={!canNext()}
                      className="flex items-center gap-2 px-7 py-3 rounded-2xl gradient-bg text-white font-semibold shadow-blue hover:shadow-blue-lg hover:scale-105 transition-all duration-200 disabled:opacity-40 disabled:scale-100 disabled:shadow-none"
                    >
                      {t("next")}
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="flex items-center gap-2 px-7 py-3 rounded-2xl gradient-bg text-white font-semibold shadow-blue hover:shadow-blue-lg hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:scale-100"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          {t("submit")}
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6 shadow-blue-lg"
              >
                <CheckCircle2 size={36} className="text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-[#1E2B3A] mb-3">
                {t("success_title")}
              </h2>
              <p className="text-[#1E2B3A]/60 text-lg max-w-sm mx-auto">
                {t("success_desc")}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function Step({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {children}
    </motion.div>
  );
}

function StepLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-bold text-[#1E2B3A] mb-4">
      {children}
    </h2>
  );
}
