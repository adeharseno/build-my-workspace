interface CategoryButtonProps {
  active: boolean;
  label: string;
  onSelect: () => void;
}

export function CategoryButton({
  active,
  label,
  onSelect,
}: CategoryButtonProps) {
  return (
    <button
      aria-pressed={active}
      className={`min-h-11 rounded-lg border px-3 py-2 text-sm font-medium ${
        active
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-neutral-200 bg-white text-neutral-700"
      }`}
      onClick={onSelect}
      type="button"
    >
      {label}
    </button>
  );
}
