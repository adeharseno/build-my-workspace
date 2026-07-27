"use client";

import { create } from "zustand";
import { getProductById } from "@/data/products";
import type { ProductCategory } from "@/types/product.types";
import type { Workspace, WorkspaceStore } from "@/types/workspace.types";

const initialWorkspace: Workspace = {
  desk: null,
  chair: null,
  monitor: null,
  laptop: null,
  lamp: null,
  plant: null,
  decor: null,
};

function isValidSelection(
  productId: string | null,
  category: ProductCategory,
): boolean {
  return productId === null || getProductById(productId)?.category === category;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  ...initialWorkspace,
  selectDesk: (productId) => {
    if (isValidSelection(productId, "desk")) {
      set({ desk: productId });
    }
  },
  selectChair: (productId) => {
    if (isValidSelection(productId, "chair")) {
      set({ chair: productId });
    }
  },
  selectMonitor: (productId) => {
    if (isValidSelection(productId, "monitor")) {
      set({ monitor: productId });
    }
  },
  selectLaptop: (productId) => {
    if (isValidSelection(productId, "laptop")) {
      set({ laptop: productId });
    }
  },
  selectLamp: (productId) => {
    if (isValidSelection(productId, "lamp")) {
      set({ lamp: productId });
    }
  },
  selectPlant: (productId) => {
    if (isValidSelection(productId, "plant")) {
      set({ plant: productId });
    }
  },
  selectDecor: (productId) => {
    if (isValidSelection(productId, "decor")) {
      set({ decor: productId });
    }
  },
  resetWorkspace: () => set(initialWorkspace),
}));
