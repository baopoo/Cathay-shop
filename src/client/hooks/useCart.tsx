import { useCartStore } from "@/stores";

export const useCart = () => {
  const { clearCart } = useCartStore();

  const handleClearCart = async () => {
    clearCart();
  };

  return {
    handleClearCart,
  };
};
