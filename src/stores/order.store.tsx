import { create } from "zustand";

interface State {
  loading: boolean;
  orders: [];
  orderSelected: Record<string, any>;
  setLoading: (loading: boolean) => void;
  setOrder: (variants: []) => void;
  setOrderSelected: (variantSelected: Record<string, any>) => void;
}

export const useOrderStore = create<State>((set) => ({
  loading: true,
  orders: [],
  orderSelected: {},
  setLoading: (loading: boolean) => {
    set({ loading });
  },
  setOrder: (orders: []) => {
    set({ orders });
  },
  setOrderSelected: (orderSelected: Record<string, any>) => {
    set({ orderSelected });
  },
}));
