import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@assets/brand/Safety World Logo.png";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink" />

      <div className="container-editorial relative z-20 w-full px-5 pt-8 md:px-10 md:pt-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full items-center justify-between gap-6"
        >
          <img
            src={logo}
            alt={t("a11y.logo")}
            className="h-14 w-auto md:h-16 lg:h-[4.5rem]"
            width={120}
            height={96}
          />
          <LanguageSwitcher />
        </motion.div>
      </div>

      <div className="container-editorial relative z-10 flex w-full flex-1 flex-col justify-center px-5 pb-12 md:px-10 lg:px-16 xl:px-24">
        <div className="w-full">
          <div className="grid w-full gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-accent lg:col-span-12"
            >
              {t("hero.eyebrow")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="w-full text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:col-span-8 lg:text-7xl xl:text-8xl"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="w-full text-lg leading-relaxed text-white/60 md:text-xl lg:col-span-4 lg:self-end lg:text-start"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="w-full text-base leading-relaxed text-white/50 md:text-lg lg:col-span-7"
            >
              {t("hero.experience")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex w-full flex-wrap gap-4 lg:col-span-5 lg:ms-auto lg:w-fit lg:self-end"
            >
              <Button size="lg" onClick={() => scrollToSection("products")}>
                {t("hero.cta")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:border-accent/50 hover:bg-white/5"
                onClick={() => scrollToSection("contact")}
              >
                {t("hero.contact")}
              </Button>
            </motion.div>
          </div>

          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={() => scrollToSection("story")}
            className="mt-12 flex items-center gap-2 text-white/40 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
            aria-label={t("hero.scrollToStory")}
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
