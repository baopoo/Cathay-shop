import { create } from "zustand";

interface State {
  loading: boolean;
  categories: [];
  categorySelected: Record<string, any>;
  setLoading: (loading: boolean) => void;
  setCategories: (categories: []) => void;
  setCategorySelected: (categorySelected: Record<string, any>) => void;
}

export const useCategoryStore = create<State>((set) => ({
  loading: false,
  categories: [],
  categorySelected: {},
  setLoading: (loading: boolean) => {
    set({ loading });
  },
  setCategories: (categories: []) => {
    set({ categories });
  },
  setCategorySelected: (categorySelected: Record<string, any>) => {
    set({ categorySelected });
  },
}));
