"use client";

import { WORKSPACE_STAGE_LAYOUT } from "@/constants/workspace.constants";
import { getProductById } from "@/data/products";
import { useWorkspaceStore } from "@/store/workspace.store";

export function ChairLayer() {
  const chairId = useWorkspaceStore((state) => state.chair);
  const chair = chairId ? getProductById(chairId) : null;

  return (
    <div
      key={chairId}
      aria-hidden={!chair}
      aria-label={chair ? `Chair: ${chair.name}` : undefined}
      className={WORKSPACE_STAGE_LAYOUT.chair}
      role={chair ? "img" : undefined}
    >
      <div className="min-h-20 border border-dashed border-neutral-400 bg-white/80 p-2 text-center text-xs">
        {chair?.name ?? "Chair layer"}
      </div>
    </div>
  );
}
