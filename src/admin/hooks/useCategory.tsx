import { useCategoryService } from "@/services";
import { useCategoryStore } from "../stores/category.store";
import { generateSlug } from "@/utils";
import { Query } from "appwrite";
import { useState } from "react";
import { notification, type TablePaginationConfig } from "antd";

const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 5,
  total: 0,
};

export const useCategory = () => {
  const [pagination, setPagination] =
    useState<TablePaginationConfig>(INITIAL_PAGINATION);
  const [searchName, setSearchName] = useState("");
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, any>>();

  const { setCategories } = useCategoryStore();
  const { getCategories, createCategory, updateCategory, deleteCategory } =
    useCategoryService();

  const buildQuery = () => {
    const query = [
      Query.limit(pagination.pageSize || 3),
      Query.offset(
        ((pagination.current || 1) - 1) * (pagination.pageSize || 3)
      ),
      Query.orderDesc("$createdAt"),
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
    if (formValues?.$id)
      await updateCategory(formValues?.$id, {
        name: data.name,
        slug: generateSlug(data.name),
      });
    else
      await createCategory({ name: data.name, slug: generateSlug(data.name) });
    setPagination((prev) => ({ ...prev, current: 1 }));
    setOpen(false);
    setFormValues({});
    await fetchCategories();
    notification.success({ message: "Created category successfully" });
  };

  const handleDelete = async (id: string) => {
    await deleteCategory(id);
    setPagination((prev) => ({ ...prev, current: 1 }));
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
    formValues,
    pagination,
    searchName,
    open,
    handleDelete,
    fetchCategories,
    handlePagination,
    handleSearch,
    handleSubmit,
    openModal,
    closeModal,
  };
};
