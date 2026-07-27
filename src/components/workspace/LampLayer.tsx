"use client";

import { WORKSPACE_STAGE_LAYOUT } from "@/constants/workspace.constants";
import { getProductById } from "@/data/products";
import { useWorkspaceStore } from "@/store/workspace.store";

export function LampLayer() {
  const lampId = useWorkspaceStore((state) => state.lamp);
  const lamp = lampId ? getProductById(lampId) : null;

  return (
    <div
      key={lampId}
      aria-hidden={!lamp}
      aria-label={lamp ? `Lamp: ${lamp.name}` : undefined}
      className={WORKSPACE_STAGE_LAYOUT.lamp}
      role={lamp ? "img" : undefined}
    >
      <div className="min-h-20 border border-dashed border-neutral-400 bg-white/80 p-2 text-center text-xs">
        {lamp?.name ?? "Lamp layer"}
      </div>
    </div>
  );
}
