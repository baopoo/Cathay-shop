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
  const { filters, setFilter, generateFilterQuery, removeFilter } = useFilter({
    isShow: {
      field: "isShow",
      value: true,
      operator: FilterOperator.EQUAL,
    },
    $createdAt: {
      field: "$createdAt",
      value: null,
      operator: FilterOperator.ORDER_DESC,
    },
  });

  const { getProducts, getProduct } = useProductService();
  const { setProduct, setProductSelected } = useProductStore();

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
    console.log(query);
    const res = await getProducts(query);
    setProduct(res.documents as any);
    setPagination({ total: res.total });
  };

  const getProductDetail = async (id: string) => {
    const res = await getProduct(id);
    setProductSelected(res);
  };

  return {
    pagination,
    sorter,
    filters,
    setFilter,
    removeFilter,
    getProductDetail,
    fetchProducts,
    handleSorter,
    handlePagination,
    handleSearch,
  };
};
