import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@assets/brand/Safety World Logo.png";
import { brand } from "@/data/brand";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding bg-surface-elevated">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <AnimateIn>
            <SectionHeading
              label={t("contact.label")}
              title={t("contact.title")}
            />
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="space-y-6">
              <a
                href={`mailto:${brand.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {t("contact.email")}
                  </p>
                  <p className="mt-1 text-lg font-medium text-ink group-hover:text-accent">
                    {brand.email}
                  </p>
                </div>
              </a>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      {t("contact.phone")}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {brand.phones.map((phone) => (
                        <li key={phone}>
                          <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="text-lg font-medium text-ink transition-colors hover:text-accent"
                            dir="ltr"
                          >
                            {phone}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={`mailto:${brand.email}`}>{t("contact.cta")}</a>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-10 md:px-10 lg:px-16 xl:px-24">
      <div className="container-editorial flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt={t("a11y.logo")}
            className="h-8 w-auto opacity-90"
            width={64}
            height={32}
          />
          <p className="max-w-xs text-sm text-white/60">{t("footer.legal")}</p>
        </div>
        <p className="text-sm text-white/50">
          © {year} {t("hero.title")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
