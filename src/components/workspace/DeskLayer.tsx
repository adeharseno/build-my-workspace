"use client";

import { WORKSPACE_STAGE_LAYOUT } from "@/constants/workspace.constants";
import { getProductById } from "@/data/products";
import { useWorkspaceStore } from "@/store/workspace.store";

export function DeskLayer() {
  const deskId = useWorkspaceStore((state) => state.desk);
  const desk = deskId ? getProductById(deskId) : null;

  return (
    <div
      key={deskId}
      aria-hidden={!desk}
      aria-label={desk ? `Desk: ${desk.name}` : undefined}
      className={WORKSPACE_STAGE_LAYOUT.desk}
      role={desk ? "img" : undefined}
    >
      <div className="min-h-16 border border-dashed border-neutral-400 bg-white/80 p-2 text-center text-xs">
        {desk?.name ?? "Desk layer"}
      </div>
    </div>
  );
}
