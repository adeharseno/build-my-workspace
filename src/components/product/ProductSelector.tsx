"use client";

import { ProductCard } from "@/components/product/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { useWorkspaceStore } from "@/store/workspace.store";
import type { ProductCategory } from "@/types/product.types";
import type { WorkspaceStore } from "@/types/workspace.types";

interface ProductSelectorProps {
  activeCategory: ProductCategory;
}

function selectActiveProductId(
  state: WorkspaceStore,
  category: ProductCategory,
): string | null {
  switch (category) {
    case "desk":
      return state.desk;
    case "chair":
      return state.chair;
    case "monitor":
      return state.monitor;
    case "laptop":
      return state.laptop;
    case "lamp":
      return state.lamp;
    case "plant":
      return state.plant;
    case "decor":
      return state.decor;
  }
}

export function ProductSelector({ activeCategory }: ProductSelectorProps) {
  const selectedProductId = useWorkspaceStore((state) =>
    selectActiveProductId(state, activeCategory),
  );
  const categoryProducts = getProductsByCategory(activeCategory);

  const handleSelect = (productId: string) => {
    const actions = useWorkspaceStore.getState();

    switch (activeCategory) {
      case "desk":
        actions.selectDesk(productId);
        return;
      case "chair":
        actions.selectChair(productId);
        return;
      case "monitor":
        actions.selectMonitor(productId);
        return;
      case "laptop":
        actions.selectLaptop(productId);
        return;
      case "lamp":
        actions.selectLamp(productId);
        return;
      case "plant":
        actions.selectPlant(productId);
        return;
      case "decor":
        actions.selectDecor(productId);
        return;
    }
  };

  return (
    <section
      aria-labelledby="product-selector-title"
    >
      <h2 id="product-selector-title" className="text-base font-semibold">
        Products
      </h2>
      <div className="mt-4 grid gap-4" aria-live="polite">
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            onSelect={() => handleSelect(product.id)}
            product={product}
            selected={product.id === selectedProductId}
          />
        ))}
      </div>
    </section>
  );
}
