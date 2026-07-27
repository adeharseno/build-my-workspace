import { ProductSelector } from "@/components/product/ProductSelector";
import { SummaryPanel } from "@/components/summary/SummaryPanel";
import { WorkspaceStage } from "@/components/workspace/WorkspaceStage";
import { WORKSPACE_LAYOUT } from "@/constants/workspace.constants";

export function WorkspaceStudio() {
  return (
    <main className="mx-auto min-h-screen max-w-[1600px] px-4 py-8 md:px-8">
      <div className={WORKSPACE_LAYOUT.studio}>
        <div className={WORKSPACE_LAYOUT.stageRegion}>
          <WorkspaceStage />
        </div>
        <div className={WORKSPACE_LAYOUT.productRegion}>
          <ProductSelector />
        </div>
        <div className={WORKSPACE_LAYOUT.summaryRegion}>
          <SummaryPanel />
        </div>
      </div>
    </main>
  );
}
