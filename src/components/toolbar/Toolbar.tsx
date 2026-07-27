import { CategoryButton } from "@/components/toolbar/CategoryButton";
import { PRODUCT_CATEGORIES } from "@/types/product.types";
import type { ProductCategory } from "@/types/product.types";

interface ToolbarProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

const categoryLabels: Record<ProductCategory, string> = {
  desk: "Desk",
  chair: "Chair",
  monitor: "Monitor",
  laptop: "Laptop",
  lamp: "Lamp",
  plant: "Plant",
  decor: "Decor",
};

export function Toolbar({
  activeCategory,
  onCategoryChange,
}: ToolbarProps) {
  return (
    <div
      aria-label="Workspace categories"
      className="flex flex-wrap gap-2"
      role="group"
    >
      {PRODUCT_CATEGORIES.map((category) => (
        <CategoryButton
          key={category}
          active={category === activeCategory}
          label={categoryLabels[category]}
          onSelect={() => onCategoryChange(category)}
        />
      ))}
    </div>
  );
}
