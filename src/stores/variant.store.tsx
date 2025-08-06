import { create } from "zustand";

interface State {
  loading: boolean;
  variants: [];
  variantSelected: Record<string, any>;
  setLoading: (loading: boolean) => void;
  setVariant: (variants: []) => void;
  setVariantSelected: (variantSelected: Record<string, any>) => void;
}

export const useVariantStore = create<State>((set) => ({
  loading: false,
  variants: [],
  variantSelected: {},
  setLoading: (loading: boolean) => {
    set({ loading });
  },
  setVariant: (variants: []) => {
    set({ variants });
  },
  setVariantSelected: (variantSelected: Record<string, any>) => {
    set({ variantSelected });
  },
}));
