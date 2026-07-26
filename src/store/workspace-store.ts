import { create } from "zustand";
import type { Product, WorkspaceState } from "@/types/workspace";

const calculateTotal = (
  desk: Product | null,
  chair: Product | null,
  accessories: Product[],
): number =>
  (desk?.price ?? 0) +
  (chair?.price ?? 0) +
  accessories.reduce((total, item) => total + item.price, 0);

const initialWorkspace = {
  selectedDesk: null,
  selectedChair: null,
  accessories: [],
  totalPrice: 0,
};

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  ...initialWorkspace,
  selectDesk: (desk) =>
    set((state) => ({
      selectedDesk: desk,
      totalPrice: calculateTotal(desk, state.selectedChair, state.accessories),
    })),
  selectChair: (chair) =>
    set((state) => ({
      selectedChair: chair,
      totalPrice: calculateTotal(state.selectedDesk, chair, state.accessories),
    })),
  addAccessory: (accessory) =>
    set((state) => {
      if (state.accessories.some((item) => item.id === accessory.id)) {
        return state;
      }
      const updatedAccessories = [...state.accessories, accessory];
      return {
        accessories: updatedAccessories,
        totalPrice: calculateTotal(
          state.selectedDesk,
          state.selectedChair,
          updatedAccessories,
        ),
      };
    }),
  removeAccessory: (accessoryId) =>
    set((state) => {
      const updatedAccessories = state.accessories.filter(
        (item) => item.id !== accessoryId,
      );
      return {
        accessories: updatedAccessories,
        totalPrice: calculateTotal(
          state.selectedDesk,
          state.selectedChair,
          updatedAccessories,
        ),
      };
    }),
  resetWorkspace: () => set(initialWorkspace),
}));
