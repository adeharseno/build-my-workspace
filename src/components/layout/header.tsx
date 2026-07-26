"use client";

import { motion } from "framer-motion";
import { Armchair, RotateCcw } from "lucide-react";
import { useWorkspaceStore } from "@/store/workspace-store";

export function Header() {
  const resetWorkspace = useWorkspaceStore((state) => state.resetWorkspace);
  const hasSelection = useWorkspaceStore(
    (state) =>
      Boolean(state.selectedDesk) ||
      Boolean(state.selectedChair) ||
      state.accessories.length > 0,
  );

  return (
    <header className="flex items-center justify-between border-b border-black/8 px-5 py-4 md:px-9">
      <a className="flex items-center gap-2.5 font-semibold tracking-tight" href="#">
        <span className="grid size-9 place-items-center rounded-xl bg-[#1b1d1f] text-white">
          <Armchair aria-hidden="true" size={18} strokeWidth={2.2} />
        </span>
        <span>Build My Workspace</span>
      </a>
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        onClick={resetWorkspace}
        disabled={!hasSelection}
        className="flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
      >
        <RotateCcw aria-hidden="true" size={15} />
        <span className="hidden sm:inline">Start over</span>
      </motion.button>
    </header>
  );
}
