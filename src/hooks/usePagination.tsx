import { useState } from "react";
import type { TablePaginationConfig } from "antd";
import { Query } from "appwrite";

const DEFAULT_PAGE_SIZE = 5;

export const usePagination = (
  initialTotal = 0,
  initialPageSize = DEFAULT_PAGE_SIZE
) => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: initialPageSize,
    total: initialTotal,
  });

  const updatePagination = (config: Partial<TablePaginationConfig>) => {
    setPagination((prev) => ({
      ...prev,
      ...config,
    }));
  };

  const resetPagination = () => {
    setPagination({
      current: 1,
      pageSize: initialPageSize,
      total: initialTotal,
    });
  };

  const generatePaginationQuery = () => {
    const limit = pagination.pageSize ?? DEFAULT_PAGE_SIZE;
    const offset = ((pagination.current ?? 1) - 1) * limit;
    return [Query.limit(limit), Query.offset(offset)];
  };

  return {
    pagination,
    setPagination: updatePagination,
    resetPagination,
    generatePaginationQuery,
  };
};
