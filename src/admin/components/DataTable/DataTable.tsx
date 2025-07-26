/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, type TableProps } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { SorterResult } from "antd/es/table/interface";

export interface IDataTable<T> {
  columns: ColumnsType<T>;
  data: T[];
  pagination?: TableProps<T>["pagination"];
  setPagination?: (pagination: TablePaginationConfig) => void;
  setSorter?: (sorter: SorterResult<T> | SorterResult<T>[]) => void;
}

const DataTable = <T extends object>({
  columns,
  data,
  pagination,
  setPagination,
  setSorter,
}: IDataTable<T>) => {
  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: any,
    sorter: SorterResult<T> | SorterResult<T>[],
    extra: {
      currentDataSource: T[];
      action: "paginate" | "sort" | "filter";
    }
  ) => {
    if (extra.action === "paginate") setPagination?.(newPagination);
    if (extra.action === "sort") setSorter?.(sorter);
  };
  return (
    <Table<T>
      rowKey={(record) => (record as any).id || (record as any).key}
      columns={columns}
      dataSource={data}
      pagination={pagination}
      onChange={handleTableChange}
    />
  );
};

export default DataTable;
