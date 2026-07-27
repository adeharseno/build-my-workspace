"use client";

import { useState } from "react";
import { Toolbar } from "@/components/toolbar/Toolbar";
import type { ProductCategory } from "@/types/product.types";

export function CustomizationPanel() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("desk");

  return (
    <section
      aria-labelledby="customization-panel-title"
      className="rounded-2xl border border-neutral-200 bg-white p-6"
    >
      <h2 id="customization-panel-title" className="text-lg font-semibold">
        Customize
      </h2>
      <div className="mt-4">
        <Toolbar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
    </section>
  );
}
