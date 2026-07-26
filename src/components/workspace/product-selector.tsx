"use client";

import type { Product } from "@/types/workspace";
import { ProductCard } from "@/components/ui/product-card";

interface ProductSelectorProps {
  eyebrow: string;
  title: string;
  products: Product[];
  selectedIds: string[];
  onSelect: (product: Product) => void;
  multiple?: boolean;
}

export function ProductSelector({
  eyebrow,
  title,
  products,
  selectedIds,
  onSelect,
  multiple = false,
}: ProductSelectorProps) {
  return (
    <section>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#858780]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
        {title}
      </h2>
      <div className="-mx-5 mt-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:px-0">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selected={selectedIds.includes(product.id)}
            onSelect={() => onSelect(product)}
            multiple={multiple}
          />
        ))}
      </div>
    </section>
  );
}
