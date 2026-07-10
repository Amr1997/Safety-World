import p1 from "@assets/products/1 (1).jpeg";
import p2 from "@assets/products/1 (2).jpeg";
import p3 from "@assets/products/1 (3).jpeg";
import p4 from "@assets/products/1 (4).jpeg";
import p5 from "@assets/products/1 (5).jpeg";
import p6 from "@assets/products/1 (6).jpeg";
import p7 from "@assets/products/1 (7).jpeg";
import p8 from "@assets/products/1 (8).jpeg";
import p9 from "@assets/products/1 (9).jpeg";
import p10 from "@assets/products/1 (10).jpeg";
import p11 from "@assets/products/1 (11).jpeg";
import p12 from "@assets/products/1 (12).jpeg";
import p13 from "@assets/products/1 (13).jpeg";
import p14 from "@assets/products/1 (14).jpeg";
import p15 from "@assets/products/1 (15).jpeg";
import p16 from "@assets/products/1 (16).jpeg";
import p17 from "@assets/products/1 (17).jpeg";
import p18 from "@assets/products/1 (18).jpeg";

export type ProductLayout = "tall" | "wide" | "square" | "feature";

export interface Product {
  id: string;
  image: string;
  layout: ProductLayout;
}

const layouts: ProductLayout[] = [
  "feature",
  "wide",
  "square",
  "wide",
  "square",
  "tall",
  "square",
  "wide",
  "square",
  "feature",
  "tall",
  "square",
  "square",
  "square",
  "wide",
  "wide",
  "square",
  "tall",
];

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18];

export const products: Product[] = images.map((image, index) => ({
  id: String(index + 1).padStart(2, "0"),
  image,
  layout: layouts[index],
}));
