"use client";

import { useShallow } from "zustand/react/shallow";
import { useWorkspaceStore } from "@/store/workspace.store";
import { selectSelectedProducts } from "@/store/workspace.selectors";
import { formatPrice } from "@/utils/formatPrice";

export function SelectedItemList() {
  const selectedProducts = useWorkspaceStore(
    useShallow(selectSelectedProducts),
  );

  if (selectedProducts.length === 0) {
    return (
      <p className="text-sm text-neutral-500">No products selected yet.</p>
    );
  }

  return (
    <ul className="space-y-3">
      {selectedProducts.map((product) => (
        <li key={product.id}>
          <p className="text-sm font-medium">{product.name}</p>
          <p className="mt-1 flex justify-between gap-3 text-xs text-neutral-500">
            <span className="capitalize">{product.category}</span>
            <span>{formatPrice(product.price)}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
