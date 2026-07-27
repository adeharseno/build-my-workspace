import type { Product } from "@/types/product.types";

export const desks = [
  {
    id: "desk-luma",
    category: "desk",
    name: "Luma Desk",
    description: "A light oak desk with a generous work surface.",
    price: 640,
    image: {
      src: "/products/desks/luma-desk.webp",
      alt: "Light oak Luma desk",
    },
  },
  {
    id: "desk-arc",
    category: "desk",
    name: "Arc Standing Desk",
    description: "An adjustable desk with a calm matte finish.",
    price: 890,
    image: {
      src: "/products/desks/arc-standing-desk.webp",
      alt: "White Arc adjustable standing desk",
    },
  },
] satisfies readonly Product[];
