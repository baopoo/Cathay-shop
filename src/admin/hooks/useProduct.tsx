import { FilterOperator } from "@/enums";
import { useFilter, usePagination, useSorter } from "@/hooks";
import { useProductService } from "@/services";
import { useProductStore } from "@/stores";
import { generateSlug } from "@/utils";
import { notification, type TablePaginationConfig } from "antd";
import { useState } from "react";

export const useProduct = () => {
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

  const { getProducts, createProduct, updateProduct, deleteProduct } =
    useProductService();
  const { setProduct } = useProductStore();

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
    setFilter("name", {
      field: "name",
      value,
      operator: FilterOperator.SEARCH,
    });
    resetPagination();
  };

  const fetchProducts = async () => {
    const query = buildQuery();
    const res = await getProducts(query);
    setProduct(res.documents as any);
    setPagination({ total: res.total });
  };

  const openModal = (value?: any) => {
    setOpen(true);
    value?.$id
      ? setFormValues({
          ...value,
          categoryId: Array.isArray(value.categoryId)
            ? value.categoryId.map((cat: any) => cat.$id)
            : [],
        })
      : setFormValues({});
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = async (data: any) => {
    console.log(data);
    if (formValues?.$id)
      await updateProduct(formValues?.$id, {
        ...data,
        slug: generateSlug(data.name),
        price: Number(data.price),
        categoryIdRaw: data.categoryId,
      });
    else
      await createProduct({
        ...data,
        slug: generateSlug(data.name),
        price: Number(data.price),
        categoryIdRaw: data.categoryId,
      });
    resetPagination();
    setOpen(false);
    setFormValues({});
    await fetchProducts();
    notification.success({ message: "Created product successfully" });
  };

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    resetPagination();
    notification.success({ message: "Deleted product successfully" });
    await fetchProducts();
  };

  const handleUpdateIsShow = async (record: any) => {
    await updateProduct(record?.$id, {
      isShow: !record.isShow,
    });
    notification.success({ message: "Updated product successfully" });
    await fetchProducts();
  };

  return {
    open,
    pagination,
    sorter,
    filters,
    formValues,
    fetchProducts,
    handleSorter,
    handlePagination,
    handleSearch,
    openModal,
    closeModal,
    handleSubmit,
    handleDelete,
    handleUpdateIsShow,
  };
};
