/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table, type TableProps } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type { SorterResult } from "antd/es/table/interface";
import _ from "lodash";
import { useCallback } from "react";

export interface IDataTable<T> {
  loading: boolean;
  columns: ColumnsType<T>;
  data: T[];
  pagination?: TableProps<T>["pagination"];
  setPagination?: (pagination: TablePaginationConfig) => void;
  setSorter?: (sorter: SorterResult<T> | SorterResult<T>[]) => void;
  onClickButton?: () => void;
  handleSearch?: (value: string) => void;
}

const DataTable = <T extends object>({
  loading,
  columns,
  data,
  pagination,
  setPagination,
  setSorter,
  onClickButton,
  handleSearch,
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

  const searchDebounce = _.debounce((value: string) => {
    handleSearch?.(value);
  }, 500);

  const onSearch = useCallback(
    (event: any) => searchDebounce(event.target.value),
    []
  );

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <Input
          className="w-[300px]"
          placeholder="Search........"
          suffix={<SearchOutlined />}
          onChange={onSearch}
        />
        <Button type="primary" onClick={onClickButton}>
          <PlusCircleOutlined />
          Add Category
        </Button>
      </div>
      <Table<T>
        loading={loading}
        rowKey={(record) => (record as any).$id || (record as any).key}
        columns={columns}
        dataSource={data}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </>
  );
};

export default DataTable;
