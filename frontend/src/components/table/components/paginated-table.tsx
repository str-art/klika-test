import classNames from "../../../utils/classname";
import { useEffect, useState } from "react";
import { Filter, FilterType, FilterValue } from "./filter/components/filter";
import { PageCounter } from "./page-counter";
import { Row, Table } from "./table";
import { LabelType } from "./column/column";
import { TableContext, defaultContext } from "../context";
import { Order } from "./column/components/order-button";
import RowSelector from "./row-selector";

type DataType<T extends Row> = {
  page: number;
  rows: T[];
  total: number;
};

export type UpdateType<T extends Row> = (
  pageSettings?: { page: number; rowsPerPage: number },
  filters?: FilterValue<T>,
  order?: { [key in keyof T]?: Order }
) => Promise<DataType<T>> | DataType<T>;

export type PaginatedTableProps<T extends Row> = {
  labels: LabelType<T>[];
  filters: FilterType<T>;
  update: UpdateType<T>;
  className?: string;
  orderBy: Array<keyof T>;
};

export const PaginatedTable = <T extends Row>({
  update,
  filters,
  labels,
  className = "",
  orderBy,
}: PaginatedTableProps<T>) => {
  const [rows, setRows] = useState<T[]>([]);
  const [filter, setFilter] = useState<FilterValue<T>>({});
  const [order, setOrder] = useState<{ [key in keyof T]?: Order }>({});
  const [pageSettings, setPageSettings] = useState<
    typeof defaultContext["pageSettings"]
  >({ currentPage: 1, totalPages: 0, rowsPerPage: 10 });

  const updatePageSettings = (
    key: "currentPage" | "totalPages" | "rowsPerPage",
    value: number
  ) => {
    setPageSettings((prev) => {
      if (
        key === "rowsPerPage" &&
        pageSettings.currentPage * value > pageSettings.totalPages
      ) {
        return { ...prev, [key]: value, currentPage: 1 };
      }
      return { ...prev, [key]: value };
    });
  };

  const updateFilter = (key: keyof T, value?: string | number | boolean) => {
    if (value !== undefined) {
      return setFilter((prev) => {
        updatePageSettings("currentPage", 1);
        return { ...prev, [key]: value };
      });
    }

    return setFilter((prev) => {
      updatePageSettings("currentPage", 1);

      delete prev[key];

      return { ...prev };
    });
  };

  const updateOrder = (key: keyof T, value?: Order) => {
    if (value !== order[key]) {
      return setOrder((prev) => {
        return { ...prev, [key]: value };
      });
    }

    return setOrder((prev) => {
      delete prev[key];
      return { ...prev };
    });
  };

  const refreshTable = async () => {
    const { currentPage, rowsPerPage } = pageSettings;
    const data = await update(
      { page: currentPage, rowsPerPage },
      filter,
      order
    );
    setRows(data.rows || []);
    updatePageSettings("currentPage", data.page || 1);
    updatePageSettings("totalPages", data.total || 0);
  };

  useEffect(() => {
    refreshTable();
  }, [pageSettings.currentPage, pageSettings.rowsPerPage, filter, order]);

  return (
    <div className={classNames("container", className)}>
      <TableContext.Provider
        value={{
          rows,
          pageSettings,
          filter,
          order,
          updateFilter,
          updateOrder,
          updatePageSettings,
        }}
      >
        <div className={classNames("table", "container")}>
          <Table<T> rows={rows} labels={labels} orderBy={orderBy}></Table>
          <div className={classNames("table-settings", "container")}>
            <PageCounter />
            <RowSelector />
          </div>
        </div>

        <div className={classNames("utils", "container")}>
          <Filter<T> filterBy={filters}></Filter>
        </div>
      </TableContext.Provider>
    </div>
  );
};
