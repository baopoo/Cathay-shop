import { create } from "zustand";
import { CART_STORAGE_KEY } from "@/constants";

interface CartItem {
  id: string; // variantId
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
  productId: string;
  variant: {
    size: string;
    color: string;
  };
  [key: string]: any;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  setCart: (items: CartItem[]) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item, quantity = 1) => {
    const currentCart = get().cart;
    const index = currentCart.findIndex((i) => i.id === item.id);
    let updatedCart: CartItem[];

    if (index !== -1) {
      updatedCart = currentCart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
      );
    } else {
      updatedCart = [...currentCart, { ...item, quantity }];
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

  updateQuantity: (id, quantity) => {
    const updatedCart = get().cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    set({ cart: updatedCart });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  },
}));
