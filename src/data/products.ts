import stihl1 from "@assets/products/1/STIHL/STIHL (1).jpeg";
import stihl2 from "@assets/products/1/STIHL/STIHL (2).jpeg";
import stihl3 from "@assets/products/1/STIHL/STIHL (3).jpeg";
import fhr1 from "@assets/products/2/FHR/FHR (1).jpeg";
import fhr2 from "@assets/products/2/FHR/FHR (2).jpeg";
import fhr3 from "@assets/products/2/FHR/FHR (3).jpeg";
import fhr4 from "@assets/products/2/FHR/FHR (4).jpeg";
import fhr5 from "@assets/products/2/FHR/FHR (5).jpeg";
import nightstick1 from "@assets/products/3/NIGHTSTICK/NIGHTSTICK (1).jpeg";
import nightstick2 from "@assets/products/3/NIGHTSTICK/NIGHTSTICK (2).jpeg";
import tipsab1 from "@assets/products/4/Tipsab/tipsab (1).jpeg";
import tipsab2 from "@assets/products/4/Tipsab/tipsab (2).jpeg";
import tipsab3 from "@assets/products/4/Tipsab/tipsab (3).jpeg";
import kolling1 from "@assets/products/5/Kolling/kolling (1).jpeg";
import kolling2 from "@assets/products/5/Kolling/kolling (2).jpeg";
import kolling3 from "@assets/products/5/Kolling/kolling (3).jpeg";
import kolling4 from "@assets/products/5/Kolling/kolling (4).jpeg";
import spasciani1 from "@assets/products/6/spasciani/spasciani (1).jpeg";
import spasciani2 from "@assets/products/6/spasciani/spasciani (2).jpeg";
import fritzEmde1 from "@assets/products/7/Fritz emde/Fritz emde.jpeg";
import coltri1 from "@assets/products/8/coltri/Coltri (1).jpeg";
import coltri2 from "@assets/products/8/coltri/Coltri (2).jpeg";
import coltri3 from "@assets/products/8/coltri/Coltri (3).jpeg";
import pump1 from "@assets/products/9/portable floating pump/portable floating pump (1).jpeg";
import pump2 from "@assets/products/9/portable floating pump/portable floating pump (2).jpeg";

export type ProductLayout = "tall" | "wide" | "square" | "feature";

export interface Product {
  id: string;
  image: string;
  layout: ProductLayout;
}

export interface ProductBrand {
  id: number;
  name: string;
  products: Product[];
}

const layoutCycle: ProductLayout[] = [
  "feature",
  "wide",
  "square",
  "tall",
  "wide",
  "square",
];

function buildProducts(images: string[]): Product[] {
  const useFeature = images.length >= 3;

  return images.map((image, index) => {
    let layout: ProductLayout;
    if (index === 0 && useFeature) {
      layout = "feature";
    } else if (images.length === 1) {
      layout = "wide";
    } else if (images.length === 2) {
      layout = index === 0 ? "wide" : "square";
    } else {
      layout = layoutCycle[(index + (useFeature ? 0 : 1)) % layoutCycle.length];
    }

    return {
      id: String(index + 1).padStart(2, "0"),
      image,
      layout,
    };
  });
}

export const productBrands: ProductBrand[] = [
  {
    id: 1,
    name: "STIHL",
    products: buildProducts([stihl1, stihl2, stihl3]),
  },
  {
    id: 2,
    name: "FHR",
    products: buildProducts([fhr1, fhr2, fhr3, fhr4, fhr5]),
  },
  {
    id: 3,
    name: "NIGHTSTICK",
    products: buildProducts([nightstick1, nightstick2]),
  },
  {
    id: 4,
    name: "Tipsab",
    products: buildProducts([tipsab1, tipsab2, tipsab3]),
  },
  {
    id: 5,
    name: "Kolling",
    products: buildProducts([kolling1, kolling2, kolling3, kolling4]),
  },
  {
    id: 6,
    name: "Spasciani",
    products: buildProducts([spasciani1, spasciani2]),
  },
  {
    id: 7,
    name: "Fritz Emde",
    products: buildProducts([fritzEmde1]),
  },
  {
    id: 8,
    name: "Coltri",
    products: buildProducts([coltri1, coltri2, coltri3]),
  },
  {
    id: 9,
    name: "Portable Floating Pump",
    products: buildProducts([pump1, pump2]),
  },
];
