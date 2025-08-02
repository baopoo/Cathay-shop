import { useCategoryService } from "@/services";
import { useCategoryStore } from "@/stores";

export const useCategory = () => {
  const { setCategories } = useCategoryStore();
  const { getCategories } = useCategoryService();
  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.documents as any);
  };

  return {
    fetchCategories,
  };
};
