import { Table, type TableProps } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface IDataTable<T> {
  columns: ColumnsType<T>;
  data: T[];
  pagination?: TableProps<T>["pagination"];
}

const DataTable = <T extends object>({
  columns,
  data,
  pagination,
}: IDataTable<T>) => {
  return (
    <Table<T>
      rowKey={(record) => (record as any).id || (record as any).key}
      columns={columns}
      dataSource={data}
      pagination={pagination}
    />
  );
};

export default DataTable;
