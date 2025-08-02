import { useCategoryService } from "@/services";
import { generateSlug } from "@/utils";
import { useState } from "react";
import { notification, type TablePaginationConfig } from "antd";
import { usePagination, useFilter, useSorter } from "@/hooks";
import { FilterOperator } from "@/enums";
import { useCategoryStore } from "@/stores";

export const useCategory = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  const {
    pagination,
    setPagination,
    resetPagination,
    generatePaginationQuery,
  } = usePagination();
  const { sorter, setSorter, generateSortQuery } = useSorter();
  const { filters, setFilter, generateFilterQuery } = useFilter();

  const { setCategories } = useCategoryStore();
  const { getCategories, createCategory, updateCategory, deleteCategory } =
    useCategoryService();

  const buildQuery = () => {
    const query = [
      ...generatePaginationQuery(),
      ...generateSortQuery(),
      ...generateFilterQuery(),
    ];

    return query;
  };

  const fetchCategories = async () => {
    const query = buildQuery();
    const res = await getCategories(query);
    setCategories(res.documents as any);
    setPagination({ total: res.total });
  };

  const handleSearch = (value: string) => {
    setFilter("name", {
      field: "name",
      value,
      operator: FilterOperator.SEARCH,
    });
    resetPagination();
  };

  const handlePagination = (pagination: TablePaginationConfig) => {
    setPagination({
      current: pagination.current || 1,
      pageSize: pagination.pageSize || 5,
    });
  };

  const handleSorter = (sorter: any) => {
    setSorter(sorter);
  };

  const handleSubmit = async (data: any) => {
    if (formValues?.$id)
      await updateCategory(formValues?.$id, {
        name: data.name,
        slug: generateSlug(data.name),
      });
    else
      await createCategory({ name: data.name, slug: generateSlug(data.name) });
    resetPagination();
    setOpen(false);
    setFormValues({});
    await fetchCategories();
    notification.success({ message: "Created category successfully" });
  };

  const handleDelete = async (id: string) => {
    await deleteCategory(id);
    resetPagination();
    await fetchCategories();
  };

  const openModal = (value?: Record<string, any>) => {
    setOpen(true);
    value ? setFormValues(value) : setFormValues({});
  };

  const closeModal = () => {
    setOpen(false);
  };

  return {
    filters,
    formValues,
    pagination,
    open,
    sorter,
    handleDelete,
    fetchCategories,
    handlePagination,
    handleSearch,
    handleSubmit,
    openModal,
    closeModal,
    handleSorter,
  };
};
