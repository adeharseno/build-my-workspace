import { SelectedItemList } from "@/components/summary/SelectedItemList";
import { SummaryCount } from "@/components/summary/SummaryCount";
import { SummaryTotal } from "@/components/summary/SummaryTotal";

export function SummaryPanel() {
  return (
    <aside
      aria-labelledby="summary-panel-title"
      className="rounded-2xl border border-neutral-200 bg-white p-6"
    >
      <h2 id="summary-panel-title" className="text-lg font-semibold">
        Your Workspace
      </h2>
      <div className="mt-4">
        <SelectedItemList />
      </div>
      <div className="mt-6 space-y-2 border-t border-neutral-200 pt-4">
        <SummaryCount />
        <SummaryTotal />
      </div>
    </aside>
  );
}
