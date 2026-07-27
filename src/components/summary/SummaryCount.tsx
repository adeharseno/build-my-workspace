"use client";

import { useWorkspaceStore } from "@/store/workspace.store";
import { selectWorkspaceCount } from "@/store/workspace.selectors";

export function SummaryCount() {
  const selectedCount = useWorkspaceStore(selectWorkspaceCount);

  return (
    <p className="flex justify-between gap-3 text-sm">
      <span>Selected items</span>
      <strong>{selectedCount}</strong>
    </p>
  );
}
