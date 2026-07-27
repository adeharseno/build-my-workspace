import type { Product } from "@/types/product.types";

export const laptops = [
  {
    id: "laptop-slate-14",
    category: "laptop",
    name: "Slate 14 Laptop",
    description: "A compact laptop for flexible work.",
    price: 780,
    image: {
      src: "/products/laptops/slate-14.webp",
      alt: "Slate 14-inch laptop",
    },
  },
] satisfies readonly Product[];
