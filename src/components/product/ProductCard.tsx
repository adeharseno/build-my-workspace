import type { Product } from "@/types/product.types";
import { formatPrice } from "@/utils/formatPrice";

interface ProductCardProps {
  product: Product;
  selected: boolean;
  onSelect: () => void;
}

export function ProductCard({
  product,
  selected,
  onSelect,
}: ProductCardProps) {
  return (
    <button
      aria-pressed={selected}
      className={`w-full rounded-xl border p-4 text-left ${
        selected
          ? "border-neutral-900 bg-neutral-50"
          : "border-neutral-200 bg-white"
      }`}
      onClick={onSelect}
      type="button"
    >
      <span
        aria-label={product.image.alt}
        className="grid min-h-24 place-items-center rounded-lg bg-neutral-100 text-xs text-neutral-500"
        role="img"
      >
        Image placeholder
      </span>
      <span className="mt-3 flex items-start justify-between gap-4">
        <span className="font-medium">{product.name}</span>
        <span className="text-sm">{formatPrice(product.price)}</span>
      </span>
      {selected && (
        <span className="mt-2 block text-xs font-medium">Selected</span>
      )}
    </button>
  );
}
