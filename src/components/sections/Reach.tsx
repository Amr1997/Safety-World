import { useTranslation } from "react-i18next";
import { directorates } from "@/data/brand";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";

export function Reach() {
  const { t } = useTranslation();

  return (
    <section id="reach" className="section-padding bg-ink text-white">
      <div className="container-editorial">
        <AnimateIn>
          <SectionHeading
            label={t("reach.label")}
            title={t("reach.title")}
            subtitle={t("reach.description")}
            dark
          />
        </AnimateIn>

        <AnimateIn delay={0.15} className="mt-14">
          <div className="flex flex-wrap gap-3">
            {directorates.map(({ key }) => (
              <span
                key={key}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm"
              >
                {t(`reach.directorates.${key}`)}
              </span>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.25} className="mt-20">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t("reach.training.label")}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t("reach.training.title")}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
              {t("reach.training.description")}
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
