import { getProductById } from "@/data/products";
import type { Product } from "@/types/product.types";
import type { WorkspaceStore } from "@/types/workspace.types";

function selectSelectedProductIds(state: WorkspaceStore): string[] {
  return [
    state.desk,
    state.chair,
    state.monitor,
    state.laptop,
    state.lamp,
    state.plant,
    state.decor,
  ].filter((productId): productId is string => productId !== null);
}

export function selectSelectedProducts(state: WorkspaceStore): Product[] {
  return selectSelectedProductIds(state).flatMap((productId) => {
    const product = getProductById(productId);
    return product ? [product] : [];
  });
}

export function selectWorkspaceTotal(state: WorkspaceStore): number {
  return selectSelectedProducts(state).reduce(
    (total, product) => total + product.price,
    0,
  );
}

export function selectWorkspaceCount(state: WorkspaceStore): number {
  return selectSelectedProductIds(state).length;
}
