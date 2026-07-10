import { useTranslation } from "react-i18next";
import { products, type ProductLayout } from "@/data/products";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const layoutClasses: Record<ProductLayout, string> = {
  feature: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  square: "",
};

function ProductTile({
  id,
  image,
  layout,
  index,
}: {
  id: string;
  image: string;
  layout: ProductLayout;
  index: number;
}) {
  const { t } = useTranslation();

  return (
    <AnimateIn
      delay={(index % 6) * 0.04}
      className={cn("group", layoutClasses[layout])}
    >
      <figure
        className={cn(
          "relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card",
          layout === "feature" && "min-h-[320px]",
          layout === "tall" && "min-h-[400px]",
        )}
      >
        <img
          src={image}
          alt={t("products.itemAlt", { index: id })}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02] md:p-6"
        />
        <figcaption className="sr-only">
          {t("products.itemAlt", { index: id })}
        </figcaption>
      </figure>
    </AnimateIn>
  );
}

export function ProductGallery() {
  const { t } = useTranslation();

  return (
    <section id="products" className="section-padding bg-surface">
      <div className="container-editorial">
        <AnimateIn>
          <SectionHeading
            label={t("products.label")}
            title={t("products.title")}
            subtitle={t("products.subtitle")}
          />
        </AnimateIn>

        <div className="mt-16 grid auto-rows-[minmax(240px,auto)] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {products.map((product, index) => (
            <ProductTile key={product.id} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
