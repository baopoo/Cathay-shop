import { useOrderService } from "@/services";

export const useOrder = () => {
  const { createOrder } = useOrderService();
  const handleCheckout = async (data: any) => {
    await createOrder({
      items: JSON.stringify(data.items),
      total: Number(data.total),
      status: data.status,
      name: data.name,
      phone: data.phone,
      address: data.address,
      email: data.email || "",
    });
  };

  return {
    handleCheckout,
  };
};
