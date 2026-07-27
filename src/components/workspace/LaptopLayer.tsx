"use client";

import { WORKSPACE_STAGE_LAYOUT } from "@/constants/workspace.constants";
import { getProductById } from "@/data/products";
import { useWorkspaceStore } from "@/store/workspace.store";

export function LaptopLayer() {
  const laptopId = useWorkspaceStore((state) => state.laptop);
  const laptop = laptopId ? getProductById(laptopId) : null;

  return (
    <div
      key={laptopId}
      aria-hidden={!laptop}
      aria-label={laptop ? `Laptop: ${laptop.name}` : undefined}
      className={WORKSPACE_STAGE_LAYOUT.laptop}
      role={laptop ? "img" : undefined}
    >
      <div className="min-h-12 border border-dashed border-neutral-400 bg-white/80 p-2 text-center text-xs">
        {laptop?.name ?? "Laptop layer"}
      </div>
    </div>
  );
}
