import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "start",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "mb-4 text-xs font-semibold uppercase tracking-[0.2em]",
          dark ? "text-accent" : "text-accent",
        )}
      >
        {label}
      </p>
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            dark ? "text-white/70" : "text-ink-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
