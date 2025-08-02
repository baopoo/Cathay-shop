import { useVariantService } from "@/services";
import { useVariantStore } from "@/stores";

export const useVariant = () => {
  const { setVariant } = useVariantStore();
  const { getVariantByProductId } = useVariantService();

  const getVariantsByProductId = async (productId: string) => {
    const res = await getVariantByProductId(productId);
    setVariant(res.documents as any);
  };

  return {
    getVariantsByProductId,
  };
};
