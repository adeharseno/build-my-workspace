"use client";

import { WORKSPACE_STAGE_LAYOUT } from "@/constants/workspace.constants";
import { getProductById } from "@/data/products";
import { useWorkspaceStore } from "@/store/workspace.store";

export function MonitorLayer() {
  const monitorId = useWorkspaceStore((state) => state.monitor);
  const monitor = monitorId ? getProductById(monitorId) : null;

  return (
    <div
      key={monitorId}
      aria-hidden={!monitor}
      aria-label={monitor ? `Monitor: ${monitor.name}` : undefined}
      className={WORKSPACE_STAGE_LAYOUT.monitor}
      role={monitor ? "img" : undefined}
    >
      <div className="min-h-16 border border-dashed border-neutral-400 bg-white/80 p-2 text-center text-xs">
        {monitor?.name ?? "Monitor layer"}
      </div>
    </div>
  );
}
