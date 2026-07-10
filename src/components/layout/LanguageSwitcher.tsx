import { useTranslation } from "react-i18next";
import { setLanguage } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith("ar") ? "ar" : "en";

  return (
    <div
      className={cn("flex items-center gap-1 rounded-full border border-white/15 bg-black/40 p-1 backdrop-blur-md", className)}
      role="group"
      aria-label={t("a11y.langSwitcher")}
    >
      {(["en", "ar"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300",
            current === lang
              ? "bg-white text-ink"
              : "text-white/70 hover:text-white",
          )}
          aria-pressed={current === lang}
        >
          {t(`lang.${lang}`)}
        </button>
      ))}
    </div>
  );
}
