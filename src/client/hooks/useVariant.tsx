import { useVariantService } from "@/services";
import { useVariantStore } from "@/stores";

export const useVariant = () => {
  const { setVariant } = useVariantStore();
  const { getVariantByProductId } = useVariantService();

  const getVariantsByProductId = async (productId: string) => {
    const res = await getVariantByProductId(productId);
    console.log(res);
    setVariant(res.documents as any);
  };

  return {
    getVariantsByProductId,
  };
};
