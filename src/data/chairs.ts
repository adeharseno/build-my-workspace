import type { Product } from "@/types/product.types";

export const chairs = [
  {
    id: "chair-cove",
    category: "chair",
    name: "Cove Chair",
    description: "A softly upholstered ergonomic chair.",
    price: 420,
    image: {
      src: "/products/chairs/cove-chair.webp",
      alt: "Warm gray Cove ergonomic chair",
    },
  },
  {
    id: "chair-aero",
    category: "chair",
    name: "Aero Chair",
    description: "A breathable task chair with adjustable support.",
    price: 540,
    image: {
      src: "/products/chairs/aero-chair.webp",
      alt: "Graphite Aero task chair",
    },
  },
] satisfies readonly Product[];
