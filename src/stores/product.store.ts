import { create } from "zustand";

interface State {
  loading: boolean;
  products: [];
  productSelected: Record<string, any>;
  setLoading: (loading: boolean) => void;
  setProduct: (products: []) => void;
  setProductSelected: (productSelected: Record<string, any>) => void;
}

export const useProductStore = create<State>((set) => ({
  loading: true,
  products: [],
  productSelected: {},
  setLoading: (loading: boolean) => {
    set({ loading });
  },
  setProduct: (products: []) => {
    set({ products });
  },
  setProductSelected: (productSelected: Record<string, any>) => {
    set({ productSelected });
  },
}));
