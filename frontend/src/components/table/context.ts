import React from "react";
import { LabelType } from "./components/column/column";
import { Order } from "./components/column/components/order-button";
import { Row } from "./components/table";

export const defaultContext = {
  rows: [],
  pageSettings: {
    currentPage: 1,
    totalPages: 0,
    rowsPerPage: 25,
  },
  updatePageSettings: () => {},
  filter: {},
  updateOrder: () => {},
  order: {},
  updateFilter: () => {},
};

type TableContextType<T extends Row> = {
  rows: T[];
  pageSettings: {
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
  };
  updatePageSettings: (
    key: "currentPage" | "totalPages" | "rowsPerPage",
    value: number
  ) => unknown;
  filter: {
    [K in keyof T]?: string | number | boolean;
  };
  updateFilter: (key: keyof T, value?: string | number | boolean) => unknown;
  order: {
    [K in keyof T]?: Order;
  };
  updateOrder: (key: keyof T, value?: Order) => unknown;
};

export const TableContext =
  React.createContext<TableContextType<Row>>(defaultContext);
