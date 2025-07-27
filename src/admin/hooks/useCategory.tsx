import { useCategoryService } from "@/services";
import { useCategoryStore } from "../stores/category.store";

export const useCategory = () => {
  const { categories, setCategories } = useCategoryStore();
  const { getCategories } = useCategoryService();

  const fetchCategories = async (query = []) => {
    const res = (await getCategories(query)) as any;
    setCategories(res.documents);
  };

  return { categories, fetchCategories };
};
