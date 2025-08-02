import { useEffect } from "react";
import { type TablePaginationConfig } from "antd";

import { FilterOperator } from "@/enums";
import { useFilter, usePagination, useSorter } from "@/hooks";
import { useProductService } from "@/services";
import { useProductStore } from "@/stores";

export const useProduct = () => {
  const {
    pagination,
    setPagination,
    resetPagination,
    generatePaginationQuery,
  } = usePagination();
  const { sorter, setSorter, generateSortQuery } = useSorter();
  const { filters, setFilter, generateFilterQuery } = useFilter();

  const { getProducts } = useProductService();
  const { setProduct } = useProductStore();

  const buildQuery = () => [
    ...generatePaginationQuery(),
    ...generateSortQuery(),
    ...generateFilterQuery(),
  ];

  useEffect(() => {
    setFilter("isShow", {
      field: "isShow",
      value: true,
      operator: FilterOperator.EQUAL,
    });
  }, []);

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

  return {
    pagination,
    sorter,
    filters,
    fetchProducts,
    handleSorter,
    handlePagination,
    handleSearch,
  };
};
