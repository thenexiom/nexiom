import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  const pages = [
    { href: `/${locale}`, label: nav("home") },
    { href: `/${locale}/plans`, label: nav("plans") },
    { href: `/${locale}/solutions`, label: nav("solutions") },
    { href: `/${locale}/about`, label: nav("about") },
    { href: `/${locale}/contact`, label: nav("contact") },
  ];

  return (
    <footer className="bg-[#1E2B3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Nexiom</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="mailto:hello@nexiom.co"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
              {t("pages")}
            </h4>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Lang */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
              {t("legal")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {t("terms")}
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-3">
                Language
              </h4>
              <div className="flex gap-2">
                <Link
                  href="/en"
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    locale === "en"
                      ? "bg-[#00A3D7] text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  EN
                </Link>
                <Link
                  href="/fr"
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    locale === "fr"
                      ? "bg-[#00A3D7] text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  FR
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">{t("copyright")}</p>
          <a
            href={`mailto:${t("email")}`}
            className="text-white/40 text-sm hover:text-white/70 transition-colors"
          >
            {t("email")}
          </a>
        </div>
      </div>
    </footer>
  );
}
