import { DataTable } from "@/admin/components";
import { useOrder } from "@/admin/hooks/useOrder";
import { useOrderStore } from "@/stores";
import {
  DownOutlined,
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Popconfirm,
  Select,
  Space,
  Tag,
  type MenuProps,
} from "antd";
import { useEffect } from "react";

const OrderPage = () => {
  const {
    filters,
    sorter,
    pagination,
    handlePagination,
    handleSorter,
    handleSearch,
    fetchOrders,
    handleSubmit,
  } = useOrder();

  const { orders, loading } = useOrderStore();

  useEffect(() => {
    fetchOrders();
  }, [pagination.current, pagination.pageSize, sorter, filters]);

  const actionColumn = [
    {
      title: "STT",
      key: "stt",
      render: (_: any, __: any, index: number) => <div>{index + 1}</div>,
    },
    {
      title: "Name",
      key: "name",
      render: (_, record) => <div>{record.name}</div>,
    },
    {
      title: "Phone & Email",
      render: (_, record) => (
        <div className="flex flex-col">
          <div>
            <PhoneOutlined className="mr-2" />
            {record.phone}
          </div>
          {record?.email && (
            <div>
              <MailOutlined className="mr-2" />
              {record.email}
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Status",
      render: (_, record) => {
        const statusOptions = ["pending", "done", "cancelled"];

        const filteredItems: MenuProps["items"] = statusOptions
          .filter((status) => status !== record.status)
          .map((status) => ({
            key: status,
            label: (
              <Tag
                color={
                  status === "pending"
                    ? "processing"
                    : status === "done"
                    ? "success"
                    : "error"
                }
              >
                {status}
              </Tag>
            ),
            onClick: () => handleSubmit(record.$id, status),
          }));

        return (
          <Dropdown menu={{ items: filteredItems }} trigger={["click"]}>
            <Tag
              color={
                record.status === "pending"
                  ? "processing"
                  : record.status === "done"
                  ? "success"
                  : "error"
              }
            >
              {record.status}
            </Tag>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div className="p-5">
      <div className="text-4xl mb-7 mt-2">Orders Management</div>
      <DataTable
        labelBtn="Add Product"
        loading={loading}
        columns={actionColumn}
        data={orders}
        pagination={pagination}
        setPagination={handlePagination}
        setSorter={handleSorter}
        handleSearch={handleSearch}
        // onClickButton={openModal}
      />
      {/* <Modal open={open} onCancel={closeModal} footer="">
    <ProductForm
      onSubmit={handleSubmit}
      formValues={formValues}
      loading={loading}
    />
  </Modal> */}
    </div>
  );
};

export default OrderPage;
