export function SummaryPanel() {
  return (
    <aside
      aria-labelledby="summary-panel-title"
      className="rounded-2xl border border-neutral-200 bg-white p-6"
    >
      <h2 id="summary-panel-title" className="text-lg font-semibold">
        Your Workspace
      </h2>
      <p className="mt-2 text-sm text-neutral-500">
        Workspace details will appear here in a later phase.
      </p>
    </aside>
  );
}
