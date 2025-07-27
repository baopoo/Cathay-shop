import { useCategoryService } from "@/services";
import { useCategoryStore } from "../stores/category.store";
import { generateSlug } from "@/utils";
import { Query } from "appwrite";
import { useState } from "react";
import type { TablePaginationConfig } from "antd";

export const useCategory = () => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 3,
    total: 5,
  });

  const { categories, setCategories } = useCategoryStore();
  const { getCategories, createCategory } = useCategoryService();

  const fetchCategories = async (queryParams = []) => {
    const { current, pageSize } = pagination;
    const query = [
      Query.limit(pageSize),
      Query.offset((current - 1) * pageSize),
    ];

    const res = (await getCategories([...query, ...queryParams])) as any;
    setCategories(res.documents);
  };

  const handleSubmit = async (data: any) => {
    await createCategory({ name: data.name, slug: generateSlug(data.name) });
    await fetchCategories();
  };

  const handleSearch = async (value: string) => {
    const queryValue = !value.length ? [] : [Query.search("name", value)];
    await fetchCategories(queryValue);
  };

  const handlePagination = (pagination: TablePaginationConfig) => {
    setPagination(pagination);
  };

  return {
    categories,
    pagination,
    fetchCategories,
    handlePagination,
    handleSubmit,
    handleSearch,
  };
};
