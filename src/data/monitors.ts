import type { Product } from "@/types/product.types";

export const monitors = [
  {
    id: "monitor-frame-27",
    category: "monitor",
    name: "Frame 27 Monitor",
    description: "A minimal 27-inch display for focused work.",
    price: 360,
    image: {
      src: "/products/monitors/frame-27.webp",
      alt: "Frame 27-inch desktop monitor",
    },
  },
] satisfies readonly Product[];
