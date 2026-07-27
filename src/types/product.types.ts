export const PRODUCT_CATEGORIES = [
  "desk",
  "chair",
  "monitor",
  "laptop",
  "lamp",
  "plant",
  "decor",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  description: string;
  price: number;
  image: ProductImage;
}
