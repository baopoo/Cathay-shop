import { DataTable } from "@/admin/components";
import { useOrder } from "@/admin/hooks/useOrder";
import { useOrderStore } from "@/stores";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
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
    {
      title: "Detail",
      render: (_, record) => (
        <Tag onClick={() => openModal(record)}>View Detail</Tag>
      ),
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
      <Modal open={open} onCancel={closeModal} footer="">
        <div className="text-xl mb-5 font-medium">Order Detail</div>
        <Table
          rowKey={(record) => (record as any).$id || (record as any).key}
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
              key: "imageUrl",
              render: (_, record) => (
                <Image
                  width={50}
                  height={50}
                  src={record.imageUrl}
                  style={{ objectFit: "cover", borderRadius: 8 }}
                />
              ),
            },
            {
              title: "Name",
              key: "name",
            },
            {
              title: "Quantity",
              key: "quantity",
            },
            {
              title: "Price",
              key: "price",
            },
            {
              title: "Total",
              render: (_, record) => (
                <div>{record.quantity * record.price} $</div>
              ),
            },
          ]}
          dataSource={JSON.parse(orderSelected.items)}
        />
      </Modal>
    </div>
  );
};

export default OrderPage;
