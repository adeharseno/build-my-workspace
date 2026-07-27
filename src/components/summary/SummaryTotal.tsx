"use client";

import { useWorkspaceStore } from "@/store/workspace.store";
import { selectWorkspaceTotal } from "@/store/workspace.selectors";
import { formatPrice } from "@/utils/formatPrice";

export function SummaryTotal() {
  const total = useWorkspaceStore(selectWorkspaceTotal);

  return (
    <p className="flex justify-between gap-3 text-sm">
      <span>Total</span>
      <strong>{formatPrice(total)}</strong>
    </p>
  );
}
