import { useTranslation } from "react-i18next";
import { capabilities } from "@/data/brand";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const { t } = useTranslation();

  return (
    <section id="capabilities" className="section-padding bg-surface-elevated">
      <div className="container-editorial">
        <AnimateIn>
          <SectionHeading
            label={t("capabilities.label")}
            title={t("capabilities.title")}
            subtitle={t("capabilities.subtitle")}
          />
        </AnimateIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ key }, index) => (
            <AnimateIn key={key} delay={index * 0.05}>
              <article
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card",
                )}
              >
                <span className="mb-6 block font-mono text-xs text-accent/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold leading-snug text-ink md:text-lg">
                  {t(`capabilities.items.${key}`)}
                </h3>
                <div className="absolute -bottom-8 -end-8 h-24 w-24 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
