"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { useWorkspaceStore } from "@/store/workspace-store";
import { formatCurrency } from "@/utils/currency";

export function SummaryDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedDesk, selectedChair, accessories, totalPrice, removeAccessory } =
    useWorkspaceStore();
  const items = [
    ...(selectedDesk ? [selectedDesk] : []),
    ...(selectedChair ? [selectedChair] : []),
    ...accessories,
  ];

  return (
    <aside className="fixed inset-x-0 bottom-0 z-30 border-t border-black/10 bg-[#fbfaf7]/95 px-5 py-3 shadow-[0_-15px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:sticky lg:bottom-0 lg:rounded-[1.5rem] lg:border">
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span>
          <span className="block text-xs font-medium text-[#747671]">
            Your workspace · {items.length} {items.length === 1 ? "item" : "items"}
          </span>
          <span className="text-xl font-semibold tracking-tight">
            {formatCurrency(totalPrice)}
          </span>
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown aria-hidden="true" size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="max-h-48 space-y-2 overflow-auto pb-2 pt-4">
              {items.length === 0 ? (
                <p className="py-3 text-sm text-[#747671]">
                  Your selected pieces will appear here.
                </p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="flex items-center gap-2">
                      {formatCurrency(item.price)}
                      {item.category === "accessory" && (
                        <button
                          onClick={() => removeAccessory(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="rounded-full p-1 text-[#747671] hover:bg-black/5"
                        >
                          <X size={14} />
                        </button>
                      )}
                    </span>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        disabled={!selectedDesk || !selectedChair}
        className="mt-3 flex w-full items-center justify-between rounded-full bg-[#1b1d1f] px-5 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-35"
      >
        <span>{selectedDesk && selectedChair ? "Reserve this setup" : "Select desk & chair"}</span>
        <ArrowRight aria-hidden="true" size={17} />
      </motion.button>
    </aside>
  );
}
