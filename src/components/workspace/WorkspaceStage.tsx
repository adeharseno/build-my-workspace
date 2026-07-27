import { WORKSPACE_LAYOUT } from "@/constants/workspace.constants";
import { BackgroundLayer } from "@/components/workspace/BackgroundLayer";
import { ChairLayer } from "@/components/workspace/ChairLayer";
import { DecorLayer } from "@/components/workspace/DecorLayer";
import { DeskLayer } from "@/components/workspace/DeskLayer";
import { LampLayer } from "@/components/workspace/LampLayer";
import { LaptopLayer } from "@/components/workspace/LaptopLayer";
import { MonitorLayer } from "@/components/workspace/MonitorLayer";
import { PlantLayer } from "@/components/workspace/PlantLayer";
import { WORKSPACE_STAGE_LAYOUT } from "@/constants/workspace.constants";

export function WorkspaceStage() {
  return (
    <section
      aria-labelledby="workspace-stage-title"
      className={`${WORKSPACE_LAYOUT.stage} rounded-3xl border border-neutral-200 bg-white`}
    >
      <h2 id="workspace-stage-title" className="sr-only">
        Workspace preview
      </h2>
      <div className={WORKSPACE_STAGE_LAYOUT.scene}>
        <BackgroundLayer />
        <DeskLayer />
        <ChairLayer />
        <MonitorLayer />
        <LaptopLayer />
        <LampLayer />
        <PlantLayer />
        <DecorLayer />
      </div>
    </section>
  );
}
