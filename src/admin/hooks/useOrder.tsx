import { FilterOperator } from "@/enums";
import { useFilter, usePagination, useSorter } from "@/hooks";
import { useOrderService, useVariantService } from "@/services";
import { useOrderStore } from "@/stores";
import { Modal, notification, type TablePaginationConfig } from "antd";
import { useState } from "react";

export const useOrder = () => {
  const [open, setOpen] = useState(false);
  const { getVariant, updateVariant } = useVariantService();

  const {
    pagination,
    setPagination,
    resetPagination,
    generatePaginationQuery,
  } = usePagination();
  const { sorter, setSorter, generateSortQuery } = useSorter();
  const { filters, setFilter, generateFilterQuery } = useFilter();

  const { getOrders, updateOrder } = useOrderService();
  const { setOrder, setOrderSelected } = useOrderStore();

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

  const fetchOrders = async () => {
    const query = buildQuery();
    const res = await getOrders(query);
    setOrder(res.documents as any);
    setPagination({ total: res.total });
  };

  const openModal = (value?: any) => {
    setOpen(true);
    setOrderSelected(value);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = async (record, status: any) => {
    Modal.confirm({
      title: "Confirm Status Change",
      content: `Are you sure you want to change the status to "${status}"?`,
      onOk: async () => {
        if (status === "cancelled") {
          await Promise.all(
            JSON.parse(record.items)?.map(async (item) => {
              const res = await getVariant(item.id);
              await updateVariant(item.id, {
                quantity: res.quantity + item.quantity,
              });
            })
          );
        }

        await updateOrder(record.$id, {
          status,
        });

        await fetchOrders();

        notification.success({
          message: "Order status updated successfully",
        });
      },
    });
  };

  return {
    open,
    pagination,
    sorter,
    filters,
    fetchOrders,
    handleSorter,
    handlePagination,
    handleSearch,
    openModal,
    closeModal,
    handleSubmit,
  };
};
