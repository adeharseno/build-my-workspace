import { accessories } from "@/data/accessories";
import { chairs } from "@/data/chairs";
import { desks } from "@/data/desks";
import { laptops } from "@/data/laptops";
import { monitors } from "@/data/monitors";
import type { Product, ProductCategory } from "@/types/product.types";

export const products = [
  ...desks,
  ...chairs,
  ...monitors,
  ...laptops,
  ...accessories,
] satisfies readonly Product[];

export function getProductById(productId: string): Product | undefined {
  return products.find((product) => product.id === productId);
}

export function getProductsByCategory(
  category: ProductCategory,
): readonly Product[] {
  return products.filter((product) => product.category === category);
}
