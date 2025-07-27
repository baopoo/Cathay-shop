import { create } from "zustand";

interface State {
  categories: [];
  categorySelected: Record<string, any>;
  setCategories: (categories: []) => void;
  setCategorySelected: (categorySelected: Record<string, any>) => void;
}

export const useCategoryStore = create<State>((set) => ({
  categories: [],
  categorySelected: {},
  setCategories: (categories: []) => {
    set({ categories });
  },
  setCategorySelected: (categorySelected: Record<string, any>) => {
    set({ categorySelected });
  },
}));
