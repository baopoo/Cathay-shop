import { create } from "zustand";

import { CART_STORAGE_KEY } from "@/constants";

interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  [key: string]: any;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  setCart: (items: CartItem[]) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item, quantity = 1) => {
    console.log("quantity", quantity);
    const currentCart = get().cart;

    const index = currentCart.findIndex((i) => i.id === item.id);

    let updatedCart = [...currentCart];

    if (index !== -1) {
      updatedCart[index].quantity += quantity;
    } else {
      updatedCart.push({ ...item, quantity });
    }

    // Lưu vào store và localStorage
    console.log(updatedCart);
    set({ cart: updatedCart });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  },

  removeFromCart: (id) => {
    const updatedCart = get().cart.filter((item) => item.id !== id);
    set({ cart: updatedCart });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  },

  clearCart: () => {
    set({ cart: [] });
    localStorage.removeItem(CART_STORAGE_KEY);
  },

  setCart: (items) => {
    set({ cart: items });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  },
}));
