"use client";

import { WORKSPACE_STAGE_LAYOUT } from "@/constants/workspace.constants";
import { getProductById } from "@/data/products";
import { useWorkspaceStore } from "@/store/workspace.store";

export function DecorLayer() {
  const decorId = useWorkspaceStore((state) => state.decor);
  const decor = decorId ? getProductById(decorId) : null;

  return (
    <div
      key={decorId}
      aria-hidden={!decor}
      aria-label={decor ? `Decor: ${decor.name}` : undefined}
      className={WORKSPACE_STAGE_LAYOUT.decor}
      role={decor ? "img" : undefined}
    >
      <div className="min-h-10 border border-dashed border-neutral-400 bg-white/80 p-2 text-center text-xs">
        {decor?.name ?? "Decor layer"}
      </div>
    </div>
  );
}
