import { FilterOperator } from "@/enums";
import { useFilter, usePagination, useSorter } from "@/hooks";
import { useVariantService } from "@/services";
import { useVariantStore } from "@/stores";
import { generateSlug } from "@/utils";
import { notification, type TablePaginationConfig } from "antd";
import { useState } from "react";

export const useVariant = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({});

  const {
    pagination,
    setPagination,
    resetPagination,
    generatePaginationQuery,
  } = usePagination();
  const { sorter, setSorter, generateSortQuery } = useSorter();
  const { filters, setFilter, generateFilterQuery } = useFilter();

  const { getVariants, createVariant, updateVariant, deleteVariant } =
    useVariantService();
  const { setVariant } = useVariantStore();

  const buildQuery = () => [
    ...generatePaginationQuery(),
    ...generateSortQuery(),
    ...generateFilterQuery(),
  ];

  const handleSorter = (sorter: any) => {
    setSorter(sorter);
  };

  const handlePagination = (pagination: TablePaginationConfig) => {
    setPagination({
      current: pagination.current || 1,
      pageSize: pagination.pageSize || 5,
    });
  };

  const handleSearch = (value: string) => {
    setFilter("sku", {
      field: "sku",
      value,
      operator: FilterOperator.SEARCH,
    });
    resetPagination();
  };

  const fetchVariants = async () => {
    const query = buildQuery();
    const res = await getVariants(query);
    setVariant(res.documents as any);
    setPagination({ total: res.total });
  };

  const openModal = (value?: any) => {
    setOpen(true);
    value?.$id ? setFormValues(value) : setFormValues({});
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = async (data: any) => {
    if (formValues?.$id)
      await updateVariant(formValues?.$id, {
        ...data,
        product: data.productId,
      });
    else
      await createVariant({
        ...data,
        product: data.productId,
      });
    resetPagination();
    setOpen(false);
    setFormValues({});
    await fetchVariants();
    notification.success({ message: "Created variant successfully" });
  };

  const handleDelete = async (id: string) => {
    await deleteVariant(id);
    resetPagination();
    notification.success({ message: "Deleted variant successfully" });
    await fetchVariants();
  };

  return {
    open,
    pagination,
    sorter,
    filters,
    formValues,
    fetchVariants,
    handleSorter,
    handlePagination,
    handleSearch,
    openModal,
    closeModal,
    handleSubmit,
    handleDelete,
  };
};
