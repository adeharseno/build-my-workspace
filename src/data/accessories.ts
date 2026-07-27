import type { Product } from "@/types/product.types";

export const accessories = [
  {
    id: "lamp-halo",
    category: "lamp",
    name: "Halo Lamp",
    description: "A dimmable task light with a compact footprint.",
    price: 85,
    image: {
      src: "/products/accessories/halo-lamp.webp",
      alt: "Black Halo desk lamp",
    },
  },
  {
    id: "plant-palm",
    category: "plant",
    name: "Palm Plant",
    description: "A small natural accent in a ceramic planter.",
    price: 42,
    image: {
      src: "/products/accessories/palm-plant.webp",
      alt: "Small palm plant in a ceramic planter",
    },
  },
  {
    id: "decor-catchall",
    category: "decor",
    name: "Catchall Tray",
    description: "A low-profile tray for everyday objects.",
    price: 34,
    image: {
      src: "/products/accessories/catchall-tray.webp",
      alt: "Clay-colored workspace catchall tray",
    },
  },
] satisfies readonly Product[];
