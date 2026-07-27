import { WORKSPACE_STAGE_LAYOUT } from "@/constants/workspace.constants";

export function BackgroundLayer() {
  return (
    <div
      aria-hidden="true"
      className={`${WORKSPACE_STAGE_LAYOUT.background} bg-neutral-100`}
    >
      <div className="grid size-full place-items-center text-sm text-neutral-400">
        Background layer
      </div>
    </div>
  );
}
