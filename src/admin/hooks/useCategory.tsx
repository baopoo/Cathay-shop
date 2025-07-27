import { useCategoryService } from "@/services";
import { useCategoryStore } from "../stores/category.store";
import { generateSlug } from "@/utils";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import type { TablePaginationConfig } from "antd";

export const useCategory = () => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 3,
    total: 0,
  });
  const [searchName, setSearchName] = useState("");

  const { categories, setCategories } = useCategoryStore();
  const { getCategories, createCategory, loading } = useCategoryService();

  const buildQuery = () => {
    const query = [
      Query.limit(pagination.pageSize || 3),
      Query.offset(
        ((pagination.current || 1) - 1) * (pagination.pageSize || 3)
      ),
    ];

    if (searchName.trim()) {
      query.push(Query.equal("name", searchName.trim()));
    }

    return query;
  };

  const fetchCategories = async () => {
    const query = buildQuery();
    const res = await getCategories(query);
    setCategories(res.documents as any);
    setPagination((prev) => ({ ...prev, total: res.total }));
  };

  const handleSearch = (value: string) => {
    setSearchName(value);
    setPagination((prev) => ({
      ...prev,
      current: 1,
    }));
  };

  const handlePagination = (pagination: TablePaginationConfig) => {
    setPagination((prev) => ({
      ...prev,
      current: pagination.current || 1,
      pageSize: pagination.pageSize || 3,
    }));
  };

  const handleSubmit = async (data: any) => {
    await createCategory({ name: data.name, slug: generateSlug(data.name) });
    setPagination((prev) => ({ ...prev, current: 1 }));
    fetchCategories();
  };

  return {
    categories,
    pagination,
    loading,
    searchName,
    fetchCategories,
    handlePagination,
    handleSearch,
    handleSubmit,
  };
};
