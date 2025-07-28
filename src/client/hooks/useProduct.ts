import { useProductService } from "@/services";
import { useProductStore } from "@/stores";
import { Query } from "appwrite";
import { useState } from "react";
import { type TablePaginationConfig } from "antd";

const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 5,
  total: 0,
};

export const useProduct = () => {
  const [pagination, setPagination] =
    useState<TablePaginationConfig>(INITIAL_PAGINATION);
  const [searchName, setSearchName] = useState("");

  const { setProduct } = useProductStore();
  const { getProducts } = useProductService();

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

  const fetchProducts = async () => {
    const query = buildQuery();
    const res = await getProducts(query);
    console.log(res);
    setProduct(res.documents as any);
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

  return {
    pagination,
    searchName,
    fetchProducts,
    handlePagination,
    handleSearch,
  };
};
