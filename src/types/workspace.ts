export type ProductCategory = "desk" | "chair" | "accessory";

export type ProductColor = "oak" | "walnut" | "white" | "black" | "sage" | "clay";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  color: ProductColor;
}

export interface WorkspaceState {
  selectedDesk: Product | null;
  selectedChair: Product | null;
  accessories: Product[];
  totalPrice: number;
  selectDesk: (desk: Product) => void;
  selectChair: (chair: Product) => void;
  addAccessory: (accessory: Product) => void;
  removeAccessory: (accessoryId: string) => void;
  resetWorkspace: () => void;
}
