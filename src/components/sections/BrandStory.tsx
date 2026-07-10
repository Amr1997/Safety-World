import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "@assets/brand/Safety World Logo.png";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";

export function BrandStory() {
  const { t } = useTranslation();

  return (
    <section id="story" className="section-padding bg-surface">
      <div className="container-editorial">
        <AnimateIn>
          <SectionHeading
            label={t("story.label")}
            title={t("story.title")}
          />
        </AnimateIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimateIn delay={0.1} className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/50 bg-white/25 shadow-card backdrop-blur-xl">
                <img
                  src={logo}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full scale-125 object-cover opacity-[0.14]"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-white/5" />

                <div className="absolute inset-0 bg-ink/[0.03]" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-7xl font-light tracking-tight text-accent drop-shadow-sm md:text-8xl"
                  >
                    20+
                  </motion.span>
                  <p className="mt-5 max-w-[12rem] text-xs font-medium uppercase leading-relaxed tracking-[0.15em] text-ink-muted">
                    {t("hero.eyebrow")}
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>

          <div className="flex flex-col gap-8 lg:col-span-7 lg:pt-4">
            {[t("story.p1"), t("story.p2"), t("story.p3"), t("story.p4")].map((paragraph, i) => (
              <AnimateIn key={i} delay={0.15 + i * 0.08}>
                <p className="text-lg leading-[1.8] text-ink-muted md:text-xl">
                  {paragraph}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
