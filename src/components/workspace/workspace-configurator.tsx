"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { ProductSelector } from "@/components/workspace/product-selector";
import { SummaryDrawer } from "@/components/workspace/summary-drawer";
import { WorkspacePreview } from "@/components/workspace/workspace-preview";
import { accessories, chairs, desks } from "@/data/products";
import { useWorkspaceStore } from "@/store/workspace-store";
import type { Product } from "@/types/workspace";

export function WorkspaceConfigurator() {
  const {
    selectedDesk,
    selectedChair,
    accessories: selectedAccessories,
    selectDesk,
    selectChair,
    addAccessory,
    removeAccessory,
  } = useWorkspaceStore();

  const toggleAccessory = (accessory: Product) => {
    if (selectedAccessories.some((item) => item.id === accessory.id)) {
      removeAccessory(accessory.id);
      return;
    }
    addAccessory(accessory);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen pb-32 lg:pb-8"
    >
      <Header />
      <div className="mx-auto max-w-[1500px] px-5 pb-10 pt-10 md:px-9 lg:pt-14">
        <div className="mb-10 max-w-2xl lg:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#777974]">
            Make room for good work
          </p>
          <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            A workspace that
            <br />
            feels like <span className="font-serif italic">yours.</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-6 text-[#686a66] sm:text-base">
            Mix, match, and make it personal. See your space come together
            before you move in.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(410px,0.85fr)] xl:gap-12">
          <div className="lg:sticky lg:top-6 lg:self-start">
            <WorkspacePreview />
          </div>
          <div className="space-y-12">
            <ProductSelector
              eyebrow="01 · Foundation"
              title="Choose your desk"
              products={desks}
              selectedIds={selectedDesk ? [selectedDesk.id] : []}
              onSelect={selectDesk}
            />
            <ProductSelector
              eyebrow="02 · Comfort"
              title="Pick a chair"
              products={chairs}
              selectedIds={selectedChair ? [selectedChair.id] : []}
              onSelect={selectChair}
            />
            <ProductSelector
              eyebrow="03 · Make it yours"
              title="Add the finishing touches"
              products={accessories}
              selectedIds={selectedAccessories.map((item) => item.id)}
              onSelect={toggleAccessory}
              multiple
            />
            <SummaryDrawer />
          </div>
        </div>
      </div>
    </motion.main>
  );
}
