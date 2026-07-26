"use client";

import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import type { Product } from "@/types/workspace";
import { formatCurrency } from "@/utils/currency";

interface ProductCardProps {
  product: Product;
  selected: boolean;
  onSelect: () => void;
  multiple?: boolean;
}

const swatches: Record<Product["color"], string> = {
  oak: "bg-[#d6ad79]",
  walnut: "bg-[#6b4432]",
  white: "bg-[#eeeeda]",
  black: "bg-[#252727]",
  sage: "bg-[#8fa58c]",
  clay: "bg-[#b78770]",
};

export function ProductCard({
  product,
  selected,
  onSelect,
  multiple = false,
}: ProductCardProps) {
  return (
    <motion.button
      layout
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      onClick={onSelect}
      aria-pressed={selected}
      className={`relative min-w-[210px] flex-1 rounded-[1.35rem] border p-4 text-left transition-colors ${
        selected
          ? "border-[#1b1d1f] bg-white"
          : "border-black/8 bg-white/50 hover:border-black/20 hover:bg-white/80"
      }`}
    >
      <div className="mb-7 flex items-start justify-between">
        <span
          className={`size-9 rounded-full border-[6px] border-white shadow-sm ${swatches[product.color]}`}
          aria-hidden="true"
        />
        <span
          className={`grid size-7 place-items-center rounded-full transition-colors ${
            selected ? "bg-[#1b1d1f] text-white" : "border border-black/10"
          }`}
        >
          {selected ? <Check size={14} /> : multiple ? <Plus size={14} /> : null}
        </span>
      </div>
      <span className="block font-semibold tracking-tight">{product.name}</span>
      <span className="mt-1 block text-xs text-[#787a76]">{product.description}</span>
      <span className="mt-3 block text-sm font-semibold">
        {formatCurrency(product.price)}
      </span>
    </motion.button>
  );
}
