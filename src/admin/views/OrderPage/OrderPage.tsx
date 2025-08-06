import { DataTable } from "@/admin/components";
import { useOrder } from "@/admin/hooks/useOrder";
import { colorOptions } from "@/constants";
import { useOrderStore, useVariantStore } from "@/stores";
import { EyeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Dropdown, Modal, Table, Tag, Image, type MenuProps } from "antd";
import { useEffect } from "react";

const OrderPage = () => {
  const {
    open,
    filters,
    sorter,
    pagination,
    handlePagination,
    handleSorter,
    handleSearch,
    fetchOrders,
    handleSubmit,
    openModal,
    closeModal,
  } = useOrder();

  const { orders, loading, orderSelected } = useOrderStore();
  const { loading: variantLoading } = useVariantStore();

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
            onClick: () => handleSubmit(record, status),
          }));

        const tagColor =
          record.status === "pending"
            ? "processing"
            : record.status === "done"
            ? "success"
            : "error";

        if (record.status === "done" || record.status === "cancelled") {
          return (
            <Tag color={tagColor} style={{ cursor: "pointer" }}>
              {record.status}
            </Tag>
          );
        }

        return (
          <Dropdown menu={{ items: filteredItems }} trigger={["click"]}>
            <Tag color={tagColor} style={{ cursor: "pointer" }}>
              {record.status}
            </Tag>
          </Dropdown>
        );
      },
    },
    {
      title: "Detail",
      render: (_, record) => (
        <Tag onClick={() => openModal(record)}>
          <EyeOutlined /> View Detail
        </Tag>
      ),
    },
  ];

  return (
    <div className="p-5">
      <div className="text-4xl mb-7 mt-2">Orders Management</div>
      <DataTable
        labelBtn="Add Product"
        loading={loading || variantLoading}
        columns={actionColumn}
        data={orders}
        pagination={pagination}
        setPagination={handlePagination}
        setSorter={handleSorter}
        handleSearch={handleSearch}
      />
      <Modal width={1200} open={open} onCancel={closeModal} footer="">
        <div className="text-xl mb-5 font-medium">Order Detail</div>
        <Table
          rowKey={(record) =>
            (record as any).$id || (record as any).key || (record as any).id
          }
          columns={[
            {
              title: "STT",
              key: "stt",
              render: (_: any, __: any, index: number) => (
                <div>{index + 1}</div>
              ),
            },
            {
              title: "Image",
              render: (_, record) => (
                <Image
                  width={50}
                  height={50}
                  src={record.image}
                  style={{ objectFit: "cover", borderRadius: 8 }}
                />
              ),
            },
            {
              title: "Name",
              render: (_, record) => <div>{record.name}</div>,
            },
            {
              title: "Size",
              render: (_, record) => <div>{record.variant?.size}</div>,
            },
            {
              title: "Color",
              render: (_, record) => (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      backgroundColor: record.variant?.color,
                      borderRadius: "50%",
                      border: "1px solid #ccc",
                      display: "inline-block",
                    }}
                  />
                  {colorOptions.find(
                    (colorOption) => colorOption.value === record.variant?.color
                  )?.label || record.variant?.color}
                </div>
              ),
            },
            {
              title: "Price",
              render: (_, record) => <div>{record.price} $</div>,
            },

            {
              title: "Quantity",
              render: (_, record) => <div>{record.quantity}</div>,
            },
            {
              title: "Total",
              render: (_, record) => (
                <div>{record.quantity * record.price} $</div>
              ),
            },
          ]}
          dataSource={
            orderSelected?.items ? JSON.parse(orderSelected.items) : []
          }
        />
      </Modal>
    </div>
  );
};

export default OrderPage;
