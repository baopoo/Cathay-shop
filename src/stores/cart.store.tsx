import { create } from "zustand";

import { CART_STORAGE_KEY } from "@/constants";

interface CartItem {
  id: string; // variant id
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
  [key: string]: any;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  setCart: (items: CartItem[]) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item, quantity = 1) => {
    const currentCart = get().cart;
    const index = currentCart.findIndex((i) => i.id === item.id);
    let updatedCart = [...currentCart];

    if (index !== -1) {
      updatedCart[index].quantity += quantity;
    } else {
      updatedCart.push({ ...item, quantity });
    }

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

  updateQuantity: (variantId: string, quantity: number) => {
    const cart = get().cart;
    const updatedCart = cart.map((item) =>
      item.id === variantId ? { ...item, quantity } : item
    );
    set({ cart: updatedCart });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  },

  getTotal: () => {
    const cart = get().cart;
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));
