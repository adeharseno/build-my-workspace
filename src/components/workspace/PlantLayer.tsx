"use client";

import { WORKSPACE_STAGE_LAYOUT } from "@/constants/workspace.constants";
import { getProductById } from "@/data/products";
import { useWorkspaceStore } from "@/store/workspace.store";

export function PlantLayer() {
  const plantId = useWorkspaceStore((state) => state.plant);
  const plant = plantId ? getProductById(plantId) : null;

  return (
    <div
      key={plantId}
      aria-hidden={!plant}
      aria-label={plant ? `Plant: ${plant.name}` : undefined}
      className={WORKSPACE_STAGE_LAYOUT.plant}
      role={plant ? "img" : undefined}
    >
      <div className="min-h-20 border border-dashed border-neutral-400 bg-white/80 p-2 text-center text-xs">
        {plant?.name ?? "Plant layer"}
      </div>
    </div>
  );
}
